import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";
import axios from "axios";

const TodoTable = () => {
  const { todo, setTodo } = useContext(ToDoContext);
  const [show, setShow] = useState({ id: "", title: "", description: "" });
  const [newTodo, setNewTodo] = useState({ title: "", description: "", image: "" });
  const [showAddRow, setShowAddRow] = useState(false);

  const handleDelete = async (item) => {
    try {
      const res = await axios.delete("http://localhost:5000/todo/delete", {
        data: { id: item._id },
      });
      console.log(res.data);
      setTodo((prevTodo) => prevTodo.filter((todo) => todo._id !== item._id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = (item) => {
    setShow({ id: item._id, title: item.title, description: item.description });
  };

  const handleUpdated = async () => {
    try {
      const res = await axios.post("http://localhost:5000/todo/update", {
        id: show.id,
        title: show.title,
        description: show.description,
      });
      setTodo((prevTodo) =>
        prevTodo.map((item) => (item._id === show.id ? res.data.todo : item))
      );
      setShow({ id: "", title: "", description: "" });
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdd = async () => {
    if (!newTodo.title || !newTodo.description) {
      alert("Please enter both title and description!");
      return;
    }

    const image = await uploadToCloudinary(newTodo.image);
    console.log(image);
    if (!image) {
      return alert("Image url is not present");
    }

    try {
      const res = await axios.post("http://localhost:5000/todo/register", {
        title: newTodo.title,
        description: newTodo.description,
        image
      });
      console.log(res.data);
      const tempTodo = {
        _id: Date.now().toString(),
        title: newTodo.title,
        description: newTodo.description,
        image: image,
      };
      setTodo((prevTodo) => [...prevTodo, tempTodo]);
      setNewTodo({ title: "", description: "" });
      setShowAddRow(false);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadToCloudinary = async (file) => {
    // const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    const folder = import.meta.env.VITE_CLOUDINARY_FOLDER;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", folder);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dvrjqpher/image/upload`,
        formData
      );

      return res.data.secure_url;

    } catch (error) {
      console.error("Cloudinary Upload Error:", error.response?.data || error);
      return null;
    }
  };



  return (
    <table border="1" className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>
            {!showAddRow ? (
              <button
                className="btn btn-success btn-sm"
                onClick={() => setShowAddRow(true)}
              >
                + Add Todo
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary btn-sm me-1"
                  onClick={handleAdd}
                >
                  ✅ Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setShowAddRow(false);
                    setNewTodo({ title: "", description: "" });
                  }}
                >
                  ✖ Cancel
                </button>
              </>
            )}
          </th>
        </tr>
      </thead>

      <tbody>
        {showAddRow && (
          <tr>
            <td>
              <input
                type="text"
                placeholder="Enter title"
                value={newTodo.title}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, title: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter description"
                value={newTodo.description}
                onChange={(e) =>
                  setNewTodo({ ...newTodo, description: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="file"
                onChange={(e) =>
                  setNewTodo({ ...newTodo, image: e.target.files[0] })
                }
              />
            </td>
          </tr>
        )}

        {todo.map((item, index) => (
          <tr key={index}>
            {show.id === item?._id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={show?.title}
                    onChange={(e) =>
                      setShow({ ...show, title: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={show?.description}
                    onChange={(e) =>
                      setShow({ ...show, description: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={handleUpdated}
                    className="btn btn-warning btn-sm"
                  >
                    💾 Save Update
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td><img src={item?.image} alt="img" width={100} height={100} /> </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-danger btn-sm me-1"
                  >
                    🗑 Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn btn-primary btn-sm"
                  >
                    ✏️ Update
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;