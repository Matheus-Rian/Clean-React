import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeValidationComposite } from './login-validation-factory'
import { makeLocalSaveAcessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeValidationComposite()}
      saveAccessToken={makeLocalSaveAcessToken()}
    />
  )
}
