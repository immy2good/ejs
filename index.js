import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const today = new Date(); 
  const day = today.getDay();
  console.log(day);

  let type = "Weekday";
  let advice = "Get to work! work really hard!!! "
  if (day === 0 | day ===6) {
    type = "The Weekend";
    advice = "The Weekend Enjoy 🎉 You've earned it!!! ";
  }

  res.render('index.ejs', {
    dayType : type,
    message : advice,   
  });
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
