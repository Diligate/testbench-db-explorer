"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTable = void 0;
const common_1 = require("@nestjs/common");
exports.GetTable = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().get;
    if (data) {
        return request.table[data];
    }
    else {
        return request.table;
    }
});
//# sourceMappingURL=get-table.decorator.js.map