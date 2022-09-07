import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClient-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeRemoteAuthentication = (): Authentication => (
  new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
)
