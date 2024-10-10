import { assert } from 'chai'
import { NeoXREST } from '../../../api/neox'

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

  it('should get tokens information', async () => {
    const res = await NeoXREST.getTokens()

    assert.isNotNull(res)
    assert.isArray(res.items)
    assert.isNotEmpty(res.items)
    assert.isString(res.items[0].address)
    assert.isString(res.items[0].name)
    assert.isString(res.items[0].symbol)
    assert.isString(res.items[0].decimals)
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
})
