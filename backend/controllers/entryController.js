import entryModel from "../models/entryModel.js";

const addEntry = async (req, res) => {
  try {
    const {description,credit,debit} = req.body
    const userId = req.userId

    await entryModel.create({userId,description,credit,debit})

    res.json({success:true,msg:"Entry Added"})

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const deleteEntry = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const getEntry = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { addEntry, deleteEntry, getEntry };
