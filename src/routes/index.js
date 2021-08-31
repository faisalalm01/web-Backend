
const mainRoutes = require("express").Router();
const foodsRoutes = require("./foodRoutes");


mainRoutes.use("/foods", foodsRoutes);


module.exports= mainRoutes;