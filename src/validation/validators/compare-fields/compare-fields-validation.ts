import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate (input: Record<string, string>): Error {
    return input[this.fieldToCompare] !== input[this.field]
      ? new InvalidFieldError()
      : null
  }
}
