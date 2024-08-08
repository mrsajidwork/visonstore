"use client";
import { useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";
import DefaultLayout from "../../_components/Layouts/DefaultLayout";
import Link from "next/link";

export default function ProductForm({ product, formTitle }: { product?: Product | null, formTitle: string }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );
  const [priceInCents, setPriceInCents] = useState<number | undefined>(
    product?.priceInCents
  );

  return (
    <>
      <DefaultLayout>

        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {formTitle || "New Product"}
              </h3>
            </div>
            <form action={action}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter product name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name="name"
                      required
                      defaultValue={product?.name || ""}
                    />
                    {typeof error !== "string" && "name" in error && (
                      <div className="text-destructive">{error.name}</div>
                    )}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Enter product price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name="priceInCents"
                      required
                      value={Number(priceInCents)}
                      onChange={(e) => setPriceInCents(Number(e.target.value) || 0)}
                    />
                    {typeof error !== "string" && "priceInCents" in error && (
                      <div className="text-destructive">{error.priceInCents}</div>
                    )}
                  </div>
                </div>

                
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    name="description"
                    required
                    defaultValue={product?.description || ""}
                  ></textarea>
                  {typeof error !== "string" && "description" in error && (
                    <div className="text-destructive">{error.description}</div>
                  )}
                </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Product Image
                </label>
                <input type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                name="image"
                required={product == null}
                />
                {product != null && (
                  <Image
                    className="my-3"
                    src={product.imagePath}
                    alt={product.name}
                    height={100}
                    width={100}
                  />
                )}
                {typeof error !== "string" && "image" in error && (
                  <div className="text-destructive">{error.image}</div>
                )}
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Attach file
                </label>
                <input type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                required={product == null}
                name="file"
                />

                {product != null && (
                  <div className="text-muted-foreground">{product.filePath}</div>
                )}
                {typeof error !== "string" && "file" in error && (
                  <div className="text-destructive">{error.file}</div>
                )}
              </div>

                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      Submit
    </button>
  );
}
