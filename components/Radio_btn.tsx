import styled from "styled-components";

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
`;

const Radio = styled.input<RadioProps>`
  -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
  -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
  appearance: none; // 기본 브라우저에서 기본 스타일 제거
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid #ccc; // 체크되지 않았을 때의 테두리 색상
  border-radius: 50%;
  outline: none; // focus 시에 나타나는 기본 스타일 제거
  cursor: pointer;
  &:checked {
    background-color: ${(props) =>
      props.bgColor}; // 체크 시 내부 원으로 표시될 색상
    border: 3px solid white; // 테두리가 아닌, 테두리와 원 사이의 색상
    box-shadow: 0 0 0 1.6px ${(props) => props.bgColor}; // 테두리 색상=
  }
  margin-right: 0.5vw;
`;

const Label = styled.label``;

interface RadioProps {
  width: string;
  height: string;
  bgColor: string;
  borderColor: string;
  label?: any;
}

const Radio_btn = ({
  width,
  height,
  bgColor,
  borderColor,
  label,
}: RadioProps) => {
  return (
    <>
      <RadioContainer>
        <Radio
          type="radio"
          width={width}
          height={height}
          bgColor={bgColor}
          borderColor={borderColor}
        />
        <Label>{label}</Label>
      </RadioContainer>
    </>
  );
};

export default Radio_btn;
