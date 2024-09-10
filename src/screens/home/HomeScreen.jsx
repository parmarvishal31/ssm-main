import styled from "styled-components";
import Hero from "../../componants/home/Hero";
import Featured from "../../componants/home/Featured";
import NewArrival from "../../componants/home/NewArrival";
import SavingZone from "../../componants/home/SavingZone";
import Catalog from "../../componants/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../componants/home/Brands";
import Feedback from "../../componants/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={mensCatalog} />
      <Catalog catalogTitle={"Categories For Women"} products={womensCatalog} />
      <Brands />
      <Catalog catalogTitle={"In The LimeLight"} products={limelightCatalog} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;