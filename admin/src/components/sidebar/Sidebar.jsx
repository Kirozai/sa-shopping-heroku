import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  AttachMoney,
  MailOutline,
  AddOutlined
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem" >
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/analytics" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <AddOutlined className="sidebarIcon" />
              Add Product
            </li>
            </Link>
            <Link to="/transactions" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Orders
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/mails" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mails
            </li>
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
