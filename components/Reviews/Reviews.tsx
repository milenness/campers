"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./Reviews.module.css";
import ConnectForm from "@/components/ConnectForm";
import { FaStar } from "react-icons/fa";
import { fetchCamperReviews } from "@/services/api";

interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewsProps {
  camperId: string;
}

export default function Reviews({ camperId }: ReviewsProps) {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => fetchCamperReviews(camperId),
    enabled: Boolean(camperId),
  });

  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.title}>Reviews</h2>

        <div className={css.wrapper}>
          <ul className={css.reviewsList}>
            {isLoading ? (
              <p>Loading reviews...</p>
            ) : reviews.length > 0 ? (
              reviews.map((review: Review) => {
                const firstLetter = review.reviewer_name
                  ? review.reviewer_name.charAt(0).toUpperCase()
                  : "";

                return (
                  <li key={review.id} className={css.reviewsItem}>
                    <div className={css.userInfo}>
                      <div className={css.nameLetter}>{firstLetter}</div>

                      <div className={css.nameWrapper}>
                        <p className={css.userName}>{review.reviewer_name}</p>
                        <ul className={css.stars}>
                          {Array.from({ length: 5 }, (_, index) => {
                            const isGold = index < review.reviewer_rating;
                            return (
                              <li
                                key={index}
                                className={isGold ? css.starGold : css.star}
                              >
                                <FaStar className={css.starIcon} size={16} />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <p className={css.text}>{review.comment}</p>
                  </li>
                );
              })
            ) : (
              <p>No reviews yet.</p>
            )}
          </ul>

          <ConnectForm camperId={camperId} />
        </div>
      </div>
    </section>
  );
}
