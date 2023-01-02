import express from "express";

const router = express.Router();

//all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send('hello');
});

export default router;