import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import TopBanner from "../../components/TopBanner/TopBanner";
import ListingCard from "../../components/ListingCard/ListingCard";
import ListingCards from "../../components/ListingCards/ListingCards";
import Filter from "../../components/Filter/Filter";
import Stat from "../../components/Stat/Stat";
import SubscriptionForm from "../../components/SubscriptionForm/SubscriptionForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <TopBanner />
      <Filter />
      <ListingCards />
      <Stat />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Home;
