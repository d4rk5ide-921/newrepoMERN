import Card from "../TodoList/cards.js";
export const registerCards = async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send({ message: "Please enter all the fields" });
    }
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
}

export const getCards = async (req, res) => {
    const cards = await Card.find();
    res.status(200).json(cards);
}

export const deleteCards = async (req, res) => {
    const { id } = req.body;
    await Card.findByIdAndDelete(id);
    res.status(200).json({ message: "Card deleted successfully" });
}

export const updateCards = async (req, res) => {
    const { id, title, description } = req.body;
    await Card.findByIdAndUpdate(id, { title, description });
    res.status(200).json({ message: "Card updated successfully" });
}

export const allCards = async (req, res) => {
    const cards = await Card.find();
    res.status(200).json(cards);
}