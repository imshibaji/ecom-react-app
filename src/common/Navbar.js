import { Link } from "react-router-dom";
import { CartContext } from '../components/CartContext';
import { useContext } from 'react';
export function Navbar({ title, menus }) {
    const { cart } = useContext(CartContext);
    return (
        <div className="navbar bg-base-100 md:px-20 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100  rounded-box w-52">
                        {menus.map(menu => (
                            <li className="" key={menu.name}>
                                {menu.children ? (
                                    <>
                                        <Link className="hover:text-cyan-400" to={menu.path}>{menu.name}</Link>
                                        <ul className="p-2">
                                            {menu.children.map(subMenu => (
                                                <li key={subMenu.name}><Link to={subMenu.path}>{subMenu.name}</Link></li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link to={menu.path}>{menu.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl text-cyan-400" to="/">{title || 'React App'}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {menus.map(menu => (
                        <li key={menu.name}>
                            {menu.children ? (
                                <details>
                                    <summary className="hover:text-cyan-400">{menu.name}</summary>
                                    <ul className="p-2">
                                        {menu.children.map(subMenu => (
                                            <li key={subMenu.name}><Link className="hover:text-cyan-400 w-40" to={subMenu.path}>{subMenu.name}</Link></li>
                                        ))}
                                    </ul>
                                </details>
                            ) : (
                                <Link className="hover:text-cyan-400" to={menu.path}>{menu.name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn" to="/cart">Cart({cart.length})</Link>
            </div>
        </div>
    );
}
