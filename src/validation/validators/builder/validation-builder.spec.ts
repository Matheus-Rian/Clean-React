
import { EmailValidation, MinLengthValidation, RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return minLengthValidation', () => {
    const minLength = faker.datatype.number()
    const field = faker.database.column()
    const validations = sut.field(field).min(minLength).build()
    expect(validations).toEqual([new MinLengthValidation(field, minLength)])
  })

  test('Should return compareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('Should return a list of validations', () => {
    const minLength = faker.datatype.number()
    const field = faker.database.column()
    const validations = sut.field(field).required().min(minLength).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, minLength),
      new EmailValidation(field)
    ])
  })
})
