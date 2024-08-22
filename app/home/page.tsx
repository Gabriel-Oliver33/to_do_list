"use client";

import React, { useState } from 'react';
import styles from './Home.module.css';

interface Item {
  id: number;
  title: string;
  date: string;
  priority: string;
  description: string;
}

const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newPriority, setNewPriority] = useState('Média');
  const [newDescription, setNewDescription] = useState('');
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editPriority, setEditPriority] = useState('Média');
  const [editDescription, setEditDescription] = useState('');

  const handleAdd = () => {
    if (newTitle && newDate) {
      setItems([...items, {
        id: Date.now(),
        title: newTitle,
        date: newDate,
        priority: newPriority,
        description: newDescription,
      }]);
      setNewTitle('');
      setNewDate('');
      setNewPriority('Média');
      setNewDescription('');
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItemId(item.id);
    setEditTitle(item.title);
    setEditDate(item.date);
    setEditPriority(item.priority);
    setEditDescription(item.description);
  };

  const handleSaveEdit = () => {
    if (editingItemId) {
      setItems(items.map(item => item.id === editingItemId ? {
        ...item,
        title: editTitle,
        date: editDate,
        priority: editPriority,
        description: editDescription,
      } : item));
      setEditingItemId(null);
      setEditTitle('');
      setEditDate('');
      setEditPriority('Média');
      setEditDescription('');
    }
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lista de Tarefas</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>Sair</button>
      </div>

      <div className={styles.formContainer}>
        <h2>{editingItemId ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
        <input
          type="text"
          placeholder="Título"
          value={editingItemId ? editTitle : newTitle}
          onChange={(e) => editingItemId ? setEditTitle(e.target.value) : setNewTitle(e.target.value)}
          className={styles.input}
        />
        <input
          type="datetime-local"
          value={editingItemId ? editDate : newDate}
          onChange={(e) => editingItemId ? setEditDate(e.target.value) : setNewDate(e.target.value)}
          className={styles.input}
        />
        <select
          value={editingItemId ? editPriority : newPriority}
          onChange={(e) => editingItemId ? setEditPriority(e.target.value) : setNewPriority(e.target.value)}
          className={styles.select}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
        <textarea
          placeholder="Descrição"
          value={editingItemId ? editDescription : newDescription}
          onChange={(e) => editingItemId ? setEditDescription(e.target.value) : setNewDescription(e.target.value)}
          className={styles.textarea}
        />
        <button
          onClick={editingItemId ? handleSaveEdit : handleAdd}
          className={styles.submitButton}
        >
          {editingItemId ? 'Salvar Alterações' : 'Adicionar Item'}
        </button>
      </div>

      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            <div>
              <strong>{item.title}</strong> - {item.date} - {item.priority}
              <p>{item.description}</p>
            </div>
            <div className={styles.itemActions}>
              <button onClick={() => handleEdit(item)} className={styles.editButton}>Editar</button>
              <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
