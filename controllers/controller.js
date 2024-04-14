const catModel = require('../models/cat');

function postCat(req, res) {
    const cat = req.body;
    catModel.postCat(cat)
        .then(result => {
            res.status(201).json({ statusCode: 201, data: result, message: 'success' });
        })
        .catch(error => {
            res.status(500).json({ statusCode: 500, message: 'Internal server error' });
        });
}

function getAllCats(req, res) {
    catModel.getAllCats()
        .then(result => {
            res.status(200).json({ statusCode: 200, data: result, message: 'get all cats success' });
        })
        .catch(error => {
            res.status(500).json({ statusCode: 500, message: 'Internal server error' });
        });
}

module.exports = {
    postCat,
    getAllCats
};
