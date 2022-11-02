import faker from 'faker'
import * as Helper from './http-mocks'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', { invalidProperty: faker.datatype.uuid() })
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid() })
