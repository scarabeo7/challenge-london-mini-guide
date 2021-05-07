const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const stratford = require("./data/Stratford.json");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");

app.get("/", (req, res) => {
  res.send("<center><h1>Hello and welcome to this city guide.</h1><p>/:city/:category returns :category list for :city</p></center>");
});

app.get("/:city/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const city = req.params.city.toLowerCase();
  if (city && category) {
    if (city === "stratford") {
      res.status(200).json(stratford[category]);
    } else if (city === "harrow") {
      res.status(200).json(harrow[category]);
    } else if (city === "heathrow") {
      res.status(200).json(heathrow[category]);
    } else {
      res.sendStatus(404);
    }
  }
});

//Check that port 4040 is not in use otherwise set it to a different port
const PORT = process.env.PORT || 4040;

//Start our server so that it listens for HTTP requests!
app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));
// app.listen(process.env.PORT);

/************************************************************/
