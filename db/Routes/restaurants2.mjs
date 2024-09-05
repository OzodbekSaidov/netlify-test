import restaurants from "../Files/restaurants.mjs";
import express from "express";

const router = express.Router();

router.route("/restaurants?")
  .get((req, res) => {
    res.json(restaurants);
  })
  .post((req, res) => {
    const newRestaurant = req.body;
    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
  })
  .delete((req, res) => {
    const restaurantName = req.query.name;
    
    const index = restaurants.findIndex(restaurant => restaurant.name === restaurantName);
    
    if (index !== -1) {
      restaurants.splice(index, 1);
      res.status(200).json({ message: `Restaurant '${restaurantName}' deleted successfully.` });
    } else {
      res.status(404).json({ error: `Restaurant '${restaurantName}' not found.` });
    }
  });

export default router;
