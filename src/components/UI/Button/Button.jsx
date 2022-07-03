import React from 'react'
import './Button.scss'

const Button = ({ text, triangle = false, variant = 'primary', onClick }) => {
    return (
        <div onClick={onClick} className={`Button ${variant} `}>
            <button>{text}{triangle ? <span>▼</span> : ''}</button>
        </div>
    )
}

export default Button
