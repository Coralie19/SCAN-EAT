// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp();


// //router.get('/products', functions.getItems); CDA question

// exports.getItems = functions.https.onRequest((req, res) => {
//   admin.firestore().collection('Items').get()
//     .then( data => {
//       let Items = [];
//       data.forEach( doc => {
//         Items.push(doc.data())
//       });
//       return res.json(Items);
//     })
//     .catch(err => console.error(err))
// })


// exports.createItem = functions.https.onRequest((req, res) => {
//   if (req.method !== 'POST') {
//     return res.status(400).json({ error : 'Method not allowed'});
//   }
//   const newItem = {
//     name: req.body.name,
//     category: req.body.category,
//     id: req.body.id,
//     expiry_date: req.body.expiry_date
//   };

//   admin
//   .firestore()
//   .collection('Items')
//   .add(newItem)
//   .then(doc => {
//     return res.json({ message: `document ${doc.id} created successfully`});
//   })
//   .catch( err => {
//     res.status(500).json({error: 'something went super wrong'});
//     console.error(err);
//   })
// }) 

// // wrong to get the doc by id:
// // exports.deleteItem = (req, res) => {
// //   const document = admin.firestore().collection('Items').doc(`${req.body.item.id}`);
// //   document.get()
// //     .then( doc => {
// //       return document.delete();
// //     })
// //     .then( () => {
// //       return res.json({ message: 'Item deleted successfully'})
// //     })
// //     .catch( err => {
// //       res.status(500).json({error: err.code});
// //       console.error(err);
// //     })
// // }