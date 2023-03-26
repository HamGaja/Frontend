import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductSlider from '../components/ProductSlider'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products, isLoading, error } = useSelector((state) => state.products)
  const param = params.id

  return (
    <div>
      <Header />
      <Top>
        <ProductImage>
          <ProductSlider />
        </ProductImage>
        <ProductInfo>호텔정보</ProductInfo>
      </Top>
    </div>
  )
}

export default Detail

const Top = styled.div`
  width: 975px;
  height: 450px;

  border: 1px solid black;
  box-sizing: border-box;

  margin: auto;
  margin-top: 110px;

  display: flex;
  flex-direction: row;
`

const ProductImage = styled.div`
  width: 500px;
  height: 450px;

  border: 1px solid black;
  margin-right: 50px;
  box-sizing: border-box;
`

const ProductInfo = styled.div`
  width: 420px;
  height: 335px;

  border: 1px solid black;
  box-sizing: border-box;
`
