import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [student, setStudent] = useState([]);
  const [registersData, setregistersData] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todo/alltodo");
        const resp = await axios.get("http://localhost:5000/student/get");
        // const reg = await axios.get("http://localhost:5000/register/get");
        setTodo(res.data.user);
        setStudent(resp.data.student);
        // setregistersData(reg.data.register);
        console.log(todo)
        console.log(student)
        console.log(registersData)
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodo();
  }, []);
  return (
    <ToDoContext.Provider value={{ todo, setTodo, student, setStudent, registersData, setregistersData }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;

