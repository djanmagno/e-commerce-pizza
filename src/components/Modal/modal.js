import React, {useRef, useEffect, useCallback} from 'react';
import Image from '../../images/log.jpg';
import { useSpring, animated } from 'react-spring';
import {
    Background,
    ModalBundle,
    ModalImg,
    ModalContent,
    CloseModalButton
} from './ModalElements';

// import { Container } from './styles';

function Modal({ showModal, setShowModal}) {
    const modalRef = useRef();

    const animacao = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateX(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        };
    };

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        };
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);

    // Saving data at LocalStorage
    const handleSubmit = (e) => {

        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let password = document.getElementById("password").value;

        if (name && email && address && password) {

            const data = {
                name,
                email,
                address,
                password,
            };

            let dataConverted = JSON.stringify(data);

            localStorage.setItem("dados-cadastro", dataConverted);

            setShowModal(false);

            alert("Cadastro efetuado com sucesso!");
        }; 
        
        alert("Cadastro não pode ser efetuado por falta de dados!");
    };

    return (
        <>
        {showModal ? (
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animacao}>
                    <ModalBundle showModal={showModal}>
                        <ModalImg src={Image} alt='letreiro'/>
                        <ModalContent>
                            <h1>Você está Preparado?</h1>
                            <p>Faça seu Cadastro</p>
                            <input id="name" type="text" aria-label="Nome Completo" placeholder="Nome Completo"></input>
                            <input id="email" type="text" aria-label="Email" placeholder="Entre seu E-mail"></input>
                            <input id="address" type="text" aria-label="Endereço" placeholder="Endereço"></input>
                            <input id="password" type="password" aria-label="Senha" placeholder="Entre seu Senha"></input>     
                            <button type="submit" onClick={handleSubmit}>Entre Agora</button>
                        </ModalContent>
                        <CloseModalButton arial-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalBundle>
                </animated.div>
            </Background>
        ) : null}
        </>
    );
}

export default Modal;