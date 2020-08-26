import React, { InputHTMLAttributes } from 'react'; //todos os atributos que um input pode receber

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => { //rest pega todas as propriedades que sobrarem e jogam em rest
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;