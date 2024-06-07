import { Outlet } from "react-router-dom";
import { Navbar } from '../common/Navbar';
import './App.css';

const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        {
            name: "Gallery", path: "/gallery", children: [
                { name: "Gallery 1", path: "/gallery/1" },
                { name: "Gallery 2", path: "/gallery/2" },
            ]
        },
        { name: "Contact", path: "/contact" },
    ];

export default function App() {
  return (
      <div className="App">
          <Navbar title="My React App" menus={menuItems} />
          <Outlet />
      </div>
  );
}
