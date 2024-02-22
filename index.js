//index.js
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const uri = "mongodb+srv://Harman20:sukh123@cluster0.iqosrv7.mongodb.net/";

app.use(express.json());

MongoClient.connect(uri, { useNewUrlParser: true })
    .then(client => {
        console.log('Connected to MongoDB Atlas');
        const db = client.db(); 

        app.get('/', (req, res) => {
            res.send('Hello World! MongoDB is connected.');
        });
    })
    .catch(err => {
        console.error('Error occurred while connecting to MongoDB Atlas', err);
    });
