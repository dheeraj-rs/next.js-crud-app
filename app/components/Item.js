import React from 'react';

const Item = ({ item, handleEdit, handleDelete }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">
          <span className="text-gray-600">Title:</span> {item.name}
        </h2>
        <p className="text-gray-800 mt-2">
          <span className="text-gray-600">Description:</span> {item.description}
        </p>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => handleEdit(item)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
