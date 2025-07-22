import { DataTable } from "@/components/data-table";
import data from "./data.json";
import { SectionCards } from "@/components/section-cards";
export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {/* <SectionCards /> */}
      <DataTable data={data} />
    </div>
  );
}
