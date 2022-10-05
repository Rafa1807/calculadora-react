import styled from 'styled-components';

import calculos from './calculos.jpeg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${calculos}) ;
    background-repeat: repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 30%;
    height: 435px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

