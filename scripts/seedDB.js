const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/HBdata");

// Sust collectionSeed and CollectionName for each collection
// const collectionSeed = [
//   {
//   },
//   {
//   },
//   {
// ];

// db.CollectionName.remove({})
//   .then(() => db.CollectionName.collection.insertMany(collectionSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
