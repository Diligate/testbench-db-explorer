"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setParentKey = exports.ParentKey = void 0;
let ParentKey = {
    SubdivisionBean: {
        name: ["DataTypeBean", "ConditionBean", "MetawordBean", "SubdivisionBean"],
        tableName: "SubdivisionBean",
    },
    TestThemeBean: {
        name: ["TestThemeBean", "TestCaseBean"],
        tableName: "TestThemeBean",
    },
    SpecInformationBean: {
        name: ["SpecParamCombValueBean"],
        tableName: "SpecInformationBean",
    },
    ExecInformationBean: {
        name: ["ExecParamCombValueBean"],
        tableName: "ExecParameterCombinationBean",
    },
};
exports.ParentKey = ParentKey;
function setParentKey(value) {
    exports.ParentKey = ParentKey = value;
}
exports.setParentKey = setParentKey;
//# sourceMappingURL=parentKey.js.map