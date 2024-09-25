import React from 'react'

export default function Nav() {

function darkmodeHandler(){
  document.body.classList.toggle("dark");
  let attr = document.body.className;
  if(attr === "dark"){
    localStorage.setItem("theme" , "dark");
  }
  else{
    localStorage.setItem( "theme", "light")
  }
};

window.onload = function(){
    let theme = localStorage.getItem("theme");
    if(theme === "dark"){
        document.body.className = "dark";
    }
};
  return (
    <div>
       <div class="navgation">
               <img src="./img/lgo.png" alt=""/>
              <ul>
                <li>
                    <a href="">Homepage</a>
                </li>
                <li>
                    <a href="">Menu</a>
                </li>
                <li>
                    <a href="">Sale off</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
              </ul>
              <div class="link_navgation">
              <div class="switch" onClick={darkmodeHandler}>
                <div class="flicker"></div>
                <div class="moon"></div>
                  </div>
                  <div class='links'>
                   <a href="#">Sign in</a>
                <a href="#">Logn in</a>
                  </div>
              </div>
              <div class="menu_icon">
                <input type="checkbox" id="input_menu" hidden/>
                <label for="input_menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M2.91675 20.4166C2.91675 19.6112 3.56967 18.9583 4.37508 18.9583H30.6251C31.4305 18.9583 32.0834 19.6112 32.0834 20.4166C32.0834 21.2221 31.4305 21.875 30.6251 21.875H4.37508C3.56967 21.875 2.91675 21.2221 2.91675 20.4166Z" fill="#504F4F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 14.5833C4.375 9.75082 8.29251 5.83331 13.125 5.83331H21.875C26.7075 5.83331 30.625 9.75082 30.625 14.5833C30.625 15.3887 29.9721 16.0416 29.1667 16.0416H5.83333C5.02792 16.0416 4.375 15.3887 4.375 14.5833ZM13.125 11.6666C13.125 12.4721 12.4721 13.125 11.6667 13.125C10.8613 13.125 10.2083 12.4721 10.2083 11.6666C10.2083 10.8612 10.8613 10.2083 11.6667 10.2083C12.4721 10.2083 13.125 10.8612 13.125 11.6666ZM17.5 13.125C18.3054 13.125 18.9583 12.4721 18.9583 11.6666C18.9583 10.8612 18.3054 10.2083 17.5 10.2083C16.6946 10.2083 16.0417 10.8612 16.0417 11.6666C16.0417 12.4721 16.6946 13.125 17.5 13.125ZM24.7917 11.6666C24.7917 12.4721 24.1388 13.125 23.3333 13.125C22.5279 13.125 21.875 12.4721 21.875 11.6666C21.875 10.8612 22.5279 10.2083 23.3333 10.2083C24.1388 10.2083 24.7917 10.8612 24.7917 11.6666Z" fill="#504F4F"/>
                        <path d="M30.625 26.25C30.625 27.8608 29.3192 29.1666 27.7083 29.1666H7.29167C5.68083 29.1666 4.375 27.8608 4.375 26.25C4.375 25.4446 5.02792 24.7916 5.83333 24.7916H29.1667C29.9721 24.7916 30.625 25.4446 30.625 26.25Z" fill="#504F4F"/>
                      </svg>

                      <svg id="close_icon" class="w-6 h-6 text-gray-800 dark:text-white"  width="35" height="35" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                </label>
                <ul class="nav_menu_sidbar">
                    <li>
                        <a href="">Homepage</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Sale off</a>
                    </li>
                    <li>
                        <a href="">News</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                  </ul>
              </div>
            </div>
    </div>
  )
}
