const Investment = require('../models/Investment')

async function createInvestment (req, res) {
    const {date,amountProduct, amountSend} = req.body;
    try {
        const investment = new Investment({
            date,
            amountProduct,
            amountSend,
            nameClient,
            numberClient
        })
        const savedInvestment = await investment.save();
        res.status(201).json({
            status: "success",
            message: "Datos de la inversión",
            savedInvestment,
          });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la inversión", error });
    }
}

async function getAllInvestments (req, res) {
    try {
        const investment = await Investment.find();
        res.status(200).json({
          status: "success",
          investment,
        });
      } catch (error) {
        res.status(500).json({ message: "Error al obtener las inversiones", error });
      }
}


async function getInvestmentById(req, res) {
    const id = req.params.id;
  
    try {
      const investment = await Investment.findById(id);
  
      if (!investment) {
        return res.status(404).json({ message: "Inversion no encontrado" });
      }
      res.status(200).json({
        status: "success",
        message: "Datos de la inversion",
        investment,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la inversion", error });
    }
  }
  
  async function deleteInvestment(req, res) {
    const id = req.params.id;
  
    try {
      const investmentDeleted = await Investment.findByIdAndDelete(id);
  
      if (!investmentDeleted) {
        return res.status(404).json({ message: "Inversion no encontrado" });
      }
      res.status(200).json({
        status: "success",
        message: "Datos de la inversión",
        investmentDeleted,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar la inversion", error });
    }
  }
  
  async function updateInvestment(req, res) {
    const id = req.params.id;
    const updateData = req.body;
  
    try {
      const investmentUpdated = await Investment.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      if (!investmentUpdated) {
        return res.status(404).json({ message: "Inversión no encontrada" });
      }
      res.status(200).json({
        status: "success",
        message: "Actualización realizada",
        investment: investmentUpdated,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la inversión", error });
    }
  }
  module.exports ={
    createInvestment,
    getAllInvestments,
    getInvestmentById,
    updateInvestment,
    deleteInvestment
  }
  