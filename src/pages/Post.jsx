import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { __addProducts } from '../redux/modules/productsSlice'
import { useNavigate } from 'react-router-dom'
import apis from '../axios/api'

function Post() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // state
  const [products, setProducts] = useState({
    name: '',
    star: '',
    mainImage: null,
    address: '',
    description: '',
    ownerComment: '',
    fileType: 'Hotel',
    roomList: [
      { roomName: ``, roomImage: null, roomPrice: `` },
      { roomName: ``, roomImage: null, roomPrice: `` },
      { roomName: ``, roomImage: null, roomPrice: `` },
    ],
  })

  // input onChange
  const changeInputHandler = (e) => {
    const { value, name } = e.target
    if (name.startsWith('roomList')) {
      const [, index, field] = name.match(/roomList\[(\d+)\]\.(.+)/)
      setProducts((old) => {
        const newRoomList = [...old.roomList]
        newRoomList[index][field] = value
        return { ...old, roomList: newRoomList }
      })
    } else if (name === 'roomImage') {
      setProducts((old) => {
        const newRoomList = [...old.roomList]
        newRoomList[0].roomImage = e.target.files[0]
        return { ...old, roomList: newRoomList }
      })
    } else {
      setProducts((old) => {
        return {
          ...old,
          [name]: value,
        }
      })
    }
  }

  // file onChange
  const fileChangeHandler = (e) => {
    setProducts((old) => {
      return { ...old, mainImage: e.target.files[0] }
    })
  }

  // product 추가 함수
  const productButtonClickHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', products.name)
    formData.append('star', products.star)
    formData.append('mainImage', products.mainImage)
    formData.append('address', products.address)
    formData.append('description', products.description)
    formData.append('ownerComment', products.ownerComment)
    formData.append('fisleType', 'Hotel')
    formData.append('roomList[0].roomName', products.roomList[0].roomName)
    formData.append('roomList[0].roomImage', products.roomList[0].roomImage)
    formData.append('roomList[0].roomPrice', products.roomList[0].roomPrice)
    formData.append('roomList[1].roomName', products.roomList[1].roomName)
    formData.append('roomList[1].roomImage', products.roomList[1].roomImage)
    formData.append('roomList[1].roomPrice', products.roomList[1].roomPrice)
    formData.append('roomList[2].roomName', products.roomList[2].roomName)
    formData.append('roomList[2].roomImage', products.roomList[2].roomImage)
    formData.append('roomList[2].roomPrice', products.roomList[2].roomPrice)

    for (const [key, value] of formData.entries()) {
      console.log(key, value)
    }

    const response = await apis.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log('리스폰스', response)
    dispatch(__addProducts(formData))
      .then(() => {
        alert('작성완료')
        // navigate('/product')
      })
      .catch((error) => {
        alert('실패')
      })
    // setproducts({
    //   name: '',
    //   star: '',
    //   score: '',
    //   address: '',
    //   description: '',
    //   price: '',
    //   ownerComment: '',
    // })
  }

  return (
    <div>
      <Header />
      <BorderArea>
        <StForm name="productForm" onSubmit={productButtonClickHandler}>
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
          메인 이미지
          <input
            type="file"
            name="mainImage"
            accept="image/jpg,image/jpeg,image/png"
            onChange={fileChangeHandler}
          />
          호텔소개
          <input
            type="text"
            name="description"
            value={products.description}
            onChange={changeInputHandler}
            required
          />
          사장님한마디
          <input
            type="text"
            name="ownerComment"
            value={products.ownerComment}
            onChange={changeInputHandler}
            required
          />
          룸1 네임
          <input
            type="text"
            name="roomList[0].roomName"
            value={products.roomList[0].roomName}
            onChange={changeInputHandler}
          />
          룸1 가격
          <input
            type="text"
            name="roomList[0].roomPrice"
            value={products.roomList[0].roomPrice}
            onChange={changeInputHandler}
          />
          룸1 이미지
          <input
            type="file"
            name="roomList[0].roomImage"
            accept="image/jpg,image/jpeg,image/png"
            onChange={changeInputHandler}
          />
          룸2 네임
          <input
            type="text"
            name="roomList[1].roomName"
            value={products.roomList[1].roomName}
            onChange={changeInputHandler}
          />
          룸2 가격
          <input
            type="text"
            name="roomList[1].roomPrice"
            value={products.roomList[1].roomPrice}
            onChange={changeInputHandler}
          />
          룸2 이미지
          <input
            type="file"
            name="roomList[1].roomImage"
            accept="image/jpg,image/jpeg,image/png"
            onChange={changeInputHandler}
          />
          룸3 네임
          <input
            type="text"
            name="roomList[2].roomName"
            value={products.roomList[2].roomName}
            onChange={changeInputHandler}
          />
          룸3 가격
          <input
            type="text"
            name="roomList[2].roomPrice"
            value={products.roomList[2].roomPrice}
            onChange={changeInputHandler}
          />
          룸3 이미지
          <input
            type="file"
            name="roomList[2].roomImage"
            accept="image/jpg,image/jpeg,image/png"
            onChange={changeInputHandler}
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
