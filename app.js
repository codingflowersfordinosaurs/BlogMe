let express = require('express');

let app = express();

let PORT = process.env.PORT || 3000;

// ROUTES
app.get("/", async (req,res) => {
  console.log(req);

  res.send("hello world!");
});




app.listen(PORT, () => console.log(`App listening on port ${PORT}`));