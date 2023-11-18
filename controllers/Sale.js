const Sale = require("../models/Sale");
const Cap = require("../models/Cap");

async function createSale(req, res) {
  const { date, quantity, typeSale, total, nameClient, numberClient } = req.body;
  try {
    
    const sale = new Sale({
      date,
      quantity,
      typeSale,
      total,
      nameClient,
      numberClient
    });
    const savedSale = await sale.save();

    res.status(201).json({
      status: "success",
      message: "Datos de la venta",
      savedSale,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la venta", error });
  }
}

async function getAllSales(req, res) {
  try {
    const sale = await Sale.find();
    res.status(200).json({
      status: "success",
      sale,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las ventas", error });
  }
}

async function getSaleById(req, res) {
  const saleId = req.params.id;

  try {
    const sale = await Sale.findById(saleId);

    if (!sale) {
      return res.status(404).json({ message: "Venta no encontrado" });
    }
    res.status(200).json({
      status: "success",
      message: "Datos de la venta",
      sale,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la venta", error });
  }
}

async function deleteSale(req, res) {
  const saleId = req.params.id;

  try {
    const saleDeleted = await Sale.findByIdAndDelete(saleId);

    if (!saleDeleted) {
      return res.status(404).json({ message: "Venta no encontrado" });
    }
    res.status(200).json({
      status: "success",
      message: "Datos de la venta",
      saleDeleted,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la venta", error });
  }
}

async function updateSale(req, res) {
  const saleId = req.params.id;
  const updateData = req.body;

  try {
    const saleUpdated = await Sale.findByIdAndUpdate(saleId, updateData, {
      new: true,
    });
    if (!saleUpdated) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.status(200).json({
      status: "success",
      message: "Actualización realizada",
      sale: saleUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la venta", error });
  }
}
module.exports ={
  createSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale
}

