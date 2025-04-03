import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "lms_db",
};

export const connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("MySQL connected successfully");
    return connection;
  } catch (error) {
    console.error("MySQL connection failed:", error);
    throw error;
  }
};
