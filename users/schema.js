import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  //  _id: {type: mongoose.Schema.ObjectId, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;

