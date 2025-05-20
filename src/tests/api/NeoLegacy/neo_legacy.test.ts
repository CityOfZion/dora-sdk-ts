import { assert } from 'chai'
import { NeoLegacyREST } from '../../../api'

describe('neo legacy', () => {
  // timeout
  // it('should get address_stats', async () => {
  //   const res = await NeoLegacyREST.addressStats(
  //     'AZ3JaZ9myjiW98hwLvc3F4RQVvVX4Pm83M'
  //   )
  //   assert.isNotNull(res)
  //   assert.strictEqual(res.length, 14)
  // }).timeout(60000)

  // timeout
  // it("should get an address' abstract fields", async () => {
  //   const res = await NeoLegacyREST.getAddressAbstracts(
  //     'ANeo2toNeo3MigrationAddressxwPB2Hz'
  //   )
  //   assert.isNotNull(res)
  //   assert.strictEqual(res.entries.length, 15)
  // })

  it('should get the claimable transactions', async () => {
    const res = await NeoLegacyREST.getClaimable(
      'AciSRoWhAF95rvJVkWX38XfNPLLDjWEsoE'
    )
    assert.isNotNull(res)
    assert.isNumber(Object.keys(res).length)
  })

  it('should get the unclaimed metadata', async () => {
    const res = await NeoLegacyREST.getUnclaimed(
      'AciSRoWhAF95rvJVkWX38XfNPLLDjWEsoE'
    )
    assert.isNotNull(res)
    assert.strictEqual(Object.keys(res).length, 3)
  })

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

    assert.strictEqual(response.data.length, 15)
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
})
