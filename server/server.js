const express =require('express');
const app = express();
const cors = require('cors')
const tokenRoute =require('./routes/token')

app.listen(4000,(req,res)=>{
    console.log ("server running okay" )
})
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
res.send('proceed to payment')
})
app.use('/token',tokenRoute)