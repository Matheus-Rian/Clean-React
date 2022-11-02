import * as Helper from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid() })
export const mockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalidProperty: faker.datatype.uuid() })
