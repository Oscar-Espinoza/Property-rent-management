import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - avatar
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         avatar:
 *           type: string
 *           description: The avatar url of the user
 *         allProperties:
 *           type: array
 *           items:
 *             type: string
 *           description: The array of all properties ids owned by the user
 */

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  avatar: { type: String, required: true},
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel