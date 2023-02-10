import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";
import "./Transition.css";
import MainPage from "./pages/MainPage";
import SubscribeDetailPage from "./pages/SubScribeDetailPage";
import { useMemo, useState } from "react";
import StorePage from "./pages/StorePage";
import StoreDetail from "./components/Store/StoreDetail";
import ItemDetailPage from "./pages/ItemDetailPage";
import { useSelector } from "react-redux";

const Transition = () => {
    const location = useLocation();

    const previousPath = localStorage.getItem("path");
    const animation = useSelector((state: any) => state.urlDepth);
    const [urlDepth, setUrlDepth] = useState(0);
    useMemo(() => {
        setUrlDepth(location.pathname.split("/").length - 1);
        console.log(localStorage);
    }, [location.pathname]);

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                classNames={animation}
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/store/detail/*" element={<StoreDetail />} />
                    <Route path="/store/item/*" element={<ItemDetailPage />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Transition;
