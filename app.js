const express = require('express');
const path = require('path');
const { dirname } = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"/index.html"));
})


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
