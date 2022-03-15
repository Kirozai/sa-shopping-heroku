const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const newsletterRoute = require("./routes/newsletter");
const stripeRoute = require("./routes/stripe");
const commentsratingsRoute = require("./routes/commentsratings")
const cors = require("cors");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected !"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/mails", newsletterRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/commentsratings", commentsratingsRoute)


app.listen(process.env.PORT || 5000, () => {
  console.log("Server Is Running !");
});

app.get('/', (req, res)=> {
  res.send("Welcome to the server side")
})
