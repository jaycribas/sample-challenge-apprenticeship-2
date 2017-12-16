import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';
import db from '../../src/db'

describe('function signUp ', () => {
  beforeEach(() => {
    db.none('TRUNCATE users RESTART IDENTITY')
  })
  it('should create a new row in the users table', () => {
    return signUp({name: 'Test', email: 'test@test.com', password: '123'})
      .then((user) => {
        expect(user.name).to.equal('Test')
        expect(user.email).to.equal('test@test.com')
      })
  })
})
