const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const stratford = require("./data/Stratford.json");
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");

app.get("/", (req, res) =>{
    res.send("Hello and welcome to my app")
})

app.get("/stratford/pharmacies", (req, res) => {
  res.json(stratford.pharmacies);
});


app.get("/harrow/pharmacies", (req, res) => {
  res.json(harrow.pharmacies);
});

app.get("/heathrow/pharmacies", (req, res) => {
  res.json(heathrow.pharmacies);
});

//Check that port 4040 is not in use otherwise set it to a different port
const PORT = process.env.PORT || 4040;

//Start our server so that it listens for HTTP requests!
app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));
// app.listen(process.env.PORT);

/************************************************************/
