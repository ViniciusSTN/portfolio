import styled, { css } from 'styled-components';

type ContainerProps = {
  $margintop: string;
  $display: string;
  $aligncenter: boolean;
};

export const Container = styled.main<ContainerProps>`
  min-height: calc(100vh - 140px);
  max-width: ${({ theme }) => theme.breakpoints.xl};
  min-width: 280px;
  margin-inline: auto;

  ${(props) => css`
    margin-top: ${props.$margintop};
    display: ${props.$display};
  `}

  ${(props) =>
    props.$aligncenter &&
    css`
      align-items: center;
    `}
`;
