import bcrypt from 'bcrypt'

const hashPassword = (plainTextPassword) => {
  const saltRounds = 10
  return bcrypt.hash(plainTextPassword, saltRounds)
}

const checkPassword = (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash)
}

export default {
  hashPassword,
  checkPassword,
}
