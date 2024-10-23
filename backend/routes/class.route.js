import express from "express";
import {createClass, getClass, updateClass,  deleteClass} from '../controllers/class.controler.js'
const router = express.Router();

router.route("/").post(createClass)
router.route('/').get(getClass)
router.route('/:id').put(updateClass);
router.route('/:id').delete(deleteClass)
export default router;

// const classController = require('../controllers/class.controler');

// router.post('/', classController.createClass);
// router.get('/', classController.getClasses);
// router.put('/:id', classController.updateClass);
// router.delete('/:id', classController.deleteClass);



//module.exports = router;
