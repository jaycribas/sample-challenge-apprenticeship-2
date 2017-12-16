import express from 'express'

import {
  signUp,
  signIn,
} from '../actions'

const router = express.Router()

router.route('/sign-up')
  .get((req, res) => res.render(
    'authentication/sign-up',
    {warning: ''},
  ))
  .post((req, res) => {
    signUp(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.render(
        'authentication/sign-up',
        {warning: 'Something went wrong, please try again.'},
      ))
  })

router.route('/sign-in')
  .get((req, res) => res.render(
    'authentication/sign-in',
    {warning: ''},
  ))
  .post((req, res) => {
    signIn(req.body)
      .then((user) => {
        req.session.user = user
        res.redirect('/')
      })
      .catch(() => res.render(
        'authentication/sign-in',
        {warning: 'Incorrect email and/or password.'},
      ))
  })

export default router
