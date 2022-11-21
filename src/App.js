import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddAsset from './components/AddAsset';
import AssetList from './components/AssetList';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import UpdateAsset from './components/UpdateAsset';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<AssetList />} />
          <Route path="/" element={<AssetList />} />
          <Route path="/assetList" element={<AssetList />} />
          <Route path="/addAsset" element={<AddAsset />} />
          <Route path="/updateAsset/:id" element={<UpdateAsset />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
