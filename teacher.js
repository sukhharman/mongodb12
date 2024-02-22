//teacher.js

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Harman20:sukh123@cluster0.iqosrv7.mongodb.net/";
const dbName = 'alluserdata'; 

const dbConnect = async () => {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error('Error occurred while connecting to MongoDB Atlas', error);
        throw error;
    }
};

module.exports = dbConnect;
