import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubscribeDetailPage from "./pages/SubScribeDetailPage";
import ChatPage from "./pages/ChatPage";
import ChatDetailPage from "./pages/ChatDetailPage";
import StorePage from "./pages/StorePage";
import StoreDetailPage from "./pages/StoreDetailPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import PayMentPage from "./pages/PayMentPage";
import PayCompletePage from "./pages/PayCompletePage";
import MorePage from "./pages/MorePage";
import GooTalkInfoPage from "./pages/GooTalkInfoPage";
import PointHistoryPage from "./pages/PointHistoryPage";
import ExChange from "./components/More/ExCahnge";
import Remittance from "./components/More/ Remittance";
import Like from "./components/More/Like";
import SubscribeHistory from "./components/More/SubscribeHistory";
import Credit from "./components/More/Credit";
import Report from "./components/More/Report";
import BankAccount from "./components/More/BankAccount";
import ExchangeComplete from "./components/More/ExchangeComplete";
import RemittanceComplete from "./components/More/RemittanceComplete";

function App({ index }: any) {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/subscribe" element={<SubscribeDetailPage />} />
            <Route path="/subscribe/*" element={<GooTalkInfoPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/store/Item" element={<ItemDetailPage />} />
            <Route
                path="/store/Detail/*"
                element={<StoreDetailPage index={index} />}
            />
            <Route path="/store/Pay" element={<PayMentPage />} />
            <Route path="store/PayComplete" element={<PayCompletePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chat/Detail" element={<ChatDetailPage />} />
            <Route path="/more" element={<MorePage />} />
            <Route path="/BPoint" element={<PointHistoryPage />} />
            <Route path="/exchange" element={<ExChange />} />
            <Route path="/exchange/complete" element={<ExchangeComplete />} />
            <Route path="/remittance" element={<Remittance />} />
            <Route
                path="/remittance/complete"
                element={<RemittanceComplete />}
            />
            <Route path="/like" element={<Like />} />
            <Route path="/subscribehistory" element={<SubscribeHistory />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/report" element={<Report />} />
            <Route path="/bankaccount" element={<BankAccount />} />
        </Routes>
    );
}

export default App;
