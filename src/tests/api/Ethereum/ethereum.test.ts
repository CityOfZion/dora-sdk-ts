import { assert } from 'chai'
import { EthereumREST } from '../../../api'
import { sleep } from '../utils'

describe('Ethereum SDK', () => {
  beforeEach(async () => {
    // Avoid request timeouts
    await sleep(2000)
  })

  it('Should get full transactions by address (Ethereum Mainnet)', async () => {
    const address = '0xc1E563e0bA11485861198e32e25C216B312B219a'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2025-10-23T08:45:00Z',
      timestampTo: '2025-10-23T08:47:59Z'
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
    const address = '0xD88Df42a769e452897EC3312389E29B592e1726B'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '8453',
      timestampFrom: '2025-10-22T07:59:53Z',
      timestampTo: '2025-10-22T19:44:09Z'
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
    const address = '0xE5Ab7242F453172b978A4DC5aEdc7096B8196cb6'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '42161',
      timestampFrom: '2025-10-23T09:40:33Z',
      timestampTo: '2025-10-23T09:48:34Z'
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
    const address = '0x0D0Ee387a47827862D7059204f23f67E59cc509B'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '137',
      timestampFrom: '2025-08-22T00:00:00Z',
      timestampTo: '2025-08-22T23:59:59Z'
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
    const address = '0xbE36FfB83dB26E71Ac90b3ffB0D7D9d99F021a0D'
    const response = await EthereumREST.getFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2025-10-13T08:45:00Z',
      timestampTo: '2025-10-23T08:47:59Z'
    })

    assert.strictEqual(response.data.length, 50)
  })

  it('Should export full transactions by address (Ethereum Mainnet)', async () => {
    const address = '0xc1E563e0bA11485861198e32e25C216B312B219a'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '1',
      timestampFrom: '2025-10-23T08:45:00Z',
      timestampTo: '2025-10-23T08:47:59Z'
    })

    const needle =
      'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards'
    assert.include(response, needle, 'header not found')
    assert.isNotEmpty(response.replace(needle, ''))
  })

  it('Should export full transactions by address (Base Mainnet)', async () => {
    const address = '0xD88Df42a769e452897EC3312389E29B592e1726B'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '8453',
      timestampFrom: '2025-10-22T07:59:53Z',
      timestampTo: '2025-10-22T19:44:09Z'
    })

    const needle =
      'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards'
    assert.include(response, needle, 'header not found')
    assert.isNotEmpty(response.replace(needle, ''))
  })

  it('Should export full transactions by address (Arbitrum Mainnet)', async () => {
    const address = '0xE5Ab7242F453172b978A4DC5aEdc7096B8196cb6'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '42161',
      timestampFrom: '2025-10-23T09:40:33Z',
      timestampTo: '2025-10-23T09:48:34Z'
    })

    const needle =
      'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards'
    assert.include(response, needle, 'header not found')
    assert.isNotEmpty(response.replace(needle, ''))
  })

  it('Should export full transactions by address (Polygon Mainnet)', async () => {
    const address = '0x0D0Ee387a47827862D7059204f23f67E59cc509B'
    const response = await EthereumREST.exportFullTransactionsByAddress({
      address,
      network: '137',
      timestampFrom: '2025-08-22T00:00:00Z',
      timestampTo: '2025-08-22T23:59:59Z'
    })

    const needle =
      'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards'
    assert.include(response, needle, 'header not found')
    assert.isNotEmpty(response.replace(needle, ''))
  })
})
