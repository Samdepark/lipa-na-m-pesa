const axios = require('axios');
//middleware function for generating token
const createToken=async(req,res,next)=>{
    const key = 'Y1wxHBCGFLSL6Qs6kmOqvPpOnwfsQRAw';
    const secret='o7omHyLm7VkhQWx4';
    const auth = new Buffer.from(`${key}:${secret}`).toString(`base64`)
     await axios
     .get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers:{
                authorization:`Basic ${auth}`,
            },

        }

    )
    .then((data)=>{
        token = data.data.access_token;
        console.log(data.data);
        next();
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json(err.message);
    });
};
//stk push function
 const stkPush = async(req,res)=>{
    const shortCode="174379"; 
    const Phone=req.body.phone.substring(1);
    const amount=re.body.amount;
    const passKey="bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const date = new Date();
    const timeStamp =
    date.getFullYear() +
    ("0" + (date.getMonth()+1)).slice(-2)+
    ("0" + date.getDate()).slice(-2)+
    ("0" + date.getHours()).slice(-2)+
    ("0" + date.getMinutes()).slice(-2)+
    ("0" + date.getSeconds()).slice(-2);

    const password = new Buffer.from(shortCode + passKey + timeStamp ).tostring("base64");

    const data ={
         BusinessShortCode: shortCode,    
         Password: password,    
         Timestamp: timestamp,    
         TransactionType: "CustomerPayBillOnline",    
         Amount: amount,    
         PartyA:`254${phone}`,
         PartyB: shortCode,    
         PhoneNumber:`254${phone}`,    
         CallBackURL:"https://mydomain.com/pat",    
         AccountReference:`254${phone}`,    
         TransactionDesc:"Test"
    }

    await axios.post(url,data,{
        headers:{
            authorization:`Bearer ${token}`
        }
    }).then((data)=>{
        console.log(data);
        res.status(200).json(data.data);
    }).catch((err)=>{
        res.status(400)
    })
 }


    module.exports= { createToken,stkPush };