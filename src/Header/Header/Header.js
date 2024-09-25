import React from 'react'

export default function Header() {

  return (
    <div>
       <div class="header_bottom">
                <div class="content_left_header_bottom">
                    <h1>Order your favourite food</h1>
                    <p>Hamburger has many flavors, have you tried Cheese Beef Hamburger?</p>
                    <div class="order_food order_food_desktop">
                        <div class="text_price_order_food">
                            <span>Total Order :</span>
                            <span>$5.39</span>
                        </div>
                        <div class="action_order">
                            <div class="button_action_order">
                            <button id='inc_count_order'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 5V19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5 12H19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                </button>
                                <span id='order_count'>3</span>
                                <button id='dec_count_order'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                </button>
                            </div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9963 12C5.344 12 4.86633 12.6144 5.02717 13.2466L6.42488 18.7398C6.76319 20.0693 7.96032 21 9.33225 21H14.6652C16.0383 21 17.2362 20.0678 17.5734 18.7367L18.9644 13.2456C19.1245 12.6137 18.6469 12 17.9951 12H5.9963ZM9 16C9 15.4477 9.44771 15 10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44771 18 9 17.5523 9 17V16ZM13 16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V16Z" fill="#323232"/>
                                    <path d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z" fill="#323232"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.70711C11.0976 4.31658 11.0976 3.68342 10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289L8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711C8.68342 6.09763 9.31658 6.09763 9.70711 5.70711L10.7071 4.70711ZM13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L13.2929 4.70711Z" fill="#323232"/>
                                  </svg>
                                  Order now
                            </button>
                        </div>
                    </div>
                </div>
                <div class="content_right_header_bottom">
                    <img src="./img/Group 15.png" alt=""/>
                    <div class="fixed_box_delivery">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C11 13.2652 11.1054 13.5196 11.2929 13.7071L13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929L13 12.5858V9Z" fill="#323232"/>
                                <path d="M4.60006 5.30006C4.15823 5.63143 3.53143 5.54189 3.20006 5.10006C2.86869 4.65823 2.95823 4.03143 3.40006 3.70006L5.40006 2.20006C5.84189 1.86869 6.46869 1.95823 6.80006 2.40006C7.13143 2.84189 7.04189 3.46869 6.60006 3.80006L4.60006 5.30006Z" fill="#323232"/>
                                <path d="M18.6001 2.20018C18.1582 1.86881 17.5314 1.95835 17.2001 2.40018C16.8687 2.842 16.9582 3.46881 17.4001 3.80018L19.4001 5.30018C19.8419 5.63155 20.4687 5.542 20.8001 5.10018C21.1314 4.65835 21.0419 4.03155 20.6001 3.70018L18.6001 2.20018Z" fill="#323232"/>
                              </svg>
                              <span>Delivery</span>
                        </div>
                        <span> 30 mins</span>
                    </div>
                    <div class="order_food order_food_mobile">
                        <div class="text_price_order_food">
                            <span>Total Order :</span>
                            <span>$5.39</span>
                        </div>
                        <div class="action_order">
                            <div class="button_action_order">
                                <button id='inc_count_order'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 5V19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5 12H19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                </button>
                                <span id='order_count'>3</span>
                                <button id='dec_count_order'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19" stroke="#7D7C7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                </button>
                            </div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9963 12C5.344 12 4.86633 12.6144 5.02717 13.2466L6.42488 18.7398C6.76319 20.0693 7.96032 21 9.33225 21H14.6652C16.0383 21 17.2362 20.0678 17.5734 18.7367L18.9644 13.2456C19.1245 12.6137 18.6469 12 17.9951 12H5.9963ZM9 16C9 15.4477 9.44771 15 10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44771 18 9 17.5523 9 17V16ZM13 16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V16Z" fill="#323232"/>
                                    <path d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z" fill="#323232"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.70711C11.0976 4.31658 11.0976 3.68342 10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289L8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711C8.68342 6.09763 9.31658 6.09763 9.70711 5.70711L10.7071 4.70711ZM13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L13.2929 4.70711Z" fill="#323232"/>
                                  </svg>
                                  Order now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
