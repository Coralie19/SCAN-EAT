const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello world!");
});


exports.getItems = functions.https.onRequest((req, res) => {
  admin.firestore().collection('Items').get()
    .then( data => {
      let Items = [];
      data.forEach( doc => {
        Items.push(doc.data())
      });
      return res.json(Items);
    })
    .catch(err => console.error(err))
})


exports.createItem = functions.https.onRequest((req, res) => {
  const newItem = {
    name: req.body.name,
    category: req.body.category,
    id: req.body.id,
    expiry_date: req.body.expiry_date
  };

  admin
  .firestore()
  .collection('Items')
  .add(newItem)
  .then(doc => {
    return res.json({ message: `document ${doc.id} created successfully`});
  })
  .catch( err => {
    res.status(500).json({error: 'something went super wrong'});
    console.error(err);
  })
}) 