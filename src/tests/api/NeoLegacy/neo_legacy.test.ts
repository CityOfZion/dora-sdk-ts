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
    assert.strictEqual(Object.keys(res).length, 3)
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

    assert.strictEqual(item.block, 10679246)
    assert.strictEqual(item.date, '2023-04-05T18:18:31Z')
    assert.strictEqual(item.invocationCount, 0)
    assert.strictEqual(item.networkFeeAmount, '0.1')
    assert.strictEqual(item.notificationCount, 0)
    assert.strictEqual(item.systemFeeAmount, '0')
    assert.strictEqual(
      item.transactionID,
      '0xe32b16ef3b2646fad1be27b2026f74d0b0634bb0aa589c3ca068c83c9d42e010'
    )

    const {
      events: [event]
    } = item

    assert.strictEqual(event.amount, '231092.6301')
    assert.strictEqual(
      event.contractHash,
      '0x62393531656362626335666533376139633238306137366362306365303031343832373239346366'
    )
    assert.strictEqual(event.contractName, 'DeepBrain Coin')
    assert.strictEqual(event.from, 'AXFhnmWZ9tz66L4rcWSrjjxEkK6p4wzH9z')
    assert.strictEqual(event.methodName, 'transfer')
    assert.isArray(event.supportedStandards)
    assert.isNotEmpty(event.supportedStandards)
    assert.strictEqual(event.to, 'AN2jTfAWaMptaE2dRm5n9CvyAYMCJc6RmR')
    assert.strictEqual(event.tokenDecimals, 8)
    assert.strictEqual(event.tokenID, null)
    assert.strictEqual(event.tokenType, '')
  })
})
