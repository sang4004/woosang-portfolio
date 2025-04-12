import classNames from "classnames/bind";
import styles from "@/assets/sass/layout/header.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return <header className={cx("header")}>헤더 입니다.</header>;
};

export default Header;
