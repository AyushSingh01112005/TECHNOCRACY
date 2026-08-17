import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Intro from "./Pages/Intro";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import FAQs from "./Pages/FAQs";
import Register from "./Pages/Register";
import Events from "./Pages/Events";

const App = () => {
    const location = useLocation();
    const hideNavbar = location.pathname === "/";

    return (
        <>
            {!hideNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/events" element={<Events />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;