"use client";
import "../styles/global.css";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Ul = styled.ul``;
const Li = styled.li`
  margin-bottom: 5px;
`;
const Button = styled.button``;
const P = styled.p`
  margin-top: 10px;
`;

export default function page() {
  // 모달 상태
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  /** 모달 여는 함수 */
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  /** 모달 닫는 함수 */
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Title>component-zip</Title>
      <Ul>
        <Li>
          1. Modal component
          <P>
            <Button onClick={handleOpenModal}>open modal</Button>
          </P>
        </Li>
      </Ul>

      {isOpenModal && (
        <Modal
          onClose={closeModal}
          width="250px"
          height="auto"
          borderRadius="7px"
          padding="15px"
          title="Title"
          content="This is where you put the modal content."
        />
      )}
    </>
  );
}
