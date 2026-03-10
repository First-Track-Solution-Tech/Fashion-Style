import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BottomNav from "./components/BottomNav";

import Home from "./pages/Home";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notifications from "./pages/Notifications";
import Category from "./pages/Category";

import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SizeGuide from "./pages/SizeGuide";
import NewArrivals from "./pages/NewArrivals";
import Sale from "./pages/Sale";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import TermsOfUses from "./pages/TermsOfUses";
import ReturnAndExchanges from "./pages/ReturnAndExchanges";
import RefundAndCancellation from "./pages/RefundAndCancellation";
import CategoryPage from "./components/CategoryPage";
import { WishlistProvider } from "./context/WishlistContext";

function AppContent() {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/register"];

  return (
    <>
      <ScrollToTop />

      {/* Top Navigation */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<Category />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        {/* Footer Pages */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUses />} />
        <Route path="/returns-exchanges" element={<ReturnAndExchanges />} />
        <Route path="/refund-cancellation" element={<RefundAndCancellation />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Bottom Mobile Navigation */}
      <BottomNav />

      {/* Hide footer on login/register */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </Router>
  );
}

export default App;
