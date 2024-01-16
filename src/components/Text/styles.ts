import styled, { css } from 'styled-components';

type ParagraphProps = {
  $color: string;
  $justify: boolean;
  $mobileCenter: boolean;
};

export const P = styled.p<ParagraphProps>`
  ${({ theme, $color, $justify, $mobileCenter }) => css`
    color: ${theme.colors[$color]};
    font-size: ${theme.font_sizes.medium};
    ${$justify &&
    css`
      text-align: justify;
    `}

    @media screen and (max-width: ${theme.breakpoints.sm}) {
      ${$mobileCenter &&
      css`
        text-align: center;
      `}
    }

    @media screen and (min-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.font_sizes.large};
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.font_sizes.xl};
    }
  `}
`;
