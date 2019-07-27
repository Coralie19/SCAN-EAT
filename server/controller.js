const Items = require('./model');

exports.getAll = async (req,res) => {
  try {
    const allItems = await Items.find();
    res.status(200).send(allItems);
  } catch (error) {
    console.log(error); //eslint-disable-line no-console
    res.status(500).end();
  }
};


exports.postOne = async (req,res) => {
  try {
    const item = req.body;
    const newItem = await Items.create(item);
    res.status(200).send(newItem);
  } catch (error) {
    console.log(error); //eslint-disable-line no-console
    res.status(400).send({error}); 
  }
};


exports.deleteOne = async (req,res) => {
  try {
    const id = req.params.id;
    await Items.findByIdAndDelete(id);
    res.status(200).end();

  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}


// updateOne