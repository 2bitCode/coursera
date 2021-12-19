exports.insertDocument = (db, collection, document) => {
  const coll = db.collection(collection);
  return coll.insert(document);
};

exports.findAllDocument = (db, collection) => {
  const coll = db.collection(collection);
  return coll.find({}).toArray();
};

exports.removeDocument = (db, collection, document) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
};

exports.updateDocument = (db, collection, document, newDocument) => {
  const coll = db.collection(collection);
  return coll.updateOne(document, { $set: newDocument }, null);
};
