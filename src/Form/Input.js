import React from 'react'

const Input = (props) => {
    return (
        <>
            <label className="form-label">{props.label} <span className='text-danger'>*</span></label>
            <input type={props.type} className={props.class} placeholder={props.placeholder} name={props.name} onChange={props.onChange} {...props.register} value={props.value}/>
            <small><i><p className='text-danger'>{props.error}</p></i></small>
        </>
    )
}

export default Input
