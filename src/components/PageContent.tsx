import { FunctionComponent } from "react";
import styles from "./PageContent.module.css";

export type PageContentType = {
  className?: string;
};

const PageContent: FunctionComponent<PageContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pageContent, className].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <img
            className={styles.contentPlaceholderIcon}
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className={styles.imageGrid}>
            <img
              className={styles.imageRowIcon}
              loading="lazy"
              alt=""
              src="/frame-46@2x.png"
            />
            <img
              className={styles.imageRowIcon1}
              loading="lazy"
              alt=""
              src="/frame-47@2x.png"
            />
            <img
              className={styles.imageRowIcon2}
              loading="lazy"
              alt=""
              src="/frame-48@2x.png"
            />
            <img
              className={styles.imageRowIcon3}
              loading="lazy"
              alt=""
              src="/frame-49@2x.png"
            />
            <div className={styles.imageRow}>
              <img
                className={styles.imagePlaceholderIcon}
                alt=""
                src="/image-placeholder@2x.png"
              />
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.listingDetails}>
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsContent}>
              <div className={styles.listingHeaderParent}>
                <div className={styles.listingHeader}>
                  <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                  <div className={styles.bridlepathOntarioCanada}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className={styles.listingActions}>
                <div className={styles.rating}>
                  <div className={styles.ratingValue}>5.0</div>
                  <img
                    className={styles.ratingStarsIcon}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.reviewCount}>
                  <div className={styles.reviews}>200 Reviews</div>
                </div>
              </div>
            </div>
            <div
              className={styles.welcomeToOur}
            >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
          <div className={styles.bookingWrapperParent}>
            <div className={styles.bookingWrapper}>
              <div className={styles.bookingContent}>
                <b className={styles.price}>$658</b>
                <div className={styles.nightlyRate}>
                  <a className={styles.night}>/night</a>
                </div>
              </div>
              <div className={styles.bookingCTA}>
                <div className={styles.bookingButton}>
                  <div className={styles.icontrend}>
                    <div className={styles.iconParent}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                      <div className={styles.recommendationBackground} />
                    </div>
                  </div>
                  <div className={styles.recommendationLabel}>
                    <div className={styles.bestTimeTo}>Best time to Book</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.searchFlightsButton}>
              <div className={styles.button}>Book this home</div>
            </button>
          </div>
          <div className={styles.hostInfo}>
            <div className={styles.hostedBy}>Hosted by:</div>
            <div className={styles.hostDetails}>
              <img
                className={styles.hostAvatarIcon}
                loading="lazy"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.hostProfile}>
                <div className={styles.michelleWard}>Michelle Ward</div>
                <div className={styles.joinedInMay}>Joined in May 2021</div>
              </div>
              <button className={styles.hostBadge}>
                <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
                <div className={styles.superhost}>Superhost</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageContent;
