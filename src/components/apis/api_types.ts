export interface AnyObject {
  [key: string]: unknown
}

export interface ApiParamsType {
  end_point: string
  reject?: (res?: unknown) => void
  resolve?: (res?: unknown) => void
  body?: unknown
  responseAlert?: boolean
}

export interface TokensType {
  token?: string | null
  refreshToken?: string | null
}

export type TGRType = {
  status: boolean
  data?: unknown
}
