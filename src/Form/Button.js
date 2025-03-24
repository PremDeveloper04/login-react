import React from 'react'

const Button = (props) => {
    return (
        <>
            <button type={props.type} name={props.name} className={props.class} onClick={props.onClick} disabled={props.disabled}>{props.naming}</button>

        </>
    )
}

export default Button
