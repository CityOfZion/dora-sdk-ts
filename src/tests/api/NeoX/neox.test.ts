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

    assert.isNumber(item.block)
    assert.isString(item.date)
    assert.isNumber(item.invocationCount)
    assert.isString(item.networkFeeAmount)
    assert.isNumber(item.notificationCount)
    assert.isString(item.systemFeeAmount)
    assert.isString(item.transactionID)

    const {
      events: [event]
    } = item

    assert.isString(event.amount)
    assert.isString(event.contractHash)
    assert.isString(event.contractName)
    assert.isString(event.from)
    assert.isString(event.methodName)
    assert.isNull(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
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

    assert.isNumber(item.block)
    assert.isString(item.date)
    assert.isNumber(item.invocationCount)
    assert.isString(item.networkFeeAmount)
    assert.isNumber(item.notificationCount)
    assert.isString(item.systemFeeAmount)
    assert.isString(item.transactionID)

    const {
      events: [event]
    } = item

    assert.isString(event.amount)
    assert.isString(event.contractHash)
    assert.isString(event.contractName)
    assert.isString(event.from)
    assert.isString(event.methodName)
    assert.isNull(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Mainnet) with default pageLimit', async () => {
    const address = '0x17c15d54383c44384191e677739B46fc49dAB214'
    const response = await NeoXREST.getFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2024-02-27T00:00:00Z',
      timestampTo: '2025-01-27T13:40:00Z'
    })

    assert.strictEqual(response.data.length, 50)
  })

  it('Should export full transactions by address (Mainnet)', async () => {
    const address = '0x17c15d54383c44384191e677739B46fc49dAB214'
    const response = await NeoXREST.exportFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2025-01-27T00:00:00Z',
      timestampTo: '2025-01-27T13:40:00Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })

  it('Should export full transactions by address (Testnet)', async () => {
    const address = '0x0804FE35E0c8f40E7DB7eF805587C382ea6E51d4'
    const response = await NeoXREST.exportFullTransactionsByAddress({
      address,
      network: 'testnet',
      timestampFrom: '2025-01-28T09:00:00Z',
      timestampTo: '2025-01-28T11:01:00Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })
})
