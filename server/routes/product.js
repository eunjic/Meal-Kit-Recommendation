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

    


    
  










module.exports = router;