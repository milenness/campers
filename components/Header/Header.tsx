"use client";

import { usePathname } from "next/navigation";

import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className={`${css.header} ${isHome ? css.home : css.catalog}`}>
      <div className="container">
        <nav className={css.nav}>
          <Link href="/" className={css.logo} aria-label="Перейти на головну">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={136}
              height={16}
              // priority
            />
          </Link>

          <div className={css.navLinks}>
            <Link href="/" className={css.link} aria-label="Перейти на головну">
              Home
            </Link>

            <Link
              href="/catalog"
              className={css.link}
              aria-label="Перейти на головну"
            >
              Catalog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
