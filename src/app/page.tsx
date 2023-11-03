import type { Metadata } from "next";

import { Intro, Items } from "@src/components";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function Home() {
  return (
    <main className="bg-[#f2f2f2]">
      <Intro />
      <Items />
    </main>
  );
}
