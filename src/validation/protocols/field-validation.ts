export interface FieldValidation {
  field: string
  validate: (input: Record<string, unknown>) => Error
}
