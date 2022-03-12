const mongoose = require("mongoose");

const CommentsRatingsSchema = new mongoose.Schema(
  {
    username: { 
        type: String, 
        required: true 
    },
    productid: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        required: true 
    },
    text: { 
        type: String,
        required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CommentsRatings", CommentsRatingsSchema);
