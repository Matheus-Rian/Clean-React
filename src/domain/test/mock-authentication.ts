import { AuthenticationParams } from '@/domain/usecases/authenticator'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
