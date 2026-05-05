import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoContext";
import axios from "axios";

const Card = () => {
    const { cards, setCards } = useContext(ToDoContext);

    const [show, setShow] = useState({
        id: "",
        title: "",
        description: ""
    });

    const [newCard, setNewCard] = useState({
        title: "",
        description: ""
    });

    const [showAddRow, setShowAddRow] = useState(false);

    // ✅ DELETE
    const handleDelete = async (item) => {
        try {
            await axios.delete("http://localhost:5000/cards/delete", {
                data: { id: item._id },
            });

            setCards((prev) =>
                prev.filter((c) => c._id !== item._id)
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
            description: item.description
        });
    };

    // ✅ UPDATE SAVE
    const handleUpdated = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/cards/update",
                {
                    id: show.id,
                    title: show.title,
                    description: show.description
                }
            );

            setCards((prev) =>
                prev.map((item) =>
                    item._id === show.id
                        ? { ...item, title: show.title, description: show.description }
                        : item
                )
            );

            setShow({
                id: "",
                title: "",
                description: ""
            });
        } catch (e) {
            console.log(e);
        }
    };

    // ✅ ADD NEW
    const handleAdd = async () => {
        if (!newCard.title || !newCard.description) {
            alert("Please fill all fields!");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/cards/register",
                {
                    title: newCard.title,
                    description: newCard.description
                }
            );

            setCards((prev) => [...prev, res.data]);
            setNewCard({
                title: "",
                description: ""
            });

            setShowAddRow(false);
        } catch (e) {
            console.log(e);
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
                                + Add Card
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
                                        setNewCard({
                                            title: "",
                                            description: ""
                                        });
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
                {/* ✅ ADD ROW */}
                {showAddRow && (
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Enter title"
                                value={newCard.title}
                                onChange={(e) =>
                                    setNewCard({
                                        ...newCard,
                                        title: e.target.value
                                    })
                                }
                            />
                        </td>

                        <td>
                            <input
                                type="text"
                                placeholder="Enter description"
                                value={newCard.description}
                                onChange={(e) =>
                                    setNewCard({
                                        ...newCard,
                                        description: e.target.value
                                    })
                                }
                            />
                        </td>

                        <td></td>
                    </tr>
                )}

                {/* ✅ DATA ROWS */}
                {cards.map((item) => (
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
                                        value={show.description}
                                        onChange={(e) =>
                                            setShow({
                                                ...show,
                                                description: e.target.value
                                            })
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

export default Card;