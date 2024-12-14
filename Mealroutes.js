const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals)
router.delete('/deleteMeal', deleteMeal); //лучше писать post через него тоже можно удалять
router.put('/editMeal', editMeal) //лучше писать post через него тоже можно менять

module.exports = router;