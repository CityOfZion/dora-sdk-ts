"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeoLegacyREST = exports.NeoLegacyRESTApi = void 0;
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../../constants");
var defaultRestConfig = {
    url: constants_1.COZ_API_URL,
    endpoint: '/api/v2/neo2'
};
var NeoLegacyRESTApi = (function () {
    function NeoLegacyRESTApi(restConfig, axiosConfig) {
        if (restConfig === void 0) { restConfig = defaultRestConfig; }
        var baseURL = "".concat(restConfig.url).concat(restConfig.endpoint);
        if (axiosConfig === undefined) {
            axiosConfig = { baseURL: baseURL };
        }
        else {
            axiosConfig['baseURL'] = baseURL;
        }
        this.axios = axios_1.default.create(axiosConfig);
        this.axiosApiV2 = axios_1.default.create({ baseURL: "".concat(constants_1.COZ_API_URL, "/api/v2") });
    }
    NeoLegacyRESTApi.prototype.addressStats = function (address, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'address_stats';
                        return [4, this.get(network, method, address)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.asset = function (assetHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'asset';
                        return [4, this.get(network, method, assetHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.assets = function (page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'assets';
                        return [4, this.get(network, method, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.balance = function (address, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'balance';
                        return [4, this.get(network, method, address)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.block = function (blockHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'block';
                        return [4, this.get(network, method, blockHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.blocks = function (page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'blocks';
                        return [4, this.get(network, method, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.contract = function (contractHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'contract';
                        return [4, this.get(network, method, contractHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.contracts = function (page, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'contracts';
                        return [4, this.get(network, method, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.contractStats = function (contractHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'contract_stats';
                        return [4, this.get(network, method, contractHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.contractTransfers = function (contractHash, page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'contract_transfers';
                        return [4, this.get(network, method, contractHash, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.getAddressAbstracts = function (address, page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'get_address_abstracts';
                        return [4, this.get(network, method, address, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.getAllNodes = function (network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'get_all_nodes';
                        return [4, this.get(network, method)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.height = function (network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'height';
                        return [4, this.get(network, method)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.invocationStats = function (network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'invocation_stats';
                        return [4, this.get(network, method)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.log = function (contractHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'log';
                        return [4, this.get(network, method, contractHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.storage = function (blockHash, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'storage';
                        return [4, this.get(network, method, blockHash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.transaction = function (txid, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'transaction';
                        return [4, this.get(network, method, txid)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.transactions = function (page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'transactions';
                        return [4, this.get(network, method, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.transactionAbstracts = function (txid, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'transaction_abstracts';
                        return [4, this.get(network, method, txid)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.transferHistory = function (address, page, network) {
        if (page === void 0) { page = 1; }
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = 'transfer_history';
                        return [4, this.get(network, method, address, page)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.getUnclaimed = function (address, network) {
        if (network === void 0) { network = 'mainnet'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.get(network, 'get_unclaimed', address)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.getFullTransactionsByAddress = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.axiosApiV2.post('/unified/activity-history', __assign(__assign({ pageLimit: 30 }, params), { protocol: 'neolegacy' }))];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.exportFullTransactionsByAddress = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.axiosApiV2.post('/unified/activity-history-csv', __assign(__assign({}, params), { protocol: 'neolegacy' }))];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    NeoLegacyRESTApi.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = args.join('/');
                        return [4, this.axios.get("/".concat(endpoint))];
                    case 1:
                        data = (_a.sent()).data;
                        return [2, data];
                }
            });
        });
    };
    return NeoLegacyRESTApi;
}());
exports.NeoLegacyRESTApi = NeoLegacyRESTApi;
exports.NeoLegacyREST = new NeoLegacyRESTApi();
//# sourceMappingURL=rest.js.map