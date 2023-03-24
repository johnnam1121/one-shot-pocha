import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Menu.css'

function Menu() {
  const appetizersLeft = [
    { name: 'Seafood Pancake', price: '$16.99', kName: '해물파전' },
    { name: 'Kimchi Pancake', price: '$14.99', kName: '김치전' },
    { name: 'French Fries', price: '$6.99', kName: '감자튀김' },
    { name: 'Kimchi Bulgogi Fries', price: '$14.99', kName: '김치 불고기 감자튀김' },
    { name: 'Fried Dumplings - Pork and Chicken', price: '$9.99', kName: '튀김만두 돼지고기과 닭고기' },
    { name: 'Fried Beef Bulgogi Dumplings', price: '$14.99', kName: '불고기 튀김만두' },
    { name: 'Shrimp Tempura', price: '$12.99', kName: '새오튀김' },
    { name: 'Squid Tempura', price: '$12.99', kName: '오징어튀김' },
  ]
  const appetizersRight = [
    { name: 'Vegetable Tempura', price: '$12.99', kName: '야채튀김' },
    { name: 'Mixed Tempura', price: '$19.99', kName: '모듬튀김' },
    { name: 'Seaweed Tempura', price: '$12.99', kName: '김말이' },
    { name: 'Rolled Omelette', price: '$12.99', kName: '계란말이' },
    { name: 'Steamed Eggs', price: '$12.99', kName: '계란찜' },
    { name: 'Corn Cheese', price: '$12.99', kName: '콘치즈' },
    { name: 'Sotteok Sotteok', price: '$12.99', kName: '소떡소떡' },
    { name: 'Parboiled Squid', price: '$14.99', kName: '오징어 숙회' },
    { name: 'Japchae', price: '$14.99', kName: '잡채' },
  ]
  const bbqLeft = [
    { name: 'Marinated Grilled Ribs', price: '$25.99', kName: 'LA 갈비' },
    { name: 'Bulgogi', price: '$21.99', kName: '불고기' },
    { name: 'Spicy Pork Bulgogi', price: '$21.99', kName: '돼지불고기' }
  ]
  const bbqRight = [
    { name: 'Pork Belly', price: '$21.99', kName: '삼겹살' },
    { name: 'Spicy Pork Belly', price: '$21.99', kName: '고추장 삼겹살' }
  ]
  const riceAndNoodleLeft = [
    { name: 'Rice Balls', price: '$9.99', kName: '주멱밥' },
    { name: 'Classic Lunch Box', price: '$11.99', kName: '앳날고시랒' },
    { name: 'Kimchi Fried Rice', price: '$12.99', kName: '김치볶음밥' },
    { name: 'Shrimp Fried Rice', price: '$13.99', kName: '새오볶음밥' },
    { name: 'Japchae-bap', price: '$13.99', kName: '잡채밥' },
    { name: 'Jajang-bap', price: '$13.99', kName: '짜장밥' },
  ]
  const riceAndNoodleRight = [
    { name: 'Jajangmyeon', price: '$13.99', kName: '짜장면' },
    { name: 'Cold Buckwheat Noodles', price: '$12.99', kName: '물냉면' },
    { name: 'Spicy Buckwheat Noodles', price: '$13.99', kName: '비빔냉면' },
    { name: 'Ramen', price: '$8.99', kName: '라면' },
  ]
  const extrasLeft = [
    { name: 'Egg', price: '$0.99', kName: '게란' },
    { name: 'Cheese', price: '$2.99', kName: '치즈' },
    { name: 'Kimchi', price: '$1.99', kName: '김치' },
    { name: 'Pickled Radish', price: '$1.99', kName: '무' },
  ]
  const extrasRight = [
    { name: 'Bowl of Rice', price: '$1.99', kName: '밥' },
    { name: 'Noodles', price: '$1.99', kName: '면' },
    { name: 'Spam', price: '$2.99', kName: '스팸' },
  ]
  const specialsLeft = [
    { name: 'Braised Pigs Feet', price: '$21.99', kName: '죽발' },
    { name: 'Bossam', price: '$21.99', kName: '보쌈' },
    { name: 'Spicy Chicken Feet', price: '$19.99', kName: '닭발' },
    { name: 'Roasted Chicken Gizzards', price: '$17.99', kName: '닭똥집' },
  ]
  const specialsRight = [
    { name: 'Fried Chicken Cutlets', price: '$17.99', kName: '치킨까스' },
    { name: 'Fried Pork Cutlets', price: '$17.99', kName: '돈까스' },
    { name: 'Fried Cheese Pork Cutlets', price: '$18.99', kName: '치즈까스' },
    { name: 'Sweet and Sour Pork', price: '$19.99', kName: '탕수육' },
    { name: 'Stir-Fried Rice Cake', price: '$19.99', kName: '즉석떡밖이' },
  ]
  const friedChickenLeft = [
    { name: 'Old-Fashioned Fried Chicken', price: '$19.99', kName: '옛날통닭' },
    { name: 'Whole/Half', price: '$25.99/$15.99', kName: '한마리/반' },
    { name: 'Wings', price: '5pcs $12.99/10pcs $24.99', kName: '윙' },
    { name: 'Nuggets', price: '$12.99', kName: '너겟' },
    { name: 'Plus Corn Cheese Fondue', price: '$12.99', kName: '콘치즈 퐁듀 추가' },
  ]
  return (
    <Container fluid className='menuPageBackground'>
      {/* Appetizers 안주*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Appetizers 안주</h1>
        <Col md={{ span: 4, offset: 1 }} >
          {appetizersLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          {appetizersRight.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
      </Row>
      {/* BBQ 고기구이*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>BBQ 고기구이</h1>
        <Col md={{ span: 4, offset: 1 }} >
          {bbqLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          {bbqRight.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
      </Row>
      {/* Rice & Noodles 밥&면*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Rice & Noodles 밥&면</h1>
        <Col md={{ span: 4, offset: 1 }} >
          {riceAndNoodleLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          {riceAndNoodleRight.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
      </Row>
      {/* Extras 추가*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Extras 추가</h1>
        <Col md={{ span: 4, offset: 1 }} >
          {extrasLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          {extrasRight.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
      </Row>
      {/* Special Dish 특별요리*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Special Dish 특별요리</h1>
        <Col md={{ span: 4, offset: 1 }} >
          {specialsLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          {specialsRight.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
      </Row>
      {/* Fried Chicken 치킨  */}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Fried Chicken 치킨  </h1>
        <Col md={{ span: 8, offset: 2 }} >
          {friedChickenLeft.map((item) => {
            return (
              <p className='menuText'>{item.name} <span className='dollars'>{item.price}</span><br />{item.kName}</p>
            )
          })}
        </Col>
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <h2 className='menuHeading'>Sauces 소스</h2>
            <p className='menuText'>Plain 통닭<br />
              Korean Sweet and Spicy 양념<br />
              Korean Sweet and Extra Spicy 매운양념<br />
              Soy Garlic 마늘 간장</p>
          </Col>
        </Row>
      </Row>
      {/* Drinks */}
      <Row className='menuBackground mt-5 mb-5 mx-auto'>
        <h1 className='text-center menuHeading'>Drinks 음료수  </h1>
        <Row>
          <Col md={{ span: 4, offset: 1 }} >
            <h2 className='menuHeading'>Soju 소주 $14.99</h2>
            <p className='menuText'>
              Jinro Chamisul Original 진로 참이슬 오리지널 <br />
              Jinro Chamisul Fresh 진로 참이슬 프레쉬<br />
              Jinro Is Back 진로 이즈 백<br />
              Jinro 24 진로 24<br />
              Chum Churum 처음처럼<br />
              Han Ra San 17 한라산 17<br />
              Han Ra San 24 한라산 21<br />
              Jinro Poom 지로 일품
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }} >
            <h2 className='menuHeading'>Flavored Soju 과일 소주 $14.99</h2>
            <Row className='mt-3'>
              <Col md={{ span: 4 }} >
                <p className='menuText'>
                  Jinro Green Grape 진로 청포도<br />
                  Jinro Grapefruit 진로 자뭉<br />
                  Jinro Peach 진로 복숭아<br />
                  Jinro Strawberry 진로 딸기<br />
                  Jinro Plum 진로 자두
                </p><hr />
              </Col>
              <Col md={{ span: 4 }}>
                <p className='menuText'>
                  Soon Hari Yogurt 순하리 요거트<br />
                  Soon Hari Strawberry 순하리 딸기<br />
                  Soon Hari Citron 순하리 유자<br />
                  Soon Hari Apple 순하리 사과<br />
                </p><hr />
              </Col>
              <Col md={{ span: 4 }}>
                <p className='menuText'>
                  Good Day Coconut 좋은데이 코코넛<br />
                  Good Day Pineapple 좋은데이 파인애플<br />
                  Good Day Watermelon 좋은데이 수박<br />
                  Good Day Blueberry 좋은데이 블루베리<br />
                  Good Day Pomegranate 좋은데이 석류<br />
                  Good Day Cherry 좋은데이 체리<br />
                  Good Day Mango 좋은데이 망고<br />
                  Good Day Melon 좋은데이 멜론<br />
                  Good Day Lychee 좋은데이 리치
                </p><hr />
              </Col>
            </Row>

            <h2 className='menuHeading'>Soju Cocktail 소주 칵테일 $16.99</h2>
            <Row className='mt-3'>
              <Col md={{ span: 4 }} >
                <p className='menuText'>
                  Blueberry 블루베리 <br />
                  Dragon Fruit 용과<br />
                  Peach 복숭아<br />
                  Raspberry 산딸기<br />
                  Strawberry 딸기<br />
                  Watermelon 수박
                </p><hr />
              </Col>
              <Col md={{ span: 4 }}>
                <p className='menuText'>
                  Honeydew 단물<br />
                  Lychee 리치<br />
                  Pineapple 파인애플<br />
                  Guava 구아바<br />
                  Mango 망고<br />
                  Grapefruit 자몽
                </p><hr />
              </Col>
              <Col md={{ span: 4 }}>
                <p className='menuText'>
                  Orange 오렌지<br />
                  Green Apple 사과<br />
                  Grape 포도<br />
                  Passion Fruit 패셔프루트<br />
                  Kiwi 키위<br />
                  Pomegranate 석류
                </p><hr />
              </Col>
            </Row>
            <Row className='mt-3'>
              <h2 className='menuHeading'>Special Soju Cocktail 스페셜 소주 칵테일</h2>
              <Col md={{ span: 4 }}>
                <p className='menuText'>Whole Watermelon Soju <span className='specialCocktails'>$32.99</span><br />
                  Whole Pineapple Soju <span className='specialCocktails'>$22.99</span></p>
              </Col>
            </Row>
            <Row className='mt-3'>
              <h2 className='menuHeading'>Soju Sampler 소주 샘플러</h2>
              <Col md={{ span: 6 }}>
                <p className='menuText'>6 shots of flavored Soju 과일 소주 6잔 <span className='specialCocktails'>$18.99</span></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Menu