db.produtos.find({ 
  "valoresNutricionais.3.percentual": { $lte: 40, $gt: 30 } }, { _id: 0, nome: 1 });