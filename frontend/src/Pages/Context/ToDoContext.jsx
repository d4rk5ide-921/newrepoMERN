import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todo/alltodo");
        setTodo(res.data.user);
        console.log(todo)
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodo();
  }, []);
  return (
    <ToDoContext.Provider value={{ todo, setTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;

