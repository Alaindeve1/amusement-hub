const express = require('express');
const router = express.Router();
const locationTagAssociationController = require('../controllers/locationTagAssociationController');
const { body } = require('express-validator');

router.get('/', locationTagAssociationController.getAllLocationTagAssociations);
router.get('/:id', locationTagAssociationController.getLocationTagAssociationById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('tag_id').notEmpty().withMessage('Tag ID is required'),
  ],
  locationTagAssociationController.createLocationTagAssociation
);
router.put(
  '/:id',
  [
    body('location_id').optional().notEmpty().withMessage('Location ID cannot be empty'),
  ],
  locationTagAssociationController.updateLocationTagAssociation
);
router.delete('/:id', locationTagAssociationController.deleteLocationTagAssociation);

module.exports = router; 