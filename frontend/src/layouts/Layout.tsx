import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout  = () => {
  return (
    <div className="min-h-screen flex flex-col">
       <Header />
       <Hero />
    </div>
  );
}

export default Layout;