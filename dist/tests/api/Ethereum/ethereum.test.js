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
var utils_1 = require("../utils");
describe('Ethereum SDK', function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, utils_1.sleep)(2000)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    it('Should get full transactions by address (Ethereum Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xc1E563e0bA11485861198e32e25C216B312B219a';
                    return [4, api_1.EthereumREST.getFullTransactionsByAddress({
                            address: address,
                            network: '1',
                            timestampFrom: '2025-10-23T08:45:00Z',
                            timestampTo: '2025-10-23T08:47:59Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'ethereum');
                    chai_1.assert.strictEqual(response.network, 'eth');
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
    it('Should get full transactions by address (Base Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xD88Df42a769e452897EC3312389E29B592e1726B';
                    return [4, api_1.EthereumREST.getFullTransactionsByAddress({
                            address: address,
                            network: '8453',
                            timestampFrom: '2025-10-22T07:59:53Z',
                            timestampTo: '2025-10-22T19:44:09Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'ethereum');
                    chai_1.assert.strictEqual(response.network, 'base');
                    chai_1.assert.isString(response.nextCursor);
                    data = response.data;
                    chai_1.assert.isArray(data);
                    chai_1.assert.isNotEmpty(data);
                    item = data[1];
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
    it('Should get full transactions by address (Arbitrum Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xE5Ab7242F453172b978A4DC5aEdc7096B8196cb6';
                    return [4, api_1.EthereumREST.getFullTransactionsByAddress({
                            address: address,
                            network: '42161',
                            timestampFrom: '2025-10-23T09:40:33Z',
                            timestampTo: '2025-10-23T09:48:34Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'ethereum');
                    chai_1.assert.strictEqual(response.network, 'arbitrum');
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
    it('Should get full transactions by address (Polygon Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x0D0Ee387a47827862D7059204f23f67E59cc509B';
                    return [4, api_1.EthereumREST.getFullTransactionsByAddress({
                            address: address,
                            network: '137',
                            timestampFrom: '2025-08-22T00:00:00Z',
                            timestampTo: '2025-08-22T23:59:59Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'ethereum');
                    chai_1.assert.strictEqual(response.network, 'polygon');
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
    it('Should get full transactions by address (Ethereum Mainnet) with default pageLimit', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xbE36FfB83dB26E71Ac90b3ffB0D7D9d99F021a0D';
                    return [4, api_1.EthereumREST.getFullTransactionsByAddress({
                            address: address,
                            network: '1',
                            timestampFrom: '2025-10-13T08:45:00Z',
                            timestampTo: '2025-10-23T08:47:59Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.data.length, 50);
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Ethereum Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, needle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xc1E563e0bA11485861198e32e25C216B312B219a';
                    return [4, api_1.EthereumREST.exportFullTransactionsByAddress({
                            address: address,
                            network: '1',
                            timestampFrom: '2025-10-23T08:45:00Z',
                            timestampTo: '2025-10-23T08:47:59Z'
                        })];
                case 1:
                    response = _a.sent();
                    needle = 'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards';
                    chai_1.assert.include(response, needle, 'header not found');
                    chai_1.assert.isNotEmpty(response.replace(needle, ''));
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Base Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, needle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xD88Df42a769e452897EC3312389E29B592e1726B';
                    return [4, api_1.EthereumREST.exportFullTransactionsByAddress({
                            address: address,
                            network: '8453',
                            timestampFrom: '2025-10-22T07:59:53Z',
                            timestampTo: '2025-10-22T19:44:09Z'
                        })];
                case 1:
                    response = _a.sent();
                    needle = 'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards';
                    chai_1.assert.include(response, needle, 'header not found');
                    chai_1.assert.isNotEmpty(response.replace(needle, ''));
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Arbitrum Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, needle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0xE5Ab7242F453172b978A4DC5aEdc7096B8196cb6';
                    return [4, api_1.EthereumREST.exportFullTransactionsByAddress({
                            address: address,
                            network: '42161',
                            timestampFrom: '2025-10-23T09:40:33Z',
                            timestampTo: '2025-10-23T09:48:34Z'
                        })];
                case 1:
                    response = _a.sent();
                    needle = 'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards';
                    chai_1.assert.include(response, needle, 'header not found');
                    chai_1.assert.isNotEmpty(response.replace(needle, ''));
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Polygon Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, needle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = '0x0D0Ee387a47827862D7059204f23f67E59cc509B';
                    return [4, api_1.EthereumREST.exportFullTransactionsByAddress({
                            address: address,
                            network: '137',
                            timestampFrom: '2025-08-22T00:00:00Z',
                            timestampTo: '2025-08-22T23:59:59Z'
                        })];
                case 1:
                    response = _a.sent();
                    needle = 'Date;Block;Transaction ID;Transaction Sender;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards';
                    chai_1.assert.include(response, needle, 'header not found');
                    chai_1.assert.isNotEmpty(response.replace(needle, ''));
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=ethereum.test.js.map