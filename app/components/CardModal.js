import React from 'react';

const CardModal = ({
  show,
  onClose,
  handleSubmit,
  name,
  setName,
  description,
  setDescription,
  editMode,
}) => {
  return (
    show && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Close
          </button>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-600 mb-1">
                Title:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-sm text-gray-600 mb-1"
              >
                Description:
              </label>
              <input
                id="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              {editMode ? 'Update Item' : 'Add Item'}
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CardModal;
