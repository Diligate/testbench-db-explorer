"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRelationshipKey = exports.RelationshipKey = void 0;
let RelationshipKey = {
    TestProjectBean: {
        name: ["projectPK", "projPK", "value_projectPK", "project"],
        tableName: "TestProjectBean",
    },
    TestObjectVersionBean: {
        name: [
            "tovPK",
            "objectVersionPK",
            "testObjectVersionPK",
            "baseTOVPK",
            "value_objectVersion",
        ],
        tableName: "TestObjectVersionBean",
    },
    TestCycleBean: {
        name: ["cyclePK", "cycle", "testCyclePK", "value_cyclePK"],
        tableName: "TestCycleBean",
    },
    UserInformationBean: {
        name: [
            "userPK",
            "locker",
            "testbenchUserPK",
            "tester",
            "responsible",
            "reviewer",
            "testerPK",
            "value_ownerPK",
            "value_userPK",
        ],
        tableName: "UserInformationBean",
    },
    AttachmentBufferBean: {
        name: ["filePK", "attachmentBufferPK"],
        tableName: "AttachmentBufferBean",
    },
    AttachmentBean: {
        name: ["attachmentPK"],
        tableName: "AttachmentBean",
    },
    ReferenceBean: {
        name: ["referencebean"],
        tableName: "ReferenceBean",
    },
    AutInformationBean: {
        name: ["autInformationBean", "autInformation"],
        tableName: "AutInformationBean",
    },
    SubdivisionBean: {
        name: ["parentPK", "subdivisionBean"],
        tableName: "SubdivisionBean",
    },
    ConditionBean: {
        name: ["conditionBean", "condition"],
        tableName: "ConditionBean",
    },
    DataTypeBean: {
        name: [
            "dataTypeBean",
            "dataTypeChild",
            "dataTypParent",
            "dataTypePK",
            "workDataTypePK",
            "versionedDataTypePK",
            "datatype",
        ],
        tableName: "DataTypeBean",
    },
    DataTypeSequenceBean: {
        name: ["dataTypeSequence"],
        tableName: "DataTypeSequenceBean",
    },
    MetawordBean: {
        name: [
            "workMetawordPK",
            "versionedMetawordPK",
            "callingMetawordPK",
            "calledMetawordPK",
            "metaword",
            "metawordPK",
            "metawordbean",
        ],
        tableName: "MetawordBean",
    },
    MetawordParameterBean: {
        name: ["workMwParamPK", "versionedMwParamPK", "parameterValue"],
        tableName: "MetawordParameterBean",
    },
    ErrorIDBean: {
        name: ["defectPK", "errorPK", "errorID"],
        tableName: "ErrorIDBean",
    },
    UserDefinedFieldsBean: {
        name: ["udfName", "udfPK"],
        tableName: "UserDefinedFieldsBean",
    },
    ProjectDefectSettingsBean: {
        name: ["projectDefectSettingsPK"],
        tableName: "ProjectDefectSettingsBean",
    },
    ExecInformationBean: {
        name: ["execInfoBean", "execInformationID", "execPK"],
        tableName: "ExecInformationBean",
    },
    RichTextBean: {
        name: ["description", "title", "comments", "reviewComments"],
        tableName: "RichTextBean",
    },
    SpecInformationBean: {
        name: ["specInfoPK", "specInformation", "specinformationBean"],
        tableName: "SpecInformationBean",
    },
    TestThemeBean: {
        name: ["TestThemeBean_execInformations", "value_ttPK"],
        tableName: "TestThemeBean",
    },
    TestCaseBean: {
        name: ["TestCaseBean_execInformations"],
        tableName: "TestCaseBean",
    },
    ExecParameterCombinationBean: {
        name: ["execParameterCombination", "execParamCombBean"],
        tableName: "ExecParameterCombinationBean",
    },
    InstancesArrayBean: {
        name: ["instancesArray", "instancesArrayPK"],
        tableName: "InstancesArrayBean",
    },
    RepresentativeBean: {
        name: ["representativeValue", "defaultRepresentativePK"],
        tableName: "RepresentativeBean",
    },
    TS_EquivalenceClassBean: {
        name: ["equivalenceClass", "equivalenceClassPK"],
        tableName: "EquivalenceClassBean",
    },
    ParameterCombinationBean: {
        name: ["paramCombID"],
        tableName: "ParameterCombinationBean",
    },
    ExecScriptFileBean: {
        name: ["execScriptFilePK"],
        tableName: "ExecScriptFileBean",
    },
    FileInfoBean: {
        name: ["fileInfoPK"],
        tableName: "FileInfoBean",
    },
    FileBufferBean: {
        name: ["fileInfoPK"],
        tableName: "FileBufferBean",
    },
    TestFilterBean: {
        name: ["value_pk"],
        tableName: "TestFilterBean",
    },
    InspectionImplementationBean: {
        name: ["implementatu"],
        tableName: "InspectionImplementationBean",
    },
    InspectionDefintionBean: {
        name: ["inspectionPK"],
        tableName: "InspectionDefinitionBean",
    },
    IssueSummaryBean: {
        name: ["summaryPK"],
        tableName: "IssueSummaryBean",
    },
    VariantsDefinition: {
        name: ["variantsDefinitionPK"],
        tableName: "VariantsDefinition",
    },
    KeywordBean: {
        name: ["keyword"],
        tableName: "KeywordBean",
    },
    VersionBean: {
        name: ["version"],
        tableName: "VersionBean",
    },
    MetawordContentBean: {
        name: ["contentPK"],
        tableName: "MetawordContentBean",
    },
    MetawordCallBean: {
        name: ["metawordCall", "metawordCallPK"],
        tableName: "MetawordCallBean",
    },
    MetawordCallParameterBean: {
        name: ["metawordCallParameter"],
        tableName: "MetawordCallParameterBean",
    },
    Placeholder: {
        name: ["placeholderPK"],
        tableName: "Placeholder",
    },
    PluginBean: {
        name: ["pluginPK"],
        tableName: "PluginBean",
    },
    PreferencesBean: {
        name: ["preferencesPK"],
        tableName: "PreferencesBean",
    },
    RequirementBean: {
        name: ["requirementPK", "requirement"],
        tableName: "RequirementBean",
    },
    RequirementBaselineBean: {
        name: ["baselinePK"],
        tableName: "RequirementBaselineBean",
    },
    RequirementRepositoryBean: {
        name: ["reqRepositoryPK"],
        tableName: "RequirementRepositoryBean",
    },
    RequirementProjectBean: {
        name: ["reProjectPK"],
        tableName: "RequirementProjectBean",
    },
    TestLabelBean: {
        name: ["testLabel"],
        tableName: "TestLabelBean",
    },
};
exports.RelationshipKey = RelationshipKey;
function setRelationshipKey(value) {
    exports.RelationshipKey = RelationshipKey = value;
}
exports.setRelationshipKey = setRelationshipKey;
//# sourceMappingURL=relationshipKey.js.map