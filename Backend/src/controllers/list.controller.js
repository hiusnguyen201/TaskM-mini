const mongoose = require("mongoose");

const List = require("../models/list.model");
const Card = require("../models/card.model");

module.exports = {
  createList: async (req, res) => {
    try {
      const data = req.body;

      const listCount = await List.countDocuments({
        boardId: data.boardId,
      });

      const newData = {
        ...data,
        position: +listCount + 1,
      };

      const list = await List.create({
        _id: new mongoose.Types.ObjectId(),
        ...newData,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          list,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  getLists: async (req, res) => {
    try {
      const { boardId } = req.body;

      if (!boardId) {
        return res.status(400).json({
          message: "boardId is required",
        });
      }

      const lists = await List.find({
        boardId,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          lists,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  editList: async (req, res) => {
    try {
      const data = req.body;
      const { listId } = req.params;

      if (!listId) {
        return res.status(400).json({
          message: "listId is required",
        });
      }

      const list = await List.findById(listId);

      if (!list) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const newList = await List.findByIdAndUpdate(listId, {
        ...data,
      });

      if (!newList) {
        return res.status(500).json({
          message: "Update Error",
        });
      }

      return res.status(200).json({
        message: "Success",
        data: {
          list: newList,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  deleteList: async (req, res) => {
    try {
      const { listId } = req.params;
      if (!listId) {
        return res.status(400).json({
          message: "listId is required",
        });
      }

      const list = await List.findById(listId);
      if (!list) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const afterLists = await List.find({
        _id: {
          $gt: listId,
        },
      });

      const status = await List.findOneAndDelete(listId);
      const cards = await Card.find({
        listId,
      });

      cards.map(async (item) => {
        return await Card.findByIdAndDelete(item._id);
      });

      afterLists.map(async (item) => {
        if (item.position == 1) {
          return;
        }

        return await List.findByIdAndUpdate(item._id, {
          position: +item.position - 1,
        });
      });

      return res.status(200).json({
        message: "Success",
        data: {
          status: !!status,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },
};
