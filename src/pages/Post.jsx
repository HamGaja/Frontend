import React, { useState } from 'react'
import Header from '../components/Header'
import styled, { keyframes } from 'styled-components'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { __addProducts } from '../redux/modules/productsSlice'
import { useNavigate } from 'react-router-dom'
import apis from '../axios/api'
import GlobalStyle from '../components/GlobalStyle'
import Wrapper from '../components/Wrapper'
import { FaImage } from 'react-icons/fa'

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
    productType: 'Hotel',
    roomList: [
      { roomName: ``, roomImage: null, roomPrice: `` },
      { roomName: ``, roomImage: null, roomPrice: `` },
      { roomName: ``, roomImage: null, roomPrice: `` },
    ],
    category: {
      spa: false,
      miniBar: false,
      wifi: false,
      bathItem: false,
      tv: false,
      airConditioner: false,
      refrigerator: false,
      showerRoom: false,
      tub: false,
      dryer: false,
      iron: false,
      electricRiceCooker: false,
    },
  })

  console.log(products.mainImage)

  const CategoryCheckHandler = (e) => {
    const { name, checked } = e.target
    setProducts({
      ...products,
      category: {
        ...products.category,
        [name]: checked,
      },
    })
  }

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

  const roomImageChangeHandler = (e, index) => {
    setProducts((old) => {
      const newRoomList = [...old.roomList]
      newRoomList[index].roomImage = e.target.files[0]
      return {
        ...old,
        roomList: newRoomList,
      }
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
    formData.append('ProductType', 'Hotel')
    formData.append('roomList[0].roomName', products.roomList[0].roomName)
    formData.append('roomList[0].roomImage', products.roomList[0].roomImage)
    formData.append('roomList[0].roomPrice', Number(products.roomList[0].roomPrice))
    formData.append('roomList[1].roomName', products.roomList[1].roomName)
    formData.append('roomList[1].roomImage', products.roomList[1].roomImage)
    formData.append('roomList[1].roomPrice', Number(products.roomList[1].roomPrice))
    formData.append('roomList[2].roomName', products.roomList[2].roomName)
    formData.append('roomList[2].roomImage', products.roomList[2].roomImage)
    formData.append('roomList[2].roomPrice', Number(products.roomList[2].roomPrice))
    formData.append("category['spa']", products.category.spa)
    formData.append("category['miniBar']", products.category.miniBar)
    formData.append("category['wifi']", products.category.wifi)
    formData.append("category['bathItem']", products.category.bathItem)
    formData.append("category['tv']", products.category.tv)
    formData.append("category['airConditioner']", products.category.airConditioner)
    formData.append("category['refrigerator']", products.category.refrigerator)
    formData.append("category['showerRoom']", products.category.showerRoom)
    formData.append("category['tub']", products.category.tub)
    formData.append("category['dryer']", products.category.dryer)
    formData.append("category['iron']", products.category.iron)
    formData.append(
      "category['electricRiceCooker']",
      products.category.electricRiceCooker
    )

    for (const [key, value] of formData.entries()) {
      console.log(key, value)
    } // 전체 조회

    // formData.get('name') // 단건 조회

    dispatch(__addProducts(formData))
      .then(() => {
        alert('작성완료')
        // navigate('/product')
      })
      .catch((error) => {
        alert('실패')
      })
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <BorderArea>
        <Wrapper>
          <PostHeader>
            <span style={{ fontfamily: 'yg-jalnan' }}>함가자 숙소 등록</span>
          </PostHeader>
        </Wrapper>

        <StForm name="productForm" onSubmit={productButtonClickHandler}>
          <InputLabel>
            <StNameTag>상호명</StNameTag>
            <StInput
              type="text"
              name="name"
              value={products.name}
              onChange={changeInputHandler}
              required
              placeholder="상호명을 입력해주세요."
            />
          </InputLabel>
          <InputLabel>
            <StNameTag>호텔등급</StNameTag>
            <StSelect
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
            </StSelect>
          </InputLabel>
          <InputLabel>
            <StNameTag>주소</StNameTag>
            <StInput
              type="text"
              name="address"
              value={products.address}
              onChange={changeInputHandler}
              required
              placeholder="상세 주소를 입력해주세요."
            />
          </InputLabel>
          <InputLabel>
            <StNameTag>소개/안내</StNameTag>
            <StInput
              type="text"
              name="description"
              value={products.description}
              onChange={changeInputHandler}
              required
              placeholder="호텔 정보를 입력해주세요."
            />
          </InputLabel>
          <InputLabel>
            <StNameTag style={{ fontSize: '14px' }}>사장님한마디</StNameTag>
            <StInput
              type="text"
              name="ownerComment"
              value={products.ownerComment}
              onChange={changeInputHandler}
              required
              placeholder="전달하고 싶은 말을 입력해주세요."
            />
          </InputLabel>
          <InputLabel>
            <StNameTag style={{ fontSize: '14px' }}>숙소 이미지</StNameTag>
            <FaImage style={{ fontSize: '30px', color: '#f7323f' }} />
            <input
              hidden
              type="file"
              name="mainImage"
              accept="image/jpg,image/jpeg,image/png"
              onChange={fileChangeHandler}
            />
            {products.mainImage && (
              <StImagePreview>
                <img src={products.mainImage} />
              </StImagePreview>
            )}
          </InputLabel>
          <CheckboxContainer name="category">
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="spa"
                checked={products.category.spa}
                onChange={CategoryCheckHandler}
              />
              스파
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="miniBar"
                checked={products.category.miniBar}
                onChange={CategoryCheckHandler}
              />
              미니바
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="wifi"
                checked={products.category.wifi}
                onChange={CategoryCheckHandler}
              />
              와이파이
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="bathItem"
                checked={products.category.bathItem}
                onChange={CategoryCheckHandler}
              />
              욕실물품
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="tv"
                checked={products.category.tv}
                onChange={CategoryCheckHandler}
              />
              티비
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="airConditioner"
                checked={products.category.airConditioner}
                onChange={CategoryCheckHandler}
              />
              에어컨
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="refrigerator"
                checked={products.category.refrigerator}
                onChange={CategoryCheckHandler}
              />
              냉장고
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="showerRoom"
                checked={products.category.showerRoom}
                onChange={CategoryCheckHandler}
              />
              객실샤워실
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="tub"
                checked={products.category.tub}
                onChange={CategoryCheckHandler}
              />
              욕조
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="dryer"
                checked={products.category.dryer}
                onChange={CategoryCheckHandler}
              />
              드라이기
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="iron"
                checked={products.category.iron}
                onChange={CategoryCheckHandler}
              />
              다리미
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="electricRiceCooker"
                checked={products.category.electricRiceCooker}
                onChange={CategoryCheckHandler}
              />
              전기밥솥
            </CheckboxLabel>
          </CheckboxContainer>
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
            onChange={(e) => roomImageChangeHandler(e, 0)}
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
            onChange={(e) => roomImageChangeHandler(e, 1)}
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
            onChange={(e) => roomImageChangeHandler(e, 2)}
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

  margin: 120px auto 50px auto;
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

const PostHeader = styled.div`
  width: 230px;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7323f;

  font-size: 25px;
  font-family: 'yg-jalnan';
  color: white;
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 740px;
`
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #f7323f;
  border-radius: 2px;

  &:checked {
    background-color: #f7323f;
    border-color: #f7323f;
  }
`

const CheckboxLabel = styled.label`
  width: 120px;
  height: 30px;

  display: flex;
  user-select: none;
`

const StNameTag = styled.span`
  width: 100px;
  min-width: 100px;
  height: 40px;

  font-size: 16px;
  font-family: 'yg-jalnan';
  font-weight: 200;
  background-color: #f7323f;
  border-radius: 10px;
  margin-right: 20px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`
const StInput = styled.input`
  width: 1000px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`

const StSelect = styled.select`
  width: 1000px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`
const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const StImagePreview = styled.div`
  width: 500px;
  height: 500px;
`
