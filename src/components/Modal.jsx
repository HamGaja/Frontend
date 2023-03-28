import React, { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import styled from 'styled-components';

Modal.setAppElement('#root'); // 모달창이 사용하는 DOM 엘리먼트 지정

function ModalTerms() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    // 모달 열기
    const openModal = () => {
    setIsModalOpen(true);
    };
    // 모달 닫기
    const closeModal = () => {
    setIsModalOpen(false);
    };

    return (
    <div>
        {/* <button onClick={openModal}>모달 열기</button> */}
        <StModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}>
        <h1>여기어때 약관 동의</h1>
        <p>전체동의</p>
        <button onClick={closeModal}>다음</button>
        </StModal>
    </div>
    );
}

export default ModalTerms;
const StModal = styled(Modal)`
    & .ReactModal__Overlay {
        display: none;
    }
    & .ReactModal__Content {
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border-radius: 10px; */
    }
    & h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }
    & p {
        font-size: 16px;
        margin-bottom: 20px;
    }
    & button {
        width: 336px;
        height: 56px;
        font-size: 16px;
        font-weight: 400;
        line-height: 56px;
        text-align: center;
        margin: 16px 0 0 ;
        border: none;
        border-radius: 6px;
        background-color: #EFEFEF4D;
        color: #fff;
        cursor: pointer;
    }
`;