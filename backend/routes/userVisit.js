const express = require('express');
const router = express.Router();
const userVisitController = require('../controllers/userVisitController');
const { body } = require('express-validator');

router.get('/', userVisitController.getAllUserVisits);
router.get('/:id', userVisitController.getUserVisitById);
router.post(
  '/',
  [
    body('user_id').notEmpty().withMessage('User ID is required'),
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('visit_date').notEmpty().withMessage('Visit date is required'),
  ],
  userVisitController.createUserVisit
);
router.put(
  '/:id',
  [
    body('visit_date').optional().notEmpty().withMessage('Visit date cannot be empty'),
  ],
  userVisitController.updateUserVisit
);
router.delete('/:id', userVisitController.deleteUserVisit);

module.exports = router; 