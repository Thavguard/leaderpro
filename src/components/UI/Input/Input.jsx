import React from 'react'
import './Input.scss'

const Input = ({ name, id, onChange, value, type = 'text', label }) => {
    return (
        <div className="Input">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default Input