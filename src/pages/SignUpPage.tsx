import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        loginSection={false}
      />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.signupFormContainer}>
              <h2 className={styles.createAccount}>Create Account</h2>
              <div className={styles.inputFieldsContainer}>
                <form className={styles.form1}>
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
                    <div className={styles.confirmPassword}>
                      <input
                        className={styles.confirmPassword1}
                        placeholder="Confirm password"
                        type="text"
                      />
                      <img
                        className={styles.iconpassword1}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Sign up</div>
                  </button>
                </form>
              </div>
              <div className={styles.signupFormContainerInner}>
                <div className={styles.frameChild} />
              </div>
              <FrameComponent
                orSignUpWith="Or sign up with"
                googleIcon="/google-icon@2x.png"
                facebookIcon="/facebook-icon@2x.png"
                appleIcon="/apple-icon@2x.png"
              />
            </div>
            <div
              className={styles.iAlreadyHaveContainer}
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className={styles.login}>Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
