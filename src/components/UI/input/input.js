import React from 'react';
import classes from "./input.module.sass";


function isInvalid({valid, touched, shouldValidate}) {
    return !valid  && shouldValidate && touched
}

const Input = props => {
    const inputTypes = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputTypes}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input id={htmlFor}
                   type={inputTypes}
                   value={props.value}
                   onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }


        </div>)
}

export default Input