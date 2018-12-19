//const Person = require("../models/rx");
var Rx_drugbank = require('../models/rx_drugbank_data_model');

// No query passed in means "find everything"
async function findAlldrugs() {

    Rx_drugbank.find((err, drugs) => {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        if (err) {
            console.log(err);
        } else {
            console.log(drugs);
            return drugs;
        }

        // send the list of all people
        // return res.status(200).send(drugs);

    });
}

async function findSpecificDrug(input) {

    //  let input = 'Denileukin diftitox';
    return new Promise(
        function(resolve, reject) {
            Rx_drugbank.findOne({ dbca_drug_name: input }, async function(err, drug) {
                let a = drug.toObject();
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    let drug = {
                        drug_name: a.dbca_drug_name,
                        drug_description: a.dbca_drug_info
                    }

                    console.log(drug);
                    resolve(drug);

                }

            });
        });
}

//findAlldrugs();
// let input = 'Denileukin diftitox';
// findSpecificDrug(input);

module.exports.findAlldrugs = findAlldrugs;
module.exports.findSpecificDrug = findSpecificDrug;