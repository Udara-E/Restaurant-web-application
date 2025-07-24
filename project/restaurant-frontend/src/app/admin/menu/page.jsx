
"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Pencil, Trash2, Plus, X, Check } from "lucide-react";
import axios from "axios";

const MenuPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [categories, setCategories] = useState(["Appetizer", "Main Course", "Dessert", "Drinks"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [editCategoryIndex, setEditCategoryIndex] = useState(null);
  const [editedCategory, setEditedCategory] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [editItemId, setEditItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({ name: "", price: "", category: "" });

  const fetchItems = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/admin/menu?q=${searchQuery}`);
      if (res && res.data) setItems(res.data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [searchQuery]);

  const showMessage = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: "", message: "" }), 3000);
  };

  const addItem = async () => {
    if (newItem.trim() && newPrice.trim() && newCategory.trim()) {
      const parsedPrice = parseFloat(newPrice);
      if (isNaN(parsedPrice)) return showMessage("error", "Please enter a valid price");

      try {
        const res = await axios.post("http://localhost:5000/api/admin/menu", {
          name: newItem,
          price: parsedPrice,
          category: newCategory,
        });
        setItems((prev) => [...prev, res.data]);
        setNewItem("");
        setNewPrice("");
        setNewCategory("");
        showMessage("success", "Item added successfully");
      } catch (error) {
        showMessage("error", "Failed to add item");
      }
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/menu/${id}`);
      setItems((prev) => prev.filter((item) => item._id !== id));
      showMessage("success", "Item deleted successfully");
    } catch (error) {
      showMessage("error", "Failed to delete item");
    }
  };

  const handleEditClick = (item) => {
    setEditItemId(item._id);
    setEditedItem({ name: item.name, price: item.price, category: item.category });
  };

  const confirmUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/admin/menu/${editItemId}`, editedItem);
      setItems((prev) => prev.map((item) => (item._id === editItemId ? res.data : item)));
      setEditItemId(null);
      showMessage("success", "Item updated successfully");
    } catch (error) {
      showMessage("error", "Failed to update item");
    }
  };

  const addCategory = () => {
    if (newCatName.trim() && !categories.includes(newCatName)) {
      setCategories((prev) => [...prev, newCatName]);
      setNewCatName("");
      setShowCategoryModal(false);
      showMessage("success", "Category added");
    } else {
      showMessage("error", "Category exists or invalid");
    }
  };

  const updateCategory = (index) => {
    if (!editedCategory.trim()) return showMessage("error", "Category name cannot be empty");
    if (categories.includes(editedCategory)) return showMessage("error", "Category already exists");

    const updated = [...categories];
    updated[index] = editedCategory;
    setCategories(updated);
    setEditCategoryIndex(null);
    setEditedCategory("");
    showMessage("success", "Category updated");
  };

  const deleteCategory = (index) => {
    const catToDelete = categories[index];
    const hasItems = items.some(item => item.category === catToDelete);
    if (hasItems) return showMessage("error", "Cannot delete category in use");

    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);
    showMessage("success", "Category deleted");
  };

  return (
    <AdminLayout>
      <div className="p-6 m-4 w-full bg-white rounded shadow relative">
        <h1 className="text-xl font-semibold mb-4">Menu Management</h1>

        {alert.message && (
          <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow text-white z-50 transition-opacity duration-500 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}>
            {alert.message}
          </div>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search menu items..."
            className="border p-2 rounded w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <input
            type="text"
            className="border p-2 rounded w-full sm:w-1/3"
            placeholder="New menu item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-full sm:w-1/5"
            placeholder="Price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <select
            className="border p-2 rounded w-full sm:w-1/4"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={addItem}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
          <button
            onClick={() => setShowCategoryModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" /> New Category
          </button>
        </div>

        {showCategoryModal && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white border rounded shadow-lg p-4 z-20 w-full max-w-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Manage Categories</h2>
              <X
                className="cursor-pointer text-gray-600 hover:text-black"
                onClick={() => {
                  setShowCategoryModal(false);
                  setEditCategoryIndex(null);
                  setEditedCategory("");
                }}
              />
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto mb-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  {editCategoryIndex === idx ? (
                    <>
                      <input
                        type="text"
                        className="border p-1 rounded w-full"
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                      />
                      <button onClick={() => updateCategory(idx)} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
                      <button onClick={() => setEditCategoryIndex(null)} className="bg-gray-300 px-2 py-1 rounded">Cancel</button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1">{cat}</span>
                      <button onClick={() => { setEditCategoryIndex(idx); setEditedCategory(cat); }} className="text-blue-500">Edit</button>
                      <button onClick={() => deleteCategory(idx)} className="text-red-500">Delete</button>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="New category name"
              />
              <button
                onClick={addCategory}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        )}

        <ul>
          {items.length > 0 ? (
            items.map((item) => (
              <li
                key={item._id}
                className="flex flex-wrap sm:flex-nowrap justify-between items-center py-2 border-b gap-2"
              >
                {editItemId === item._id ? (
                  <>
                    <input
                      className="border px-2 py-1 rounded w-full sm:w-1/3"
                      value={editedItem.name}
                      onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                    />
                    <input
                      type="number"
                      className="border px-2 py-1 rounded w-full sm:w-1/5"
                      value={editedItem.price}
                      onChange={(e) => setEditedItem({ ...editedItem, price: e.target.value })}
                    />
                    <select
                      className="border px-2 py-1 rounded w-full sm:w-1/4"
                      value={editedItem.category}
                      onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <Check className="text-green-600 cursor-pointer" onClick={confirmUpdate} />
                      <X className="text-gray-600 cursor-pointer" onClick={() => setEditItemId(null)} />
                    </div>
                  </>
                ) : (
                  <>
                    <span className="w-full sm:w-1/3">{item.name}</span>
                    <span className="w-full sm:w-1/5">RS.{item.price}</span>
                    <span className="w-full sm:w-1/4">{item.category}</span>
                    <div className="flex gap-2">
                      <Pencil className="text-blue-600 cursor-pointer" onClick={() => handleEditClick(item)} />
                      <Trash2 className="text-red-600 cursor-pointer" onClick={() => deleteItem(item._id)} />
                    </div>
                  </>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500 mt-2">No items match your search.</p>
          )}
        </ul>
      </div>
    </AdminLayout>
  );
};

export default MenuPage;
