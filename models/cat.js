const { ObjectID } = require('mongodb');
let db;

function setDatabase(database) {
    db = database;
}

async function postCat(cat) {
    try {
        const result = await db.collection('cat').insertOne(cat);
        return result.ops[0];
    } catch (error) {
        console.error("Error posting cat:", error);
        throw error;
    }
}

async function getAllCats() {
    try {
        return await db.collection('cat').find({}).toArray();
    } catch (error) {
        console.error("Error getting all cats:", error);
        throw error;
    }
}

module.exports = {
    setDatabase,
    postCat,
    getAllCats
};
