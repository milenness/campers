import css from "./CamperDetail.module.css";
import { FaStar } from "react-icons/fa";
import { SlMap } from "react-icons/sl";

export default function CamperDetail() {
  return (
    <section className={css.section}>
      <div className={`container ${css.wrapper}`}>
        <div className={css.swiperContainer}></div>

        <div className={css.infoContainer}>
          <div className={css.baseInfo}>
              <h3 className={css.title}>Mavericks</h3>
              <div className={css.starsLocation}>
                <div className={css.stars}>
                  <FaStar className={css.starIcon} size={16} />
                  <span>4.4(2 Reviews)</span>
                </div>
    
                <div className={css.location}>
                  <SlMap size={16} />
                  <span>Kyiv, Ukraine</span>
                </div>
              </div>
    
              <span className={css.cost}>
                <span>€</span>
                8000
              </span>
    
              <p className={css.text}>
                Embrace simplicity and freedom with the Mavericks panel truck, an
                ideal choice for solo travelers or couples seeking a compact and
                efficient way to explore the open roads. This no-frills yet reliable
                panel truck offers the essentials for a comfortable journey, making
                it the perfect companion for those who value simplicity and
                functionality.
              </p>
          </div>

          <div className={css.detailContainer}>
            <h3 className={css.titleDetail}>Vehicle details</h3>
            <ul className={css.categories}>
              <li className={css.categoryItem}>Automatic</li>
              <li className={css.categoryItem}>AC</li>
              <li className={css.categoryItem}>Petrol</li>
              <li className={css.categoryItem}>Kitchen</li>
              <li className={css.categoryItem}>Radio</li>
              <li className={css.categoryItem}>Alcove</li>
            </ul>

            <ul className={css.characteristics}>
              <li className={css.characteristicItem}>
                <span>Form</span>
                <span>Panel truck</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Length</span>
                <span>5.4 m</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Width</span>
                <span>2.01 m</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Height</span>
                <span>2.05 m</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Tank</span>
                <span>132 I</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Consumption</span>
                <span>12.4 l / 100km</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
