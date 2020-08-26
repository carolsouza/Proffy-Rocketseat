import React, { TextareaHTMLAttributes } from 'react'; //todos os atributos que um Textarea pode receber

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => { //rest pega todas as propriedades que sobrarem e jogam em rest
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;