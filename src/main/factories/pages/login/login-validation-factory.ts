import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder as Builder } from '@/validation/validators/builder/validation-builder'

export const makeValidationComposite = (): ValidationComposite => (
  ValidationComposite.build([
    ...Builder.field('email').required().email().build(),
    ...Builder.field('password').required().min(5).build()
  ])
)
