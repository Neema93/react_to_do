const express = require("express");
const router = express.Router();

module.exports = (db) => {
  console.log(db);
  router.get('/getalltodo', (req, res) => {
    db.query(`SELECT * FROM todo;`)
      .then((data) => {
        res.json(data.rows);
      })
  });
  router.post("/todo", (req, res) => {
    console.log("hello", req.body);
    const {
      name
    } = req.body;
    db.query(
      `
			INSERT INTO todo(name)
			VALUES ($1)
			RETURNING *;
			`,
      [name]
    )
      .then(res => console.log(res.rows));
  })


  return router;
};