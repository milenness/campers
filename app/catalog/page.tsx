
import CatalogPage from "@/components/CatalogPage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse our available campervans for rent.",
};


export default function Catalog() {
  return (
    <main>
       <CatalogPage/>
    </main>
  );
}
