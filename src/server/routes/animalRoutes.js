const Animal = require('../models/animalModel');
const animalController = require('../controllers/animalController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
  app.post('/uploadImage', upload.single('file'), async (req, res) => {
    if (req.file) {
      res.send({ success: true });
    } else {
      res.sendStatus(500);
    }
  });

  app.get('/api/giraffe', animalController.getAnimals);
  app.post('/api/giraffe', animalController.postAnimal);
  app
    .route('/api/giraffe/:id')
    .get(animalController.getAnimalById)
    .put(animalController.putAnimalById)
    .delete(animalController.deleteAnimalById);
};
