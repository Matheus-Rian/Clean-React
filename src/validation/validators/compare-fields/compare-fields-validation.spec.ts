import { InvalidFieldError } from '@/validation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'
import faker from 'faker'

const makeSut = (valueToCompare: string): CompareFieldsValidation => (
  new CompareFieldsValidation(faker.database.column(), valueToCompare)
)

describe('CompareFieldsValidation', () => {
  test('should return error if compare is invalid', () => {
    const sut = makeSut(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should return falsy if compare is valid', () => {
    const value = faker.random.word()
    const sut = makeSut(value)
    const error = sut.validate(value)
    expect(error).toBeFalsy()
  })
})
