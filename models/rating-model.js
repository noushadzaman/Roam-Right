import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
  hotelId: {
    required: true,
    type: ObjectId,
  },
  hotelId: {
    required: true,
    type: ObjectId,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const ratingModel =
  mongoose.models.ratings ?? mongoose.model("ratings", ratingSchema);