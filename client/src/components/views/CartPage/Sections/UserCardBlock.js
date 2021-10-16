import React from 'react'
import "./UserCardBlock.css"

function UserCardBlock(props){


    
    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr>
                <td>
                <img style={{ width: '70px' }} alt="product"
                        src={product.images} />
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
                        <th>Remove from Cart</th>
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