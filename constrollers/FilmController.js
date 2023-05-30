import filmModel from '../models/Film.js';

export const createFilm = async (req, res) => {
  try {
    const doc = new filmModel({
      title: req.body.title,
      titleOfEnglish: req.body.titleOfEnglish,
      trailer: req.body.trailer,
      raiting: req.body.raiting,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre.split(','),
      quality: req.body.quality,
      translateFrom: req.body.translateFrom,
      age: req.body.age,
      time: req.body.time,
      imageURL: req.body.imageURL,
      text: req.body.text,
      film: req.file.path,
    });

    const newFilm = await doc.save();

    res.json(newFilm);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Не удалось создать фильм' });
  }
};

export const getFilm = async (req, res) => {
  try {
    const films = await filmModel.find(req.params.film);
    console.log(req.params);
    res.json(films);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Не удалось получить все фильмы' });
  }
};

export const getLastFilms = async (req, res) => {
  const films = await filmModel.find(req.params.film);
  const lastFilms = films.reverse().splice(0, 15);
  res.json(lastFilms);
};
