import React, { SelectHTMLAttributes } from 'react'; //todos os atributos que um Select pode receber

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => { //rest pega todas as propriedades que sobrarem e jogam em rest
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>

                {options.map(option => {
                    return <option key={option.value}value={option.value}>{option.label}</option>
                })} 
            </select>
        </div>
    );
}

export default Select;