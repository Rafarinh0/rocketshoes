import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logoImg from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <Link to='/'>
                <img src={logoImg} alt='Rocketshoes' />
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
            </Cart>
        </Container>
    );
}