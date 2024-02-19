import styled from 'styled-components';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  place-content: center;
`;

// export const ProjectHover = styled.div`
//   ${({ theme }) => css`
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     padding: 5%;
//     border-radius: 5px;
//     background-color: ${theme.colors.dark};
//     border: 1px solid ${theme.colors.orange};
//     display: flex;
//     opacity: 0;
//     flex-direction: column;
//     justify-content: space-between;
//     transition: opacity 200ms ease-in-out;
//     pointer-events: none;
//   `}

//   p:first-child {
//     margin-left: auto;
//   }
// `;

// export const ProjectContainer = styled.div`
//   position: relative;

//   &:hover ${ProjectHover}, &.active ${ProjectHover} {
//     opacity: 1;
//     pointer-events: auto;
//   }
// `;

// export const ProjectBox = styled.div`
//   padding: 5%;
//   /* height: 200px; */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   border-radius: 5px;

//   ${({ theme }) => css`
//     border: 1px solid ${theme.colors.orange};
//     box-shadow: 0 0 8px 0 ${theme.colors.orange};
//   `}
// `;

// export const LinkBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// export const TextBox = styled.div`
//   width: 100%;
// `;

// export const ImageContainer = styled.div`
//   margin-bottom: 10px;

//   img {
//     width: 100%;
//   }
// `;

// export const P = styled.p`
//   ${({ theme }) => css`
//     font-size: ${theme.font_sizes.small};
//     color: ${theme.colors.white};
//   `}
// `;

// type PDetailsProps = {
//   $bold?: boolean;
// };

// export const PDetails = styled.p<PDetailsProps>`
//   ${({ theme, $bold }) => css`
//     font-size: ${theme.font_sizes.medium};
//     color: ${theme.colors.white};
//     ${$bold &&
//     css`
//       font-weight: 700;
//     `}
//   `}

//   a {
//     ${({ theme }) => css`
//       color: ${theme.colors.white};
//       font-size: ${theme.font_sizes.medium};
//       text-decoration: none;
//       display: inline-block;
//       transition: all 100ms ease-in-out;
//     `}
//   }

//   a:hover {
//     ${({ theme }) => css`
//       color: ${theme.colors.orange};
//     `}
//   }
// `;
