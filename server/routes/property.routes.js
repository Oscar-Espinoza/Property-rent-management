import express from  'express';
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from '../controllers/property.controller.js';

const router = express.Router();

/**
 * @openapi
 * /api/v1/properties:
 *  get:
 *    tags:
 *      - Properties
 *    description: Get all properties
 *    responses:
 *      200:
 *        description: An array of properties
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Property'
 */
router.route('/').get(getAllProperties);

/**
 * @openapi
 * /api/v1/properties/{id}:
 *  get:
 *    tags:
 *      - Properties
 *    description: Get details of a specific property
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The ID of the property to retrieve
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The property data
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Property'
 *      404:
 *        description: Property not found
 */
router.route('/:id').get(getPropertyDetail);

/**
 * @openapi
 * /api/v1/properties:
 *  post:
 *    tags:
 *      - Properties
 *    description: Create a new property
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/PropertyRequest'
 *    responses:
 *      200:
 *        description: Property created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      500:
 *        description: Error message
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 */
router.route('/').post(createProperty);


/**
 * @openapi
 * /api/v1/properties/{id}:
 *  patch:
 *    tags:
 *      - Properties
 *    description: Update a specific property
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The ID of the property to update
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Property'
 *    responses:
 *      200:
 *        description: The updated property
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Property'
 *      404:
 *        description: Property not found
 */
router.route('/:id').patch(updateProperty);

/**
 * @openapi
 * /api/v1/properties/{id}:
 *  delete:
 *    tags:
 *      - Properties
 *    description: Delete a specific property
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The ID of the property to delete
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Property deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      404:
 *        description: Property not found
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 */
router.route('/:id').delete(deleteProperty);

export default router;