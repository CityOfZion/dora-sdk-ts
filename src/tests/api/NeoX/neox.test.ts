import { assert } from 'chai'
import { NeoXREST } from '../../../api'

describe('neox sdk', () => {
  it('should get address information', async () => {
    const addr = '0xd6BC5f7D2441A677218eBee5bCeE91d7f7a748E2'
    const res = await NeoXREST.getAddress(addr)

    assert.isNotNull(res)
    assert.strictEqual(res.hash, addr)
    assert.isBoolean(res.is_contract)
    assert.isString(res.coin_balance)
    assert.isBoolean(res.is_verified)

    assert.property(res, 'name')
    assert.property(res, 'private_tags')
    assert.property(res, 'public_tags')
    assert.property(res, 'watchlist_names')
  })

  it('should get block information', async () => {
    const blockNumber = '456865'
    const res = await NeoXREST.getBlock(blockNumber)

    assert.isNotNull(res)
    assert.strictEqual(res.height, Number(blockNumber))
    assert.isString(res.hash)
    assert.isString(res.difficulty)
    assert.strictEqual(
      res.parent_hash,
      '0x1eb1b5275ef0cd066eb509a5db5bf5313cb86a7b55f06e062363dfeb27be66d3'
    )
  })

  it('should get blocks information', async () => {
    const res = await NeoXREST.getBlocks()

    assert.isNotNull(res)
    assert.isArray(res.items)
    assert.isNotEmpty(res.items)
    assert.isString(res.items[0].hash)
    assert.isNumber(res.items[0].height)
    assert.isString(res.items[0].difficulty)
  })

  it('should get stats information', async () => {
    const res = await NeoXREST.getStats()

    assert.isNotNull(res)
    assert.isString(res.total_blocks)
    assert.isString(res.total_addresses)
    assert.isString(res.total_transactions)
    assert.isNumber(res.average_block_time)
    assert.isAbove(res.average_block_time, 0)
  })

  it('Should get tokens information', async () => {
    const { items } = await NeoXREST.getTokens()

    assert.isArray(items)
    assert.isNotEmpty(items)

    const [firstItem] = items

    assert.isString(firstItem.address)
    assert.isString(firstItem.name)
    assert.isString(firstItem.symbol)
    assert.isTrue(
      firstItem.decimals === null || typeof firstItem.decimals === 'string'
    )
  })

  it('should get transaction information', async () => {
    const hash =
      '0xbf1b8a0973bddf3621781c57cf02e5d069b622601b3f2a7238f602943f2f7578'
    const res = await NeoXREST.getTransaction(hash)

    assert.isNotNull(res)
    assert.strictEqual(res.hash, hash)
    assert.strictEqual(res.block, 456865)
    assert.strictEqual(res.timestamp, '2024-10-04T14:21:38.000000Z')
    assert.strictEqual(res.method, 'removeLiquidityETH')
  })

  it('Should get full transactions by address (Mainnet)', async () => {
    const address = '0x17c15d54383c44384191e677739B46fc49dAB214'
    const response = await NeoXREST.getFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2025-01-27T00:00:00Z',
      timestampTo: '2025-01-27T13:40:00Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'neox')
    assert.strictEqual(response.network, 'mainnet')
    assert.isString(response.nextCursor)

    const { data } = response

    assert.isArray(data)
    assert.isNotEmpty(data)

    const [item] = data

    assert.strictEqual(item.block, 1411628)
    assert.strictEqual(item.date, '2025-01-27T13:25:17Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.00084')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0x495eb0e7e364aab3c21881f86f1cacd616d6e06bd6da9bfa90d422d9fbcbe096'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '5.71')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'GAS')
    assert.strictEqual(event.from, '0x17c15d54383c44384191e677739b46fc49dab214')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isNull(event.supportedStandards)
    assert.strictEqual(event.to, '0xfbd6acca70a8632061593f1a07056affb7965ac3')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
  })

  it('Should get full transactions by address (Testnet)', async () => {
    const address = '0x0804FE35E0c8f40E7DB7eF805587C382ea6E51d4'
    const response = await NeoXREST.getFullTransactionsByAddress({
      address,
      network: 'testnet',
      timestampFrom: '2025-01-28T09:00:00Z',
      timestampTo: '2025-01-28T11:01:00Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'neox')
    assert.strictEqual(response.network, 'testnet')
    assert.isString(response.nextCursor)

    const { data } = response

    assert.isArray(data)
    assert.isNotEmpty(data)

    const [item] = data

    assert.strictEqual(item.block, 1545419)
    assert.strictEqual(item.date, '2025-01-28T09:47:10Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.00084')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0x7a5f4e3bf0f50581c8f9b118a24e6ebd650122dfb8a90964afbbcc1a5d91dc96'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '1.')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'GAS')
    assert.strictEqual(event.from, '0x0804fe35e0c8f40e7db7ef805587c382ea6e51d4')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isNull(event.supportedStandards)
    assert.strictEqual(event.to, '0xaa352b759ea1c6494fc3ea24cdd2f0e517b6aa00')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
  })
})
