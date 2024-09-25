import React from "react";
import Product from "./Product/Product";
export default function Off() {
  return (
    <div>
      <div class="section_off">
        <div class="container_site">
          <div class="row_title_section_food ">
            <h4>
              Sale off
              <div class="line_bottom_row_title"></div>
            </h4>
          </div>
          <div class="grid_foods_off">
            <Product
              title="Salad mixed vinegar"
              price="9.8"
              newPrice={8.9}
              img="img/13 (1).png"
              dec="buy 1 funny combo get 1 coca cola"
            />
            <Product
              title="Combo funny"
              price="10.3"
              newPrice={3.4}
              img="img/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png"
              dec="fried chicken"
            />
            <Product
              title="CHICKEN BUGGER"
              price="15.9"
              newPrice={13.2}
              img="img/20220905-113313 1.png"
              dec="buy 1 funny combo get 1 coca cola"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
