import CatalogCard from "../CatalogCard";
import css from "./CatalogList.module.css";
import { Camper } from "@/types/camper"

interface CatalogListProps {
  campers: Camper[];
}

export default function CatalogList({ campers }: CatalogListProps) {
  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <CatalogCard key={camper.id} camper={camper} />
      ))}
    </ul>
  );
}
