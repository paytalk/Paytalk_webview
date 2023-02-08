import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Transition.css";
import MainPage from "./pages/MainPage";
import SubscribeDetailPage from "./pages/SubScribeDetailPage";
import { useEffect, useState } from "react";
import StorePage from "./pages/StorePage";
import StoreDetail from "./components/Store/StoreDetail";

const Transition = () => {
    const location = useLocation();
    const [now, setNow] = useState<string>("");
    const [animation, setAnimation] = useState<string>("left");
    useEffect(() => {
        setNow(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        if (now === "/store/detail") {
            setAnimation("prev");
        }
        if (now === "/store") {
            setAnimation("next");
        }
    }, [now]);

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                classNames={animation}
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/store/detail" element={<StoreDetail />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Transition;
