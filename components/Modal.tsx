import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div<StyledProps>`
  background-color: #ffffff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "0px"};
  padding: ${(props) => props.padding || "0px"};
`;

const Title = styled.h3`
  margin: 0px;
`;
const Content = styled.p``;
const CloseButton = styled.button``;

interface StyledProps {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
}

interface Props extends StyledProps {
  onClose: () => void;
  title?: string;
  content?: string;
}

const Modal = ({
  onClose,
  width,
  height,
  borderRadius,
  padding,
  title,
  content,
}: Props) => {
  /** 모달 창 외부 클릭 시 모달 꺼지도록 설정 */
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <ModalContainer onClick={handleContainerClick}>
        <ModalContent
          width={width}
          height={height}
          borderRadius={borderRadius}
          padding={padding}
        >
          <Title>{title && title}</Title>
          <Content>{content && content}</Content>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default Modal;
