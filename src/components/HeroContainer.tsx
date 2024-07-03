import { FunctionComponent, useCallback } from "react";
import styles from "./HeroContainer.module.css";

export type HeroContainerType = {
  className?: string;
};

const HeroContainer: FunctionComponent<HeroContainerType> = ({
  className = "",
}) => {
  const onSearchButtonClick = useCallback(() => {
    // Please sync "Property Details" to the project
  }, []);

  return (
    <div className={[styles.heroContainer, className].join(" ")}>
      <div className={styles.heroContainerInner}>
        <div className={styles.frameParent}>
          <div className={styles.findAHostForEveryJourneyParent}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.form}>
            <div className={styles.autocompletebasic}>
              <input
                className={styles.locationInput}
                placeholder="Accommodation"
                type="text"
              />
              <img className={styles.iconhome} alt="" src="/iconhome.svg" />
            </div>
            <div className={styles.grouped}>
              <div className={styles.labelParent}>
                <div className={styles.label}>Check-in</div>
                <div className={styles.icon}>
                  <img
                    className={styles.calendartodayfilledIcon}
                    alt=""
                    src="/calendartodayfilled.svg"
                  />
                </div>
              </div>
              <div className={styles.labelGroup}>
                <a className={styles.label1}>Check-out</a>
                <div className={styles.icon1}>
                  <img
                    className={styles.calendartodayfilledIcon1}
                    alt=""
                    src="/calendartodayfilled.svg"
                  />
                </div>
              </div>
              <div className={styles.guestInput}>
                <input
                  className={styles.label2}
                  placeholder="Guest"
                  type="text"
                />
                <img className={styles.iconuser} alt="" src="/iconuser.svg" />
              </div>
            </div>
            <button
              className={styles.searchButton}
              onClick={onSearchButtonClick}
            >
              <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
              <div className={styles.button}>Search</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
