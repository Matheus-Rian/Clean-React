import React from 'react'
import { SignUp } from '@/presentation/pages'
import { makeLocalSaveAcessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      saveAccessToken={makeLocalSaveAcessToken()}
    />
  )
}
