const express = require('express');
const router = express.Router();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AIdb:Tu%40eme2YG%21E5p3%23@aicluster.kihtp.mongodb.net/AIdb?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true
  });

var connection = mongoose.connection;
const collection = connection.db.collection("product")

//landing page의 api에 보내기
router.post('/products', (req,res)  => {


    //product collection에 들어 있는 모든 상품 정보 가져오기

    collection.find()
    // Product.find()  사용

        
   
    });







