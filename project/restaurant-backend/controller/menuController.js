import MenuItem from "../models/MenuItem.js";

// GET /api/admin/menu?q=query
export const getMenuItems = async (req, res) => {
  try {
    const query = req.query.q || "";
    const items = await MenuItem.find({
      name: { $regex: query, $options: "i" },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching menu items", error });
  }
};

// POST /api/admin/menu
export const addMenuItem = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const newItem = new MenuItem({ name, price, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Error adding item", error });
  }
};

// PUT /api/admin/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating item", error });
  }
};

// DELETE /api/admin/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting item", error });
  }
};
