var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/rx_drugbank_data');
mongoose.connect('mongodb://admin:nextel12@ds125293.mlab.com:25293/rx_drugbank_data');

var rx_drugbank_data = mongoose.Schema({
    // dbca_id: mongoose.Schema.Types.ObjectId,
    dbca_drug_name: String,
    dbca_drug_description: mongoose.Schema.Types.Mixed,
    dbca_created_date: Date
})


module.exports = mongoose.model('dbca_data', rx_drugbank_data, ' drugbank_ca_data');