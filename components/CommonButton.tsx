import styled, { css } from "styled-components";

export type ButtonVariant = "solid_btn" | "ghost_btn" | "disabled_btn";

const variants = {
  solid_btn: {
    color: "#fff",
    backgroundColor: "#008868",
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#fff",
        backgroundColor: "#017c5f",
      },
      disabled: {
        color: "#8E8E93",
        backgroundColor: "#636366",
      },
    },
  },
  ghost_btn: {
    color: "#008868",
    backgroundColor: "#fff",
    borderColor: "#008868",
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#01654e",
        backgroundColor: "#fff",
        borderColor: "#008868",
      },
      disabled: {
        color: "#8E8E93",
        backgroundColor: "#636366",
      },
    },
  },
  disabled_btn: {
    color: "#fff",
    backgroundColor: "#D4D4D4",
    cursor: "default",
    pseudoClass: {
      hover: {
        color: "#fff",
        backgroundColor: "#D4D4D4",
      },
      disabled: {
        color: "#fff",
        backgroundColor: "#D4D4D4",
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
      borderColor?: string;
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
        border: ${variant === "ghost_btn"
          ? `1px solid ${variants[variant].pseudoClass.hover.borderColor}`
          : "none"};
        cursor: ${variants[variant].cursor};
        &:hover {
          color: ${variants[variant].pseudoClass.hover.color};
          background-color: ${variants[variant].pseudoClass.hover
            .backgroundColor};
          border-color: ${variant === "ghost_btn" &&
          variants[variant].pseudoClass.hover.borderColor};
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
  border-radius: 8px;
  outline: 0;
  margin-bottom: ${(props) => props.$marginBottom || "16px"};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.$hoverColor};
    transition: all 0.3s;
  }
`;

CommonButton.defaultProps = {
  variant: "solid_btn",
};

export default CommonButton;
