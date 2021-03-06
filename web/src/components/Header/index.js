import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logoImg from '../../assets/images/logo.svg';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to='/'>
                <img src={logoImg} alt='Rocketshoes' />
            </Link>

            <Cart to='/cart'>
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"></MdShoppingBasket>
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);