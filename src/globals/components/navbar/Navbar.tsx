import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../../../store/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.carts);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchCartItems());
    setIsLoggedIn(!!token || !!user.token);
  }, [user.token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <header className="fixed w-full bg-[#f8f9fa] shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/public/assets/logo.jpg"
            alt="Naglo Logo"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <Link
            to="/"
            className="text-3xl font-serif text-[#343a40] hover:text-[#6c757d] transition"
          >
            Nanglo<span className="text-[#dc3545]">Mart</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-lg font-medium text-[#495057]">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="hover:text-[#6c757d] transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="hover:text-[#6c757d] transition"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/cart"
                className="relative flex items-center hover:text-[#6c757d] transition size-10"
              >
                <FaShoppingCart className="inline w-5 h-5 mr-1" />
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 bg-[#dc3545] text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {items.length}
                  </span>
                )}
              </Link>
              <Link
                to="/myorder"
                className="hover:text-[#6c757d] transition"
              >
                My Orders
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-[#6c757d] transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Decorative Christmas Bar */}
      <div className="w-full h-2 bg-[#dc3545]"></div>
    </header>
  );
};

export default Navbar;
