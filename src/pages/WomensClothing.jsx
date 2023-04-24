import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import GenderHero from "../components/GenderHero";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const WomensClothing = () => {
  const { products } = useContext(ProductContext);

  const filteredMensProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });

  return (
    <div>
      <GenderHero gender="Women's" />
      <section className="py-16 border-b ">
        <div className="container mx-auto">
          {/* location nav */}
          <div className="pb-8 flex md:block">
            <nav className="mx-auto px-4">
              <ol className="flex items-center gap-1 text-sm text-gray-600">
                <li>
                  <Link to="/">
                    <AiOutlineHome />
                  </Link>
                </li>
                <li>
                  <BiChevronRight />
                </li>
                <li>Women's clothing</li>
              </ol>
            </nav>
          </div>
          {/* displayed products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredMensProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomensClothing;
