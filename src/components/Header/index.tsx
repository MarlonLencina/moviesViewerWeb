import React from 'react';

import LogoMoviesViewer from '../../assets/logoMoviesViewer.svg'
import LogoDevMarlon from '../../assets/logoDevMarlon.svg'

import { By, Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <a href="/">
            <img src={LogoMoviesViewer} alt="Logomarca Movies Viewer" />
            </a>
            <By target={'_blank'} href={'https://github.com/marlonlencina'}>
                <span>Developed by</span>
                <img src={LogoDevMarlon} alt="Logomarca Dev Marlon" />
            </By>
        </Container>
    )
}

export default Header;