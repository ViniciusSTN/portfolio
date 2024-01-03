import styled, { css } from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: 80%;
  margin-bottom: 30px;

  ${({ theme }) => css`
    gap: 20px;
    margin-top: 50px;

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      gap: 30px;
      margin-top: 60px;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      gap: 40px;
      margin-top: 70px;
    }
  `}
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: 15px;

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      gap: 30px;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      gap: 40px;
    }
  `}
`;

export const P = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font_sizes.medium};
    text-align: center;

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.font_sizes.xl};
      text-align: justify;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font_sizes.xxl};
    }
  `}
`;

export const TimelineContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
