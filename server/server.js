const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
  });


  app.get("/questions",(req,res)=>{
    const difficultyLevel=req.query.difficulty;
    console.log("difficulty", difficultyLevel);
    const params= new URLSearchParams({
      q: req.query.difficulty,
      units: "imperial",
    });
    const url=`https://opentdb.com/api.php?amount=5&category=9&${params}&type=multiple`
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({data});
      })
      .catch((err)=>{
        console.log(err);
      });
  })






app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
