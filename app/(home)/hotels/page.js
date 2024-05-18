import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";

const refinedCategory = (category) => {
  const decodeCategory = decodeURI(category);
  if (decodeCategory === "undefined") {
    return "";
  }
  return decodeCategory;
};

export default function HotelListPage({
  searchParams: { destination, checkin, checkout, category },
}) {
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
      <div className="container items-center py-12">
        <Search
          destination={destination}
          checkin={checkin}
          checkout={checkout}
          fromList={true}
        />
      </div>
      <section className="py-12 bg-white">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList
            destination={destination}
            checkin={checkin}
            checkout={checkout}
            category={refinedCategory(category)}
          />
        </div>
      </section>
    </section>
  );
}
