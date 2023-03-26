import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <StHeader>
      <h2>공용 헤더 입니다.</h2>
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
  border: 1px solid black;
  box-sizing: border-box;
`

export default Header
