import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AssetService from '../services/AssetService';

const UpdateAsset = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState({
    id: id,
    name: '',
    quantity: '',
    price: '',
    costBasis: '',
    notes: '',
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setAsset({ ...asset, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchAssetById = async () => {
      try {
        const response = await AssetService.getAssetById(id);
        setAsset(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAssetById();
  }, [id]);

  const updateAsset = (e) => {
    e.preventDefault();
    AssetService.updateAsset(asset, id)
      .then((response) => {
        if (response.status === 200) {
          alert('Updated asset successfully.');
        }
        console.log(response);
        nav('/assetList');
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Update Asset</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Symbol / Name
          </label>
          <input
            type="text"
            name="name"
            value={asset.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={asset.quantity}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">Price</label>
          <input
            type="text"
            name="price"
            value={asset.price}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Cost Basis
          </label>
          <input
            type="text"
            name="costBasis"
            value={asset.costBasis}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">Notes</label>
          <input
            type="text"
            name="notes"
            value={asset.notes}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="flex item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateAsset}
            className="rounded text-white font-semibold bg-blue-400
        hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            Update
          </button>
          <button
            onClick={() => nav('/assetList')}
            className="rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 px-6 py-2 shadow border-b-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAsset;
