import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

export default function Input({ id, name, type, label, watchPassword, ...rest }: any) {

    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <div style={{marginBottom: 40}}>
            <label className="paragraph-3-semi-bold" htmlFor={id}>{label}</label>

            <input id={id} className="paragraph-3-regular" defaultValue={defaultValue} ref={inputRef} {...rest}  />

            {error && <span className="error-message">{error}</span>}
        </div>
    );
}