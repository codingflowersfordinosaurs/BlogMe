let express = require("express");
let exphbs = require("express-handlebars");
let bodyParser = require("body-parser");

let app = express();

let db = require("/models");
console.log("Page: ", Page);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(express.static("node_modules/axios/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let PORT = process.env.PORT || 3000;

// ROUTES
app.get("/", async (req, res) => {
  res.render("home");
});
// SELECT index route: get all pages in my database
app.get("/pages", async (req, res) => {
  try {
    const pages = await db.Page.findAll({ raw: true, order: [["title", 'DESC']] });

    console.log("pages: ", pages);

    res.render("index", { pages });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
// SELECT get a page with new
app.get("/pages_new", async (req, res) => {
  res.render("new", {
    title: "Create New Post",
    action: `/pages`,
    method: "POST"
  });
});

// SELECT get a single page by id
app.get("/pages/:id", async (req, res) => {
  console.log("/pages/:id", req.params);
});

// CREATE a new page
app.post("/pages", async (req, res) => {
  console.log("POST -> /pages", req.body);

  const newPage = req.body;


  const pages = await db.Page.create(newPage);

  res.redirect("/pages");
});

// SELECT get a page with new
app.get("/pages_edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log("ID: ", id);

  res.render("edit", { title: "Edit Post" });
});

// UPDATE an existing page by id
app.put("/pages/:id", async (req, res) => {
  console.log("PUT -> /pages", req.body);
  res.redirect("/pages");
});
// DELETE a page by id
app.delete("/pages/:id", async (req, res) => {});

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}; http://localhost:3000`)
);
