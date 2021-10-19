import React, {useEffect, useState} from 'react'
import { FaCode, FaSortAmountDown } from "react-icons/fa";

//백엔드에 요청
import axios from "axios";
import {Icon, Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Button} from 'antd';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../_actions/user_actions';

///파이썬 코드 불러오기//
//const { PythonShell } = require("python-shell");
//let options = {
//    scriptPath: "path/to/my/scripts",
//    args: ["value1", "value2", "value3"]
//};
//PythonShell.run("my_script.py", options, function(err, data) {
//    if (err) throw err;
//    console.log(data);
//});
//////////////

function LandingPage() {

    const dispatch = useDispatch();
    
    
   
    const [Products, setProducts] = useState([])  // 여러가지 들어가니까 array로
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(16)
    

    useEffect(() => {
//lendering //limit과 skip 이용해서 8개만 가져오기

        let body = {
            skip : Skip,
            limit : Limit
        }
        getProducts(body)
   

    }, [])

    const getProducts = (body)=> {
        axios.post('/api/product/products', body)   //product 라우트에 보내기
            .then(response => {
                if (response.data.success){
                    console.log(response.data)
                    if(body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    }
                    else {
                        setProducts(response.data.productInfo)

                    }

                } else {
                    alert(" 상품을 가져오는데 실패 했습니다. ")
                }
            })
    }

    const loadMoreHandler = () => {

        let skip = Skip + Limit
        let body = {
            skip : Skip,
            limit : Limit,
            loadMore: true
        }

        getProducts(body)

        setSkip(skip)


    }

    
    
 


    const renderCards = Products.map((product, index) => {
        
        const clickHandler = () => {
            //필요한 정보를 cart 필드에다가 넣어 준다.
            dispatch(addToCart(product._id))
            console.log('cart', product)
       }

        
        return <Col lg = {6} md={8} xs ={24} key = {index}> 
        


        <Card 
            
            cover = {<a href ={product.url}><img style = {{ width: '100%', maxheight: '200px' }}src = {product.image}/></a> }
        >
       
            <Meta
            
            />

            <div style = {{textAlign: 'center'}}>
                {product.item} 
                < br/>
                <br/>
                {product.money}원
                
            </div>
            <br/>



            <div style ={{ display: 'flex', justifyContent: 'center'}}>
                <Button size = "small" shape="round" type="danger" onClick={clickHandler}>   
                    찜하기<Icon type = "heart" />
                </Button>
                
    

            </div>
        </Card>
    </Col>
    
    })
// 오류나는 부분: href! " "안에 인식이 안된다. href = "/cart"
    
    
    
    return (
        <div style ={{width: '75%', margin: '3rem auto'}} >

            <div style = {{textAlign: 'center'}}>
                <h2>추천 밀키트 <Icon type = "coffee" /></h2>
            </div>
            {/* Filter */}


            {/* search */}

            {/*cards */}

            <br />

            <Row gutter = {[16, 16]}>
                {renderCards}

            </Row>



            <br />
            <br />

           
            <div style = {{ display : 'flex', justifyContent : 'center'}}>
                <button onClick={loadMoreHandler}>더보기</button>
            </div>
            

        </div>
    )
}


export default LandingPage





