let express = require('express');
let exphbs = require("express-handlebars");

let app = express();

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

let PORT = process.env.PORT || 3000;

// ROUTES
app.get("/", async (req,res) => {

  res.render("home");
});
app.get("/pages", async (req, res) => {

});
app.get("/pages/:id", async (req, res) => {

});

app.post("/pages", async (req, res) => {

});
app.put("/pages/:id", async (req, res) => {

});
app.delete("/pages/:id", async (req, res) => {

});



app.listen(PORT, () => console.log(`App listening on port ${PORT}; http://localhost:3000`));