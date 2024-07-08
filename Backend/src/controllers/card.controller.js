const mongoose = require("mongoose");

const Card = require("../models/card.model");

module.exports = {
  createCard: async (req, res) => {
    try {
      const data = req.body;

      const cardCount = await Card.countDocuments({
        listId: data.listId,
      });

      const newData = {
        ...data,
        position: +cardCount + 1,
      };

      const card = await Card.create({
        _id: new mongoose.Types.ObjectId(),
        ...newData,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          card,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  getCards: async (req, res) => {
    try {
      const { listId } = req.body;

      if (!listId) {
        return res.status(400).json({
          message: "listId is required",
        });
      }

      const cards = await Card.find({
        listId,
      });

      return res.status(200).json({
        message: "Success",
        data: {
          cards,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  editCard: async (req, res) => {
    try {
      const data = req.body;
      const { cardId } = req.params;

      if (!cardId) {
        return res.status(400).json({
          message: "cardId is required",
        });
      }

      const card = await Card.findById(cardId);

      if (!card) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const newCard = await Card.findByIdAndUpdate(cardId, {
        ...data,
      });

      if (!newCard) {
        return res.status(500).json({
          message: "Update Error",
        });
      }

      return res.status(200).json({
        message: "Success",
        data: {
          list: newCard,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err._message,
      });
    }
  },

  deleteCard: async (req, res) => {
    try {
      const { cardId } = req.params;
      if (!cardId) {
        return res.status(400).json({
          message: "cardId is required",
        });
      }

      const card = await Card.findById(cardId);
      if (!card) {
        return res.status(400).json({
          message: "Not Found",
        });
      }

      const afterCards = await Card.find({
        _id: {
          $gt: cardId,
        },
      });

      const status = await Card.findOneAndDelete(cardId);

      afterCards.map(async (item) => {
        if (item.position == 1) {
          return;
        }

        return await Card.findByIdAndUpdate(item._id, {
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
