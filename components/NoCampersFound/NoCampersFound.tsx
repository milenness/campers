import css from "./NoCampersFound.module.css";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";

interface NoCampersFoundProps {
  onClearFilters: () => void;
  onViewAll: () => void;
}

export default function NoCampersFound({
  onClearFilters,
  onViewAll,
}: NoCampersFoundProps) {
  return (
    <div className={css.wrapper}>
      <Image
        src="/NoCampers.png"
        alt="No Campers Found"
        width={488}
        height={463}
        className={css.img}
        // priority
      />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn`t find any campers that match your filters.
      </p>
      <p className={css.text}>
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.buttonWrapper}>
        <button
          type="button"
          onClick={onClearFilters}
          className={css.clearButton}
        >
          <MdOutlineClose className={css.closeIcon} size={24} />
          Clear filters
        </button>
        <button type="button" onClick={onViewAll} className={css.searchButton}>
          View all campers
        </button>
      </div>
    </div>
  );
}
