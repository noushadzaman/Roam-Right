import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";

export default function HotelListPage({
  searchParams: { destination, checkin, checkout },
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
          />
        </div>
      </section>
    </section>
  );
}
