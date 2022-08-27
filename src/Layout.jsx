import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen light-dark-theme">
      <NavBar />
      <div className="">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
