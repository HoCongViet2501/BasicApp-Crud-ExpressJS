const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

var corOptions = {
    origin: 'http://localhost:4040',
};

app.use(cors(corOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
}
);

const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("sync db.");
    }).catch(err => {
        console.log("Cannot sync db.", err);
    });