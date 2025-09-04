const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  try {
    const { title, done } = req.body;
    const owner = req.user.id;
    const newTodo = new Todo({ title, done, owner });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar a tarefa.', error: error.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const owner = req.user.id;
    const todos = await Todo.find({ owner });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as tarefas.', error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, done } = req.body;
    const owner = req.user.id;
    const todo = await Todo.findOneAndUpdate(
      { _id: id, owner },
      { title, done },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence a você.' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a tarefa.', error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.user.id;
    const todo = await Todo.findOneAndDelete({ _id: id, owner });
    if (!todo) {
      return res.status(404).json({ message: 'Tarefa não encontrada ou não pertence a você.' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a tarefa.', error: error.message });
  }
};
