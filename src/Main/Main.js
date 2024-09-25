import React from 'react'
import './Main.css'
import Menu from './Menu/Menu'
import Off from './Off/Off'
export default function Main() {

  return (
    <div>
      <main>
    <Menu />
    <Off />
    
    <div class="section_mobile_app">
            <div class="img_section_mobile_app">
                <img src="img/Group 22.png" alt=""/>
            </div>
            <div class="content_section_mobile_app">
                <h6>Exclusive offers and more</h6>
                <h4>MCDONALD’S MOBILE APP</h4>
                <p>As a global No. 1 fast food brand, McDonald's wishes to bring customers not only delicious and hygienic food of international standards but also the best service experience.</p>
                <div class="download_btn_app">
                    <a href="#">
                        <img src="img/ammount.png"  alt=""/>
                    </a>
                    <a href="#">
                        <img src="img/ammount (1).png"  alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div class="section_search_location">
            <div class="container_site">
                <div class="content_search_location">

                    <h6>FIND A FOODELI STORE NEAR YOU</h6>
                    <p>see the convenience store address with you most</p>
                    <form action="">
                        <input type="text" placeholder="Typing location"/>
                        <button type="submit">See on map</button>
                    </form>
                    <img src="img/location1.png"  alt=""/>
                    <img src="img/location2.png" alt=""/>
                </div>
            </div>
            </div>
      </main>
    </div>
  )
}
