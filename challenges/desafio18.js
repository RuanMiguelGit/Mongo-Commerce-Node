db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.count({ $text: { $search: "\"feito com\"" } });
