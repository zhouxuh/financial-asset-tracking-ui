import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import useAxiosService from '../hooks/useAxiosService';
import Asset from './Asset';
import useAuth from '../hooks/useAuth';

const AssetList = () => {
  const nav = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const [loading, setloading] = useState(true);
  const [assets, setAssets] = useState(null);
  const axiosService = useAxiosService();

  useEffect(() => {
    const getAllAssets = async () => {
      setloading(true);
      try {
        const response = await axiosService.get('/assets');
        setAssets(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    getAllAssets();
  }, [axiosService]);

  const deleteAssetHandler = (e, id) => {
    e.preventDefault();
    axiosService.delete('/asset/' + id).then((response) => {
      if (assets) {
        setAssets((prevAsset) => {
          return prevAsset.filter((asset) => asset.id !== id);
        });
      }
    });
  };

  const logout = async () => {
    setAuth({});
    nav('/linkpage');
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12 flex space-x-4 items-center justify-end">
        <div className="font-bold text-blue-500 text-xl">
          Hi {auth.userName}
        </div>
        <button
          onClick={() => nav('/addAsset')}
          className="rounded bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow border-b-2"
        >
          Add New Asset
        </button>
        <button
          onClick={() => nav('/')}
          className="rounded bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow border-b-2"
        >
          Linkpage
        </button>
        <button
          onClick={logout}
          className="rounded bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-semibold shadow border-b-2"
        >
          Log Out
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Asset Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Quantity
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Price
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Market Value
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Cost Basis
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Gain / Loss
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Notes
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Operations
              </th>
            </tr>
          </thead>
          {!loading && assets && (
            <tbody className="bg-white">
              {assets.map((asset) => (
                <Asset
                  asset={asset}
                  key={asset.id}
                  deleteAsset={deleteAssetHandler}
                ></Asset>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {!assets && (
        <div className="text-center font-medium text-gray-500 uppercase tracking-wider py-5 px-6">
          <p> No asset found.</p>
        </div>
      )}
    </div>
  );
};

export default AssetList;
