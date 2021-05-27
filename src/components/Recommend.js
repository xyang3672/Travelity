import React from 'react'
import Card from './Card';
import './Recommend.css'

function recommend() {
    return (
        <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <Card
                src='images/san-francisco.jpg'
                text='Find out what to do, where to go, where to stay and what to eat in NYC from the experts who know it best'
                label='San Francisco'
                path='/discover'
              />
              <Card
                src='images/nyc.jpg'
                text='One of the world’s leading metropolises for art, fashion, food and theater'
                label='New York City'
                path='/discover'
              />
            </ul>
            <ul className='cards__items'>
              <Card
                src='images/norway.jpg'
                text='The happiest place on Earth'
                label='Norway'
                path='/discover'
              />
              <Card
                src='images/iceland.jpg'
                text='Experience the stunning natural beauty'
                label='Iceland'
                path='/discover'
              />
              <Card
                src='images/london.jpg'
                text='Famous for its art, architecture, food and fashion'
                label='London'
                path='/discover'
              />
            </ul>
            <ul className='cards__items'>
              <Card
                src='images/china.jpg'
                text='Biggest city and a global financial hub in China'
                label='shanghai'
                path='/discover'
              />
              <Card
                src='images/japan.jpg'
                text='Experience the Japanese culture and cherry blossom'
                label='Japan'
                path='/discover'
              />
              <Card
                src='images/korea.jpg'
                text='Fashion and Food'
                label='Korea'
                path='/discover'
              />
              <Card
                src='images/bali.jpg'
                text='Incredible view of ocean'
                label='Bali Indonesia'
                path='/discover'
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default recommend
