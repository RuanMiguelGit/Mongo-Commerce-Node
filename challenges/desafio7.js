db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
