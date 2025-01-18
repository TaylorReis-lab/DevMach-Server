import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  gender: { type: string, required: true, enum: ['masculino', 'feminino'] },
  skills: { type: [String], required: true },
  bio: String
})

export default mongoose.model('User', UserSchema)
