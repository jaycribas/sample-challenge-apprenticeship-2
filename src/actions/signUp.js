import db from '../db'
import utils from '../utils'

export default function signUp(user) {
  return utils.hashPassword(user.password)
    .then((hash) => {
      user.password = hash
      return db.one(`
        INSERT INTO
          users (name, email, password)
        VALUES
          ($/name/, $/email/, $/password/)
        RETURNING
          *
      `, user)
        .catch((error) => {
          console.log(
            'Error running signUp()',
            error.message,
          )
          throw error
        })
    })
}
