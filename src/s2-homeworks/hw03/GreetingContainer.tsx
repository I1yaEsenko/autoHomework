import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: Dispatch<SetStateAction<string>>, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() === '') {
        setError('Ошибка! Введите имя1' +
            '!')
    } else {
        addUserCallback(name.trim())
        setName('')

    }

}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!2')

    }// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void) => {
    // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser('')
    }
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    console.log(users)
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('Ошибка! Введите имя!3')
        setError('')

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length - 1].name : false



    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
