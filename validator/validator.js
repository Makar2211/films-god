import { body } from 'express-validator';

export const registerValidator = [
  body('firstName', 'Имя обязательное поле').isLength({ min: 2 }),
  body('lastName', 'Введите корректную фамилию').optional().isLength({ min: 2 }),
  body('email', 'email обязательное поле').isEmail(),
  body('password', 'Пароль обязательное поле').isLength({ min: 5 }),
  body('imageURL', 'Неверная ссылка на картинку').optional().isURL(),
];

export const loginValidator = [
  body('email', 'email обязательное поле').isEmail(),
  body('password', 'Пароль обязательное поле').isLength({ min: 5 }),
];

export const filmValidator = [
  body('title', 'введи название фильма').isLength(),
  body('imageURL', 'введи название фильма').isURL(),
  body('titleOfEnglish', 'введи название фильма на англ').isLength({ min: 1 }),
  body('trailer', 'вставьте трейлер фильма').isURL(),
  body('raiting', 'введите рейтинг фильма').isLength({ min: 0 }),
  body('releaseDate', 'введите дату выхода фильма').isLength({ min: 3 }),
  body('country', 'введите страну создания фильма').isLength(),
  body('genre', 'введите жанры фильма').isArray(),
  body('quality', 'введите качество фильма').isLength({ min: 0 }),
  body('age', 'введите допустимый возраст просмотра фильма').isLength({ min: 0 }),
  body('time', 'введите продолжительность фильма').isLength({ min: 0 }),
  body('text', 'введите описание фильма').isLength(),
  body('film', 'вставьте адрес/ссылку фильма').isLength(),
];
