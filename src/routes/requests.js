const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: id del usuario
 *        name:
 *          type: string
 *          description: nombre del usuario
 *        edad:
 *          type: integerimage.png
 *          description: edad del usuario
 *      required:
 *        - id
 *        - name
 *        - edad
 *      example:
 *        name: david
 *        edad: 19
 */

/**
 * @swagger
 * /api/get:
 *  get:
 *    summary: return all users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
*/
router.get("/get", (req, res)=>{
  const data = [
    {id: 1, name: "david"},
    {id: 2, name: "oriol"},
    {id: 3, name: "jordi"}
  ]
  res.json(data);
});
/**
 * @swagger
 * /api/get/{id}:
 *  get:
 *    summary: return a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: User id.
 *    responses:
 *      200:
 *        description: a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: user not found.
*/
router.get("/get/:id", (req, res)=>{
  let {id} = req.params;
  const data = {id: id, name: "david"}
  res.json(data);
});

/**
 * @swagger
 * /api/post:
 *  post:
 *    summary: create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: User created.
*/
router.post("/post", (req, res)=>{
  res.json({created: true});
});
/**
 * @swagger
 * /api/put/{id}:
 *  put:
 *    summary: update a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: User id.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: user updated
 *      404:
 *        description: user not found.
*/
router.put("/put/:id", (req, res)=>{
  let {id} = req.params;
  res.json({updated: true});
});
/**
 * @swagger
 * /api/delete/{id}:
 *  delete:
 *    summary: delete a user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: User id.
 *    responses:
 *      200:
 *        description: user deleted
 *      404:
 *        description: user not found.
*/
router.delete("/delete/:id", (req, res)=>{
  let {id} = req.params;
  res.json({deleted: true});
});

module.exports = router;
