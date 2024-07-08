const mongoose = require("mongoose");

const Board = require("../models/board.model");
const List = require("../models/list.model");

module.exports = {
  createBoard: async (req, res) => {
    try {
      const board = await Board.create({
        _id: new mongoose.Types.ObjectId(),
        ...data,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          board,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  getBoards: async (req, res) => {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({
          message: "userId is required",
        });
      }

      const boards = await Board.find({
        userId,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          boards,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  editBoard: async (req, res) => {
    try {
      const data = req.body;
      const { boardId } = req.params;

      if (!boardId) {
        return res.status(400).json({
          message: "boardId is required",
        });
      }

      const board = await Board.findById(boardId);

      if (!board) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const newBoard = await Board.findByIdAndUpdate(boardId, {
        ...data,
      });

      if (!newBoard) {
        return res.status(500).json({
          message: "Update Error",
        });
      }

      return res.status(200).json({
        message: "Success",
        data: {
          board: newBoard,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  deleteBoard: async (req, res) => {
    try {
      const { boardId } = req.params;
      if (!boardId) {
        return res.status(400).json({
          message: "boardId is required",
        });
      }

      const board = await Board.findById(boardId);
      if (!board) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const status = await Board.findOneAndDelete(boardId);
      const lists = await List.find({
        boardId,
      });

      lists.map(async (item) => {
        return await List.findByIdAndDelete(item._id);
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
