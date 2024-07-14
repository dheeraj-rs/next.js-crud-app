'use client';
import React, { useState, useEffect } from 'react';
import Item from './components/Item';
import CardModal from './components/CardModal';

const Home = () => {
  // Fixing the issue of data loss upon page refresh.
  // const [items, setItems] = useState(() => {
  //   const storedItems = localStorage.getItem('items');
  //   return storedItems ? JSON.parse(storedItems) : [];
  // });

  // Initialize state with data from localStorage, handling potential null values
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Initialize state with data from localStorage, handling potential null values

  // Load items from localStorage on the client side
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Please enter both name and description.');
      return;
    }
    if (editMode) {
      // Update existing item
      const updatedItems = items.map((item) =>
        item.id === currentId ? { ...item, name, description } : item
      );
      setItems(updatedItems);
    } else {
      // Add new item
      const newItem = {
        id: Date.now(), // Generate a unique ID (temporary solution)
        name,
        description,
      };
      setItems([...items, newItem]);
    }
    // Reset fields and close modal
    setName('');
    setDescription('');
    setEditMode(false);
    setCurrentId(null);
    setShowModal(false);
  };

  // Function to handle edit item
  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setEditMode(true);
    setCurrentId(item.id);
    setShowModal(true);
  };

  // Function to handle delete item
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Function to open modal
  const openModal = () => {
    setName('');
    setDescription('');
    setEditMode(false);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setName('');
    setDescription('');
    setEditMode(false);
    setShowModal(false);
  };

  return (
    <main className="w-screen h-screen p-4 bg-[rgba(220,242,247,0.33)]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">CRUD APP</h1>
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Item
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items?.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
        <CardModal
          show={showModal}
          onClose={closeModal}
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          editMode={editMode}
        />
      </div>
    </main>
  );
};

export default Home;
