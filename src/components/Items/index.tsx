import Image from "next/image";
import { Button } from "@src/components/";
import { getFilteredOffers } from "@src/services/api";

export default async function Items({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getFilteredOffers({
    amount: searchParams.search,
    sort_by: searchParams.sort_by,
    sort_order: searchParams.sort_order,
  });

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-6 gap-[17px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
      {data &&
        data.map((item: any) => (
          <div
            key={item.offer_id}
            className="p-3 rounded-xl bg-white flex flex-col gap-3 items-start"
          >
            <div className="border-2 border-[#DDD] rounded-[14px]">
              <Image src="/images/icon-1.svg" alt="" width={42} height={42} />
            </div>

            <span className="text-[#171D23] text-[10px] uppercase px-2 py-1 bg-[#2BB] rounded-[20px]">
              BEST OFFER
            </span>

            <ul
              className="flex flex-col gap-2 w-full [&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li]:gap-1 [&>li>span:first-child]:text-[#9198A1]
              [&>li>span:first-child]:text-[13px] [&>li>span:first-child]:leading-[123%] [&>li>span:last-child]:text-[15px] [&>li>span:last-child]:leading-[120%]
              [&>li>span:last-child]:font-semibold"
            >
              <li>
                <span>Company name</span>
                <span>{item.company_name}</span>
              </li>

              <li>
                <span>Loan amount (min)</span>
                <span>{item.min_loan_amount}</span>
              </li>

              <li>
                <span>Loan amount (max)</span>
                <span>{item.max_loan_amount}</span>
              </li>

              <li>
                <span>Percent apr (min)</span>
                <span>{item.min_percent_apr}</span>
              </li>

              <li>
                <span>Percent apr (max)</span>
                <span>{item.max_percent_apr}</span>
              </li>

              <li>
                <span>Term (months)</span>
                <span>{item.term_length_months}</span>
              </li>
            </ul>

            <Button text="Apply now" className="w-full text-[14px]" />
          </div>
        ))}
    </div>
  );
}
