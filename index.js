import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";  //1.import all routes file

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes); //2.use the routes

app.get("/", (req, res) => res.send("hello world")); //first route sample

app.listen(PORT, () =>
  console.log(`server is running on port: http://localhost:${PORT}`)
);
