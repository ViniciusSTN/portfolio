import styled, { css } from 'styled-components';

interface TitleProps {
  $color: string;
  $size: string;
  $weight: string;
  $margin: boolean;
}

const TitleClass = css<TitleProps>`
  ${({ $color, $weight, theme }) => css`
    color: ${theme.colors[$color]};
    weight: ${$weight};
  `}

  ${({ $size, $margin, theme }) => css`
    ${$size && `size: ${theme.font_sizes[$size]}`};
    ${$margin && `margin-inline: auto;`};
    ${$margin && `text-align: center;`};
  `}
`;

export const H1 = styled.h1<TitleProps>`
  ${TitleClass}

  ${({ $size, theme }) =>
    !$size &&
    css`
      font-size: ${theme.font_sizes.xxl};

      @media screen and (min-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.font_sizes.xxxl};
      }

      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: ${theme.font_sizes.xxxxl};
      }
    `}
`;

export const H2 = styled.h2<TitleProps>`
  ${TitleClass}

  ${({ $size, theme }) =>
    !$size &&
    css`
      font-size: ${theme.font_sizes.xl};

      @media screen and (min-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.font_sizes.xxl};
      }

      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: ${theme.font_sizes.xxxl};
      }
    `}
`;

export const H3 = styled.h3<TitleProps>`
  ${TitleClass}

  ${({ $size, theme }) =>
    !$size &&
    css`
      font-size: ${theme.font_sizes.large};

      @media screen and (min-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.font_sizes.xl};
      }

      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: ${theme.font_sizes.xxl};
      }
    `}
`;
