import type { Metadata } from "next";

import { Intro, Items, LoanPurposes, Sort, Search } from "@src/components/";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main className="bg-[#f2f2f2]">
      <Intro />

      <div className="pb-6">
        <div className="container">
          <Search />

          <LoanPurposes />
          <div className="pt-6">
            <Sort />

            <Items />
          </div>
        </div>
      </div>
    </main>
  );
}
