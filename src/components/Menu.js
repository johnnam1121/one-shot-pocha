import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Menu.css'
import DarkerChalk from '../assets/DarkerChalk.jpeg';
import { appetizersLeft } from './MenuItems';
import { appetizersRight } from './MenuItems';
import { bbqLeft } from './MenuItems';
import { bbqRight } from './MenuItems';
import { riceAndNoodleLeft } from './MenuItems';
import { riceAndNoodleRight } from './MenuItems';
import { extrasLeft } from './MenuItems';
import { extrasRight } from './MenuItems';
import { specialsLeft } from './MenuItems';
import { specialsRight } from './MenuItems';
import { friedChicken } from './MenuItems';
import { soju } from './MenuItems';
import { jinroFlavoredSoju } from './MenuItems';
import { soonHariFlavoredSoju } from './MenuItems';
import { goodDayFlavoredSoju } from './MenuItems';
import { sojuCocktailLeft } from './MenuItems';
import { sojuCocktailCenter } from './MenuItems';
import { sojuCocktailRight } from './MenuItems';

function Menu() {
  return (
    <Container fluid className='menuPageBackground'>
      {/* Appetizers 안주*/}
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
        <Row>
          <h1 className='text-center menuHeading'>Appetizers 안주</h1>
        </Row>
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
        <h1 className='text-center menuHeading'>Fried Chicken 치킨  </h1>
        <Col md={{ span: 8, offset: 2 }} >
          {friedChicken.map((item) => {
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
      <Row className='menuBackground mt-5 mb-5 mx-auto'
        style={{
          backgroundImage: `url(${DarkerChalk})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}>
        <h1 className='text-center menuHeading'>Drinks 음료수  </h1>
        <Row>
          <Col md={{ span: 5, offset: 1 }} >
            <h2 className='menuHeading'>Soju 소주 $14.99</h2>
            {soju.map((item) => {
              return (
                <p className='menuText'>{item.name} {item.kName}</p>
              )
            })}
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }} >
            <h2 className='menuHeading'>Flavored Soju 과일 소주 $14.99</h2>
            <Row className='mt-3'>
              <Col md={{ span: 4 }} >
                {jinroFlavoredSoju.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
              </Col>
              <Col md={{ span: 4 }}>
                {soonHariFlavoredSoju.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
              </Col>
              <Col md={{ span: 4 }}>
                {goodDayFlavoredSoju.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
              </Col>
            </Row>
            <h2 className='menuHeading'>Soju Cocktail 소주 칵테일 $16.99</h2>
            <Row className='mt-3'>
              <Col md={{ span: 4 }} >
                {sojuCocktailLeft.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
              </Col>
              <Col md={{ span: 4 }}>
                {sojuCocktailCenter.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
              </Col>
              <Col md={{ span: 4 }}>
                {sojuCocktailRight.map((item) => {
                  return (
                    <p className='menuText'>{item.name} {item.kName}</p>
                  )
                })}<hr />
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