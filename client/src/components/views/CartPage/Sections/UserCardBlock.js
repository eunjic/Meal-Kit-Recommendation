import React from 'react'
import "./UserCardBlock.css"

function UserCardBlock(props){

    //const renderCartImage = (images) => {
        //if (images.length > 0) {
            //let image = images[0]
            
            //return `http://localhost:5000/${image}`
            
        //}
    //}


    //이부분이 떠야하는데 안뜸

    const renderItems = () => (
        props.products && props.products.map(product => (
                <tr>
                <td>
                <img style={{ width: '70px' }} alt="product"
                        src={(product.image)} />
                    
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