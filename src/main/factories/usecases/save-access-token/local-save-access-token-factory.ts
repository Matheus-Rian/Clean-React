import { SaveAccessToken } from '@/domain/usecases/save-access-token'
import { LocalSaveAccessToken } from '@/data/usecases/save-access-token/local-save-access-token'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeLocalSaveAcessToken = (): SaveAccessToken => (
  new LocalSaveAccessToken(makeLocalStorageAdapter())
)
