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
exports.AttributesController = void 0;
const common_1 = require("@nestjs/common");
const attributes_service_1 = require("./attributes.service");
const dto_1 = require("./dto");
let AttributesController = class AttributesController {
    constructor(attributesService) {
        this.attributesService = attributesService;
    }
    create(dto) {
        return this.attributesService.create(dto);
    }
    importDb(req) {
        return this.attributesService.importDbAttribute(req.body);
    }
    importRelationship(req) {
        return this.attributesService.importRelations(req.body);
    }
    exportRelation() {
        return this.attributesService.exportRelations();
    }
    getAll() {
        return this.attributesService.getAll();
    }
    init() {
        return this.attributesService.init();
    }
    findFk(tableName) {
        return this.attributesService.findName(tableName);
    }
    getOne(id) {
        return this.attributesService.getOne(id);
    }
    getByTableId(id) {
        return this.attributesService.getByTableId(id);
    }
    delete(id) {
        return this.attributesService.delete(id);
    }
    deleteAll() {
        return this.attributesService.deleteAll();
    }
    deleteOfTable(id) {
        return this.attributesService.deleteOfTable(id);
    }
    edit(id, dto) {
        return this.attributesService.edit(id, dto);
    }
};
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("importDb"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "importDb", null);
__decorate([
    (0, common_1.Post)("relations"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "importRelationship", null);
__decorate([
    (0, common_1.Get)("relations"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "exportRelation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Patch)("init"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "init", null);
__decorate([
    (0, common_1.Get)("name/:tableName"),
    __param(0, (0, common_1.Param)("tableName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "findFk", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)("table/:id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "getByTableId", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "deleteAll", null);
__decorate([
    (0, common_1.Delete)("table/:id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "deleteOfTable", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseIntPipe({ errorHttpStatusCode: common_1.HttpStatus.NOT_FOUND }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditAttributeDto]),
    __metadata("design:returntype", void 0)
], AttributesController.prototype, "edit", null);
AttributesController = __decorate([
    (0, common_1.Controller)("attributes"),
    __metadata("design:paramtypes", [attributes_service_1.AttributesService])
], AttributesController);
exports.AttributesController = AttributesController;
//# sourceMappingURL=attributes.controller.js.map