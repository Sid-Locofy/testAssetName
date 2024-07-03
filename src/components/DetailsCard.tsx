import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  className?: string;
  featureCardTopRow?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  className = "",
  featureCardTopRow,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img
        className={styles.featureCardTopRow}
        loading="lazy"
        alt=""
        src={featureCardTopRow}
      />
      <div className={styles.featureCardBottomRow}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
