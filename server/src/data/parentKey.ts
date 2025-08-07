var ParentKey = {
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

function setParentKey(value) {
  ParentKey = value;
}

export { ParentKey, setParentKey };