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
describe('neo sdk', function () {
    it('should get an asset', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.asset('0xd2a4cff31913016155e38e474a2c06d08be276cf', 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.name, 'GasToken');
                    chai_1.assert.strictEqual(res.scripthash, '0xd2a4cff31913016155e38e474a2c06d08be276cf');
                    return [2];
            }
        });
    }); });
    it('should get assets', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.assets(2, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.items.length, 15);
                    return [2];
            }
        });
    }); });
    it('should get a balance', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.balance('Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D', 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isAtLeast(res.length, 2);
                    return [2];
            }
        });
    }); });
    it('should get a block', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.block(0, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.strictEqual(res.hash, '0x9d3276785e7306daf59a3f3b9e31912c095598bbfb8a4476b821b0e59be4c57a');
                    chai_1.assert.isNotNull(res.witnesses);
                    chai_1.assert.strictEqual(res.size, 114);
                    return [2];
            }
        });
    }); });
    it('should get a block with transactions', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.block(2486, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.strictEqual(res.hash, '0xe0f8d56fb07b79be5d572ccf0ad7b643e7cbc24d48dede875fd7e041e5debb7f');
                    chai_1.assert.strictEqual(res.tx.length, 1);
                    return [2];
            }
        });
    }); });
    it('should get blocks', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.blocks(1, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isArray(res.items);
                    chai_1.assert.strictEqual(res.items.length, 15);
                    return [2];
            }
        });
    }); });
    it('should get a contract', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.contract('0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92', 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.strictEqual(res.id, 2);
                    chai_1.assert.strictEqual(res.hash, '0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92');
                    chai_1.assert.isObject(res.nef);
                    return [2];
            }
        });
    }); });
    it('should get contracts', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.contracts(1, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    return [2];
            }
        });
    }); });
    it('should get contract stats', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.contractStats('0x4625b78c56b7e43e1e6fb4ed0200e9a0a9152c92', 'testnet')];
                case 1:
                    res = (_a.sent());
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    return [2];
            }
        });
    }); });
    it('should get the block height', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.height('testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    return [2];
            }
        });
    }); });
    it('should get the transaction log', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.log('0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535', 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.txid, '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535');
                    chai_1.assert.strictEqual(res.trigger, 'Application');
                    chai_1.assert.strictEqual(res.notifications.length, 1);
                    return [2];
            }
        });
    }); });
    it('should get a transaction', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, api_1.NeoN3REST.transaction('0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535', 'testnet')];
                case 1:
                    res = _b.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.strictEqual(res.hash, '0x7f40e2252fe791b89d60c2cdd9419de7984e5fab6d941d3cf3a8d0c96135c535');
                    chai_1.assert.strictEqual(res.sender, 'NVfj3vnyBCUb2E2eSFacY3N4Q1UU9ed3FG');
                    chai_1.assert.strictEqual(res.size, 860);
                    chai_1.assert.strictEqual((_a = res.signers) === null || _a === void 0 ? void 0 : _a.length, 2);
                    return [2];
            }
        });
    }); });
    it('should get transactions', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.transactions(1, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.isArray(res.items);
                    chai_1.assert.strictEqual(res.items.length, 15);
                    return [2];
            }
        });
    }); });
    it('should get transfer history', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.transferHistory('Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D', 1, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.isArray(res.items);
                    chai_1.assert.isAtLeast(res.items.length, 2);
                    return [2];
            }
        });
    }); }).timeout(60000);
    it('should get the voter information of a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.voter('Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    return [2];
            }
        });
    }); });
    it('should get Neo committee information', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.committee()];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isArray(res);
                    return [2];
            }
        });
    }); });
    it('should get the full transactions history for an address', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.addressTransactions('Nb9QYTVx8F6j5kKi1k1ERaUTFfSX5JRq2D', 1, 'testnet')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.isNotNull(res);
                    chai_1.assert.isObject(res);
                    chai_1.assert.isArray(res.items);
                    chai_1.assert.isAtLeast(res.items.length, 2);
                    return [2];
            }
        });
    }); });
    it('should get the token provenance', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoN3REST.tokenProvenance('0x904deb56fdd9a87b48d89e0cc0ac3415f9207840', '31')];
                case 1:
                    res = _a.sent();
                    chai_1.assert.equal(JSON.stringify(res[0]), JSON.stringify({
                        blockheight: 3347807,
                        timestamp: 1682517332,
                        txid: '0xdc78f791dddaca469772f49a21431c85b53eb9bea5d3ac02a12aaa8e40c1ba7d',
                        owner: 'NY8cnjo4F3sNw5cxMCwwHBsi8FqHvnJBXC'
                    }));
                    return [2];
            }
        });
    }); });
    it('Should get full transactions by address (Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = 'NYnfAZTcVfSfNgk4RnP2DBNgosq2tUN3U2';
                    return [4, api_1.NeoN3REST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2024-07-26T07:31:23Z',
                            timestampTo: '2024-07-26T07:32:30Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'neo3');
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
                    chai_1.assert.isArray(event.supportedStandards);
                    chai_1.assert.isNotEmpty(event.supportedStandards);
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
                    address = 'Ng6QMqCFfxqiXwi6QJUkMXXacRPfFGC5BW';
                    return [4, api_1.NeoN3REST.getFullTransactionsByAddress({
                            address: address,
                            network: 'testnet',
                            timestampFrom: '2025-01-28T06:30:40Z',
                            timestampTo: '2025-01-28T06:30:51Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'neo3');
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
                    chai_1.assert.isArray(event.supportedStandards);
                    chai_1.assert.isNotEmpty(event.supportedStandards);
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
                    address = 'NYnfAZTcVfSfNgk4RnP2DBNgosq2tUN3U2';
                    return [4, api_1.NeoN3REST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2024-03-26T07:31:23Z',
                            timestampTo: '2024-07-26T07:32:30Z'
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
                    address = 'NYnfAZTcVfSfNgk4RnP2DBNgosq2tUN3U2';
                    return [4, api_1.NeoN3REST.exportFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2024-07-26T07:31:23Z',
                            timestampTo: '2024-07-26T07:32:30Z'
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
                    address = 'Ng6QMqCFfxqiXwi6QJUkMXXacRPfFGC5BW';
                    return [4, api_1.NeoN3REST.exportFullTransactionsByAddress({
                            address: address,
                            network: 'testnet',
                            timestampFrom: '2025-01-28T06:30:40Z',
                            timestampTo: '2025-01-28T06:30:51Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.isNotEmpty(response.replace('Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards', ''));
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=neo.test.js.map