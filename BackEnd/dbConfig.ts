import { connect } from "mongoose";
import env from "dotenv";
env.config();
export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_DB as string).then(() => {
      console.clear();
      console.log("db connection established..✌✌💖");
    });
  } catch (error) {
    console.log(error);
  }
};
