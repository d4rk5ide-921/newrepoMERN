import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todo/alltodo");
        const resp = await axios.get("http://localhost:5000/student/get");
        setTodo(res.data.user);
        setStudent(resp.data.student);
        console.log(todo)
        console.log(student)
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodo();
  }, []);
  return (
    <ToDoContext.Provider value={{ todo, setTodo, student, setStudent }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;

