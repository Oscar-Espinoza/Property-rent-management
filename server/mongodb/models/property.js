import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       required:
 *         - title
 *         - location
 *         - description
 *         - propertyType
 *         - price
 *         - photo
 *         - creator
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the property
 *         location:
 *           type: string
 *           description: The location of the property
 *         description:
 *           type: string
 *           description: The description of the property
 *         propertyType:
 *           type: string
 *           description: The type of the property
 *         price:
 *           type: number
 *           description: The price of the property
 *         photo:
 *           type: string
 *           description: The photo url of the property
 *         creator:
 *           type: string
 *           format: objectId
 *           description: The creator ID of the property
 */

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true},
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const propertyModel = mongoose.model('Property', PropertySchema);

export default propertyModel

/**
 * @openapi
 * components:
 *   schemas:
 *     PropertyRequest:
 *       type: object
 *       required:
 *         - title
 *         - location
 *         - description
 *         - propertyType
 *         - price
 *         - photo
 *         - email
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the property
 *         location:
 *           type: string
 *           description: The location of the property
 *         description:
 *           type: string
 *           description: The description of the property
 *         propertyType:
 *           type: string
 *           description: The type of the property
 *         price:
 *           type: number
 *           description: The price of the property
 *         photo:
 *           type: string
 *           description: The photo url to be uploaded
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the creator
 */