import React, {useState} from 'react';
import Modal from '../Modal/modal';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu,
     SidebarLink, SideBtnOrder, SidebarRoute} from './SidebarElements';

// import { Container } from './styles';

function Sidebar({isOpen, alter}) {

  //Login
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(prev => !prev);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={alter}>
        <Icon onClick={alter}>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Pizzas</SidebarLink>
            <SidebarLink to="/">Sobremesas</SidebarLink>
            <SidebarLink to="/">Menu Completo</SidebarLink>
        </SidebarMenu>
        <SideBtnOrder>
            <SidebarRoute to="/" onClick={openModal}>Peça Agora</SidebarRoute>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </SideBtnOrder>
    </SidebarContainer>
  );
}

export default Sidebar;