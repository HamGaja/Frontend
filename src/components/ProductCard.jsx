import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function ProductCard({ image, name, description, price, rating, item }) {
  const navigate = useNavigate()
  return (
    <Card key={item.id} onClick={() => navigate(`/detail/${item.id}`)}>
      <InfoWrapper>
        <div
          style={{
            width: '630px',
            height: '180px',
          }}
        ></div>
        {item.star}
        <Name>{item.name}</Name>
        {item.address}
      </InfoWrapper>
    </Card>
  )
}

export default ProductCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 635px;
  height: 280px;

  margin-right: 20px;

  background-image: url('/images/home/hotel1.jpg');
  background-position: center;
  background-size: cover;
  color: white;
`

const InfoWrapper = styled.div`
  padding: 16px;
  flex: 1;
`

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`
