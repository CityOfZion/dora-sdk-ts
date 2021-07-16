const sdk = require("../../../dist")

test("should get address_stats", async () => {
    let res = await sdk.api.NeoLegacyREST.addressStats("AZ3JaZ9myjiW98hwLvc3F4RQVvVX4Pm83M")
    expect(res.length).toBeGreaterThan(0)
})

test("should get an address' abstract fields", async () => {
    let res = await sdk.api.NeoLegacyREST.getAddressAbstracts("AZ3JaZ9myjiW98hwLvc3F4RQVvVX4Pm83M")
    expect(res.entries.length).toBeGreaterThan(1)
})

test("should get an asset", async () => {

})

test("should get assets", async () => {

})

test("should get an address balance", async () => {

})

test("should get a block", async () => {

})

test("should get blocks", async () => {

})

test("should get a contract", async () => {

})

test("should get contracts", async () => {

})

test("should get contract transfers", async () => {

})

test("should get the node registry", async () => {

})

test("should get the chain height", async () => {

})

test("should get the invocation stats", async () => {

})

test("should get the log", async () => {

})

test("should get the storage events", async () => {

})

test("should get a transactions", async () => {

})

test("should get transaction abstracts", async () => {

})

test("should get transfer history", async () => {

})