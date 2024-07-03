import { FunctionComponent } from "react";
import Header from "../components/Header";
import PageContent from "../components/PageContent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import FrameComponent1 from "../components/FrameComponent1";
import SimilarStays from "../components/SimilarStays";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        loginSection
      />
      <PageContent />
      <section className={styles.listingContent}>
        <div className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </div>
      </section>
      <FrameComponent1 />
      <SimilarStays />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
