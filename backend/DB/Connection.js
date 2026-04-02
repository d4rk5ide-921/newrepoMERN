import mongoose from "mongoose";

const ConnectionDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nanonadeem928:k9UY62D0vlxXNifl@cluster0.5cnhwao.mongodb.net/?appName=Cluster0",

    );

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("MongoDB Error ❌", error);
  }
};

export default ConnectionDB;