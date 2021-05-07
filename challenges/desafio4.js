db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: { $type: "date" } } });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
