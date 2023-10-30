import s from './Loader.module.css'
import load from './img/Loading.svg'

export const Loader = () => {
   return (
     <>
        <div><img className={s.loader} src={load} alt={'loading'}/></div>
     </>

)
}


