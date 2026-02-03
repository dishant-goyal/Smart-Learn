const express = require('express');
const router = express.Router();

const { capturePayment, verifyPayment,enrollStudents } = require('../controllers/payments');
const { auth, isAdmin, isInstructor, isStudent } = require('../middleware/auth');




router.post('/capturePayment', auth, isStudent, capturePayment);
router.post('/verifyPayment', auth, isStudent, verifyPayment);
// router.post('/enrollfree',auth,isStudent,enrollStudents)

module.exports = router
