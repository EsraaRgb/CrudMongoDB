import { Router } from "express";
import * as controller from './controller/user.js'
const router = Router()
router.put('/',controller.updateGroup)
router.delete('/',controller.deleteGroup)
router.get('/letter',controller.getAllUsersContainLetter)
router.get('/substring',controller.getAllUsersContainsubstring)
router.get('/age/greater',controller.getAllUsersFNameEndAgeGreater)
router.get('/age/less',controller.getAllUsersFNameStartAgeLess)
router.get('/:id',controller.getUserById)
router.put('/:id',controller.updateUserById)
router.delete('/:id',controller.deleteById)

export default router