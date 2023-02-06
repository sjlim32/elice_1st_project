import { useEffect, useState } from 'react';
import axios from 'axios';
import all
import styled from 'styled-components';
import ShowProduct from './ShowProduct';

export default function ProductList() {
  const [categoryTabMenu, setCategoryTabMenu] = useState([]);
  const [category, setCategory] = useState();
  const [ScrollY, setScrollY] = useState(0); // 스크롤값 저장
  const [BtnToTop, setBtnToTop] = useState(false);



  // axios request data
  const [reqData, setReqData] = useState({
    gender: '',
    major_classification: '',
    minor_classification: '',
  });

  // reqDataHandlers
  const reqDataHandlers = e => {
    setReqData({ ...reqData, [e.target.title]: e.target.id });
  };

  console.log(reqData);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/product', reqData).then(res => {
  //     setCategoryTabMenu(Object.keys(res.data));
  //     setCategory(res.data);
  //   });
  // }, [reqData]);

  // 맨 위로가기 기능

  const handleScroll = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값저장
    ScrollY > 100 ? setBtnToTop(true) : setBtnToTop(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 초기화
    setBtnToTop(false); // 최상단에 있는경우 버튼 숨겨짐
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Container>
      <MainNav>
        <span id="female" title="gender" onClick={reqDataHandlers}>
          여성
        </span>
        <span>|</span>
        <span id="male" title="gender" onClick={reqDataHandlers}>
          남성
        </span>
      </MainNav>

      <button
        className={BtnToTop ? 'topBtn active' : 'topBtn'}
        onClick={scrollToTop}
      >
        Top
      </button>

      <MenuTab>
        <ul className="tabs">
          <li
            id="clothes"
            title="major_classification"
            onClick={reqDataHandlers}
          >
            의류
          </li>
          <li id="shoes" title="major_classification" onClick={reqDataHandlers}>
            신발
          </li>
          <li id="bags" title="major_classification" onClick={reqDataHandlers}>
            가방
          </li>
          <li
            id="accessory"
            title="major_classification"
            onClick={reqDataHandlers}
          >
            액세서리
          </li>
        </ul>
        <div className="contents">
          <ShowProduct currentTab={currentTab} datas={category && category} />
        </div>
      </MenuTab>
      <SubMenuTab>
        <ul className="tabs">
          <li
            id="clothes"
            title="minor_classification"
            onClick={reqDataHandlers}
          >
            티셔츠
          </li>
          <li id="shoes" title="minor_classification" onClick={reqDataHandlers}>
            바지
          </li>
          <li id="bags" title="minor_classification" onClick={reqDataHandlers}>
            양말
          </li>
        </ul>
        <div className="contents">
          <ShowProduct currentTab={currentTab} datas={category && category} />
        </div>
      </SubMenuTab>
    </Container>
  );



const Container = styled.div`
  margin-top: 90px;
  width: 100%;
  padding: 40px;
  > .topBtn {
    position: fixed;
    opacity: 0;
    bottom: 40px;
    right: 40px;
    z-index: -10;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 0 none;
    background: white;
    color: rgba(153, 164, 151, 1);
    border: 1.5px solid rgba(153, 164, 151, 1);
    font-size: 15px;
    font-weight: bold;
    box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: opacity 0.3s ease-in;
  }

  .topBtn.active {
    z-index: 10;
    opacity: 1;
  }
`;

const MenuTab = styled.div`
  width: 95%;
  margin: 50px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border: 1px solid #b1b1b1;
      padding: 20px;
      cursor: pointer;
      color: #b1b1b1;

      &:hover {
        font-wight: 900;
        border-bottom: none;
        color: black;
      }
    }
  }

  > .contents {
    text-align: center;
    font-size: 70px;
    border-top: none;
    color: black;
  }
`;

const SubMenuTab = styled.div`
  width: 95%;
  margin: 50px auto;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  > .tabs {
    display: flex;
    > li {
      width: 100%;
      text-align: center;
      border: 1px solid #b1b1b1;
      padding: 20px;
      cursor: pointer;
      color: #b1b1b1;

      &:hover {
        font-wight: 900;
        border-bottom: none;
        color: black;
      }
    }
  }

  > .contents {
    text-align: center;
    font-size: 70px;
    border-top: none;
    color: black;
  }
`;

const MainNav = styled.div`
  width: 100%;
  border-bottom: 10px solid rgba(153, 164, 151, 1);
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  > span {
    padding: 5px;
  }
`;

const AllCATEGORY=[
  {
    "id": 1,
    "major_classification": "의류",
    "minor_classification": [
      { "kor": "티셔츠" },
      { "kor": "바지" },
      { "kor": "양말" }
    ]
  },
  {
    "id": 2,
    "major_classification": "가방",
    "minor_classification": [
      { "kor": "토트 백" },
      { "kor": "숄더 백" },
      { "kor": "클러치 백" }
    ]
  },
  {
    "id": 3,
    "major_classification": "신발",
    "minor_classification": [
      { "kor": "구두" },
      { "kor": "운동화" },
      { "kor": "슬리퍼" }
    ]
  },
  {
    "id": 4,
    "major_classification": "액세서리",
    "minor_classification": [
      { "kor": "목걸이" },
      { "kor": "귀걸이" },
      { "kor": "팔찌" }
    ]
  }
]

