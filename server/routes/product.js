const express = require('express');
const router = express.Router();
const { Product } = require('../models/product'); //Product에서 export한 것을 받아온다.



//route에서 디비, 서버 사이 관리

//=================================
//             product
//=================================

router.post('/', (req,res)  => {
  //받아온 정보들을 DB에 넣어준다.

  const product = new Product(req.body)

  product.save((err) => {
    if(err) return res.status(400).json({sucess:false, err})
    return res.status(200).json({success: true})
  
  })

  })


  router.post('/products', (req,res)  => {
    //produc collection 에 있는 모든 정보 가져오기
    Product.find()   //안에다 {}로 조건주기
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({success: false, err})
        return res.status(200).json({success: true, productInfo})
      })

    })
  

module.exports = router;







