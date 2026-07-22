import css from "./Reviews.module.css";
import ConnectForm from "@/components/ConnectForm"
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Reviews</h2>

        <div className={css.wrapper}>
          <ul className={css.reviewsList}>
            <li className={css.reviewsItem}>
              <div className={css.userInfo}>
                <div className={css.nameLetter}>A</div>

                <div className={css.nameWrapper}>
                  <p className={css.userName}>Alice</p>
                  <ul className={css.stars}>
                    <li className={css.star}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.star}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.star}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.star}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                    <li className={css.star}>
                      <FaStar className={css.starIcon} size={16} />
                    </li>
                  </ul>
                </div>
              </div>

              <p className={css.text}>
                The Mavericks panel truck was a perfect choice for my solo road
                trip. Compact, easy to drive, and had all the essentials. The
                kitchen facilities were sufficient, and the overall experience
                was fantastic.
              </p>
            </li>
          </ul>

          <ConnectForm />
        </div>
      </div>
    </section>
  );
}
