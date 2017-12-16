import db from '../db'

export default function getUserById(id) {
  return db.one(`
    SELECT
      id,
      name,
      email
    FROM
      users
    WHERE
      id = $1
  `, id)
    .catch((error) => {
      console.log('Error running getUserById()\n', error.message, arguments)
      throw error
    })
}
