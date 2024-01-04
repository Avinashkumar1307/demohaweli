const express = require('express');
const app = express();
var cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
    cors({
        origin: ["https://demohaweli-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    })
);
require('./config/database').connect();

// Routes import and mount

const user = require('./routes/user');
// app.use('/api/v1', user);
const phonepeRoute = require('./routes/phonepeRoute')
// app.use("/api", phonepeRoute);

app.get("/",(req,res) =>{
    res.json("hello");
})


app.listen(4000, () => {
    console.log(`Server is Started ${PORT}`);
})
