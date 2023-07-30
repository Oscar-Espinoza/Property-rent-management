import express from "express";

import {
  createUser, getAllUsers, getUserInfoByID
} from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/v1/users:
 *  get:
 *    tags:
 *      - Users
 *    description: Get all users
 *    responses:
 *      200:
 *        description: An array of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
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
router.route('/').get(getAllUsers);

/**
 * @openapi
 * /api/v1/users:
 *  post:
 *    tags:
 *      - Users
 *    description: Create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The created user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
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
router.route('/').post(createUser);

/**
 * @openapi
 * /api/v1/users/{id}:
 *  get:
 *    tags:
 *      - Users
 *    description: Get a user by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The ID of the user to retrieve
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The user data
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: User not found
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
router.route('/:id').get(getUserInfoByID);


export default router;

