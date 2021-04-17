const questionsModel = require("../../db/questions/questions-model")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsModel.find()
}

const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
}
const findQuestionById = (quid) => {
    return questionsModel.findById(quid)
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, createQuestionForQuiz,
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
    updateQuestion, deleteQuestion
}