'use client';

import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';

const NavbarContainer = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: #fafafa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const Logo = styled.img `
    width: 130px;
    height: 52px;
    cursor: pointer;
`;


const InputContainer = styled.div`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    transition: border-color 0.3s ease;
    border: solid 1px white;
    padding: 12px;
    border-radius: 20px;

    &:focus-within {
        border: solid 2px #000;
    }
`;

const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const SearchInput = styled.input `
    border: none;
    outline: none;
    font-size: 16px;
`;

const NavMenu = styled.ul`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 12px;
`;

const MenuItem = styled.li`
    a {
        color: #000;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover{
            color: #56994F;
        }
    }
`;

const Navbar = () => {
    return (
    <NavbarContainer>
        <Link href={"/"}><Logo src="/Frame 4.png"/></Link>
        <InputContainer> <SearchIcon src="/search.svg"/> <SearchInput type="text" placeholder='Buscar'/> </InputContainer>
        <NavMenu>
            <MenuItem><Link href={"/"}>Sobre nós</Link></MenuItem>
            <MenuItem><Link href={"/"}>Produtos</Link></MenuItem>
            <MenuItem><Link href={"/"}>Fale Conosco</Link></MenuItem>
            <MenuItem><Link href={"/"}>Carrinho</Link></MenuItem>
            <MenuItem><Link href={"/"}>Cadastre-se</Link></MenuItem>
        </NavMenu>
    </NavbarContainer>
    
    )
}


export default Navbar;


