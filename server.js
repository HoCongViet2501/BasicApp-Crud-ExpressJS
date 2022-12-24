const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

var corOptions={
    origin:'http://localhost:4040',
};

 app.use(cors(corOptions));