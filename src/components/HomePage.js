import React from 'react'
import Carousel from './Carousel'
import HomePagecard from './HomePagecard'

export default function HomePage() {
  return (
    <div>
        <Carousel/>
        <div className="grid grid-cols-3">        
            <HomePagecard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePagecard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePagecard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePagecard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePagecard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePagecard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePagecard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePagecard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
        </div>
    </div>
    
  )
}
