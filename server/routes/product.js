const express = require('express');
const router = express.Router();
const { Product } = require('../models/product'); //Product에서 export한 것을 받아온다.



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
    
    //product collection 에 있는 특정 정보 가져오기 (유진 미완성)
    router.post('/products', (req,res)  => {
      Product.find({ _id: '615adbb562babc3c854ab643' })   //안에다 {}로 조건주기
        .exec((err, chooseProduct) => {
          if (err) return res.status(400).json({success: false, err})
          return res.status(200).json({success: true, chooseProduct})
        })
  
      })

    
  










module.exports = router;