import React from 'react'
import './PersonSearch.scss'
import Title from '../../components/Title/Title'
import SearchPersonSVG from '../../assets/images/person_search.svg'
import PersonSearchForm from '../../components/PersonSearchForm/PersonSearchForm'

const PersonSearch = () => {
    return (
        <div className='search-person'>
            <Title img={SearchPersonSVG} title='подбор сотрудников' text={'умный подбор персонала, основанный на прогрессивных методиках поиска'} />
            <div className='col'><PersonSearchForm /></div>
        </div>
    )
}

export default PersonSearch