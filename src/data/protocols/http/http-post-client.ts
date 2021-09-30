import { HttpResponse } from './http-response'

export type HttpPostParams = {
  url: string
  body?: Record<string, string>
}
export interface HttpPostClient {
  post (params: HttpPostParams): Promise<HttpResponse>
}
