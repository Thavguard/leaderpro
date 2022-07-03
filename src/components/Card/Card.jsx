import React from 'react'
import Button from '../UI/Button/Button'
import './Card.scss'

const Card = ({ img = 'http://via.placeholder.com/28', title, text, btn1, btn2, onClick1 = () => console.log('onClick1 empty'), onClick2 = () => console.log('onClick2 empty') }) => {
    return (
        <div className='card'>
            <div className="card__title">
                <div className="card__title--img">
                    <img src={img} alt="" />
                </div>
                <div className="card__title--text">{title}</div>
            </div>
            <div className="card__text">{text}
            </div>
            <div className='card__btns'>
                <Button text={btn1} onClick={onClick1} />
                {btn2 ? <Button text={btn2} variant='tertiary' onClick={onClick2} /> : ''}
            </div>
            <div className="card__info">механика<span>▼</span></div>
        </div>
    )
}

export default Card