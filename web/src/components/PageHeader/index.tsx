import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoIcon from '../../assets/images/logo.svg';

import './style.css';

//definir os formatos da tipagem de um objeto
interface PageHeaderProps{
    //obrigatório(caso não fosse, basta somente add '?' antes do ':')
    title: string;
    description?: string;
}

//é um function component(formato de função) e 
//essas são suas propriedades
const PageHeader: React.FC<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoIcon} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;