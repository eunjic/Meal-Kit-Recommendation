import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function addToCart(id){

    let body = {
        productId: id

    }
    const request = axios.post(`${USER_SERVER}/addToCart`, body)
    .then(response => response.data);

    return {
        type: ADD_TO_CART,
        payload: request
    }
}

export function getCartItems(cartItems, userCart){
  

    const request = axios.get(`/api/product/cartProducts?id=${cartItems}&type=array`) //여러개를 가져옴 //
    .then(response => response.data.product);
    //user_reducer의 cartdetail action.payload로 들어감
    
    //cartitem들에 해당하는 정보들을 
    //product collection에서 가져온후에
    //수량 정보를 넣어준다 부분 안함

    return {
        type: GET_CART_ITEMS,
        payload: request
    }
}
