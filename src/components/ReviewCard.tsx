import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

export type ReviewCardType = {
  className?: string;
  reviewerAvatar?: string;
  johnnyCash?: string;
  june2023?: string;
  reviewStars?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  className = "",
  reviewerAvatar,
  johnnyCash,
  june2023,
  reviewStars,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={[styles.reviewcard, className].join(" ")}>
      <div className={styles.reviewCardContent}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.reviewerAvatarIcon}
            loading="lazy"
            alt=""
            src={reviewerAvatar}
          />
          <div className={styles.reviewerNameDate}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.reviewRating}>
          <div className={styles.reviewStars}>{reviewStars}</div>
          <img
            className={styles.verifiedBadgeIcon}
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
