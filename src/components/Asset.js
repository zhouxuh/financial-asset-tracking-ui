import React from 'react';
import { useNavigate } from 'react-router-dom';

const Asset = ({ asset, deleteAsset }) => {
  const nav = useNavigate();
  const editAsset = (e, id) => {
    e.preventDefault();
    nav(`/updateAsset/${id}`);
  };

  return (
    <tr key={asset.id}>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{asset.name}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-">
        <div className="text-lg text-gray-500">{asset.quantity}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">${asset.price}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">
          ${(asset.price * asset.quantity).toLocaleString()}
        </div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">${asset.costBasis}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">
          ${((asset.price - asset.costBasis) * asset.quantity).toLocaleString()}
        </div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{asset.notes}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-base space-x-4">
        <button
          onClick={(e) => editAsset(e, asset.id)}
          className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
        >
          Edit
        </button>
        <button
          onClick={(e) => deleteAsset(e, asset.id)}
          className="rounded text-white font-semibold bg-red-400
            hover:bg-red-700 px-5 py-2 shadow border-b-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Asset;
