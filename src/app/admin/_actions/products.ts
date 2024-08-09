"use server";
import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { revalidatePath } from "next/cache";


// const fileScheme = z.instanceof(File, { message: "File is required" });
const fileScheme = typeof File === "undefined" ? z.any() : z.instanceof(File, { message: "File is required" });
const imageScheme = fileScheme.refine(
    file => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().positive(),
  file: fileScheme.refine((file) => file.size < 1024 * 1024 * 5, { message: "File size should be less than 5MB" }),
  image: imageScheme.refine((file) => file.size < 1024 * 1024 * 5, { message: "Image size should be less than 5MB" }),
});

export async function addProduct(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    await fs.mkdir("products", { recursive: true });
    const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
    await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));

    await fs.mkdir("public/products", { recursive: true });
    const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()));


    await db.product.create({
        data: {
            isAvailableForPurchase: false,
            name: data.name,
            priceInCents: data.priceInCents,
            description: data.description,
            filePath,
            imagePath
        },
    });

    revalidatePath("/");
    revalidatePath("/shop");
    redirect("/admin/products");
}

const editSchema = addSchema.extend({
    file: fileScheme.optional(),
    image: imageScheme.optional(),
});

export async function updateProduct(id: string, prevState: unknown, formData: FormData) {
    const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;
    const product = await db.product.findUnique({ where: { id } });

    if (product === null) {
        return { error: "Product not found" };
    }

    let filePath = product.filePath;

    if(data.file != null && data.file.size > 0) {
        await fs.unlink(product.filePath);
        filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
        await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));
    }

    let imagePath = product.imagePath;

    if(data.image != null && data.image.size > 0) {
        await fs.unlink(`public${product.imagePath}`);
        imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
        await fs.writeFile(`public${imagePath}`, Buffer.from(await data.image.arrayBuffer()));
    }

    await db.product.update({
        where: { id },
        data: {
            name: data.name,
            priceInCents: data.priceInCents,
            description: data.description,
            filePath,
            imagePath
        },
    });

    revalidatePath("/");
    revalidatePath("/shop");
    redirect("/admin/products");
}


export async function toggleProductAvailability(id: string, isAvailableForPurchase: boolean) {
    await db.product.update({
        where: { id },
        data: { isAvailableForPurchase },
    });

    revalidatePath("/");
    revalidatePath("/shop");
}

export async function deleteProduct(id: string) {
    const product = await db.product.delete({ where: { id } });

    console.log(product);
     
    if(product === null) {
        return { error: "Product not found" };
    }

    await fs.unlink(product.filePath);
    await fs.unlink(`public${product.imagePath}`);

    revalidatePath("/");
    revalidatePath("/shop");
}