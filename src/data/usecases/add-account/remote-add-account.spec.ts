import faker from 'faker'
import { RemoteAddAccount } from './remote-add-account'
import { AccountModel } from '@/domain/models'
import { AddAccountParams } from '@/domain/usecases/add-account'
import { HttpPostClientSpy } from '@/data/test'
import { mockAddAccountParam } from '@/domain/test'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccountParam())
    expect(httpPostClientSpy.url).toBe(url)
  })
})
