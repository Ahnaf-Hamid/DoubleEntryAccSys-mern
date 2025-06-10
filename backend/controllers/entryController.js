import entryModel from "../models/entryModel.js";

const addEntry = async (req, res) => {
  try {
    const { description, credit, debit } = req.body;
    const userId = req.userId;

    await entryModel.create({ userId, description, credit, debit });

    res.json({ success: true, msg: "Entry Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { _id } = req.body;
    const userId = req.userId;

    const deletedEntry = await entryModel.findOneAndDelete({ _id, userId });

    if (!deletedEntry) {
      return res.json({ success: false, msg: "entry not found" });
    }

    res.json({ success: true, msg: "entry deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const getEntry = async (req, res) => {
  try {
    const userId = req.userId;

    const entry = await entryModel.find({ userId });

    res.json({ success: true, entry });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { addEntry, deleteEntry, getEntry };
