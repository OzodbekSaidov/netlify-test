import restaurants from "../db/Routes/restaurants2.mjs";
import BurgerBarn from "../db/Routes/BurgerBarn2.mjs";
import CoffeBean from "../db/Routes/CoffeBean2.mjs";
import GreenGarden from "../db/Routes/GreenGarden2.mjs";
import LaBella from "../db/Routes/LaBella2.mjs";
import PhoHouse from "../db/Routes/PhoHouse2.mjs";
import PizzaPalace from "../db/Routes/PizzaPalace2.mjs";
import SpiceRoute from "../db/Routes/SpiceRoute2.mjs";
import Sushizen from "../db/Routes/SushiZen2.mjs";
import SweetTreats from "../db/Routes/SweetTreats2.mjs";
import TacoLoco from "../db/Routes/TacoLoco2.mjs";
import express from "express";
import ServerlessHttp from "serverless-http";

const server = express();

server.use(restaurants);

server.use("/restaurants?", CoffeBean);

server.use("/restaurants?", BurgerBarn);

server.use("/restaurants?", GreenGarden);

server.use("/restaurants?", LaBella);

server.use("/restaurants?", PhoHouse);

server.use("/restaurants?", PizzaPalace);

server.use("/restaurants?", SpiceRoute);

server.use("/restaurants?", Sushizen);

server.use("/restaurants?", SweetTreats);

server.use("/restaurants?", TacoLoco);

export const handler2 = ServerlessHttp(server);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
