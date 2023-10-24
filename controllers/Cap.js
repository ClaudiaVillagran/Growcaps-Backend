const Cap = require("../models/Cap");

async function createCap(req, res) {
  const { brand, price } = req.body;

  try {
    const newCap = new Cap({
      brand,
      price,
    });

    const savedCap = await newCap.save();

    res.status(201).json({
      status: "success",
      message: "Datos de la gorra",
      savedCap,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la gorra", error });
  }
}

async function getAllCaps(req, res) {
  try {
    const caps = await Cap.find();
    res.status(200).json({
      statusbar: "success",
      caps,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las Gorras", error });
  }
}

async function getCapById(req, res) {
  const capId = req.params.id;

  try {
    const cap = await Cap.findById(capId);
    if (!cap) {
      return res.status(404).json({ message: "Gorra no encontrada" });
    }
    res.status(200).json({
      status: "success",
      cap,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la cap", error });
  }
}

async function updateCapById(req, res) {
  const capId = req.params.id;
  const updateData = req.body;

  try {
    const capUpdated = await Cap.findByIdAndUpdate(capId, updateData, {
      new: true,
    });
    if (!capUpdated) {
      return res.status(404).json({ message: "Gorra no encontrada" });
    }
    res.status(200).json({
      status: "success",
      message: "Actualización realizada",
      cap: capUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el gorra", error });
  }
}

async function deleteCapById(req, res) {
  const capId = req.params.id;
  try {
    
    const capDeleted = await Cap.findByIdAndDelete(capId);
    if (!capDeleted) {
      return res.status(404).json({ message: "Gorra no encontrado" });
    }
    res.status(200).json({
      status: "success",
      message: "Gorra eliminado exitosamente",
      capDeleted,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el Gorra", error });
  }
}

module.exports = {
  createCap,
  getAllCaps,
  getCapById,
  deleteCapById,
  updateCapById,
};
