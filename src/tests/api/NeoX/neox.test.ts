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
})
