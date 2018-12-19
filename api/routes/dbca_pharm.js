const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
// const app = express();
const drug = require("../models/rx_drugbank_data_model");
const Rx_drugbank = require("../queres/dbca_find_query");

var a = {};

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

router.get("/api/all", (req, res, next) => {
    drug.find()
        .exec()
        .then(docs => {
            console.log(docs);
            //   if (docs.length >= 0) {
            res.status(200).json(docs);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json({
        //         error: err
        //     });
        // });
});



router.get("/api/input", (req, res, next) => {
    //res.body.data;


    let response = {
        api_input: "aye we good , got DAMN waht took you so long! SHIT!"
    };

    var a = req.query.user_input;

    //res.status(200);
    // console.log("wordpress responded with: " + a);

    // res.status(200).send(response);
    // input_a(response.api_input).then(
    //     function(result) {
    //         res.status(200).json(result);
    //     });

    Rx_drugbank.findSpecificDrug(a)
        .then(function(result) {
            res.status(200).json(result);
        }).catch(function(e) {
            let a = { error: "something went wrong" }
            res.status(404).send(a);
            console.log(e);
        });
    // res.redirect('http://localhost:8888/KellumDesigns2/');
    // res.end();


    // res.redirect('http://localhost:8888/KellumDesigns2/');


});
//api/out

router.get("/api/out", (req, res, next) => {

    //res.body.data;
    res.status(200).json(a);
    //res.send(JSON.stringify(a));
    // res.params.a;  

    console.log("server sent back with: " + a);


});

async function input_a(input) {

    //  let input = 'Denileukin diftitox';
    //findSpecificDrug(input)
    // return new Promise(
    //     function(resolve, reject) {
    Rx_drugbank.findSpecificDrug(input).then(
        function(result) {
            a = result;
        });



    //   });
}

module.exports = router;