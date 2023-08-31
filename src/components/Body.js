import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Body = () => (
  <div className="body">
    <div className="res-container">
      {restaurants.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}
    </div>
  </div>
);

export default Body;
