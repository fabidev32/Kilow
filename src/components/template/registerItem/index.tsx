"use client";


import React, { useState } from 'react';
import CustomInput from '../../ui/input/index';
import ListSelect from '../../ui/listSelect/index';
import Style from './page.module.css';
import Image from 'next/image';
import image from './../../assets/images/image-register-item.png';


interface HandleChange {
    event: React.ChangeEvent<HTMLInputElement>;
    fieldId: number;
}

export default function RegisterItem() {
    const [name, setName] = useState("Ex: Tv da Sala");
    const [dailyConsumption, setDailyConsumption] = useState("Ex: 3 horas");
    const [weeklyConsumption, setWeeklyConsumption] = useState("Ex: 2 dias por semana");
    const [watts, setWatts] = useState("Ex: 100W");

    const options = [
        { label: "Segunda-feira", value: "Segunda-feira" },
        { label: "Terça-feira", value: "Terça-feira" },
        { label: "Quarta-feira", value: "Quarta-feira" },
        { label: "Quinta-feira", value: "Quinta-feira" },
        { label: "Sexta-feira", value: "Sexta-feira" },
        { label: "Sábado", value: "Sábado" },
        { label: "Domingo", value: "Domingo" }
    ];

    const handleChange = ({ event, fieldId }: HandleChange) => {
        const newValue = event.target.value;
        switch (fieldId) {
            case 1: setName(newValue); break;
            case 2: setDailyConsumption(newValue); break;
            case 3: setWatts(newValue); break;
        }
    };

    return (

        <div className = {Style.container}>

         <div className={Style.containerTitle}>
            <p className={Style.title}> Cadastre seu dispositivo! </p>
            <p className={Style.subTitle}> Preencha todos os campos solicitados e aguarde para uma futura análise</p>
         </div>
        
            <div className={Style.containerRegister}>
                <div className={Style.containerSectionOne}>
                    <CustomInput
                        label="Nome do aparelho *"
                        type="text"
                        value={name}
                        onChange={(e) => handleChange({ event: e, fieldId: 1 })} />
                    <CustomInput
                        label="Consumo diário *"
                        type="text"
                        value={dailyConsumption}
                        onChange={(e) => handleChange({ event: e, fieldId: 2 })} />
                    <ListSelect data={options} label="Consumo semanal (dias) *" />
                </div>
                <div className={Style.containerSectionTwo}>
                    <CustomInput
                        label="Potência (W)"
                        type="text"
                        value={watts}
                        onChange={(e) => handleChange({ event: e, fieldId: 3 })} />
                    <div className={Style.containerImage}>
                        <p className={Style.text}>Novidades em breve!</p>
                        <Image
                            src={image}
                            alt="Novidades em breve!"
                            className={Style.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}