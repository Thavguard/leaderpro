import React from 'react'
import './Radio.scss'

const Radio = ({ name, id, onChange, value, label }) => {
    return (
        <div className="Radio">
            <label htmlFor={id}>
                <input type={'radio'} name={name} id={id} value={value} onChange={onChange} />
                {label}
            </label>
        </div>
    )
}

export default Radio