import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

export const Background = styled.div`
    width: 1000px;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBundle = styled.div`
    width:800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 10px 0 0 10px;
    background: #000;
`;

export const ModalContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }
    
    input {
        border: 2px solid black;
        width: 200px;
        margin-bottom: 1rem;
        padding: 10px 24px;
    }

    button {
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border: none;
        background: #e31837;
        color: #fff;
        transition: 0.2s ease-out;

        &:hover {
            background: #ffc500;
            transition: 0.2s ease-out;
            cursor: pointer;
            color: #000;
        }
    }
`;

export const CloseModalButton = styled(FaTimes)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;