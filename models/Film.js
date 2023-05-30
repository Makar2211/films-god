import mongoose from 'mongoose';

const FilmSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    imageURL: {
      required: true,
      type: String,
    },
    titleOfEnglish: {
      required: true,
      type: String,
    },
    trailer: {
      required: true,
      type: String,
    },
    raiting: {
      required: true,
      type: String,
    },
    releaseDate: {
      required: true,
      type: String,
    },
    genre: {
      required: true,
      type: Array,
    },
    quality: {
      required: true,
      type: String,
    },
    translateFrom: String,
    age: {
      required: true,
      type: String,
    },
    time: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    film: {
      required: true,
      type: String,
    },
    viewCount: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Film', FilmSchema);
