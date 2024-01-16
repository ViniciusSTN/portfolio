import styled, { css } from 'styled-components';

interface ItemProps {
  $color: string;
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    color: ${theme.colors.white};
    grid-template-columns: minmax(85px, 10%) 1fr;
    max-width: 800px;
    margin-inline: auto;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: minmax(85px, 10%) 1fr 160px;
    }
  `}
`;

export const TextBox = styled.div`
  height: 150px;
  padding: 5px 0;
`;

export const Text = styled.p<ItemProps>`
  ${({ $color, theme }) => css`
    border: 2px solid ${$color};
    border-radius: 15px;
    width: 95%;
    height: 95%;
    text-align: center;
    overflow: hidden;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
    padding: 3px;
    display: flex;
    align-items: center;
    font-size: ${theme.font_sizes.very_small};

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.font_sizes.medium};
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font_sizes.large};
    }
  `}
`;

export const AgeBox = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

export const Line = styled.div<ItemProps>`
  ${({ $color }) => css`
    background-color: ${$color};
    height: 50%;
    width: 8px;
    position: absolute;
    right: 20px;
  `}
`;

export const Line2 = styled.div<ItemProps>`
  ${({ $color }) => css`
    background-color: ${$color};
    height: 50%;
    width: 8px;
    margin: auto;
    position: absolute;
    right: 20px;
    bottom: 0;
  `}
`;

export const Item = styled.div<ItemProps>`
  ${({ theme, $color }) => css`
    border: 3px solid ${$color};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto;
    background-color: ${theme.colors.primary};
    font-size: ${theme.font_sizes.large};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    z-index: 1;
  `}

  &::after {
    ${({ $color }) => css`
      content: '';
      position: absolute;
      right: -12px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid ${$color};
      z-index: 2;
    `}
  }
`;

export const Age = styled.span<ItemProps>`
  ${({ theme, $color }) => css`
    /* padding: 2px 20px 2px 7px; */
    height: 30px;
    border-radius: 10px;
    background-color: ${$color};
    font-weight: bold;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    font-size: ${theme.font_sizes.medium};

    @media screen and (min-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.font_sizes.large};
    }

    @media screen and (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.font_sizes.xl};
    }
  `}
`;

export const ImageContainer = styled.div`
  height: 150px;
  padding: 5px 0;
  display: flex;
  justify-content: end;
  align-items: center;
  overflow: hidden;
`;
