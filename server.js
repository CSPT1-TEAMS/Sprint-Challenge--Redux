const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

// so lines 1-7 import some things and then set up our server.
// express is just a server, I guess, but a little more explanation 
// would be nice perhaps. what is cors?

const send UserError = (msg, res) => {
  res.status(422); // what is 422?
  res.json({ Error: msg }); // JavaScript Object Notation but what does it mean?
  return;
};

let smurfs = [];
// from server get resource at url '/smurfs'
server.get('/smurfs', (req, res) => {  
  res.json(smurfs); // from response jsonify everything from smurfs?
});
let smurfId = 0;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya got smurffed the frack outta there!! Name/Age/Height silly!'
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      'Ya got smurffed big time! ${name} already exists!'
      res
    );
  }
  
  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id === id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No smurf by that ID found!', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(foundSmurf);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id === id);
  


























  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  








