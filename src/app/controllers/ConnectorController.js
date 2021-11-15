import Connector from "../models/Connector";

class ConnectorController {
  async index(req, res) {
    const limit = 8;
    let page = 0;

    const name = {$regex: req.query.name ? req.query.name : '.*'};
    const category = { $regex: req.query.category ? req.query.category : '.*'};
    const type = { $regex: req.query.type ? req.query.type : '.*'};
    const privacy = { $regex: req.query.privacy ? req.query.privacy : '.*'};

    const query = {
      name,
      category,
      type,
      privacy,
      deleted_at: null,
    };

    const connectors = await Connector.find(query);

    if (!connectors || connectors.length === 0) {
      return res.status(400).json({ message: "Erro ao listar Conectores!" });
    }

    return res.status(200).json({ connectors, page, limit });
  }

  async show(req, res) {
    const { id } = req.params;

    const connector = await Connector.findOne({
      where: {
        id: id,
      },
    });

    if (!connector || connector.length == 0) {
      return res.status(400).json({ message: "Conector não encontrado!" });
    }

    return res.status(200).json({ connector });
  }

  async create(req, res) {
    let {
      name,
      type,
      privacy,
      baseUrl,
      logoUrl,
      category,
      description,
      status,
    } = req.body;

    const connector = await Connector.create({
      name,
      type,
      privacy,
      baseUrl,
      logoUrl,
      category,
      description,
      status,
    });

    return res.json(connector);
  }

  async update(req, res) {
    const { id } = req.params;

    let {
      name,
      type,
      privacy,
      baseUrl,
      logoUrl,
      category,
      description,
      status,
    } = req.body;

    if (Object.keys(req.body ?? {}).length === 0 || req.body === undefined) {
      return res
        .status(400)
        .json({ message: "Não foi informado nenhum dado para alterar!" });
    }

    const connectorId = await Connector.findOne({
      where: {
        id: id,
      },
    });

    if (!connectorId || connectorId.length == 0) {
      return res.status(400).json({ message: "Conector não encontrado!" });
    }

    const connector = await Connector.updateOne(
      { _id: id },
      { name, type, privacy, baseUrl, logoUrl, category, description, status }
    );

    return res.status(200).json(connector);
  }

  async delete(req, res) {
    const { id } = req.params;

    const connectorId = await Connector.findOne({
      where: {
        id: id,
      },
    });

    console.log(connectorId);

    if (!connectorId || connectorId.length == 0) {
      return res.status(400).json({ message: "Conector não encontrado!" });
    }

    const connector = await Connector.updateOne(
      { _id: id },
      { deleted_at: new Date() }
    );
    console.log(connector);

    return res.status(204).json(connector);
  }
}

export default new ConnectorController();
