export interface AnyObject {
  [key: string]: unknown
}

export interface MultipleApiParamsType {
  end_points: string[]
  reject?: (res?: unknown) => void
  resolve: (res?: unknown) => void
  body?: unknown
}

export interface MultiApiResponseObject {
  data: unknown
  pagination?: unknown
  status: boolean
  message?: string
}
export type MultiApiResponse = MultiApiResponseObject[]

export interface ApiParamsType {
  end_point: string
  reject?: (res?: unknown) => void
  resolve?: (res?: unknown) => void
  body?: unknown
  responseAlert?: boolean
}

export interface ApiResPonseType {
  status?: boolean
  message?: string
  data?: unknown
}
export interface TokensType {
  token?: string | null
  refreshToken?: string | null
}

export type TGRType = {
  status: boolean
  data?: unknown
}
