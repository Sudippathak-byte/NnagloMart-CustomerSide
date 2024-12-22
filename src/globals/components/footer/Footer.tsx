import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#343a40] py-10 flex flex-col justify-center items-center text-white">
      <div>
        <span className="text-sm">
          © 2024
          <span className="text-[#dc3545]"> Nanglo Mart.</span> All Rights
          Reserved.
        </span>
      </div>
      <div>
        <ul className="flex flex-wrap text-[#6c757d] gap-3 font-semibold">
          <li>
            <Link
              to="#"
              className="hover:text-[#dc3545] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:text-[#dc3545] transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:text-[#dc3545] transition duration-300"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
