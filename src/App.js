import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddAsset from './components/AddAsset';
import AssetList from './components/AssetList';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateAsset from './components/UpdateAsset';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import Admin from './components/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          element={<RequireAuth allowedRoles={['ROLE_USER', 'ROLE_ADMIN']} />}
        >
          <Route path="/assetList" element={<AssetList />} />
          <Route path="/addAsset" element={<AddAsset />} />
          <Route path="/updateAsset/:id" element={<UpdateAsset />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={['ROLE_ADMIN']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route index element={<LinkPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/linkpage" element={<LinkPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default App;
