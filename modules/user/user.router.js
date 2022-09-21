import { Router } from "express";
import * as controller from './controller/user.js'
const router = Router()
router.put('/update/group',controller.updateGroubById)
router.delete('/group',controller.deleteGroubById)
router.get('/letter',controller.getAllUsersContainLetter)
router.get('/substring',controller.getAllUsersContainsubstring)
router.get('/name/age/greater',controller.getAllUsersFNameEndAgeGreater)
router.get('/name/age/less',controller.getAllUsersFNameStartAgeLess)
router.get('/:id',controller.getUserById)
router.put('/:id',controller.updateUserById)
router.delete('/:id',controller.deleteById)

export default router