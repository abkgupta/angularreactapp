import * as React from 'react'
import { useState } from 'react'

const Myreactc = ()=>{
    const [text,setText] = useState('First text')

    const onClick = ()=>{
        setText('Button Clicked');
    }
    return (
        <div>
            {text}
            <br />
            <button onClick={onClick}>
             Change text
            </button>
        </div>
    )
}
export default Myreactc;    