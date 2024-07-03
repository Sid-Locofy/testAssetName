import { FunctionComponent } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  className?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
}) => {
  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.stayFavorite}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.stayDetails}>
        <div className={styles.stayInfo}>
          <div className={styles.stayNameLocation}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayRating}>
            <div className={styles.stayStars}>4.8</div>
            <img className={styles.stayBadgeIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.stayPricing}>
          <div className={styles.stayPrice}>
            <div className={styles.priceValue}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <img
            className={styles.priceBadgeIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.guestCapacity}>
            <img
              className={styles.userIcon}
              loading="lazy"
              alt=""
              src="/user.svg"
            />
            <div className={styles.guests}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
