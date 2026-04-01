"use client";

import React, { useState } from 'react';
import CustomInput from '../input/index';

interface HandleChange {
    event: React.ChangeEvent<HTMLInputElement>;
    fieldId: number;
}


export default function Register() {
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("exemplo@gmail.com");
    const [name, setName] = useState("Ex: Fábia");

    const handleChange = ({ event, fieldId }: HandleChange) => {
        const newValue = event.target.value;
        switch (fieldId) {
            case 1: setCpf(newValue); break;
            case 2: setEmail(newValue); break;
        }
    };

    return (
        <div>
            {}
            <CustomInput 
                label="CPF" 
                type="text" 
                value={cpf} 
                onChange={(e) => handleChange({ event: e, fieldId: 1 })}/>
            <CustomInput 
                label="E-mail" 
                type="email" 
                value={email} 
                onChange={(e) => handleChange({ event: e, fieldId: 2 })}/>
            <CustomInput 
                label="Nome" 
                type="text" 
                value={name} 
                onChange={(e) => handleChange({ event: e, fieldId: 3 })}/>
        </div>
    );
}