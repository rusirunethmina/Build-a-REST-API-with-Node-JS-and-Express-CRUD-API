import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  //   console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const userid = uuidv4();
  const userWithId = { ...user, id: userid };
  users.push(userWithId);
  res.send(`User name is ${user.firstName}`);
});

router.get("/:id", (req, res) => {
  const { useriD } = req.params;
  const userData = users.find((user) => user.id === useriD);
  res.send(userData);
});

export default router;
