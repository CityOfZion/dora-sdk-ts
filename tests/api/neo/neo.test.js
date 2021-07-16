const sdk = require("../../../dist")

test("should get an asset", async () => {
    const res = await sdk.api.NeoRest.asset("0x3466566e4f93d788a7129231b363e7f32fd50f07", "testnet")
})

test("should get assets", async () => {
    const res = await sdk.api.NeoRest.assets(2, "testnet")
})

test("should get a balance", async () => {
    const res = await sdk.api.NeoRest.balance("NijmPn3qW7F3rkFXMeL46pL7TJa51bbUgL", "testnet")
})

test("should get a block", async () => {
    const res = await sdk.api.NeoRest.block(315682, "testnet")
})

test("should get blocks", async () => {
    const res = await sdk.api.NeoRest.blocks(1, "testnet")
})

test("should get a contract", async () => {
    const res = await sdk.api.NeoRest.contract("0xbf2d0fb512ace4cee9ee775b0aa6b9a498055e60", "testnet")
})

test("should get contracts", async () => {
    const res = await sdk.api.NeoRest.contracts(1, "testnet")
})

test("should get contract stats", async () => {
    const res = await sdk.api.NeoRest.contractStats("0xbf2d0fb512ace4cee9ee775b0aa6b9a498055e60", "testnet")
})

test("should get nodes", async () => {
    const res = await sdk.api.NeoRest.getAllNodes("testnet")
})

test("should get the block height", async () => {
    const res = await sdk.api.NeoRest.height("testnet")
})


test("should get the transaction log", async () => {
    const res = await sdk.api.NeoRest.log("0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4", "testnet")
})

test("should get a transaction", async () => {
    const res = await sdk.api.NeoRest.transaction("0xedf5c6e18f5e9f1836b6f8c8ddb4ae4d31e66420098ea778eb533e189a7ef8f4", "testnet")
})

test("should get transactions", async () => {
    const res = await sdk.api.NeoRest.transactions(1, "testnet")
})

test("should get transfer history", async () => {
    const res = await sdk.api.NeoRest.transferHistory("NeFM2R8bq9c5q9bvsoargVH4MifMrXDikH", 2, "testnet")
})
