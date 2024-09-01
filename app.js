const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getdate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

app.get("/", (req, res) => {
  fs.readdir("./files", (err, file) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    res.render("index", { file });
  });
});

app.get("/create", (req, res) => {
  let date = getdate();
  res.render("create", { date });
});

app.get("/view/:filename", (req, res) => {
  let filename = req.params.filename;
  fs.readFile(`./files/${filename}`, "utf8", (err, data) => {
    if (err) return res.status(500).send("Internal Server Error");
    res.render("view", { data, filename });
  });
});

app.post("/create/:filename", (req, res) => {
  let filename = req.params.filename;
  let Content = req.body.data;

  fs.writeFile(`./files/${filename}`, Content, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

app
  .route("/edit/:filename")
  .get((req, res) => {
    let filename = req.params.filename;
    res.render("edit", { filename });
  })
  .post((req, res) => {
    let filename = req.params.filename;
    let Content = req.body.data;
    fs.writeFile(`./files/${filename}`, Content, (err) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      }
      res.redirect("/");
    });
  });

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    }
    res.redirect("/");
  });
});

app.listen(3000);
