import React from 'react'
import "./UserCardBlock.css"

function UserCardBlock(props){




    const renderItems = () => (
        props.products && props.products.map(product => (
                
            <tr>
                <td>
                {<a href ={product.url}>
                <img style = {{ width: '100px'}} alt="product" src = {product.image}/></a> }
                
                </td>
                <td>
                 {product.item}
                    
                </td>
                <td> 
                    <button> 
                        Remove 
                    </button>
                </td>
            </tr>
        )) 
    )


    return (
        
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Remove From Cart</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock