// import mongoose, { Schema, Document, models, model } from 'mongoose';
// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
// }

// const UserSchema: Schema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// mongoose.models = {} as any;
// const Users = mongoose.model<IUser>('User', UserSchema) || mongoose.models.user;

// export default Users;

import mongoose, { Schema, Document, model, models } from 'mongoose';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: String;
}
const UserSchema: Schema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false, unique: false },
  password: { type: String, required: false },
  role: { type: String, required: false },
});
const Users = models.user || model('user', UserSchema);

export default Users;
