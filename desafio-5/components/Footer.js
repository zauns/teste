'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 252px;
    justify-content: center;
    align-items: center;
    gap: 64px;
    background-image: url('/bg navbar.webp');
    background-size: cover;
`;

const Logo = styled.img`
    width: 286px;
    height: 116px;
`;

const Divisor = styled.div`
    height:180px;
    width:2px;
    background-color: white;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`;

const Content = styled.div`
    height: 180px;
    color: white;
    justify-content: space-evenly;

    h3 {
        font-size: 28px;
        font-weight: bold;
        margin: 0 0 28px 0;
    }

    ul {
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 8px;
        padding: 0;
        margin: 0;
    }

    li {
        font-size: 16px;
        font-weight: medium;
    }

    p {
        font-size: 16px;
        font-weight: 600;
        margin: -8px 0 8px 0;
    }

    span {
        font-size: 20px;
        margin: 0;
        width: fit-content;
        white-space: nowrap;
        align-self:center;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin: 0 0 16px 0;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src='/logo branca.png'/>
            <ContentContainer>
                <Content>
                    <h3>TOPVENDAS</h3>
                    <ul>
                        <li>Políticas de Privacidade</li>
                        <li>Sobre Nós</li>
                        <li>Carrinho</li>
                        <li>Produtos</li>
                    </ul>
                </Content>
                <Divisor/>
                <Content>
                    <h3>Atendimento</h3>
                    <p>Fale Conosco</p>
                    <ul>
                        <li>Local 1</li>
                        <li>Local 2</li>
                        <li>Local 3</li>
                        <li>Local 4</li>
                    </ul>
                </Content>
                <Divisor/>
                <Content>
                    <h3>Redes Sociais</h3>
                    <div>
                        <img src='/instagram branco.svg'/>
                        <span>Instagram</span>
                    </div>
                    <div>
                        <img src='/facebook branco.svg'/>
                        <span>facebook</span>
                    </div>
                </Content>
            </ContentContainer>
        </FooterContainer>
    )
}

export default Footer;