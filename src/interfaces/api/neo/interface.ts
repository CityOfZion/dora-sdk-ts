import { TypedResponse, Witness } from '../common'

export interface ABI {
  events: Event[]
  methods: Method[]
}

export interface Contract {
  asset_name: string
  block: number
  hash: string
  manifest: Manifest
  symbol: string
  time: string
  type: string
}

export interface Token {
  decimals: string
  firstseen: number
  name: string
  scripthash: string
  state: {
    hash: string
    id: number
    manifest: Manifest
    nef: NEF
  }
  symbol: string
  time: string
  type: string
}

export interface Event {
  name: string
  parameters: Parameter[]
}

export interface InvocationDetails {
  type: string
  metadata: InvocationDetailNEP17Transfer |
    InvocationDetailNEP11Transfer |
    InvocationDetailContractInvocation |
    InvocationDetailVote
}

export interface InvocationDetailContractInvocation {
  summary: string
  contract_name: string
  scripthash: string
  method: string
}

export interface InvocationDetailNEP11Transfer {
  summary: string
  symbol: string
  contract_name: string
  scripthash: string
  to: string
  token_id: string
  data: string
}

export interface InvocationDetailNEP17Transfer {
  summary: string
  symbol: string
  contract_name: string
  scripthash: string
  from: string
  to: string
  amount: number
  data: string
}

export interface InvocationDetailVote {
  summary: string
  contract_name: string
  scripthash: string
  voter: string
  candidate: string
  candidate_name: string
}

export interface Manifest {
  abi?: ABI
  extra: {
    Author: string
    Description: string
    Email?: string
  }
  features?: any
  groups?: any
  name: string
  permissions?: Permission[]
  supportedstandards?: string[]
  trusts?: string[]
}

export interface Method {
  name: string
  offset: number
  parameters: Parameter[]
  returntype: string
  safe: boolean
}

export interface NEF {
  checksum: number
  compiler: string
  magic: number
  script: string
  tokens: Token[]
}

export interface Notification {
  contract: string
  event_name: string
  state: TypedResponse
}

export interface Parameter {
  name: string
  type: string
}

export interface Permission {
  contract: string
  methods: string[]
}

export interface Signer {
  account: string
  scopes: string
}

export interface Token {
  callflags: string
  hash: string
  hasreturnvalue: boolean
  method: string
  paramcount: number
}

export interface Transaction {
  _id: string
  attributes?: any[]
  block: number
  hash: string
  jsonsize?: number
  netfee?: string
  nonce?: number
  script?: string
  sender?: string
  signers?: Signer[]
  size: number
  sysfee?: string
  time: string
  validuntilblock?: number
  version?: number
  witnesses?: Witness[]
}

export interface TransactionEnhanced {
  hash: string
  sender: string
  sysfee: string
  netfee: string
  block: number
  time: string
  vmstate: string
  invocations: InvocationDetails[]
}