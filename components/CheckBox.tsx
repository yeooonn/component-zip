import styled from "styled-components";

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckBoxStyle = styled.input<RadioProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  outline: none; // focus 시에 나타나는 기본 스타일 제거
  cursor: pointer;
  accent-color: ${(props) => props.bgColor};
  border-radius: 4px;
  margin-right: 0.5vw;
`;

const Label = styled.label``;

interface RadioProps {
  width?: string;
  height?: string;
  bgColor?: string;
  borderColor?: string;
  label?: string;
}

const CheckBox = ({
  width,
  height,
  bgColor,
  borderColor,
  label,
}: RadioProps) => {
  return (
    <>
      <CheckBoxContainer>
        <CheckBoxStyle
          type="checkbox"
          width={width}
          height={height}
          bgColor={bgColor}
          borderColor={borderColor}
        />
        <Label>{label}</Label>
      </CheckBoxContainer>
    </>
  );
};

export default CheckBox;
