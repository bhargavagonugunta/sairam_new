import "./App.css";
import Home from "./components/home/Home";
import Specials from "./components/specials/Specials";
import AboutUsPage from "./components/Aboutus/AboutUsPage";
import ContactUsPage from "./components/contactus/ContactUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/home/header/Header.tsx";
import Footer from "./components/home/footer/Footer.tsx";
import { Provider } from "react-redux";
import store from "./store.tsx";
import RenewPromise from "./components/gifts/RenewPromise.tsx";
import Cart from "./components/home/header/header-comp/cart/Cart.tsx";
import SweetPage from "./components/ordernow/sweets/SweetPage.tsx";
import DryFruitsPage from "./components/ordernow/dryfruits/DryFruitsPage.tsx";
import NamkeenPage from "./components/ordernow/namkeen/NamkeenPage.tsx";
import CakesPage from "./components/ordernow/cakes/CakesPage.tsx";
import PaymentMode from "./components/Payments/paymentsmode/PaymentMode.tsx";
import OrderConfirmPage from "./components/Payments/paymentsmode/OrderConfirmpage.tsx";

function App() {
  return (
    <div className="max-w-screen">

    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/contactus"} element={<ContactUsPage />} />
          <Route path={"/shop"} element={<Specials />} />
          <Route path={"/contactus"} element={<Specials />} />
          <Route path={"/gifts"} element={<RenewPromise />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sweets" element={<SweetPage />}/>
          <Route path="/dryfruits" element={<DryFruitsPage />}/>
          <Route path="/namkeen" element={<NamkeenPage />} />
          <Route path="/cakes" element={<CakesPage />} />
          <Route path="/paymentmode" element={<PaymentMode />} />
          <Route path="/ordersuccess" element={<OrderConfirmPage />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
