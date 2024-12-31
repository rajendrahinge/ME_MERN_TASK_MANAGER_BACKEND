const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose"); 

const taskRoutes = require("./routes/tasks.routes");

const app = express();
const PORT = '8082';
const DB_URL = "mongodb://127.0.0.1:27017/task-manager";


mongoose.connect(DB_URL, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((error)=> {
        console.log("Error connecting to MongoDB : ", error)
    })


   
    app.use(cors());
    app.use(express.json());

    app.use("/tasks", taskRoutes);    


app.listen(PORT, () => {
    console.log(`Backend listing on Port ${PORT}!`);
});





