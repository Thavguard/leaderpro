import React from 'react'
import Button from '../UI/Button/Button'
import './Title.scss'

const Title = ({ img = 'http://via.placeholder.com/64', title, text, btn, onClickBtn }) => {
    return (
        <div className='title'>
            <div className="title__icon">
                <img src={img} alt="" />
            </div>
            <div className='title__info'>
                <div className="title__title">{title}</div>
                <div className="title__text">{text}</div>
                {!!btn ? <Button text={btn} triangle variant='secondary' onClick={onClickBtn} /> : null}
            </div>
        </div>
    )
}

export default Title