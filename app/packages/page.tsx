import type { Metadata } from "next";
import PackagesStore from "./packages-store";

export const metadata: Metadata = {
  title: "Student Packages | FindX Fair",
  description:
    "Shop curated student starter packs, textbooks, tech accessories and lab essentials for campus life.",
};

export default function PackagesPage() {
  return <PackagesStore />;
}
