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
  router.delete("/deletetodo/:id", (req,res) => {
      console.log(req.params)
    const id  = req.params.id;
    console.log(id)
    db.query(
        ` DELETE FROM todo WHERE id = $1; `,[id]
    )

    .then(res => console.log(res.rows));
  })
  router.patch("/updatetodo/:id",(req,res) => {
    console.log(req.params)
    const id  = req.params.id;
    console.log(id)
    db.query(
        ` UPDATE todo SET checked = true WHERE id = $1; `,[id]
    )

    .then(res => console.log(res.rows));
  })

  return router;
};