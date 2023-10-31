import { assert } from 'chai'
import { NeoRest } from '../../../api/neo'
import type { ContractStatsResponse } from 'src/interfaces/api/neo'

describe('neo sdk', () => {
  it('should get an asset', async () => {
    const res = await NeoRest.asset(
      '0xd2a4cff31913016155e38e474a2c06d08be276cf',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(res.name, 'GasToken')
    assert.strictEqual(
      res.scripthash,
      '0xd2a4cff31913016155e38e474a2c06d08be276cf'
    )
  })

  it('should get assets', async () => {
    const res = await NeoRest.assets(2, 'testnet')
    assert.isNotNull(res)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get a balance', async () => {
    const res = await NeoRest.balance(
      'Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D',
      'testnet'
    )
    assert.isNotNull(res)
    // 2 because of NEO and GAS
    assert.isAtLeast(res.length, 2)
  })

  it('should get a block', async () => {
    const res = await NeoRest.block(0, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
    assert.strictEqual(
      res.hash,
      '0x9d3276785e7306daf59a3f3b9e31912c095598bbfb8a4476b821b0e59be4c57a'
    )
    assert.isNotNull(res.witnesses)
    assert.strictEqual(res.size, 114)
  })

  it('should get a block with transactions', async () => {
    const res = await NeoRest.block(2486, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
    assert.strictEqual(
      res.hash,
      '0xe0f8d56fb07b79be5d572ccf0ad7b643e7cbc24d48dede875fd7e041e5debb7f'
    )
    assert.strictEqual(res.tx.length, 1)
  })

  it('should get blocks', async () => {
    const res = await NeoRest.blocks(1, 'testnet')
    assert.isNotNull(res)
    assert.isArray(res.items)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get a contract', async () => {
    const res = await NeoRest.contract(
      '0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92',
      'testnet'
    )
    assert.isNotNull(res)
    assert.isObject(res)
    assert.strictEqual(res.id, 2)
    assert.strictEqual(res.hash, '0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92')
    assert.isObject(res.nef)
  })

  it('should get contracts', async () => {
    const res = await NeoRest.contracts(1, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
  })

  it('should get contract stats', async () => {
    const res = (await NeoRest.contractStats(
      '0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92',
      'testnet'
    )) as ContractStatsResponse
    assert.isNotNull(res)
    // validated that this was still a typeof Object TS is weird about bracket notation so had to typescript above
    assert.isObject(res)
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
      '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(
      res.txid,
      '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535'
    )
    assert.strictEqual(res.trigger, 'Application')
    assert.strictEqual(res.notifications.length, 1)
  })

  it('should get a transaction', async () => {
    const res = await NeoRest.transaction(
      '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535',
      'testnet'
    )
    assert.isNotNull(res)
    assert.strictEqual(
      res.hash,
      '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535'
    )
    assert.strictEqual(res.sender, 'NVfj3vnyBCUb2E2eSFacY3N4Q1UU9ed3FG')
    assert.strictEqual(res.size, 860)
    assert.strictEqual(res.signers?.length, 2)
  })

  it('should get transactions', async () => {
    const res = await NeoRest.transactions(1, 'testnet')
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.strictEqual(res.items.length, 15)
  })

  it('should get transfer history', async () => {
    const res = await NeoRest.transferHistory(
      'Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D',
      1,
      'testnet'
    )
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.isAtLeast(res.items.length, 2)
  })

  it('should get the voter information of a user', async () => {
    const res = await NeoRest.voter('Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D')
    assert.isNotNull(res)
    assert.isObject(res)
  })

  it('should get Neo committee information', async () => {
    const res = await NeoRest.committee()
    assert.isNotNull(res)
    assert.isArray(res)
  })

  it('should get the full transactions history for an address', async () => {
    const res = await NeoRest.addressTransactions(
      'Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D',
      1,
      'testnet'
    )
    assert.isNotNull(res)
    assert.isObject(res)
    assert.isArray(res.items)
    assert.isAtLeast(res.items.length, 2)
  })

  it('should get the token provenance', async () => {
    const res = await NeoRest.tokenProvenance('0x904deb56fdd9a87b48d89e0cc0ac3415f9207840', '31')
    const stub = res[0]
    console.log(stub)
    assert.equal(JSON.stringify(stub),   JSON.stringify({
      blockheight: 3344359,
      timestamp: 1682461762,
      txid: '0xece84f5ddd3787915a8c113f5f8748be5fc2dff560b202304264de42fb2b83ca',
      owner: 'NaZwraSdJv9BYwYzZryiZcydaPDof56beK'
    }))
  })
})
