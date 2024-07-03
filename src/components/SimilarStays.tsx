import { FunctionComponent } from "react";
import StayCard from "./StayCard";
import styles from "./SimilarStays.module.css";

export type SimilarStaysType = {
  className?: string;
};

const SimilarStays: FunctionComponent<SimilarStaysType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.similarStays, className].join(" ")}>
      <div className={styles.similarStaysSection}>
        <div className={styles.similarStaysHeader}>
          <h3 className={styles.similarStays1}>Similar stays</h3>
          <a className={styles.button}>View all</a>
        </div>
        <div className={styles.stayCards}>
          <StayCard
            brightwoodsEstate="Missisuaga Aistream"
            bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          />
          <StayCard
            brightwoodsEstate="Urban Loft"
            bridlepathOntarioCanada="Urban Loft"
          />
          <StayCard
            brightwoodsEstate="Forestville Cottages"
            bridlepathOntarioCanada="Simcoe, Ontario Canada"
          />
        </div>
      </div>
    </section>
  );
};

export default SimilarStays;
