import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { makeValidationComposite } from './login-validation-factory'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'

describe('LoginValidationFactory', () => {
  test('Should make compose ValidationComposite with correct validations', () => {
    const composite = makeValidationComposite()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
