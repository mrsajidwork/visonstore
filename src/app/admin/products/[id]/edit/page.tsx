import db from "@/db/db";
import ProductForm from "../../new/page";

export default async function EditProductsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id: id } });
  return (
      <ProductForm product={product} formTitle="Edit Product" />
  );
}
