import Netflix from "../../../assets/Netflix_2015_logo.svg";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <div className={scss.header}>
      <img src={Netflix} alt="" />
    </div>
  ); 
};

export default Header;
