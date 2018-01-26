const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, () => console.log("Server running"));

app.get("/:date", (req, res) => {
  const { date } = req.params;
  const options = { year: "numeric", month: "long", day: "numeric" };
  let unix, natural;
  if (!isNaN(date)) {
    unix = date;
    natural = new Date(date * 1000).toLocaleDateString("en-us", options);
  } else {
    natural = new Date(date).toLocaleDateString("en-us", options);
    unix = new Date(date).getTime() / 1000;
  }
  res.json({ unix, natural });
});

app.get('/', (req,res) => {
    res.send("<h1>Example usage:</h1><code> https://timstamp-fcc.herokuapp.com/December%2015,%202015</code><br><code> https://timstamp-fcc.herokuapp.com/1450137600 </code><h1>Example output:</h1><code> { 'unix': 1450116000, 'natural': 'December 15, 2015' }')</code>")
})