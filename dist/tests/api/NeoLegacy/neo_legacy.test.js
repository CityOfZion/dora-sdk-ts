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
describe('neo legacy', function () {
    it('should get an asset', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get assets', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get an address balance', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get a block', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get blocks', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get a contract', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get contracts', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get contract transfers', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should include the contract hash in contract stats requests', function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, contractHash, requestedUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new api_1.NeoLegacyRESTApi();
                    contractHash = '0x0123456789abcdef';
                    requestedUrl = '';
                    api['axios'].get = function (url) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            requestedUrl = url;
                            return [2, { data: {} }];
                        });
                    }); };
                    return [4, api.contractStats(contractHash)];
                case 1:
                    _a.sent();
                    chai_1.assert.strictEqual(requestedUrl, "/mainnet/contract_stats/".concat(contractHash));
                    return [2];
            }
        });
    }); });
    it('should get the node registry', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get the chain height', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get the invocation stats', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get the log', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get the storage events', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get a transactions', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get transaction abstracts', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('should get transfer history', function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2];
    }); }); });
    it('Should get full transactions by address (Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response, data, item, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = 'AXFhnmWZ9tz66L4rcWSrjjxEkK6p4wzH9z';
                    return [4, api_1.NeoLegacyREST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2023-04-05T00:00:00Z',
                            timestampTo: '2023-04-06T00:00:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.address, address);
                    chai_1.assert.strictEqual(response.protocol, 'neolegacy');
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
                    address = 'AJSK3qFtfCXdq7MD9AmTTwNtSjkA2k1xyt';
                    return [4, api_1.NeoLegacyREST.getFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2022-06-16T00:00:00Z',
                            timestampTo: '2023-05-16T00:00:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.strictEqual(response.data.length, 30);
                    return [2];
            }
        });
    }); });
    it('Should export full transactions by address (Mainnet)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = 'AXFhnmWZ9tz66L4rcWSrjjxEkK6p4wzH9z';
                    return [4, api_1.NeoLegacyREST.exportFullTransactionsByAddress({
                            address: address,
                            network: 'mainnet',
                            timestampFrom: '2023-04-05T00:00:00Z',
                            timestampTo: '2023-04-06T00:00:00Z'
                        })];
                case 1:
                    response = _a.sent();
                    chai_1.assert.isNotEmpty(response.replace('Date;Block;Transaction ID;Network fee;System fee;Contract name;Contract hash;From;To;Amount;Token ID;Standards', ''));
                    return [2];
            }
        });
    }); });
    it('Should be able to get unclaimed token using an address', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, api_1.NeoLegacyREST.getUnclaimed('AQB8KjskTmRghCS3kMzxBNxKwT6b9kKM4v')];
                case 1:
                    response = _a.sent();
                    chai_1.assert.deepEqual(response, {
                        available: 0,
                        unavailable: 365.08246065,
                        unclaimed: 365.08246065
                    });
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=neo_legacy.test.js.map