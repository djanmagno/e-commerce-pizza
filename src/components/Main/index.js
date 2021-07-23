import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements';

// import { Container } from './styles';

function Main() {
    const [isOpen, setIsOpen] = useState(false);

    const alter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MainContainer>
            <Navbar alter={alter}/>
            <Sidebar isOpen={isOpen} alter={alter}/>
            <MainContent>
                <MainItems>
                    <MainH1>Melhor Pizza Ever</MainH1>
                    <MainP>Pronta em 60 segundos</MainP>
                    <MainBtn>Faça seu Pedido</MainBtn>
                </MainItems>
            </MainContent>
        </MainContainer>
    );
}

export default Main;