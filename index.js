const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const hotelRoute = require("./routes/hotel");
const authRoute = require('./routes/auth')
const roomRoute=require('./routes/room')
const payRoutes = require("./routes/payment");

const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8080
const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/', userRoute)
app.use('/', hotelRoute);
app.use('/', authRoute)
app.use('/',roomRoute)
app.use('/',payRoutes)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose.connect("mongodb+srv://Guhan:guhan@cluster0.gubnl.mongodb.net/hotelBooking?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`server started on Port ${PORT}`)
})
