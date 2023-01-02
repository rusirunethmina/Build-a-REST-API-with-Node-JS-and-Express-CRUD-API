import express from "express";

const router = express.Router();

const users = [
  {
    id: 1,
    firstName: "rusiru",
    lastName: "nethmina",
    age: 24,
  },
  {
    id: 2,
    firstName: "kosala",
    lastName: "dayaratyna",
    age: 22,
  },
];

//all routes in here are starting with /users
router.get("/", (req, res) => {
  //   console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User name is ${user.firstName}`);
});

export default router;
