import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

function Home() {
  const navigate = useNavigate()
  return (
    <main>
      <Wrapper>
        <Header />
        <Home_Banner_img src={'images/home/home_banner 1.png'} />
        <Main_link>
          <Home_Cate_ul>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_01.png`} />
                <Home_Cate_p>모텔</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_02.png`} />
                <Home_Cate_p>호텔·리조트</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_03.png`} />
                <Home_Cate_p>펜션</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_04.png`} />
                <Home_Cate_p>게스트하우스</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_05.png`} />
                <Home_Cate_p>캠핌·글램핑</Home_Cate_p>
              </Home_Cate_Box>
            </li>
            <li>
              <Home_Cate_Box onClick={() => navigate('/product')}>
                <Home_Cate_img src={`/images/home/ico_category_06.png`} />
                <Home_Cate_p>해외 여행</Home_Cate_p>
              </Home_Cate_Box>
            </li>
          </Home_Cate_ul>
        </Main_link>
        <Recommend>리코멘드 영역 입니다.</Recommend>
        <Appdown>앱 다운 영역 입니다.</Appdown>
        <Main_event>이벤트 표출 영역입니다.</Main_event>
        <Ad_ask>
          <Ask_Box src="/images/home/apply_add.png" />
          <Ask_Box onClick={() => navigate('/post')} src="/images/home/to post.png" />
        </Ad_ask>
        <Footer />
      </Wrapper>
    </main>
  )
}

export default Home

const Home_Banner_img = styled.img`
  height: 580px;
  width: 100%;

  margin-top: 100px;
  object-fit: none;
  box-sizing: border-box;
`

const Main_link = styled.div`
  height: 168px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const Recommend = styled.div`
  height: 315px;
  width: 1024px;
  border: 1px solid black;
  box-sizing: border-box;
`

const Appdown = styled.div`
  height: 320px;
  width: 962px;
  border: 1px solid black;
  box-sizing: border-box;
`

const Main_event = styled.div`
  height: 251.391px;
  width: 962px;
  border: 1px solid black;
  box-sizing: border-box;
`

const Ad_ask = styled.div`
  display: flex;
  height: 208px;
  width: 962px;

  gap: 10px;
  margin-top: 24px;
  box-sizing: border-box;
`

const Home_Cate_Box = styled.div`
  width: 163px;
  height: 107px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home_Cate_p = styled.p`
  text-align: center;
  width: 163px;
  height: 32px;
  padding: 14px;
`

const Home_Cate_img = styled.img`
  width: 72px;
  height: 72px;
`
const Home_Cate_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1024px;
  height: 107px;
`

const Ask_Box = styled.img`
  width: 476px;
  height: 200px;

  box-sizing: border-box;
`
