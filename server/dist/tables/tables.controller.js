"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const tables_service_1 = require("./tables.service");
let TablesController = class TablesController {
    constructor(tablesService) {
        this.tablesService = tablesService;
    }
    create(dto) {
        return this.tablesService.create(dto);
    }
    importDb(req) {
        return this.tablesService.importDbTable(req.body);
    }
    getAll() {
        return this.tablesService.getAll();
    }
    refresh() {
        return this.tablesService.refresh();
    }
    findPk(tableName, column, id) {
        return this.tablesService.getByIdName(tableName, column, id);
    }
    add() {
        return this.tablesService.init();
    }
    getOneByName(name) {
        return this.tablesService.getOneByName(name);
    }
    getOne(id) {
        return this.tablesService.getOne(id);
    }
    delete(id) {
        return this.tablesService.delete(id);
    }
    deleteAll() {
        return this.tablesService.deleteAll();
    }
    edit(id, dto) {
        return this.tablesService.edit(id, dto);
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTablesDto]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("importDb"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "importDb", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Patch)("refresh"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)("search/:tableName/:column/:id"),
    __param(0, (0, common_1.Param)("tableName")),
    __param(1, (0, common_1.Param)("column")),
    __param(2, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "findPk", null);
__decorate([
    (0, common_1.Post)("init"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "add", null);
__decorate([
    (0, common_1.Get)("/one/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "getOneByName", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditTablesDto]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "edit", null);
TablesController = __decorate([
    (0, common_1.Controller)("tables"),
    __metadata("design:paramtypes", [tables_service_1.TablesService])
], TablesController);
exports.TablesController = TablesController;
//# sourceMappingURL=tables.controller.js.map