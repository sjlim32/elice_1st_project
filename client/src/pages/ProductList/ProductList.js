import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShowProduct from './ShowProduct';

export default function ProductList() {
  const [categoryTabMenu, setCategoryTabMenu] = useState([]);
  const [category, setCategory] = useState();
  const [currentTab, setCurrentTab] = useState('의류'); // 현재 메뉴탭
  const [ScrollY, setScrollY] = useState(0); // 스크롤값 저장
  const [BtnToTop, setBtnToTop] = useState(false);

  useEffect(() => {
    axios.get('/data/productlist.json').then(res => {
      setCategoryTabMenu(Object.keys(res.data));
      setCategory(res.data);
    });
  }, []);

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
        <span>
          <Link to={ProductList}>여성</Link>
        </span>
        <span>|</span>
        <span>
          <a>남성</a>
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
          {categoryTabMenu.map((tab, index) => (
            <li
              onClick={() => {
                setCurrentTab(tab);
              }}
              key={index}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="contents">
          <ShowProduct
            currentTab={currentTab && currentTab}
            datas={category && category}
          />
        </div>
      </MenuTab>
    </Container>
  );
}

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
