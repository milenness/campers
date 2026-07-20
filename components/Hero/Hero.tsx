import css from "./Hero.module.css"
import Link from "next/link"

export default function Hero() {
    return (
      <section className={css.hero}>
        <div className="container">
          <h2 className={css.title}>Campers of your dreams</h2>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Link
            href="/"
            className={css.button}
            aria-label="Перейти до каталогу"
          >
            View Now
          </Link>
        </div>
      </section>
    );
}