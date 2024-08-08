import Table from "../_components/Tables/Table";
import DefaultLayout from "../_components/Layouts/DefaultLayout";

export default function AdminProductsPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Table />
      </div>
    </DefaultLayout>
  );
}
