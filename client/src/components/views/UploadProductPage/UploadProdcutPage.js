import React, {useState} from 'react'
import {Typography, Button, Form, Input} from 'antd';
import Axios from 'axios';


const {TextArea} = Input;
function UploadProductPage() {


    const [Item, setItem] = useState("")



    const itemChangeHandler = (event) => {
        setItem(event.currentTarget.value)
    }

    const submitHandler = (event) => {
        event.preventDefalut();

    }


    //서버에 채운 값을 request로 보낸다.
    const body = {
        item: Item 
    }
//백엔드로 보낸다.
    Axios.post("/api/product")
        .then(response => {
            if(response.data.sucess){
                alert('상품 업로드에 성공 했습니다.')
            }
            else{
                alert('상품 업로드에 실패 했습니다.')
            }
        })

    return (
        <div style = {{maxWidth: '700px', margin: '2rem auto'}}>
            <div style = {{ textAlign: 'center', marginBottom: '2rem'}}>
                <h2>여행 상품 업로드</h2>
            </div>




{/*unchange 가 일어날때마다 handler 이용*/ }


            <Form onSubmit ={submitHandler}>
                {/*DropZone*/ }
                <br />
                <br />
                <label>item</label>
                <Input onChange={itemChangeHandler} value = {Item}/>   
                <br />
                <br />
      
                <Button type ="submit">
                    확인
                </Button>



            </Form>
        </div>
    )
}

export default UploadProductPage
