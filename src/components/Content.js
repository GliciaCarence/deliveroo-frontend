import React from "react";
import Cart from "./Cart";
import Cover from "./Cover";
import MenuItems from "./MenuItems";

const Content = ({ data, categories, addProduct, setAddProduct }) => {
   return (
      <section>
         <Cover data={data} />
         <div className="--Content">
            <div className="--Content--wrapper">
               <MenuItems
                  categories={categories}
                  addProduct={addProduct}
                  setAddProduct={setAddProduct}
               />
               <div>
                  <Cart addProduct={addProduct} setAddProduct={setAddProduct} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Content;
