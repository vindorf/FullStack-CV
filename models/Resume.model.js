const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const resumeSchema = new Schema({
  resumeTitle : String,
  title: String,
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  address: {
    street: String,
    houseNr: String,
    postalCode: String,
    city: String,
    country: String,
  },
  email: { type: String },
  skills: String,
  education: [String],
  language: String,
  intro: String,
  workExperience: [String],
  img: String,
  certificate: [String],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Resume", resumeSchema);
