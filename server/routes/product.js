const express = require('express');
const router = express.Router();
const { Product } = require('../models/product'); //Product에서 export한 것을 받아온다.
const request = require('request');




//route에서 디비, 서버 사이 관리

//=================================
//             product
//=================================

router.post('/products', (req,res)  => {
    
  let limit = req.body.limit ? parseInt(req.body.limit) :20;
  // property 이름 limit  //stirng을 숫자로:parseint
  let skip = req.body.skip ? parseInt(req.body.skip): 0;

  
  
  //produc collection 에 있는 모든 정보 가져오기
  Product.find()   //안에다 {}로 조건주기
    .skip(skip)
    .limit(limit)
    .exec((err, productInfo) => {
      if (err) return res.status(400).json({success: false, err})
     return res.status(200).json({success: true, 
        productInfo})
    })

  })




  //id=123123123,324234234,324234234  type=array
router.get('/cartProducts', (req, res) => {

  let type = req.query.type
  let productIds = req.query.id

  if (type === "array") {
      //id=123123123,324234234,324234234 이거를 
      //productIds = ['123123123', '324234234', '324234234'] 이런식으로 바꿔주기
      let ids = req.query.id.split(',')
      productIds = ids.map(item => {
          return item
      })

  }

  //productId를 이용해서 DB에서  productId와 같은 상품의 정보를 가져온다.

  Product.find({ _id: { $in: productIds } })
  .exec((err, product) => {
    if (err) return res.status(400).send({success: false, err})
    return res.status(200).json({success: true, product})
  })

})

//프론트로부터 post 요청 들어오면 플라스크 서버의 api 호출해서 결과를 py로부터 받아 다시 프론트에 넘겨주는 코드
router.get('/python', function(req, res){
  request('http://127.0.0.1:5000/flask', function (error, response, body){
    console.error('error:', error); // Print the error
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the data received
    res.send(body); //Display the response on the website
  });      
});
// when a user visits the /home endpoint, a get request is sent to http://127.0.0.1:5000/flask which is our endpoint for the flask server. We will receive the string “Flask Server” as a response back from the Flask.
  /*let body = req.body;
  const itemId = body.id

  // options에 요청의 종류(method)와 호출할 api의 url(uri), 그리고 넘겨줄 인자(qs)를 명시
  const Result = (callback)=>{
      const options = {
          method: 'POST',
          url: "http://127.0.0.1:5000/flask",
          qs: {
                itemId      //string으로
          }
      }
//아까 본 options을 담아 request 요청을 보낸 뒤 그 결과를 result에 담는다.
// 이 모든 과정을 Result라는 상수에 담는다
      request(options, function (err, res, body) {
          callback(undefined, {
              result:body
          });
      });
  }

  Result((err, {result}={})=>{
      if(err){
          console.log("error!!!!");
          res.send({
              message: "fail",
              status: "fail"
          });
      }
      //  플라스크로부터 넘어온 정보가 result에 담겼을 것이고
      let sendData = JSON.parse(result);
      res.send({
          message: "from flask",
          status: "success",
          data:{
              sendData
          }
      });
  })

})*/



 /* router.post('/python', (req,res) => {
     
      const {spawn} = require('child_process');
      const py = spawn('python', ['../app.py']);
      data = '쿠캣마켓 스노우콘치즈새우',
      dataSting ="",

      py.stdout.on('data', function(data){    //py로부터 data오면 callback
        dataString += data.toString();
      });
      py.stdout.on('end', function(){
        console.log(dataString); //py쪽으로부터 end 오면 callback
      });
      py.stdin.write(dataString); //paramter를 data로 하여 python 모듈 호출
      py.stdin.end();
    });
*/

    
    //product collection 에 있는 특정 정보 가져오기 
    router.post('/specificProducts3', (req,res)  => {

      let type = req.query.type
      let productIds = req.query.id
      
      productIds =['615adc6262babc3c854ab812', '615adc2262babc3c854ab720', '615adcb262babc3c854ab97e',
                   '615adbff62babc3c854ab679']

      if (type ==="array"){
        let ids = req.query.id.split(',')
      }

  
      Product.find({ '_id': {$in: productIds} })   //안에다 {}로 조건주기
        .exec((err, productInfo) => {
          if (err) return res.status(400).json({success: false, err})
          return res.status(200).json({success: true, productInfo})
        })

        
      })

      //product collection 에 있는 특정 정보 가져오기 
    router.post('/specificProducts2', (req,res)  => {

      let type = req.query.type
      let productIds = req.query.id
      
      productIds =['615adc6262babc3c854ab7e9', '615adc0462babc3c854ab68a', '615adc9962babc3c854ab911',
                    '615adc9962babc3c854ab902', '615adc4362babc3c854ab7a8', '615adc3d62babc3c854ab781',]

      if (type ==="array"){
        let ids = req.query.id.split(',')
      }

  
      Product.find({ '_id': {$in: productIds} })   //안에다 {}로 조건주기
        .exec((err, productInfo) => {
          if (err) return res.status(400).json({success: false, err})
          return res.status(200).json({success: true, productInfo})
        })

        
      })

        //product collection 에 있는 특정 정보 가져오기 
    router.post('/specificProducts1', (req,res)  => {

      let type = req.query.type
      let productIds = req.query.id
      
      productIds =['615adc7762babc3c854ab865', '615adc6262babc3c854ab7f2', '615adc8e62babc3c854ab8fa',
                    '615adc6262babc3c854ab80a','615adc1562babc3c854ab6ae', '615adc6962babc3c854ab83c',
                  '615adc5362babc3c854ab7d7', '615adbbb62babc3c854ab64f']

      if (type ==="array"){
        let ids = req.query.id.split(',')
      }

  
      Product.find({ '_id': {$in: productIds} })   //안에다 {}로 조건주기
        .exec((err, productInfo) => {
          if (err) return res.status(400).json({success: false, err})
          return res.status(200).json({success: true, productInfo})
        })

        
      });

      

    
    
  










module.exports = router