"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var api_1 = require("../../../api");
describe('neox sdk', function () {
    it('should get address information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var addr, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    addr = '0xd6BC5f7D2441A677218eBee5bCeE91d7f7a748E2';
                    return [4, api_1.NeoXREST.getAddress(addr)];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.hash, addr);
                    chai_1.assert.isBoolean(res.is_contract);
                    chai_1.assert.isString(res.coin_balance);
                    chai_1.assert.isBoolean(res.is_verified);
                    chai_1.assert.property(res, 'name');
                    chai_1.assert.property(res, 'private_tags');
                    chai_1.assert.property(res, 'public_tags');
                    chai_1.assert.property(res, 'watchlist_names');
                    return [2];
            }
        });
    }); });
    it('should get block information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var blockNumber, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blockNumber = '456865';
                    return [4, api_1.NeoXREST.getBlock(blockNumber)];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.height, Number(blockNumber));
                    chai_1.assert.isString(res.hash);
                    chai_1.assert.isString(res.difficulty);
                    chai_1.assert.strictEqual(res.parent_hash, '0x1eb1b5275ef0cd066eb509a5db5bf5313cb86a7b55f06e062363dfeb27be66d3');
                    return [2];
            }
        });
    }); });
    it('should get blocks information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoXREST.getBlocks()];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isArray(res.items);
                    chai_1.assert.isNotEmpty(res.items);
                    chai_1.assert.isString(res.items[0].hash);
                    chai_1.assert.isNumber(res.items[0].height);
                    chai_1.assert.isString(res.items[0].difficulty);
                    return [2];
            }
        });
    }); });
    it('should get stats information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoXREST.getStats()];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isString(res.total_blocks);
                    chai_1.assert.isString(res.total_addresses);
                    chai_1.assert.isString(res.total_transactions);
                    chai_1.assert.isNumber(res.average_block_time);
                    chai_1.assert.isAbove(res.average_block_time, 0);
                    return [2];
            }
        });
    }); });
    it('Should get tokens information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var items, firstItem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoXREST.getTokens()];
                case 1:
                    items = (_a.sent()).items;
                    chai_1.assert.isArray(items);
                    chai_1.assert.isNotEmpty(items);
                    firstItem = items[0];
                    chai_1.assert.isString(firstItem.address);
                    chai_1.assert.isString(firstItem.name);
                    chai_1.assert.isString(firstItem.symbol);
                    chai_1.assert.isTrue(firstItem.decimals === null || typeof firstItem.decimals === 'string');
                    return [2];
            }
        });
    }); });
    it('should get transaction information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hash, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hash = '0xbf1b8a0973bddf3621781c57cf02e5d069b622601b3f2a7238f602943f2f7578';
                    return [4, api_1.NeoXREST.getTransaction(hash)];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.hash, hash);
                    chai_1.assert.strictEqual(res.block, 456865);
                    chai_1.assert.strictEqual(res.timestamp, '2024-10-04T14:21:38.000000Z');
                    chai_1.assert.strictEqual(res.method, 'removeLiquidityETH');
                    return [2];
            }
        });
    }); });
    it('Should get full transactions by address (Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x17c15d54383c44384191e677739B46fc49dAB214';
                    return [4, api_1.NeoXREST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2025-01-27T00:00:00Z',
                            timestampTo: '2025-01-27T13:40:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'neox');
                    chai_1.assert.strictEqual(response.network, 'mainnet');
                    chai_1.assert.isString(response.nextCursor);
                    data = response.data;
                    chai_1.assert.isArray(data);
                    chai_1.assert.isNotEmpty(data);
                    item = data[0];
                    chai_1.assert.isNumber(item.block);
                    chai_1.assert.isString(item.date);
                    chai_1.assert.isNumber(item.invocationCount);
                    chai_1.assert.isString(item.networkFeeAmount);
                    chai_1.assert.isNumber(item.notificationCount);
                    chai_1.assert.isString(item.systemFeeAmount);
                    chai_1.assert.isString(item.transactionID);
                    event = item.events[0];
                    chai_1.assert.isString(event.amount);
                    chai_1.assert.isString(event.contractHash);
                    chai_1.assert.isString(event.contractName);
                    chai_1.assert.isString(event.from);
                    chai_1.assert.isString(event.methodName);
                    chai_1.assert.isNull(event.supportedStandards);
                    chai_1.assert.isString(event.to);
                    chai_1.assert.isNumber(event.tokenDecimals);
                    chai_1.assert.isNull(event.tokenID);
                    chai_1.assert.isString(event.tokenType);
                    return [2];
            }
        });
    }); });
    it('Should get full transactions by address (Testnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x0804FE35E0c8f40E7DB7eF805587C382ea6E51d4';
                    return [4, api_1.NeoXREST.getFullTransactionsByAddress({
                            address: address,
                            network: 'testnet',
                            timestampFrom: '2025-01-28T09:00:00Z',
                            timestampTo: '2025-01-28T11:01:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'neox');
                    chai_1.assert.strictEqual(response.network, 'testnet');
                    chai_1.assert.isString(response.nextCursor);
                    data = response.data;
                    chai_1.assert.isArray(data);
                    chai_1.assert.isNotEmpty(data);
                    item = data[0];
                    chai_1.assert.isNumber(item.block);
                    chai_1.assert.isString(item.date);
                    chai_1.assert.isNumber(item.invocationCount);
                    chai_1.assert.isString(item.networkFeeAmount);
                    chai_1.assert.isNumber(item.notificationCount);
                    chai_1.assert.isString(item.systemFeeAmount);
                    chai_1.assert.isString(item.transactionID);
                    event = item.events[0];
                    chai_1.assert.isString(event.amount);
                    chai_1.assert.isString(event.contractHash);
                    chai_1.assert.isString(event.contractName);
                    chai_1.assert.isString(event.from);
                    chai_1.assert.isString(event.methodName);
                    chai_1.assert.isNull(event.supportedStandards);
                    chai_1.assert.isString(event.to);
                    chai_1.assert.isNumber(event.tokenDecimals);
                    chai_1.assert.isNull(event.tokenID);
                    chai_1.assert.isString(event.tokenType);
                    return [2];
            }
        });
    }); });
    it('Should get full transactions by address (Mainnet) with default pageLimit', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x17c15d54383c44384191e677739B46fc49dAB214';
                    return [4, api_1.NeoXREST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2024-02-27T00:00:00Z',
                            timestampTo: '2025-01-27T13:40:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.data.length, 50);
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x17c15d54383c44384191e677739B46fc49dAB214';
                    return [4, api_1.NeoXREST.exportFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2025-01-27T00:00:00Z',
                            timestampTo: '2025-01-27T13:40:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.isNotEmpty(response.replace('Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards', ''));
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Testnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x0804FE35E0c8f40E7DB7eF805587C382ea6E51d4';
                    return [4, api_1.NeoXREST.exportFullTransactionsByAddress({
                            address: address,
                            network: 'testnet',
                            timestampFrom: '2025-01-28T09:00:00Z',
                            timestampTo: '2025-01-28T11:01:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.isNotEmpty(response.replace('Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards', ''));
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=neox.test.js.map