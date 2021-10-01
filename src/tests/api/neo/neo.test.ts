import { assert } from 'chai'
import { NeoRest } from '../../../api/neo'

describe('neo sdk', () => {
  it('should get an asset', async () => {
    const res = await NeoRest.asset(
      '0x3466566e4f93d788a7129231b363e7f32fd50f07',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(res.name, 'GAS')
    assert.strictEqual(
      res.scripthash,
      '0x3466566e4f93d788a7129231b363e7f32fd50f07'
    )
  })

  it('should get assets', async () => {
    const res = await NeoRest.assets(2, 'testnet')
    assert.isNotNull(res)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get a balance', async () => {
    const res = await NeoRest.balance(
      'NijmPn3qW7F3rkFXMeL46pL7TJa51bbUgL',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(res.length, 3)
  })

  it('should get a block', async () => {
    const res = await NeoRest.block(315682, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
    assert.strictEqual(
      res.hash,
      '0x4c1b934d38aa54e678eefda4123299141c83c3c49436b8df8fb56e91f5414827'
    )
    assert.strictEqual(res.size, 942)
  })

  it('should get blocks', async () => {
    const res = await NeoRest.blocks(1, 'testnet')
    assert.isNotNull(res)
    assert.isArray(res.items)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get a contract', async () => {
    const res = await NeoRest.contract(
      '0xbf2d0fb512ace4cee9ee775b0aa6b9a498055e60',
      'testnet'
    )
    assert.isNotNull(res)
    assert.isObject(res)
    assert.strictEqual(res.id, 455)
    assert.strictEqual(res.hash, '0xbf2d0fb512ace4cee9ee775b0aa6b9a498055e60')
    assert.isObject(res.nef)
  })

  it('should get contracts', async () => {
    const res = await NeoRest.contracts(1, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
  })

  it('should get contract stats', async () => {
    const res = (await NeoRest.contractStats(
      '0xbf2d0fb512ace4cee9ee775b0aa6b9a498055e60',
      'testnet'
    )) as any
    assert.isNotNull(res)
    // validated that this was still a typeof Object TS is weird about bracket notation so had to typescript above
    assert.isObject(res)
    assert.strictEqual(res['20210715'], 3)
  })

  it('should get nodes', async () => {
    const res = await NeoRest.getAllNodes('testnet')
    assert.isNotNull(res)
  })

  it('should get the block height', async () => {
    const res = await NeoRest.height('testnet')
    assert.isNotNull(res)
    assert.isObject(res)
  })

  it('should get the transaction log', async () => {
    const res = await NeoRest.log(
      '0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(
      res.txid,
      '0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4'
    )
    assert.strictEqual(res.trigger, 'Application')
    assert.strictEqual(res.notifications.length, 2)
  })

  it('should get a transaction', async () => {
    const res = await NeoRest.transaction(
      '0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(
      res.hash,
      '0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4'
    )
    assert.strictEqual(res.sender, 'NgUS1Jd5oPRPCJfaX1UnXdeKNuxLDQg1Vo')
    assert.strictEqual(res.size, 2295)
    assert.strictEqual(res.signers?.length, 1)
  })

  it('should get transactions', async () => {
    const res = await NeoRest.transactions(1, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get the enhanced transactions for an address', async () => {
    const res = await NeoRest.addressTransactions('NNtgxn9X4oRG1y7UfxDyjef8aFy6eRpApa', 1)
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.isAtLeast(res.items.length, 14)
  })

  it('should get transfer history', async () => {
    const res = await NeoRest.transferHistory(
      'NeFM2R8bq9c5q9bvsoargVH4MifMrXDikH',
      2,
      'testnet'
    )
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.strictEqual(res.items.length, 15)
  })
})
