const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => {
    return quizzesDao
        .findQuizById(qid)
        .populate("questions")
        .exec()
}

module.exports = { findAllQuizzes, findQuizById }