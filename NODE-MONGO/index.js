const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoOperation = require("./operations");

const url = "mongodb://localhost:27017";
const dbaname = "students";

// MongoClient.connect(url, (err, client) => {
//   assert.equal(err, null);
//   const db = client.db(dbaname);
//   mongoOperation.insertDocument(
//     db,
//     "info",
//     { name: "markberg", group: "C" },
//     (result) => {
//       console.log(result);
//       mongoOperation.findAllDocument(db, "info", (docs) => {
//         console.log("Found \n", docs);
//         mongoOperation.updateDocument(
//           db,
//           "info",
//           { name: "markberg" },
// {
//   name: "juckerberg",
//   group: "D",
//   description: "This is updated document",
// },
//           (result) => {
//             console.log("Updated Successsfully.", result);
//             mongoOperation.findAllDocument(db, "info", (result) => {
//               console.log("found.\n", result);
//             });
//           }
//         );
//       });
//     }
//   );
// });

MongoClient.connect(url)
  .then((client) => {
    const db = client.db(dbaname);

    mongoOperation
      .insertDocument(db, "info", {
        name: "samir",
        description: "don",
      })
      .then((result) => {
        console.log("Inserted" + result.ops + "documents");

        return mongoOperation.findAllDocument(db, "info");
      })
      .then((docs) => {
        console.log("Found Documents", docs);

        return mongoOperation.updateDocument(
          db,
          "info",
          { name: "samir" },
          {
            name: "Samir",
            group: "D",
            description: "This is updated document",
          }
        );
      })
      .then((result) => {
        console.log("Updated successfully:");

        return mongoOperation.findAllDocument(db, "info");
      })
      .then((docs) => console.log("Found documents: ", docs))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log("Error found: " + err));
