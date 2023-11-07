"use client";

import { getFilteredOffers } from "@src/services/api";
import { Card } from "@src/components/";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ClientItems = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState<{}[]>([]);

  useEffect(() => {
    currentPage &&
      (async function () {
        const cards = await getFilteredOffers(
          params.toString(),
          `${12 * currentPage}`
        );
        setData([...data, ...cards]);
      })();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
    setData([]);
  }, [searchParams]);

  const scrollHandler = async (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      1
    ) {
      setCurrentPage((prevState) => prevState + 10);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-6 gap-[17px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
      {data &&
        data.map((item: any) => <Card key={item.offer_id} item={item} />)}
    </div>
  );
};

export default ClientItems;
