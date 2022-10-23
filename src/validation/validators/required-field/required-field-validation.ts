import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: Record<string, unknown>): Error {
    return input[this.field] ? null : new RequiredFieldError()
  }
}
