import { assert } from 'chai'

import { NeoLegacyREST } from '../../../api'

describe('neo legacy', () => {
  it('should get an asset', async () => {})

  it('should get assets', async () => {})

  it('should get an address balance', async () => {})

  it('should get a block', async () => {})

  it('should get blocks', async () => {})

  it('should get a contract', async () => {})

  it('should get contracts', async () => {})

  it('should get contract transfers', async () => {})

  it('should get the node registry', async () => {})

  it('should get the chain height', async () => {})

  it('should get the invocation stats', async () => {})

  it('should get the log', async () => {})

  it('should get the storage events', async () => {})

  it('should get a transactions', async () => {})

  it('should get transaction abstracts', async () => {})

  it('should get transfer history', async () => {})

  it('Should get full transactions by address (Mainnet)', async () => {
    const address = 'AXFhnmWZ9tz66L4rcWSrjjxEkK6p4wzH9z'
    const response = await NeoLegacyREST.getFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2023-04-05T00:00:00Z',
      timestampTo: '2023-04-06T00:00:00Z'
    })

    assert.strictEqual(response.address, address)
    assert.strictEqual(response.protocol, 'neolegacy')
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
    assert.isString(event.to)
    assert.isNumber(event.tokenDecimals)
    assert.isNull(event.tokenID)
    assert.isString(event.tokenType)
  })

  it('Should get full transactions by address (Mainnet) with default pageLimit', async () => {
    const address = 'AJSK3qFtfCXdq7MD9AmTTwNtSjkA2k1xyt'
    const response = await NeoLegacyREST.getFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2022-06-16T00:00:00Z',
      timestampTo: '2023-05-16T00:00:00Z'
    })

    assert.strictEqual(response.data.length, 30)
  })

  it('Should export full transactions by address (Mainnet)', async () => {
    const address = 'AXFhnmWZ9tz66L4rcWSrjjxEkK6p4wzH9z'
    const response = await NeoLegacyREST.exportFullTransactionsByAddress({
      address,
      network: 'mainnet',
      timestampFrom: '2023-04-05T00:00:00Z',
      timestampTo: '2023-04-06T00:00:00Z'
    })
    assert.isNotEmpty(
      response.replace(
        'Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards',
        ''
      )
    )
  })

  it('Should be able to get unclaimed token using an address', async () => {
    const response = await NeoLegacyREST.getUnclaimed(
      'AQB8KjskTmRghCS3kMzxBNxKwT6b9kKM4v'
    )

    assert.deepEqual(response, {
      available: 0,
      unavailable: 365.08246065,
      unclaimed: 365.08246065
    })
  })
})
