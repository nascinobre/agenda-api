import { Router } from "express";
import Agenda from "../database/Agenda.js";
const agendaRoutes = Router();

agendaRoutes.get("/agendas", async (req, res) => {
  try {
    const agenda = await Agenda.findAll();
    res.json(agenda);
  } catch (erro) {
    res.status(500).json({
      mensagem: "erro interno no servidor",
    });
  }
});

agendaRoutes.get("/agenda/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (agenda) {
      res.json(agenda);
    } else {
      res.status(404).json({
        mensagem: "agenda nao encontrada",
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "erro interno no servidor",
    });
  }
});

agendaRoutes.post("/agenda", async (req, res) => {
  try {
    const dados = req.body;
    const salvo = await Agenda.create(dados);
    res.json(salvo);
  } catch (erro) {
    res.status(500).json({
      mensagem: "erro interno no servidor",
    });
  }
});

agendaRoutes.put("/agenda/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;
    const agenda = await Agenda.findByPk(id);

    if (agenda) {
      await agenda.update(dados);
      res.json(agenda);
    } else {
      res.status(404).json({
        mensagem: "agenda nao encontrada",
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});
agendaRoutes.delete("/agenda/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agenda = await Agenda.findByPk(id);

    if (agenda) {
      await agenda.destroy();
      res.json({ mensagem: "Agenda removida." });
    } else {
      res.status(404).json({
        mensagem: "Agenda não encontrada.",
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

export default agendaRoutes;
