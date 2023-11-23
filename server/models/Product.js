const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Plase provide a name for this product"],
      trim: true,
      unique: [true, "Name must be uniqe"],
      minLength: [3, "Name must be at least 3 characters."],
      mixLength: [100, "Name is too large"],
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURLs: [
      {
        type: String,
        // required: true,
        Validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide a  valid url",
        },
      },
    ],
    size: {
      type: String,
      required: true,
      enum: {
        values: ["XS", "S", "M", "L", "XL"],
        message: "Unit value can't be {Value}, must be kg/litre/pcs",
      },
    },
    color: {
      type: String,
      required: true,
      enum: {
        values: [
          "White",
          "Black",
          "Orange",
          "Red",
          "Yellow",
          "Maroon",
          "Lime green",
          "Salmon",
          "Green",
          "Sky blue",
          "Crimson",
          "Aqua",
          "Grey",
          "Purple",
          "Mustard",
          "Peach",
          "Violet",
          "Magenta",
          "Coral",
          "Saffron",
          "Brown",
          "Pink",
          "Tan",
          "Teal",
          "Navy Blue",
          "Turquoise",
          "Lavender",
          "Beige",
          "Lemon",
          "yellow",
          "Grape vine",
          "Indigo",
          "Fuchsia",
          "Amber",
          "Sea green",
          "Dark green",
          "Burgundy",
          "Charcoal",
          "Bronze",
          "Cream	Mauve",
          "Olive",
          "Cyan",
          "Silver",
          "Rust",
          "Ruby",
          "Azure",
          "Mint",
          "Pearl",
          "Ivory",
          "Tangerine",
          "Cherry red",
          "Garnet",
          "Emerald",
          "Sapphire",
          "Rosewood",
          "Lilac",
          "Arctic blue",
          "Pista green",
          "Coffee brown",
          "Umber",
          "Brunette",
          "Mocha",
          "Ash",
          "Jet black",
        ],
        message: "Unit value can't be {Value}, must be kg/litre/pcs",
      },
    },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock",
    },
  },
  {
    timeStamps: true,
  }
);

// Schema -> Model -> Query

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
