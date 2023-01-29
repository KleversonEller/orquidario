import { User } from '@models/User'

test('ok', () => {
  const user = new User()

  user.name = 'Tamiris'

  expect(user.name).toEqual('Tamiris')
})
