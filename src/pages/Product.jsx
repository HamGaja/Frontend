import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Wrapper from '../components/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { __getProducts } from '../redux/modules/productsSlice'
import ProductCard from '../components/ProductCard'
import GlobalStyle from '../components/GlobalStyle'
import Footer from '../components/Footer'
import 'react-calendar/dist/Calendar.css'

function Product() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products, isLoading, error } = useSelector((state) => state.products)
  const productList = JSON.stringify(products)
  const [value, onChange] = useState(new Date())
  console.log('받아온 데이터', products)

  useEffect(() => {
    dispatch(__getProducts())
  }, [productList])

  if (!products || isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <div
          style={{
            width: '100%',
            height: '211px',
            border: '1px solid black',
            boxSizing: 'border-box',
            backgroundColor: '#f7323f',
          }}
        >
          상단 영역입니다. Product
        </div>
        <MainBoard>
          <div
            name="filer"
            style={{
              width: '296px',
              height: '1824px',
              border: '1px solid black',
              borderRadius: '4px',
              margin: '0 32px 0 32px',
              boxSizing: 'border-box',
            }}
          >
            <Wrapper>
              <DateBox>
                <h3>날짜</h3>
                <img
                  style={{
                    width: '250px',
                    objectFit: 'contain',
                    margin: '5px 15px 0 0',
                  }}
                  src="images/product/calendar.jpg"
                />
                <hr style={{ bordercolor: '#F5F5F5' }} />
              </DateBox>
            </Wrapper>
          </div>
          <div
            style={{
              width: '635px',
              maxheight: 'none',
              marginRight: '32px',
            }}
          >
            <StBtn>추천순</StBtn>
            <StBtn>거리 순</StBtn>
            <StBtn>낮은 가격 순</StBtn>
            <StBtn>높은 가격 순</StBtn>
            <StBtn
              style={{
                width: '80px',
                margin: '0 0 20px 12px',
                paddingRight: '12px',
                boxSizing: 'border-box',
              }}
            >
              지도
            </StBtn>
            <p>인기추천</p>
            <div style={{ marginTop: '10px' }}>
              {products.map((item) => {
                return <ProductCard key={item.id} item={item} />
              })}
            </div>
          </div>
        </MainBoard>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default Product

const MainBoard = styled.div`
  width: 1024px;
  max-height: none;

  padding: 5px 0 50px;
  margin-top: 30px;

  display: flex;
`

const StBtn = styled.button`
  align-items: flex-start;
  box-sizing: border-box;
  display: block;
  float: left;
  height: 40px;
  width: 132px;
`

const Card = styled.div`
  width: 635px;
  height: 280px;

  background-image: url('/images/home/hotel1.jpg');
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  border: 1px solid black;
`

const DateBox = styled.div`
  width: 250px;
  height: 300px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;

  padding: 10px;
`
