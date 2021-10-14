import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> 오늘은 어떤 밀키트를 추천해드릴까요?  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
