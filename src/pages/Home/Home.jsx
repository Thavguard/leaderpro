import React from 'react'
import Title from '../../components/Title/Title'
import './Home.scss'
import iconSVG from '../../assets/images/icon_manager.svg'
import personSVG from '../../assets/images/person_search.svg'
import pottfelSVG from '../../assets/images/portfel.svg'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className="home-page">
            <Title
                img={iconSVG}
                title='Маркетплейс кадровых услуг'
                text='комплекс сервисов по подбору, оценке и проверке кандидатов. Точечно под запрос вашего бизнеса'
                btn={'подробнее'} 
                onClickBtn={() => navigate('/person')}
                />
            <div className='col'>
                <Card
                    title={'подбор сотрудников'}
                    o
                    text='умный подбор персонала, основанный на прогрессивных методиках поиска'
                    img={personSVG}
                    btn1={'отправить заявку'} />
                <Card
                    img={pottfelSVG}
                    title='доска вакансий'
                    text='сервис для публикации вакансий и рекомендаций сотрудников'
                    btn1={'перейти на доску'}
                    btn2='мои вакансии' />
                <Card
                    img={pottfelSVG}
                    title='доска вакансий'
                    text='сервис для публикации вакансий и рекомендаций сотрудников'
                    btn1={'перейти на доску'}
                    btn2='мои вакансии' />
                <Card
                    img={pottfelSVG}
                    title='доска вакансий'
                    text='сервис для публикации вакансий и рекомендаций сотрудников'
                    btn1={'перейти на доску'}
                    btn2='мои вакансии' />

            </div>
        </div>
    )
}

export default Home