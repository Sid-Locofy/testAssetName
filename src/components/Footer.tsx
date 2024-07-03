import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksColumn}>
            <div className={styles.supportLinks}>
              <div className={styles.support}>Support</div>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.aircover}>AirCover</div>
              <div className={styles.combatingDiscrimination}>
                Combating discrimination
              </div>
              <div className={styles.supportingPeopleWith}>
                Supporting people with disabilities
              </div>
              <div className={styles.cencellationOptions}>
                Cencellation options
              </div>
              <div className={styles.reportNeighbourhoodConcern}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.hostingLinks}>
              <div className={styles.hosting}>Hosting</div>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts}>Cover for hosts</div>
              <div className={styles.hostingResources}>Hosting resources</div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.hostingResponsibly}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.hostingLinks1}>
              <div className={styles.localhost}>Localhost</div>
              <a className={styles.newsroom}>Newsroom</a>
              <div className={styles.newFeatures}>New Features</div>
              <a className={styles.careers}>Careers</a>
              <div className={styles.investres}>Investres</div>
              <a className={styles.giftCards}>Gift cards</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContentWrapper}>
        <div className={styles.copyrightContent}>
          <div className={styles.copyrightInfo}>
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
      </div>
    </footer>
  );
};

export default Footer;
