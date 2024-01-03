import styled, { css } from 'styled-components';

interface NavProps {
  $isactive: boolean;
}

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  img {
    height: 50px;
    width: 50px;
  }
`;

export const LogoContainer = styled(ImgContainer)``;

export const MenuContainer = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  margin-right: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavContainer = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  right: 0;
  width: 220px;
  height: 100vh;
  transform: translateX(100%);

  ${(props) =>
    props.$isactive &&
    css`
      transform: translateX(0px);
      transition: transform 0.3s ease-in-out;
    `}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    transform: translateX(0);
    width: auto;
    height: auto;
    margin-right: 10px;
  }
`;

export const Overlay = styled.div<NavProps>`
  display: none;
  background-color: #00000050;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.$isactive &&
    css`
      display: block;
    `}
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 395px;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    height: auto;
  }
`;

export const ListItem = styled.li<NavProps>`
  display: flex;
  margin: 0;
  position: relative;

  a {
    ${(props) =>
      props.$isactive
        ? css`
            color: ${({ theme }) => theme.colors.light_blue};
          `
        : css`
            color: ${({ theme }) => theme.colors.black};
          `}

    text-decoration: none;
    padding: 10px;
    font-size: ${({ theme }) => theme.font_sizes.xl};
    transition: all 100ms;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    a:hover {
      color: ${({ theme }) => theme.colors.orange};
    }

    a::after {
      content: '';
      width: 0%;
      height: 1px;
      background: linear-gradient(to right, #f5f5f5, #f07030);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width 600ms cubic-bezier(0.99, 0, 0.1, 1);
    }

    a:hover::after {
      width: 100%;
    }
  }
`;
