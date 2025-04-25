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

    assert.strictEqual(item.block, 21716251)
    assert.strictEqual(item.date, '2025-01-27T13:46:47Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.000203299266933')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0xc68def44216d75e0e9b04d740774c8cacc4591b8793c7a118b58b9c8f3591851'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '14615550433888560')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'Ethereum')
    assert.strictEqual(event.from, '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.strictEqual(event.to, '0xe688b84b23f322a994a53dbf8e15fa82cdb71127')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
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

    assert.strictEqual(item.block, 29367250)
    assert.strictEqual(item.date, '2025-04-24T19:44:07Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.000000427757331359')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0x54f11cf7a41926f8359804b99426b01156b50703afd01bcd659cb8cd559a05bb'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '250000000000000000')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'Ethereum')
    assert.strictEqual(event.from, '0xcd4bd4461e3c11c8d698ea5797a378c03dc4a646')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.strictEqual(event.to, '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
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

    assert.strictEqual(item.block, 300775497)
    assert.strictEqual(item.date, '2025-01-30T08:06:33Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.00000025501')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0x6ffde57fb52cf6dddb015151b9582ac596e4c6e8b6961c4362d8a021219839aa'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '45670000000000')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'Ethereum')
    assert.strictEqual(event.from, '0x881e7c4c90f2d7f013558caf4feca330c327e476')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.strictEqual(event.to, '0x267d3af56b72b086706074819df77c2f8ec9deff')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
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

    assert.strictEqual(item.block, 70708718)
    assert.strictEqual(item.date, '2025-04-24T20:10:38Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.00910015')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '')
    assert.strictEqual(
      item.transactionID,
      '0xc79d5d1468b70abd3dce3ecf59a9df0783fae7fa3fc138e0b8193bf393f99055'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '39986412631073695')
    assert.strictEqual(event.contractHash, '')
    assert.strictEqual(event.contractName, 'Ethereum')
    assert.strictEqual(event.from, '0x8dcac06a65bbe5b9b43368b6301598195a2c8c5a')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.strictEqual(event.to, '0xe73d2a4121d1405db0b99589d1ca8aec2fb20506')
    assert.strictEqual(event.tokenDecimals, 18)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
  })
})
