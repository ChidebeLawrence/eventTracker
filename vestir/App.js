import { React, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Cart from "./components/cart/Cart";
import Notification from "./components/notification/Notification";
import Profile from "./components/profile/Profile";
import Login from "./components/profile/Login";
import Signup from "./components/profile/Signup";
import ErrorPage from "./components/ErrorPage";
import ForgottenPsw from "./components/profile/ForgottenPsw";

export const UserContext = createContext();

const App = () => {
  const totalItems = useSelector((state) => state.item.cart.length);

  const cart = useSelector((state) => state.item.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <header>VESTIR</header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgottenpsw" element={<ForgottenPsw />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

      <footer>
        <ul>
          <li>
            <NavLink to="/">
              <BiHomeCircle />
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <BsSearch />
            </NavLink>
          </li>
          <li>
            <NavLink to="cart">
              <FiShoppingBag />
              <span className="item-number">{totalItems}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="notification">
              <RiRulerLine />
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <CgProfile />
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
