import TacoLoco from "../Files/TacoLoco.mjs";
import express from "express";

const router = express.Router();

router.route("/taco-?loco")
  .get((req, res) => {
    res.json(TacoLoco);
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
