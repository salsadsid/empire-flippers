import React from "react";
import ListingCard from "../ListingCard/ListingCard";

const ListingCards = () => {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch("DATA.json")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);
  console.log(listings);
  return (
    <div className="container pb-6 px-4 mx-auto flex flex-col gap-5 mt-6 items-center justify-center">
      {listings?.map((list) => (
        <ListingCard key={list?.listingId} list={list} />
      ))}
      <button
        type="button"
        className="group border  justify-center border-indigo-500 bg-indigo-500 text-white rounded-md px-6 py-3 m-2 transition flex items-center gap-3 text-lg font-semibold duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        Load More Listing
      </button>
    </div>
  );
};

export default ListingCards;
