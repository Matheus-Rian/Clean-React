import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClient-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { AddAccount } from '../../../../domain/usecases/add-account'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => (
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
)
