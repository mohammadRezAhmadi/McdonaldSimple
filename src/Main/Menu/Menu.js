import React from "react";
import Category from "./Products/Category";
import Product from "./Products/Product";
export default function Menu() {
  const allProducts = [
    { title: "Cheese Beef Hamburger", img: "img/13 (1).png", price: 10.4 },
    {
      title: "Combo funny",
      img: "img/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png",
      price: 40.8,
    },
    {
      title: "‌Chicken with Spicy Sauce",
      img: "img/20220905-113313 1.png",
      price: 20.2,
    },
    { title: "‌Salad mixed vinegar", img: "img/2.png", price: 14.6 },
    { title: "Chicken burger", img: "img/13 (2).png", price: 18.9 },
    {
      title: "Lipton",
      img: "img/ice_tea_2021_11_30_16_48_46_utc 1.png",
      price: 4.7,
    },
  ];
  return (
    <div>
      <div className="section_food">
        <div className="container_site">
          <div className="row_title_section_food">
            <h4>
              Menu
              <div className="line_bottom_row_title"></div>
            </h4>
          </div>
          <div className="row_button_category">
            <Category className="button_active_category" />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
          <div className="row_grid_food_products">
            <Product {...allProducts[0]} />
            <Product {...allProducts[1]}>
              <div className="badge_discount">
                <img src='./img/Badge Discount (1).png'></img>
              </div>
            </Product>
            <Product {...allProducts[2]}>
            <div className="badge_discount">
                <img src='./img/Badge Discount (1).png'></img>
              </div>
            </Product>
            <Product {...allProducts[3]} />
            <Product {...allProducts[4]}>
            <div className="badge_discount">
                <img src='./img/Badge Discount (1).png'></img>
              </div>
            </Product>
            <Product {...allProducts[5]} />
          </div>
          <div className="see_all_food">
            <a href="#">See all</a>
          </div>
        </div>
      </div>
    </div>
  );
}
