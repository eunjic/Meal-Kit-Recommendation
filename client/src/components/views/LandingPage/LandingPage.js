import React, {useEffect} from 'react'
import { FaCode } from "react-icons/fa";

//백엔드에 요청
import axios from "axios";
export default LandingPage


function LandingPage() {
    
    useEffect(() => {

        axios.post('/api/product/products')
            .then(response => {
                if (response.data.success){
                    console.log(response.data)
                } else {
                    alert(" 상품을 가져오는데 실패 했습니다. ")
                }

            }) 

   

    }, [])
    
    
    
    return (
        <div>
            Landing Page
        </div>
    )
}



