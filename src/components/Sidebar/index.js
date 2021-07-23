import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu,
     SidebarLink, SideBtnOrder, SidebarRoute} from './SidebarElements';

// import { Container } from './styles';

function Sidebar({isOpen, alter}) {
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
            <SidebarRoute to="/">Peça Agora</SidebarRoute>
        </SideBtnOrder>
    </SidebarContainer>
  );
}

export default Sidebar;