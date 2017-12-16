import db from '../db'
import utils from '../utils'

export default function signIn(user) {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE
      email = $/email/
  `, user)
    .then((dbUser) => {
      return utils.checkPassword(user.password, dbUser.password)
        .then((match) => {
          if (!match) throw Error
          delete dbUser.password
          return dbUser
        })
    })
}
