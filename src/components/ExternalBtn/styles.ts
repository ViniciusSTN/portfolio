import styled, { css } from 'styled-components';

const fontBold = css`
  font-size: ${({ theme }) => theme.font_sizes.xxl};
  font-weight: 700;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxl};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.font_sizes.xxxxl};
  }
`;

export const LinkBtn = styled.a`
  ${fontBold}
  text-decoration: none;
  text-align: center;
  display: block;
  width: 185px;
  color: ${({ theme }) => theme.colors.light_blue};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.light_blue};
  padding: 8px;
  margin: 20px 0;
  border-radius: 15px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.dark};
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 245px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 370px;
  }
`;
