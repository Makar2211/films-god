/* k4wHyyHLZbvzW9W0 */
import express from 'express';
import moongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import { login, register, getMe } from './constrollers/UserController.js';
import { loginValidator, registerValidator } from './validator/validator.js';
import validationErrors from './utils/validationErrors.js';
import isAuth from './utils/isAuth.js';
import { createFilm, getFilm, getLastFilms } from './constrollers/FilmController.js';

moongoose
  .connect(
    'mongodb+srv://makar2211:admin123@mycluster.bknqdvu.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('Error DB', err));

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Папка, в которую сохраняются файлы
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Имя файла сохраняется без изменений
  },
});
// Создание экземпляра multer с настройками хранилища
const upload = multer({ storage: storage });

//Регистрация и авторизация пользователя
app.post('/auth/register', registerValidator, validationErrors, register);
app.post('/auth/login', loginValidator, validationErrors, isAuth, login);
app.get('/auth/me', isAuth, getMe);

//Создание и получение фильмов
app.post('/films', upload.single('film'), createFilm);
app.get('/films', getFilm);
app.get('/lastFilms', getLastFilms);
app.listen(4444, () => {
  console.log(`server ok`);
});
