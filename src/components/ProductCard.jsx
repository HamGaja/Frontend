import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function ProductCard({ image, name, description, price, rating, item }) {
  const navigate = useNavigate()
  return (
    <Card
      key={item.id}
      imageUrl={item.imageUrl}
      onClick={() => navigate(`/products/${item.id}`)}
    >
      <InfoWrapper>
        <p style={{ marginTop: '155px' }}>{item.star}</p>
        <p style={{ fontSize: '26px', fontWeight: '700' }}>{item.name}</p>
        <p style={{ fontSize: '20px', fontWeight: '400' }}>{item.address}</p>
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

  background-image: url(${(props) => props.imageUrl});
  background-color: rgba(0, 0, 0, 0.8);
  background-position: center;
  background-size: cover;
  color: white;
`

const InfoWrapper = styled.div`
  padding: 16px;
  flex: 1;
`
