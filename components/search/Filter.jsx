import SortHotel from "./sort/SortHotel";
import FilterByAmenities from "./filter/FilterByAmenities";
import FilterByRange from "./filter/FilterByRange";
import FilterByStarCategory from "./filter/FilterByStarCategory";

const Filter = () => {
  return (
    <div className="col-span-3 space-y-4">
      <SortHotel />
      <FilterByRange />
      <FilterByStarCategory />
      <FilterByAmenities />
    </div>
  );
};

export default Filter;
