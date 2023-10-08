const Variable = require("../models/Variable");

const VariableController = {
  async createVariable(req, res, next) {
    try {
      const variable = await Variable.create(req.body);
      res.status(201).send({ message: "Variable creada con éxito", variable });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async getVariables(req, res) {
    try {
      const variables = await Variable.find();
      res.send(variables);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async getVariableById(req, res) {
    try {
      const variable = await Variable.findById(req.params.id);
      res.send(variable);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async updateVariable(req, res) {
    try {
      const updatedVariable = await Variable.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send({ message: "Variable actualizada con éxito", variable: updatedVariable });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async deleteVariable(req, res) {
    try {
      await Variable.findByIdAndDelete(req.params.id);
      res.send({ message: "Variable eliminada con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
};

module.exports = VariableController;
