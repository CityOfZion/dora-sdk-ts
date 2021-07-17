import { assert } from 'chai'
import { NeoLegacyREST } from '../../../api/neo_legacy'

describe('neo legacy', () => {
  it('should get address_stats', async () => {
    const res = await NeoLegacyREST.addressStats(
      'AZ3JaZ9myjiW98hwLvc3F4RQVvVX4Pm83M'
    )
    assert.isNotNull(res)
    assert.strictEqual(res.length, 10)
  })

  it("should get an address' abstract fields", async () => {
    const res = await NeoLegacyREST.getAddressAbstracts(
      'AZ3JaZ9myjiW98hwLvc3F4RQVvVX4Pm83M'
    )
    assert.isNotNull(res)
    assert.strictEqual(res.entries.length, 15)
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
})
