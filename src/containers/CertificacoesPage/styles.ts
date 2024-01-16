import styled, { css } from 'styled-components';

export const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  place-content: center;
`;

export const CertificationBox = styled.div`
  padding: 5%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.orange};
    box-shadow: 0 0 8px 0 ${theme.colors.orange};
  `}
`;

export const TextBox = styled.div`
  width: 100%;
`;

export const P = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font_sizes.medium};
    color: ${theme.colors.white};
    margin: 5px 0;
  `}

  span {
    ${({ theme }) => css`
      color: ${theme.colors.orange};
      font-weight: 700;
      transition: color 100ms ease-in-out;
    `}
  }

  a {
    text-decoration: none;
    display: inline-block;
    margin-left: 5px;
  }

  a:hover span {
    ${({ theme }) => css`
      color: ${theme.colors.light_blue};
    `}
  }
`;
