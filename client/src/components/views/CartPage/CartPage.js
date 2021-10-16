import React from 'react'
import UserCardBlock from './Sections/UserCardBlock'
function CartPage() {
    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Cart</h1>

            <div>
                <UserCardBlock />
            </div>
            
        </div>
    )
}

export default CartPage
