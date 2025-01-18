import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  skills: { type: [String], required: true },
  bio: String
})

export default mongoose.model('User', UserSchema)
