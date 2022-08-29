const express = require("express");
const bodyParser = require('body-parser');
const router = require('express').Router();
const cors = require("cors");
const app = express();
const axios = require('axios');




const port = 1337;

app.use(cors());

let data;

axios.get("https://dev14.ageraehandel.se/sv/api/product").then(res => {
    data = res.data;
});

router.get('/', (req, res) => {
    res.send(data);
});

app.use('/', router);
app.use(bodyParser.json());

/* app.get('/agera', async (req, res) => {
    try {
        const response = await axios({
            url: 'products',
            method: 'get'
        });
        res.status(200).json(response.data);

    } catch (err) {
  
        res.status(500).json({ message: err});
        console.log(err)
    }
}); */

/* app.get("/", async (req, res) => {
    axios({
        url: "agera",
        method: "get"
    })
        .then(response => {
            res.status(200).json(response.data);

        })
        .catch((err) => {
            res.status(500).json({message: err});
        });
}); */
app.listen(port, () => console.log(`Server listening on port ${port}`));