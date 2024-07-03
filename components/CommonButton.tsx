import styled, { css } from "styled-components";

export type ButtonVariant = "active" | "inActive";

const variants = {
  active: {
    color: "#fff",
    backgroundColor: "#446FF6",
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#fff",
        backgroundColor: "#285CFF",
      },
      disabled: {
        color: "#8E8E93",
        backgroundColor: "#636366",
      },
    },
  },
  inActive: {
    color: "#8E8E93",
    backgroundColor: "#636366",
    cursor: "default",
    pseudoClass: {
      hover: {
        color: "#8E8E93",
        backgroundColor: "#636366",
      },
      disabled: {
        color: "#8E8E93",
        backgroundColor: "#636366",
      },
    },
  },
};

interface CommonButtonType {
  variant?: ButtonVariant;
  fontSize?: string;
  width?: string;
  height?: string;
  color?: string;
  cursor?: string;
  backgroundColor?: string;
  lineHeight?: string;
  fontWeight?: string;
  $marginLeft?: string;
  $marginTop?: string;
  pseudoClass?: {
    hover?: {
      color?: string;
      backgroundColor?: string;
    };
    disabled?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  $hoverColor?: string;
  $marginBottom?: string;
}

const CommonButton = styled.button<CommonButtonType>`
  ${({ variant }) => {
    if (variant && variants[variant]) {
      return css`
        color: ${variants[variant].color};
        background-color: ${variants[variant].backgroundColor};
        cursor: ${variants[variant].cursor};
        &:hover {
          color: ${variants[variant].pseudoClass.hover.color};
          background-color: ${variants[variant].pseudoClass.hover
            .backgroundColor};
          transition: all 0.3s;
        }

        &:disabled {
          color: ${variants[variant].pseudoClass.disabled.color};
          background-color: ${variants[variant].pseudoClass.disabled
            .backgroundColor};
        }
      `;
    }
  }}

  font-size: ${(props) => props.fontSize || "1rem"};
  width: ${(props) => props.width || "312px"};
  height: ${(props) => props.height || "56px"};
  line-height: ${(props) => props.lineHeight || "150%"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin-left: ${(props) => props.$marginLeft};
  margin-top: ${(props) => props.$marginTop};
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  outline: 0;
  margin-bottom: ${(props) => props.$marginBottom || "16px"};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
`;

CommonButton.defaultProps = {
  variant: "active",
};

export default CommonButton;
