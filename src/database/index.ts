import mongoose, { ConnectOptions } from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose.connect(process.env.MONGO_URL || '', {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    } as ConnectOptions);
  }
}

export default new Database();
