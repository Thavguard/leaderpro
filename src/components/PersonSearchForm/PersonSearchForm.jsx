import { useFormik } from 'formik'
import React from 'react'
import Input from '../UI/Input/Input'
import Radio from '../UI/Radio/Radio'
import './PersonSearchForm.scss'

const PersonSearchForm = () => {

    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            fullТame: '',
            email: '',
            phone: '',
            city: '',
            whereAreWeLookingForAPerson: '',
            project: '',
            shortInfo: '',
            yourStatus: '',
            businessBranch: '',
            businessStage: '',
            numberOfEmployees: '',
            specialistLevel: '',
            professionalSphere: '',
            professionalSphere: '',
            jobTitle: '',
            numberOfRequiredEmployees: '',
            functional: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    const personalDataInputs = [
        { id: 'fullТame', label: 'ФИО', name: 'fullТame', onChange: handleChange, value: values.fullТame },
        { id: 'email', label: 'почта', name: 'email', onChange: handleChange, value: values.email, type: 'email' },
        { id: 'phone', label: 'телефон', name: 'phone', onChange: handleChange, value: values.phone, type: 'tel' },
        { id: 'city', label: 'город', name: 'city', onChange: handleChange, value: values.city },
    ]

    const whereAreWeLookingForAPersonRadios = [
        { id: 'whereAreWeLookingForAPersonR1', label: 'Новый бизнес-проект ', name: 'whereAreWeLookingForAPerson', onChange: handleChange, value: 'Новый бизнес-проект' },
        { id: 'whereAreWeLookingForAPersonR2', label: 'текущий бизнес-проект', name: 'whereAreWeLookingForAPerson', onChange: handleChange, value: 'текущий бизнес-проект' },
    ]

    return (
        <form className='person-search-form' onSubmit={handleSubmit}>
            <div className="person-search-form__section">
                <div className="person-search-form__subtitle--mb1">Персональные данные</div>
                {personalDataInputs.map(e => <Input id={e.id} label={e.label} name={e.name} onChange={e.onChange} value={e.value} key={e.id} type={e.type || 'text'} />)}
            </div>
            <div className="person-search-form__section">
                <div className="person-search-form__title">О вашем бизнесе</div>
                <div className="person-search-form__subtitle--mb2">Куда ищем человека?</div>
                {whereAreWeLookingForAPersonRadios.map(e => <Radio id={e.id} label={e.label} name={e.name} onChange={e.onChange} value={e.value} key={e.id} />)}
            </div>
        </form>
    )
}

export default PersonSearchForm