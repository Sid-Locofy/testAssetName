import { FunctionComponent, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={[styles.form, className].join(" ")}>
      <div className={styles.signInFormWrapper}>
        <h2 className={styles.signIn}>Sign in</h2>
        <div className={styles.form1}>
          <form className={styles.form2}>
            <div className={styles.formFields}>
              <div className={styles.email}>
                <input
                  className={styles.emailAddress}
                  placeholder="Email address"
                  type="text"
                />
                <img
                  className={styles.iconaccount}
                  alt=""
                  src="/iconaccount.svg"
                />
              </div>
              <div className={styles.password}>
                <input
                  className={styles.password1}
                  placeholder="Password"
                  type="text"
                />
                <img
                  className={styles.iconpassword}
                  alt=""
                  src="/iconpassword.svg"
                />
              </div>
            </div>
            <button className={styles.searchFlightsButton}>
              <div className={styles.button}>Sign in</div>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.formChild} />
      <FrameComponent
        orSignUpWith="Or sign in with"
        googleIcon="/google-icon1@2x.png"
        facebookIcon="/facebook-icon1@2x.png"
        appleIcon="/apple-icon1@2x.png"
      />
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
    </div>
  );
};

export default Form;
