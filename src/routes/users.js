import express from 'express'

import {
  getUserById,
  updateUser,
} from '../actions'

const router = express.Router()

router.get('/:id', (req, res, next) => {
  getUserById(req.params.id)
    .then((user) => {
      res.render('users/profile', {user})
    })
    .catch(error => next(error))
})

router.put('/:id', (req, res) => {
  updateUser(req.body)
    .then(data => res.json(data))
    .catch(error => console.log(error.message))
})

router.route('/:id/edit')
  .get((req, res, next) => {
    getUserById(req.params.id)
      .then((user) => {
        res.render('users/edit', {user})
      })
      .catch(error => next(error))
  })

export default router
