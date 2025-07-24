/*import Category from "../models/category.js";

// GET all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// POST new category
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name });
    const saved = await newCategory.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Category already exists or invalid" });
  }
};

// PUT update category
export const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update category" });
  }
};

// DELETE category
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};
*/