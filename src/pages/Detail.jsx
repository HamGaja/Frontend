import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { __getProductsDetail } from '../redux/modules/productsSlice'
import Wrapper from '../components/Wrapper'
import ModalRoomInfo from '../components/ModalRoomInfo'
import Calendar from '../components/Calendar'

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 기본적으로 room 탭이 선택되도록 함
  const [activeTab, setActiveTab] = useState('room')
  // 각 탭이 클릭될 때 실행되는 함수
  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }

  const { details, isLoading, error } = useSelector((state) => state.products)
  const param = params.id

  console.log('파람', param)
  console.log('디테일입니다', details)

  useEffect(() => {
    dispatch(__getProductsDetail(+param))
    console.log('유즈 이펙트 뭐함')
  }, [param])

  if (!details || isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <Wrapper>
      <Header />
      <Top>
        <ProductImage
        // src={'/images/home/hotel1.jpg'}
        >
          {/* {details.data.imageUrl} */}
        </ProductImage>
        <ProductInfo>
          {/* <span>{details.data.star}</span> */}
          <StName>{details?.data.name}</StName>
          <p style={{ marginTop: '5px' }}>
            <div>
              {details?.data.star}
              {details?.data.name}
            </div>
            <div>{details?.data.address}</div>
          </p>
          <p style={{ marginTop: '8px' }}></p>
          <div>
            <StEventBox>
              <StEventImg src={'/images/product/event.png'} />
            </StEventBox>
            <StOwnerCommentBox>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  margin: '0',
                  marginBottom: '15px',
                }}
              >
                <strong>사장님 한마디</strong>
                <StOwnerCommentBoxButton>더보기</StOwnerCommentBoxButton>
                {/* <div>{details.data.ownerComment}</div> */}
              </div>
              <StComment style={{ width: '376px ' }}>
                {details?.data.ownerComment}
              </StComment>
            </StOwnerCommentBox>
          </div>
        </ProductInfo>
      </Top>
      <StTap name="tap">
        <StTapRoomInfBookButton
          className={activeTab === 'room' ? 'active' : ''}
          onClick={() => handleTabClick('room')}
        >
          객실안내/예약
        </StTapRoomInfBookButton>
        <StTapRoomInfoButton
          className={activeTab === 'info' ? 'active' : ''}
          onClick={() => handleTabClick('info')}
        >
          숙소정보
        </StTapRoomInfoButton>
        {/* <StTapReviewButton className={activeTab === 'review' ? 'active' : ''} onClick={() => handleTabClick('review')}>
          리뷰
        </StTapReviewButton> */}
        <div className="tab-content">
          {/* activeTab의 값에 따라 각 탭의 내용을 표시 */}
          {activeTab === 'room' && <RoomTypeBooking />}
          {activeTab === 'info' && <AccommodationInfo />}
          {/* {activeTab === 'review' && <Reviews />} */}
        </div>
      </StTap>
    </Wrapper>
  )
}

function RoomTypeBooking() {
  // const params = useParams()
  // const dispatch = useDispatch()
  const { details } = useSelector((state) => state.products)
  // const param = params.id
  // console.log('디테일입니다', details)

  // useEffect(() => {
  //   dispatch(__getProductsDetail(+param))
  // }, [])
  return (
    <Wrapper>
      <Reservation name="reservation">
        <div
          style={{
            width: '975px',
            height: '40px',
            margin: '32px 0',
            boxSizing: 'border-box',
            // border: '1px solid red',
          }}
          name="date"
        >
          <div>아래를 클릭해서 날짜를 선택하세요.</div>
          <Calendar />
        </div>
        <OtherRoomCard name="otherRoom">
          <OtherRoomImg
          // src="/images/home/hotel1.jpg"
          // {details.data.roomList[0].roomImage}
          ></OtherRoomImg>
          <OtherRoomInfo name="info">
            <p
              style={{
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '20px',
                textDecoration: 'none solid rgba(0,0,0,0.87)',
                height: '37px',
              }}
            >
              객실명
              {details?.data.roomList[0].roomName}
            </p>
            <StRoomInfoPricebox>
              <span>가격</span>
              <span style={{ fontSize: '20px' }}>
                {details?.data.roomList[0].roomPrice}
              </span>
            </StRoomInfoPricebox>
            <ModalRoomInfo
            // style={{ width: '510px', margin: '12px 0' }}
            >
              객실 이용 안내
            </ModalRoomInfo>
            <StBookingButton>예약</StBookingButton>
          </OtherRoomInfo>
        </OtherRoomCard>
      </Reservation>
    </Wrapper>
  )
}

{
  /* <OtherRoomCard name="otherRoom">
          <OtherRoomImg src="/images/home/hotel1.jpg" />
          <OtherRoomInfo name="info">
            <p
              style={{
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '20px',
                textDecoration: 'none solid rgba(0,0,0,0.87)',
                height: '37px',
              }}
            >
              객실명
            </p>
            <StRoomInfoPricebox>
              <span>가격</span>
              <span style={{fontSize: '20px'}}>97,750원</span>
            </StRoomInfoPricebox>
            <ModalRoomInfo 
            // style={{ width: '510px', margin: '12px 0' }}
            >객실 이용 안내</ModalRoomInfo>
            <StBookingButton>예약</StBookingButton>
          </OtherRoomInfo>
        </OtherRoomCard>
        <OtherRoomCard name="otherRoom">
          <OtherRoomImg src="/images/home/hotel1.jpg" />
          <OtherRoomInfo name="info">
            <p
              style={{
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '20px',
                textDecoration: 'none solid rgba(0,0,0,0.87)',
                height: '37px',
              }}
            >
              객실명
            </p>
            <StRoomInfoPricebox>
              <span>가격</span>
              <span style={{fontSize: '20px'}}>97,750원</span>
            </StRoomInfoPricebox>
            <ModalRoomInfo 
            // style={{ width: '510px', margin: '12px 0' }}
            >객실 이용 안내</ModalRoomInfo>
            <StBookingButton>예약</StBookingButton>
          </OtherRoomInfo>
        </OtherRoomCard> */
}

