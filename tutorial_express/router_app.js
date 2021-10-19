const express = require('express');
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/auth/', authRouter);
app.listen(5000, () => {
    console.log("Running @ 5000");
});