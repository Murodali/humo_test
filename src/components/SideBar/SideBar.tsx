import React, { FC } from "react";
import "./SideBar.scss";
import StorageIcon from "@mui/icons-material/Storage";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import RedeemIcon from "@mui/icons-material/Redeem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "../../assets/images/R.png";

const SideBar: FC = () => {
  return (
    <div className="sidebar">
      <div className="top_part">
        <div className="avatar">
          <img src={Logo} alt="no image" />
          <p>B</p>
        </div>

        <p>Test drive ltd</p>
        <p className="name">
          Bobo Doe <KeyboardArrowDownIcon />
        </p>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <StorageIcon /> Accounts
          </li>
          <li>
            <CreditCardIcon /> Cards
          </li>
          <li>
            <StorefrontIcon /> Merchant
            <p>new</p>
          </li>
          <li>
            <ArrowRightAltIcon /> Payments
            <p className="notification">6</p>
          </li>
          <li>
            <SubscriptionsIcon /> Subscriptions
            <p>new</p>
          </li>
          <li>
            <MenuBookIcon /> Expenses
          </li>
          <li>
            <AccountBalanceIcon /> Payroll
            <p>new</p>
          </li>
          <li>
            <ConnectWithoutContactIcon /> Connect
          </li>
          <li>
            <RedeemIcon /> Perks
          </li>
        </ul>
        <div className="referal_part">
          <p className="refferal">Refer a business</p>
          <div className="help">
            <p>Get Help</p> <p className="pink">new</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
