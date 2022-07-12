import './styles.css'

export function Skeleton() {
    return(
        <div className="card">
            <div className='skeleton__img' />
            <span className='skeleton__span'></span>
            <span className='skeleton__span'></span>
            <span className='skeleton__span'></span>
            <span className='skeleton__span'></span>
        </div>
    )
}