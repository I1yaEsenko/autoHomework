import React from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR404: '/*'
}

function Pages() {
    return (
        <div>
            



            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path='/' element={<div><PreJunior/></div>}/>


                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path='/pre-junior' element={<PreJunior/>}/>
                <Route path='/junior' element={<Junior/>}/>
                <Route path='/junior-plus' element={<JuniorPlus/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
                <Route path={'/*'} element={<div><Error404 /></div>}/>
            </Routes>
        </div>
    )
}

export default Pages
