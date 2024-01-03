import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font_sizes.medium};
    color: ${theme.colors.light_blue};
    width: 100%;
    min-width: 280px;
    height: 70px;
    background-color: ${theme.colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;
