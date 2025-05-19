import { assert } from 'chai'
import { EthereumREST } from '../../../api'

describe('Ethereum SDK', () => {
  it('Should get full transactions by address (Ethereum Mainnet)', async () => {
    const address = '0xe688b84b23f322a994A53dbF8E15FA82CDB71127'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2025-01-27T12:00:00Z',
      timestampTo: '2025-01-27T13:47:00Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'ethereum')
    assert.strictEqual(response.network, 'eth')
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
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Base Mainnet)', async () => {
    const address = '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '8453',
      timestampFrom: '2025-01-30T07:59:53Z',
      timestampTo: '2025-04-24T19:44:09Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'ethereum')
    assert.strictEqual(response.network, 'base')
    assert.isString(response.nextCursor)

    const { data } = response

    assert.isArray(data)
    assert.isNotEmpty(data)

    const item = data[1]

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
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Arbitrum Mainnet)', async () => {
    const address = '0x881E7C4C90f2D7f013558CAf4feca330C327E476'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '42161',
      timestampFrom: '2025-01-30T08:06:33Z',
      timestampTo: '2025-01-30T08:06:34Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'ethereum')
    assert.strictEqual(response.network, 'arbitrum')
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
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Polygon Mainnet)', async () => {
    const address = '0x8dcAc06A65bBE5B9b43368B6301598195A2C8c5a'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '137',
      timestampFrom: '2025-01-30T13:34:42Z',
      timestampTo: '2025-04-24T20:12:03Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'ethereum')
    assert.strictEqual(response.network, 'polygon')
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
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Ethereum Mainnet) with default pageLimit', async () => {
    const address = '0xe688b84b23f322a994A53dbF8E15FA82CDB71127'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2024-08-27T12:00:00Z',
      timestampTo: '2025-01-27T13:47:00Z'
    })

    assert.strictEqual(response.data.length, 50)
  })

  it('Should export full transactions by address (Ethereum Mainnet)', async () => {
    const address = '0xe688b84b23f322a994A53dbF8E15FA82CDB71127'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2025-01-27T12:00:00Z',
      timestampTo: '2025-01-27T13:47:00Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })

  it('Should export full transactions by address (Base Mainnet)', async () => {
    const address = '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '8453',
      timestampFrom: '2025-01-30T07:59:53Z',
      timestampTo: '2025-04-24T19:44:09Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })

  it('Should export full transactions by address (Arbitrum Mainnet)', async () => {
    const address = '0x881E7C4C90f2D7f013558CAf4feca330C327E476'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '42161',
      timestampFrom: '2025-01-30T08:06:33Z',
      timestampTo: '2025-01-30T08:06:34Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })

  it('Should export full transactions by address (Polygon Mainnet)', async () => {
    const address = '0x8dcAc06A65bBE5B9b43368B6301598195A2C8c5a'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '137',
      timestampFrom: '2025-01-30T13:34:42Z',
      timestampTo: '2025-04-24T20:12:03Z'
    })

    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })
})
