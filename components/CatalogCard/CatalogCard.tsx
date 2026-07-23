import css from "./CatalogCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdDirectionsCar } from "react-icons/md";
import { BsDiagram3, BsFuelPump } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { SlMap } from "react-icons/sl";

import { Camper } from "@/types/camper";

interface CamperProps {
  camper: Camper;
}

export default function CatalogCard({ camper }: CamperProps) {

  const imageSrc = camper.coverImage || "/Pic.png";

  const formatText = (text: string) => {
    if (!text) return "";
    const replaced = text.replace("_", " ");
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
  };

  return (
    <li className={css.card}>
      <Image
        src={imageSrc}
        alt={camper.name}
        width={219}
        height={240}
        className={css.img}
        // priority
      />

      <div className={css.info}>
        <div className={css.titleCost}>
          <h3 className={css.title}>{camper.name}</h3>
          <span className={css.cost}>
            <span>€</span>
            {Math.trunc(camper.price)}
          </span>
        </div>

        <div className={css.starsLocation}>
          <div className={css.stars}>
            <FaStar className={css.starIcon} size={16} />
            <span>{camper.rating}</span>
          </div>

          <div className={css.location}>
            <SlMap size={16} />
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={css.text}>{camper.description}</p>

        <ul className={css.categories}>
          <li className={css.categoryItem}>
            <BsFuelPump size={20} />
            <span className={css.categoryName}>
              {formatText(camper.engine)}
            </span>
          </li>
          <li className={css.categoryItem}>
            <BsDiagram3 size={20} />
            <span className={css.categoryName}>
              {formatText(camper.transmission)}
            </span>
          </li>
          <li className={css.categoryItem}>
            <MdDirectionsCar size={20} />
            <span className={css.categoryName}>{formatText(camper.form)}</span>
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          className={css.details}
          aria-label="Переглянути деталі"
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
