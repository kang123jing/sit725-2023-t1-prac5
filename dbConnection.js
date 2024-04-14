const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://s223765611:d6J1r5lR7i9tvF3w@sit725-2023-t1-prac4.epyv66e.mongodb.net";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Database connected successfully!");
        return client.db(); // Return the database instance
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit the process if unable to connect
    }
}

module.exports = connectDB;
