import { getLoanPurposes } from "@src/services/api";

export default async function LoanPurposes() {
  const data = await getLoanPurposes();

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[17px] lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr]">
      {data &&
        data.map((item: any) => (
          <div key={item.purpose_id} className="rounded-xl bg-white p-3">
            <div className="h-[72px] w-full bg-[#F3F3F3] mg-[5px] rounded-xl"></div>
            <span className="text-[12px] font-semibold leading-[166%]">
              {item.purpose_name}
            </span>
          </div>
        ))}
    </div>
  );
}
