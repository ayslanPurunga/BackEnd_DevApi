import mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose
      .connect("mongodb://mongo:27017/Connectors", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conexão com o MongoDB realizada com sucesso!");
      })
      .catch((erro) => {
        console.log("Erro ao conectar com o MongoDB!");
      });
  }
}

export default new Database();