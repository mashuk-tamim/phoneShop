import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between py-8 shadow-md px-5">
                <Logo></Logo>
                <ul className="flex justify-end gap-10 text-xl">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;