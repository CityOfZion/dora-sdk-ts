---
name: dora-sdk-agent-usage
description: Guidance for agents using the Dora TypeScript SDK to query Dora/COZ blockchain data APIs safely and consistently.
owner: City of Zion
status: draft
last_reviewed: 2026-03-13
---

# Dora SDK Agent Usage

Use this skill when an agent needs blockchain data from the Dora platform and the task is happening in a TypeScript or Node.js codebase.

## Why agents should use this SDK

Agents should prefer this SDK over ad hoc raw HTTP calls when working in TypeScript because it provides:

- a stable typed wrapper around Dora REST endpoints
- consistent chain-specific clients for Neo N3, Neo Legacy, Neo X, and Ethereum
- reusable unified activity-history methods across supported protocols
- lower implementation risk than hand-assembling endpoint URLs and payloads
- clearer code for future maintainers than scattered `axios` calls

Use the SDK especially when the goal is to:

- fetch balances, blocks, transactions, contracts, or address activity
- export activity history CSVs
- build tooling, scripts, or services that consume Dora data repeatedly
- keep protocol-specific access patterns readable and typed

## When not to use this SDK

Do not force this SDK into tasks where it is a poor fit.

Avoid or reconsider it when:

- the task is not in TypeScript/Node.js
- the required Dora endpoint is not exposed by the current SDK surface
- the user only needs a one-off manual inspection and not code integration
- the project requires lower-level transport customization beyond what the SDK exposes

In those cases, either extend the SDK deliberately or document why direct API access is required.

## What the SDK exposes

Top-level package exports:

```ts
import { api, interfaces } from '@cityofzion/dora-ts'
```

Primary API clients:

```ts
api.NeoN3REST
api.NeoLegacyREST
api.NeoXREST
api.EthereumREST
```

## Supported chain surfaces

### Neo N3

Use `api.NeoN3REST` for common Neo N3 explorer/data workflows such as:

- `addressTransactions(address, page?, network?)`
- `balance(address, network?)`
- `block(blockHeight, network?)`
- `blocks(page?, network?)`
- `contract(contractHash, network?)`
- `contracts(page, network?)`
- `contractStats(contractHash, network?)`
- `height(network?)`
- `invocationStats(network?)`
- `log(txid, network?)`
- `tokenProvenance(contract, tokenId, network?)`
- `transaction(txid, network?)`
- `transactions(page?, network?)`
- `transferHistory(address, page?, network?)`
- `voter(address, network?)`
- `getFullTransactionsByAddress(params)`
- `exportFullTransactionsByAddress(params)`

### Neo Legacy

Use `api.NeoLegacyREST` for Neo2 / legacy explorer workflows such as:

- `addressStats(address, network?)`
- `asset(assetHash, network?)`
- `assets(page?, network?)`
- `balance(address, network?)`
- `block(blockHash, network?)`
- `blocks(page?, network?)`
- `contract(contractHash, network?)`
- `contracts(page, network?)`
- `contractTransfers(contractHash, page?, network?)`
- `getAddressAbstracts(address, page?, network?)`
- `getAllNodes(network?)`
- `getUnclaimed(address, network?)`
- `height(network?)`
- `invocationStats(network?)`
- `log(contractHash, network?)`
- `storage(blockHash, network?)`
- `transaction(txid, network?)`
- `transactions(page?, network?)`
- `transactionAbstracts(txid, network?)`
- `transferHistory(address, page?, network?)`
- `getFullTransactionsByAddress(params)`
- `exportFullTransactionsByAddress(params)`

### Neo X

Use `api.NeoXREST` for Neo X explorer/data queries such as:

- `getAddress(addressHash, network?)`
- `getBlock(blockNumberOrHash, network?)`
- `getBlocks(network?)`
- `getStats(network?)`
- `getTokens(network?)`
- `getTransaction(transactionHash, network?)`
- `getFullTransactionsByAddress(params)`
- `exportFullTransactionsByAddress(params)`

### Ethereum

Use `api.EthereumREST` for unified activity-history workflows currently exposed by the SDK:

- `getFullTransactionsByAddress(params)`
- `exportFullTransactionsByAddress(params)`

## Recommended agent workflow

1. Confirm the project is TypeScript/Node.js.
2. Confirm the data need matches an exported Dora client method.
3. Prefer importing the SDK instead of writing fresh HTTP request code.
4. Choose the correct chain client.
5. Pass the correct network explicitly when the environment is not obvious.
6. Handle request failures clearly rather than swallowing them.
7. If the endpoint is missing, propose extending the SDK rather than creating hidden one-off transport logic.

## Example usage

### Neo N3 balance lookup

```ts
import { api } from '@cityofzion/dora-ts'

const balance = await api.NeoN3REST.balance(
  'Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D',
  'testnet'
)
```

### Neo X transaction lookup

```ts
import { api } from '@cityofzion/dora-ts'

const tx = await api.NeoXREST.getTransaction('0x1234...', 'mainnet')
```

### Unified full activity history

```ts
import { api } from '@cityofzion/dora-ts'

const history = await api.NeoN3REST.getFullTransactionsByAddress({
  address: 'Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D',
  page: 1
})
```

## Implementation guidance for agents

Prefer patterns like this:

```ts
import { api } from '@cityofzion/dora-ts'

export async function getAddressActivity(address: string) {
  return await api.NeoN3REST.getFullTransactionsByAddress({
    address,
    page: 1
  })
}
```

Avoid replacing the SDK with custom `axios` code unless one of these is true:

- the method does not exist in the SDK
- the SDK behavior is incorrect and needs a fix
- the task explicitly requires raw endpoint experimentation

## Good agent behaviors

- Use chain-specific SDK clients intentionally.
- Keep network selection explicit where possible.
- Reuse SDK response types when building application code.
- Keep wrappers thin; do not duplicate SDK logic without reason.
- If you add a new endpoint, add typings and examples with it.

## Watchouts

- Neo N3 and Neo Legacy have different method names and semantics.
- Some methods use hashes, others use block heights or addresses; do not guess inputs.
- Unified activity-history methods are protocol-backed and set protocol internally.
- README guidance in this repo is currently light; inspect exported modules and implementation before claiming support for an endpoint.

## If extending this SDK

When agents need an unsupported endpoint:

1. add the interface/type definitions first
2. implement the chain client method in the relevant `src/api/*/rest.ts`
3. export it from the chain index and package root if needed
4. add or update tests/examples
5. document the new capability in the README and this skill

## Repository-specific note

This repo’s current default branch is `develop`. If contributing changes, branch from `develop` and open PRs back into `develop` unless a maintainer instructs otherwise.
