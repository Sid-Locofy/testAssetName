import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  orSignUpWith?: string;
  googleIcon?: string;
  facebookIcon?: string;
  appleIcon?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  orSignUpWith,
  googleIcon,
  facebookIcon,
  appleIcon,
}) => {
  return (
    <div className={[styles.orSignUpWithParent, className].join(" ")}>
      <div className={styles.orSignUp}>{orSignUpWith}</div>
      <div className={styles.socialLoginContainer}>
        <div className={styles.socialLogin}>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src={googleIcon}
          />
          <a className={styles.providerLabels}>Google</a>
        </div>
        <div className={styles.socialLogin1}>
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src={facebookIcon}
          />
          <a className={styles.text}>Facebook</a>
        </div>
        <div className={styles.socialLogin2}>
          <img
            className={styles.appleIcon}
            loading="lazy"
            alt=""
            src={appleIcon}
          />
          <a className={styles.text1}>Apple</a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
