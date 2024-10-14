/**
 * Insert single contact on contact list collection on contact database
 */
db.contactList.insertOne({
  lastName: "Ben",
  firstName: "Moris",
  email: "ben@gmail.com",
  age: 26,
});

/**
 * Check all contacts document on contactList collection
 */
db.contactList.find({});

/**
 * Insert multiple contacts on contactList collection on contact database
 */

db.contactList.insertMany([
  { lastName: "Keffi", firstName: "Seif", gmail: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "Waka", gmail: "emilie@gmail.com", age: 20 },
  { lastName: "Bingo", firstName: "Ade", gmail: "ade@gmail.com", age: 22 },
  { lastName: "Mama", firstName: "Gold", gmail: "mama@gmail.com", age: 28 },
]);

db.contactList.findOne({ _id: ObjectId("66f5a8742aff0a30e2c73bfc") });
db.contactList.find({ age: { $gt: 18 } });

function addNum(num1, num2) {
  return num1 + num2;
}

// Update operation

db.contactList.updateOne(
  { lastName: "Ben", firstName: "Moris" }, // Filter to find the document
  { $set: { email: "ben_moris_new@gmail.com", age: 27 } } // Fields to update
);

// Delete Operation
db.contactList.deleteOne(
  { lastName: "Ben", firstName: "Moris" } // Filter to find the document
);



