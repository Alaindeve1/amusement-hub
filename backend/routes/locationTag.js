const express = require('express');
const router = express.Router();
const locationTagController = require('../controllers/locationTagController');
const { body } = require('express-validator');

router.get('/', locationTagController.getAllLocationTags);
router.get('/:id', locationTagController.getLocationTagById);
router.post(
  '/',
  [
    body('tag_name').notEmpty().withMessage('Tag name is required'),
  ],
  locationTagController.createLocationTag
);
router.put(
  '/:id',
  [
    body('tag_name').optional().notEmpty().withMessage('Tag name cannot be empty'),
  ],
  locationTagController.updateLocationTag
);
router.delete('/:id', locationTagController.deleteLocationTag);

module.exports = router; 