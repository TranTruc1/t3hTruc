import React from 'react'

const TextInput = ({ name, value, label, placeholder, type, onChange, error }) => {
    
    return (
        <div className='form-group'>
            <label htmlFor='name'>{label}</label>
            <input
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            {
                error && <div className='invalid-feedback'>{error}</div>
            }
        </div>
    )
}

export default TextInput;