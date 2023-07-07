import express from 'express';
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').post(registerUser).get(protect, admin, getUsers) //We set the admin flag so that only admin can access that route
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)

export default router