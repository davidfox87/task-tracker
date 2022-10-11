const express = require('express')

const recordRoutes = express.Router()


// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


    // This section will help you create a new record.
recordRoutes.route("/tasks/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection("tasks").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
        });
});



// This section will help you get a single record by id
recordRoutes.route("/tasks/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("tasks")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
});


module.exports = recordRoutes;