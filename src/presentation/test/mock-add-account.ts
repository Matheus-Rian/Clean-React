import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { AddAccount, AddAccountParams, AuthenticationParams } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  account = mockAccountModel()
  params: AuthenticationParams
  callsCount = 0

  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
