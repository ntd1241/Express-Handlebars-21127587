const express = require("express");
const app = express();
const port = 3000 || process.env.port;
const expressHbs = require("express-handlebars")

//Cau hinh tra ve thu muc web tinh
app.use(express.static(__dirname + "/html"));

//Cau hinh su dung View Template
app.engine(
    "hbs",
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
    })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    return res.render("index");
})

app.use("/task1", require("./routes/task1route"));
app.use("/task2", require("./routes/task2route"));
app.use("/task3", require("./routes/task3route"));
app.use("/task4", require("./routes/task4route"));

app.listen(port, () => {`${port}`});