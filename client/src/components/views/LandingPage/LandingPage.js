import React, {useEffect} from 'react'
import { FaCode, FaSortAmountDown } from "react-icons/fa";

//백엔드에 요청
import axios from "axios";
import {Icon, Col, Card, Row} from 'antd';


function LandingPage() {


    
    useEffect(() => {

        axios.post('/api/product/products', )
            .then(response => {
                if (response.data.success){
                    console.log(response.data)
                } else {
                    alert(" 상품을 가져오는데 실패 했습니다. ")
                }

            }) 

   

    }, [])
    
    
    
    return (
        <div style ={{width: '75%', margin: '3rem auto'}} >

            <div style = {{textAlign: 'center'}}>
                <h2>추천 밀키트</h2>
            </div>
            {/* Filter */}


            {/* search */}
            


            <div style = {{ justifyContent : 'center'}}>
                <button>더보기</button>
            </div>
        </div>
    )
}


export default LandingPage





