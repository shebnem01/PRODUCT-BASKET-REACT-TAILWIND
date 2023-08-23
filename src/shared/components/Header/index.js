import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selBasketList } from "shared/store/slice/basketSlice";

const Header = () => {
  const basketList = useSelector(selBasketList);
  const productCount=basketList.length;
  return (
    <header className="bg-green-600 text-white flex items-center gap-20 p-2 ">
      <div className="logo bg-red-600 p-3 rounded">
        <Link to="/">Fruit</Link>
      </div>
      <nav>
        <ul className="flex gap-10">
          <li>
            <NavLink className="hover:text-red-500" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-red-500 flex gap-3" to="/basket">
              Basket
              <div className="badge text-white bg-orange-800 text-xs font-medium p-1 rounded">{productCount}</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
