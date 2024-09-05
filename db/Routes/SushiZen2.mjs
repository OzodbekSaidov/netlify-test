import Sushizen from "../Files/SushiZen.mjs";
import express from "express";

const router = express.Router();

router.route("/sushi-?zen")
  .get((req, res) => {
    res.json(Sushizen);
  })
  .put((req, res) => {
    const updatedRestaurant = req.body;
    const restaurantIndex = restaurants.findIndex(
      (restaurant) => restaurant.id === updatedRestaurant.id
    );
    if (restaurantIndex !== -1) {
      restaurants[restaurantIndex] = updatedRestaurant;
      res.json(updatedRestaurant);
    } else {
      res.status(404).send("Restaurant not found");
    }
  });

export default router;
