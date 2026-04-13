import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";
import axios from "axios";

const StudentTable = () => {
    const { student, setStudent } = useContext(ToDoContext);

    const [show, setShow] = useState({
        id: "",
        title: "",
        Cybersecurity: "",
        btn: ""
    });

    const [newstudent, setNewstudent] = useState({
        title: "",
        Cybersecurity: "",
        btn: "",
        img: ""
    });

    const [showAddRow, setShowAddRow] = useState(false);

    // ✅ DELETE
    const handleDelete = async (item) => {
        try {
            await axios.delete("http://localhost:5000/student/delete", {
                data: { id: item._id },
            });

            setStudent((prev) =>
                prev.filter((s) => s._id !== item._id)
            );
        } catch (e) {
            console.log(e);
        }
    };

    // ✅ UPDATE SET
    const handleUpdate = (item) => {
        setShow({
            id: item._id,
            title: item.title,
            Cybersecurity: item.Cybersecurity,
            btn: item.btn
        });
    };

    // ✅ UPDATE SAVE
    const handleUpdated = async () => {
        try {
            let imageUrl = show.img;

            // If a new file is selected, upload it
            if (show.img instanceof File) {
                imageUrl = await uploadToCloudinary(show.img);
            }

            const res = await axios.post(
                "http://localhost:5000/student/update",
                {
                    id: show.id,
                    title: show.title,
                    Cybersecurity: show.Cybersecurity,
                    btn: show.btn,
                    img: imageUrl
                }
            );

            setStudent((prev) =>
                prev.map((item) =>
                    item._id === show.id ? res.data.student : item
                )
            );

            setShow({
                id: "",
                title: "",
                Cybersecurity: "",
                btn: "",
                img: ""
            });
        } catch (e) {
            console.log(e);
        }
    };

    // ✅ ADD NEW
    const handleAdd = async () => {
        if (!newstudent.title || !newstudent.Cybersecurity) {
            alert("Please fill all fields!");
            return;
        }

        const image = await uploadToCloudinary(newstudent.img);

        if (!image) {
            return alert("Image upload failed");
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/student/add",
                {
                    title: newstudent.title,
                    Cybersecurity: newstudent.Cybersecurity,
                    btn: newstudent.btn,
                    img: image
                }
            );

            setStudent((prev) => [...prev, res.data]);
            setNewstudent({
                title: "",
                Cybersecurity: "",
                btn: "",
                img: ""
            });

            setShowAddRow(false);
        } catch (e) {
            console.log(e);
        }
    };

    // ✅ CLOUDINARY UPLOAD
    const uploadToCloudinary = async (file) => {
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
        const folder = import.meta.env.VITE_CLOUDINARY_FOLDER;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);
        formData.append("folder", folder);

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dvrjqpher/image/upload",
                formData
            );

            return res.data.secure_url;
        } catch (error) {
            console.error("Cloudinary Error:", error);
            return null;
        }
    };

    return (
        <table border="1" className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Cybersecurity</th>
                    <th>Button</th>
                    <th>Image</th>
                    <th>
                        {!showAddRow ? (
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => setShowAddRow(true)}
                            >
                                + Add Student
                            </button>
                        ) : (
                            <>
                                <button
                                    className="btn btn-primary btn-sm me-1"
                                    onClick={handleAdd}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => {
                                        setShowAddRow(false);
                                        setNewstudent({
                                            title: "",
                                            Cybersecurity: "",
                                            btn: "",
                                            img: ""
                                        });
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </th>
                </tr>
            </thead>

            <tbody>
                {/* ✅ ADD ROW */}
                {showAddRow && (
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Title"
                                value={newstudent.title}
                                onChange={(e) =>
                                    setNewstudent({
                                        ...newstudent,
                                        title: e.target.value
                                    })
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder="Cybersecurity"
                                value={newstudent.Cybersecurity}
                                onChange={(e) =>
                                    setNewstudent({
                                        ...newstudent,
                                        Cybersecurity: e.target.value
                                    })
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder="Button text"
                                value={newstudent.btn}
                                onChange={(e) =>
                                    setNewstudent({
                                        ...newstudent,
                                        btn: e.target.value
                                    })
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setNewstudent({
                                        ...newstudent,
                                        img: e.target.files[0]
                                    })
                                }
                            />
                        </td>
                    </tr>
                )}

                {/* ✅ DATA ROWS */}
                {student.map((item) => (
                    <tr key={item._id}>
                        {show.id === item._id ? (
                            <>
                                <td>
                                    <input
                                        value={show.title}
                                        onChange={(e) =>
                                            setShow({
                                                ...show,
                                                title: e.target.value
                                            })
                                        }
                                    />
                                </td>

                                <td>
                                    <input
                                        value={show.Cybersecurity}
                                        onChange={(e) =>
                                            setShow({
                                                ...show,
                                                Cybersecurity: e.target.value
                                            })
                                        }
                                    />
                                </td>

                                <td>
                                    <input
                                        value={show.btn}
                                        onChange={(e) =>
                                            setShow({
                                                ...show,
                                                btn: e.target.value
                                            })
                                        }
                                    />
                                </td>

                                <td>
                                    <button
                                        onClick={handleUpdated}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Save Update
                                    </button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{item.title}</td>
                                <td>{item.Cybersecurity}</td>
                                <td>{item.btn}</td>
                                <td>
                                    <img
                                        src={item.img}
                                        alt="img"
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-danger btn-sm me-1"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(item)}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Update
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

export default StudentTable;