import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { __addProducts } from '../redux/modules/productsSlice'
import { useNavigate } from 'react-router-dom'

function Post() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // state
  const [products, setproducts] = useState({
    name: '',
    star: '',
    score: '',
    address: '',
    description: '',
    price: '',
    ownerComment: '',
  })

  // input onChange
  const changeInputHandler = (e) => {
    const { value, name } = e.target
    setproducts((old) => {
      return { ...old, [name]: value }
    })
  }

  // product 추가 함수
  const productButtonClickHandler = (e) => {
    e.preventDefault()
    dispatch(__addProducts({ products }))
      .then(() => {
        alert('작성완료')
        navigate('/product')
      })
      .catch((error) => {
        alert('실패')
      })
    setproducts({
      name: '',
      star: '',
      score: '',
      address: '',
      description: '',
      price: '',
      ownerComment: '',
    })
  }

  return (
    <div>
      <Header />
      <BorderArea>
        <StForm onSubmit={productButtonClickHandler}>
          호텔명
          <input
            type="text"
            name="name"
            value={products.name}
            onChange={changeInputHandler}
            required
          />
          <select
            name="star"
            value={products.star}
            onChange={changeInputHandler}
            required
          >
            <option disabled value="">
              Star
            </option>
            <option value="1성급">1성급</option>
            <option value="2성급">2성급</option>
            <option value="3성급">3성급</option>
            <option value="4성급">4성급</option>
            <option value="5성급">5성급</option>
          </select>
          주소
          <input
            type="text"
            name="address"
            value={products.address}
            onChange={changeInputHandler}
            required
          />
          {/* 메인 이미지 */}
          {/* <input type="file" name="mainImage" /> */}
          숙소정보
          <input
            type="text"
            name="description"
            value={products.description}
            onChange={changeInputHandler}
            required
          />
          숙소정보
          <input
            type="text"
            name="ownerComment"
            value={products.ownerComment}
            onChange={changeInputHandler}
            required
          />
          <Button type="submit">등록하기</Button>
        </StForm>
      </BorderArea>
    </div>
  )
}

export default Post

const BorderArea = styled.div`
  width: 1000px;
  height: 1000px;

  margin: 100px auto 50px auto;
  padding: 20px;

  border-radius: 15px;
  border: 15px solid #f7323f;
  box-sizing: border-box;
`
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: auto;
  gap: 10px;
`
