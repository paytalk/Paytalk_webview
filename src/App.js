import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SubscribeDetailPage from './pages/SubScribeDetailPage';
import ChatPage from './pages/ChatPage';
import ChatDetailPage from './pages/ChatDetailPage';
import { useEffect } from 'react';
import StorePage from './pages/StorePage';
import StoreDetailPage from './pages/StoreDetailPage';
import ItemDetailPage from './pages/ItemDetailPage';
import PayMentPage from './pages/PayMentPage';
import PayCompletePage from './pages/PayCompletePage';


function App() {



  return (
    <Routes>
      <Route path='/' element ={<MainPage />} />
      <Route path='/subscribe' element={<SubscribeDetailPage />} />
      <Route path = '/store' element = {<StorePage />} />
      <Route path = '/store/Item' element = {<ItemDetailPage />} />
      <Route path = '/store/Detail' element ={<StoreDetailPage />} />
      <Route path = '/store/Pay' element = {<PayMentPage />} />
      <Route path = 'store/PayComplete' element = { <PayCompletePage />} />
      <Route path ='/chat' element= { <ChatPage />} />
      
      <Route path ='/chat/*' element = {<ChatDetailPage />} />
    </Routes>
  );
}

export default App;
