import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosService from '../hooks/useAxiosService';

const AddAsset = () => {
  const axiosService = useAxiosService();
  const [asset, setAsset] = useState({
    id: '',
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

  const saveAssetHandler = (e) => {
    e.preventDefault();
    axiosService
      .post('/asset', asset)
      .then((response) => {
        if (response.status === 201) {
          alert('Added asset successfully.');
        }
        console.log(response);
        nav('/assetList');
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setAsset({
      id: '',
      name: '',
      quantity: '',
      price: '',
      costBasis: '',
      notes: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Add New Asset</h1>
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
            onClick={saveAssetHandler}
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400
            hover:bg-red-700 px-6 py-2 shadow border-b-2"
          >
            Clear
          </button>
          <button
            onClick={() => nav('/assetList')}
            className="rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 px-5 py-2 shadow border-b-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAsset;
