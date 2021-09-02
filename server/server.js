const express = require("express");
const connectDB = require("./config/db");
const app = express();
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const User = require("./routes/users");
const Profile = require("./routes/profiles");
const Services = require("./routes/services");
const Appointment = require("./routes/appointments");
const Category = require("./routes/catagories");
const Notifications = require("./routes/notifications");

const Search = require("./routes/search");
const JobRequests = require("./routes/jobRequests");
const JobOffers = require("./routes/JobOffers");

const NewJobs = require("./routes/newJobs");
const cors = require("cors");
const path = require("path");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//init middleware
app.use(express.json({ extended: false }));

//user connection

app.use(cors());
//api routes here
app.use("/api/users", User);
app.use("/api/profiles", Profile);
app.use("/api/categories", Category);
app.use("/api/services", Services);
app.use("/api/appointments", Appointment);
app.use("/api/notifications", Notifications);

app.use("/api/search", Search);
app.use("/api/jobRequests", JobRequests);
app.use("/api/offers", JobOffers);
app.use("/api/jobs", NewJobs);
//

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
