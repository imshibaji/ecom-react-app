import { Link } from "react-router-dom";

export function Navbar({ title,menus }) {
    const menusItems = menus ||  [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Gallery", path: "/gallery", children: [
            { name: "Gallery 1", path: "/gallery/1" },
            { name: "Gallery 2", path: "/gallery/2" },
        ]},
        { name: "Contact", path: "/contact" },
    ];
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menusItems.map(menu => <li key={menu.name}><Link to={menu.path}>{menu.name}</Link></li>)}
                        <li><Link>Item 1</Link></li>
                        <li>
                            <Link>Parent</Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">{title || 'React App'}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menusItems.map(menu => <li key={menu.name}><Link to={menu.path}>{menu.name}</Link></li>)}
                    <li><Link>Item 1</Link></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link>Item 3</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Button</Link>
            </div>
        </div>
    );
}