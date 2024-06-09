import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './componnents/Sidebar/SideBar';


const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h1>الرئيسية</h1>} />
            <Route path="/brands" element={<h1>العلامات التجارية</h1>} />
            <Route path="/products" element={<h1>المنتجات</h1>} />
            <Route path="/categories" element={<h1>الفئات</h1>} />
            <Route path="/users" element={<h1>المستخدمون</h1>} />
            <Route path="/contacts" element={<h1>جهات الإتصال</h1>} />
            <Route path="/settings" element={<h1>الإعدادات</h1>} />
            <Route path="/info" element={<h1>معلومات</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
