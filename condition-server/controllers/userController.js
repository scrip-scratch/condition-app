const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Chart} = require('../models/models');

class UserController {

    async registration (req, res, next) {
        const {email, name, password} = req.body;

        // проверяем правильность введенных данных
        if (!email || !password || !name) {
            return next(ApiError.badRequest('Некорректные имя, email или пароль'));
        }

        // проверяем, есть ли такой email уже в базе
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }

        // хэшируем пароль
        const hashPassword = await bcrypt.hash(password, 5);

        // создаем нового пользователя
        const user = await User.create({email, name, password: hashPassword});

        // создаем график для нового пользователя
        const chart = await Chart.create({userId: user.id});

        // создаем jwt токен для пользователя
        const token = jwt.sign(
            {id: user.id, email}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )

        return res.json({token})
    }

    async login (req, res, next) {
        const {email, password} = req.body;

        // проверяем существование пользователя в базе
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'));
        }

        // проверяем пароль пользователя
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль')); 
        }

        // создаем jwt токен для пользователя
        const token = jwt.sign(
            {id: user.id, email}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        );

        return res.json({token});

    }

    async check (req, res) {
        const token = jwt.sign(req.user.id, req.user.email);
        return res.json({token}); 
    }
}

module.exports = new UserController();