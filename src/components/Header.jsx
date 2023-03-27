import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { FaSistrix } from 'react-icons/fa'

function Header() {
  return (
    <StHeader>
      <GlobalStyle />
      <Section>
        <StHamGaja>함가자.</StHamGaja>
        <SelectArea>
          <FaSistrix style={{ color: 'white', fontSize: '21px' }} />
          <StUl>
            <li>내주변</li>
            <li>예약내역</li>
            <li>더보기</li>
            <li>로그인</li>
          </StUl>
        </SelectArea>
      </Section>
    </StHeader>
  )
}

const StHeader = styled.div`
  height: 72px;
  width: 100%;

  position: fixed;
  top: 0px;
  bottom: 865px;

  display: block;
  background-color: #f7323f;
  box-sizing: border-box;
`

const Section = styled.div`
  width: 1024px;
  height: 64px;

  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StHamGaja = styled.span`
  font-family: 'yg-jalnan';
  font-size: 25px;
  font-weight: 700;
  color: white;

  margin-top: 3px;
`

const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: white;
  font-size: 21px;
  font-weight: 200;
  margin-left: 20px;
`

export default Header
