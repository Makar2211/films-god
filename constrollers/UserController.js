import bcrypt from 'bcrypt';
import UserModel from '../models/User.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const mypassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(mypassword.toString(), salt);
    const doc = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      imageURL: req.body.imageURL,
      password: passwordHash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { password, ...userData } = user._doc;
    res.json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Ошибка при создании пользователя' });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      res.json({ message: 'Такого пользователя нет' });
    }
    const truePassword = await bcrypt.compare(req.body.password, user._doc.password);
    if (!truePassword) {
      res.json({ message: 'Неверный логин или пароль' });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      },
    );

    const { password, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(error);
    res.send(500).json({ message: 'Не удалось авторизоваться' });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      res.status(400).json({ message: 'Не удалось получить информацию о вас' });
    }
    console.log(req);
    const { password, ...userData } = user._doc;
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: 'Нет доступа' });
  }
};
