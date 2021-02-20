import React from 'react';
import styled from 'styled-components';
 import { RiHome7Line } from "react-icons/ri";

const Background = styled.div`
    background-color: #34374F;
    height: 100%;
    width: 7rem;
    position: absolute;
  `;

const Row = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `;

const SelectedTab = styled.div`
  @keyframes onHoverAnimation {
    from {
      border-radius: 30px;
      color: white;
      opacity: 0.7;
    }
    to {
      opacity: 1;
      border-radius: 17px;
    }
  }
  
  margin-bottom: 16px;
  margin-top: 16px;
  border-radius: 17px;
  height: 75px;
  width: 75px;
  position: relative;
  opacity: 0.7;
  &:hover {
    animation: onHoverAnimation 100ms ease-in-out;
    background-color: #313349;
    opacity: 1;
  }
  `
const Space = styled.div`
   height: 30px;
  `

const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  `

/**
 * This component is the side navigation bar.
 * @constructor
 */
export const NavBar = () => {
    return (
        <Background>
            <Row>
                <Space/>
                <SelectedTab>
                    <Center>
                        <RiHome7Line size="30px" color="white"/>
                    </Center>
                </SelectedTab>
                <SelectedTab/>
                <SelectedTab/>
            </Row>
        </Background>
    );
};