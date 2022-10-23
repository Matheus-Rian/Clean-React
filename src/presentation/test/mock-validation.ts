import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, input: Record<string, string>): string {
    return this.errorMessage
  }
}