{
  /* <OtherRoomCard name="otherRoom">
          <OtherRoomImg src="/images/home/hotel1.jpg" />
          <OtherRoomInfo name="info">
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                height: '37px',
              }}
            >
              객실명
            </p>
            <div
              style={{
                height: '76px',
                padding: '41px 0 0',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>가격</span>
              <span>97,750원</span>
            </div>
            <button style={{ width: '510px', margin: '12px 0' }}>객실 이용 안내</button>
            <button style={{ width: '510px' }}>예약</button>
          </OtherRoomInfo>
        </OtherRoomCard> */
}

{
  /* <OtherRoomCard name="otherRoom">
          <OtherRoomImg src="/images/home/hotel1.jpg" />
          <OtherRoomInfo name="info"></OtherRoomInfo>
        </OtherRoomCard>
        <OtherRoomCard name="otherRoom">
          <OtherRoomImg src="/images/home/hotel1.jpg" />
          <OtherRoomInfo name="info"></OtherRoomInfo>
        </OtherRoomCard> */
}

function AccommodationInfo() {
  return (
    <div className="accommodation-info">
      {/* 숙소정보 탭의 내용 */}
      숙소정보
    </div>
  )
}

function Reviews() {
  return (
    <div className="reviews">
      {/* 리뷰 탭의 내용 */}
      리뷰
    </div>
  )
}

export default Detail

const Top = styled.div`
  width: 975px;
  height: 450px;

  margin: auto;
  margin-top: 110px;

  display: flex;
  flex-direction: row;
`

const ProductImage = styled.img`
  width: 500px;
  height: 450px;

  margin-right: 50px;
`

const ProductInfo = styled.div`
  width: 420px;
  height: 335px;
`

const StName = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const StEventBox = styled.div`
  width: 420px;
  height: 70px;
  margin-top: 10px;
  border-radius: 10px;
  /* background-color: #10aea5; */
  background-color: transparent;
  box-sizing: border-box;
  /* padding: 12px 44px 12px 12px; */
`
const StEventImg = styled.img`
  width: 22vw;
  height: 7vh;
  margin-bottom: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  /* padding: 12px 44px 12px 12px; */
`

const StOwnerCommentBox = styled.div`
  width: 420px;
  height: 130px;

  margin-top: 8px;
  padding: 26px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  box-sizing: border-box;
  background-color: #fafafa;

  /* & > button {
    align-self: flex-end;
  } */
`
const StOwnerCommentBoxButton = styled.button`
  background-color: transparent;
  color: #10aea5;
  font-weight: 700;
  margin-left: 230px;
  border: none;
  cursor: pointer;
`

const StComment = styled.div`
  width: 370px;
  height: 100px;
  text-overflow: ellipsis;
  line-height: 26px;
`

const StTap = styled.div`
  width: 975px;
  height: 73px;
  margin: 39px 31px;
  padding: 0 16px;

  border-bottom: 1px solid #b8bdd4;
  box-sizing: border-box;
`

const Reservation = styled.div`
  width: 975px;
  max-height: none;
  margin: 0px 31px;
`

const OtherRoomImg = styled.img`
  width: 376px;
  height: 226px;
  border: none;
  border-radius: 1px;
  box-sizing: border-box;
  cursor: pointer;
`

const OtherRoomInfo = styled.div`
  width: 512px;
  height: 230px;

  border: none;
  box-sizing: border-box;
`

const OtherRoomCard = styled.div`
  display: flex;
  padding: 24px;
  margin-bottom: 24px;
  gap: 30px;
  border: 1.5px solid #f7f7f7;
  border-radius: 4px;
`

const StTapRoomInfBookButton = styled.button`
  width: 15%;
  height: 72px;
  margin: 0 24px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #bdb7b7;
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none solid rgb(0, 0, 0, 0.38);
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  :active {
  }
  :focus {
    width: 15%;
    text-decoration: none solid rgb(230, 28, 81);
    color: #e61c51;
    border-bottom: 3px solid #f2114c;
  }
`
const StTapRoomInfoButton = styled.button`
  width: 11%;
  height: 72px;
  margin: 0 24px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #bdb7b7;
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none solid rgb(0, 0, 0, 0.38);
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  :focus {
    width: 11%;
    text-decoration: none solid rgb(230, 28, 81);
    color: #e61c51;
    border-bottom: 3px solid #f2114c;
  }
`
const StTapReviewButton = styled.button`
  width: 44px;
  height: 72px;
  margin: 0 24px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #bdb7b7;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none solid rgb(0, 0, 0, 0.38);
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  :active {
    width: 44px;
    text-decoration: none solid rgb(230, 28, 81);
    color: #e61c51;
    border-bottom: 3px solid #f2114c;
  }
`
const StBookingButton = styled.button`
  width: 512px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  color: white;
  background-color: #ed1c48;
  cursor: pointer;
`
const StRoomInfoPricebox = styled.div`
  height: 36px;
  padding: 41px 0 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f7f7f7;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  text-decoration: none solid rgba(0, 0, 0, 0.87);
`
