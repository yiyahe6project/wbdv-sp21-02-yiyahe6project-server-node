

const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
}
const findQuizById = (qid) => {
    return quizzesModel
        .findById(qid)
        .populate("questions")
        .exec()
}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}