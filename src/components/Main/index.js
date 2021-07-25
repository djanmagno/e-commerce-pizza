import React, {useState} from 'react';
import Modal from '../Modal/modal';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {MainContainer, MainContent, MainItems, MainH1, MainP, MainBtn} from './MainElements';

// import { Container } from './styles';

function Main() {
    //side bar
    const [isOpen, setIsOpen] = useState(false);

    const alter = () => {
        setIsOpen(!isOpen);
    };

    //Login
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <MainContainer>
            <Navbar alter={alter}/>
            <Sidebar isOpen={isOpen} alter={alter}/>
            <MainContent>
                <MainItems>
                    <MainH1>Melhor Pizza Ever</MainH1>
                    <MainP>Pronta em 60 segundos</MainP>
                    <MainBtn onClick={openModal}>Faça seu Login</MainBtn>
                    <Modal showModal={showModal} setShowModal={setShowModal}/>
                </MainItems>
            </MainContent>
        </MainContainer>
    );
}

export default Main;