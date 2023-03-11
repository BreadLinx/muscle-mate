import styled from "styled-components";

interface IFlex {
  d?: "row" | "column";
  j?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  a?: "center" | "flex-start" | "flex-end";
  w?: boolean;
  g?: string | number;
}

// prettier-ignore
export const Flex = styled.div`
  display: flex;
  flex-flow: ${({ d }: IFlex) => (d ? d : 'row')} ${({ w }: IFlex) => (w ? "wrap" : "nowrap")};
  gap: ${({ g }: IFlex) => (g ? `${g}px` : 'initial')};
  justify-content: ${({ j }: IFlex) => (j ? j : 'initial')};
  align-items: ${({ a }: IFlex) => (a ? a : 'initial')};
`;
