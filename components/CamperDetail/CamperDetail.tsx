"use client";

import css from "./CamperDetail.module.css";
import { FaStar } from "react-icons/fa";
import { SlMap } from "react-icons/sl";
import { Camper } from "@/types/camper";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface CamperDetailProps {
  camper: Camper;
}

export default function CamperDetail({ camper }: CamperDetailProps) {
  const formatValue = (value?: string) => {
    if (!value) return "";
    return value
      .replace("l/100km", " l / 100km")
      .replace(/(\d)(m)/g, "$1 m")
      .replace(/(\d)(l)/g, "$1 l");
  };

  const formatCategory = (item: string) => {
    if (!item) return "";
    const lower = item.toLowerCase();
    if (lower === "ac") return "AC";
    if (lower === "tv") return "TV";
    return item.charAt(0).toUpperCase() + item.slice(1);
  };

  const categories = [
    camper.transmission,
    camper.engine,
    camper.form,
    ...(Array.isArray(camper.amenities) ? camper.amenities : []),
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  if (!camper) return null;

  return (
    <section className={css.section}>
      <div className={`container ${css.wrapper}`}>
        <div className={css.galleryContainer}>
          <Swiper
            loop={false}
            spaceBetween={10}
            navigation={false}
            allowTouchMove={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className={css.mainSwiper}
          >
            {camper.gallery?.map((image) => {
              const imageSrc = image?.original || image?.thumb || "/Pic.png";

              return (
                <SwiperSlide key={image.id} className={css.mainSlide}>
                  {/* Додано інлайн-стиль position: relative */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${camper.name} photo`}
                      className={css.mainImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 630px"
                      priority
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Слайдер мініатюр */}
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            loop={false}
            spaceBetween={26}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className={css.thumbsSwiper}
          >
            {camper.gallery?.map((image) => {
              const thumbSrc = image?.thumb || image?.original || "/Pic.png";

              return (
                <SwiperSlide key={image.id} className={css.thumbSlide}>
                  {/* Додано інлайн-стиль position: relative */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={thumbSrc}
                      alt="Thumb"
                      className={css.thumbImage}
                      fill
                      sizes="140px"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={css.infoContainer}>
          <div className={css.baseInfo}>
            <h3 className={css.title}>{camper.name}</h3>
            <div className={css.starsLocation}>
              <div className={css.stars}>
                <FaStar className={css.starIcon} size={16} />
                <span>
                  {camper.rating}({camper.totalReviews} Reviews)
                </span>
              </div>

              <div className={css.location}>
                <SlMap size={16} />
                <span>{camper.location}</span>
              </div>
            </div>

            <span className={css.cost}>
              <span>€</span>
              {Math.trunc(camper.price)}
            </span>

            <p className={css.text}>{camper.description}</p>
          </div>

          <div className={css.detailContainer}>
            <h3 className={css.titleDetail}>Vehicle details</h3>
            <ul className={css.categories}>
              {categories.map((item, index) => (
                <li key={index} className={css.categoryItem}>
                  {formatCategory(item)}
                </li>
              ))}
            </ul>

            <ul className={css.characteristics}>
              <li className={css.characteristicItem}>
                <span>Form</span>
                <span>
                  {camper.form
                    ? camper.form.charAt(0).toUpperCase() + camper.form.slice(1)
                    : ""}
                </span>
              </li>
              <li className={css.characteristicItem}>
                <span>Length</span>
                <span>{formatValue(camper.length)}</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Width</span>
                <span>{formatValue(camper.width)}</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Height</span>
                <span>{formatValue(camper.height)}</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Tank</span>
                <span>{formatValue(camper.tank)}</span>
              </li>
              <li className={css.characteristicItem}>
                <span>Consumption</span>
                <span>{formatValue(camper.consumption)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
