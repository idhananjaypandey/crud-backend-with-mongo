const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.mongodbURL)
  .then(() => {
    console.log("connected!");
  })
  .catch(() => {
    console.log("connection Failed!");
  });

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter The Product Name: "],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema, "products");

module.exports = Product;
