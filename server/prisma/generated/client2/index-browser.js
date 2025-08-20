
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.UsersScalarFieldEnum = {
  username: 'username',
  password: 'password',
  salt: 'salt'
};

exports.Prisma.ApplicationPropertiesBeanScalarFieldEnum = {
  PK: 'PK',
  execAutoCheckIn: 'execAutoCheckIn',
  repositoryID: 'repositoryID',
  variantsManagementEnabled: 'variantsManagementEnabled',
  revision: 'revision',
  baseTIURL: 'baseTIURL',
  invalidTIURL: 'invalidTIURL',
  tiAdminLogin: 'tiAdminLogin',
  tiPassword: 'tiPassword',
  tiEvaluation: 'tiEvaluation',
  tiDataRetrieve: 'tiDataRetrieve'
};

exports.Prisma.AttachmentBeanScalarFieldEnum = {
  PK: 'PK',
  filename: 'filename',
  path: 'path',
  userPK: 'userPK',
  lastEdited: 'lastEdited',
  filePK: 'filePK',
  revision: 'revision'
};

exports.Prisma.AttachmentBufferBeanScalarFieldEnum = {
  PK: 'PK',
  buffer: 'buffer',
  revision: 'revision'
};

exports.Prisma.AutInfoRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  autInformationBean: 'autInformationBean',
  revision: 'revision'
};

exports.Prisma.AutInformationBeanScalarFieldEnum = {
  PK: 'PK',
  testCaseNodePK: 'testCaseNodePK',
  testCase: 'testCase',
  identicalVersionPK: 'identicalVersionPK',
  status: 'status',
  responsible: 'responsible',
  priority: 'priority',
  reviewer: 'reviewer',
  locker: 'locker',
  targetDate: 'targetDate',
  scriptTemplate: 'scriptTemplate',
  scriptEditor: 'scriptEditor',
  version: 'version',
  revision: 'revision'
};

exports.Prisma.ConditionBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  elementName: 'elementName',
  uniqueID: 'uniqueID',
  parentUID: 'parentUID',
  locker: 'locker',
  objectVersionPK: 'objectVersionPK',
  libraryPK: 'libraryPK',
  identicalVersionPK: 'identicalVersionPK',
  historyPK: 'historyPK',
  description: 'description',
  version: 'version',
  revision: 'revision'
};

exports.Prisma.ConditionRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  conditionBean: 'conditionBean',
  revision: 'revision'
};

exports.Prisma.DataTypeBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  elementName: 'elementName',
  uniqueID: 'uniqueID',
  parentUID: 'parentUID',
  locker: 'locker',
  objectVersionPK: 'objectVersionPK',
  libraryPK: 'libraryPK',
  identicalVersionPK: 'identicalVersionPK',
  historyPK: 'historyPK',
  description: 'description',
  status: 'status',
  version: 'version',
  kindOfDataType: 'kindOfDataType',
  revision: 'revision'
};

exports.Prisma.DataTypeRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  dataTypeBean: 'dataTypeBean',
  revision: 'revision'
};

exports.Prisma.DataTypeSequenceBeanScalarFieldEnum = {
  PK: 'PK',
  seqIndex: 'seqIndex',
  dataTypeInstanceName: 'dataTypeInstanceName',
  definitionType: 'definitionType',
  dataTypeChild: 'dataTypeChild',
  dataTypeParent: 'dataTypeParent',
  revision: 'revision'
};

exports.Prisma.DefectAttributeBeanScalarFieldEnum = {
  PK: 'PK',
  defectPK: 'defectPK',
  attributeName: 'attributeName',
  attributeValue: 'attributeValue',
  revision: 'revision'
};

exports.Prisma.DefectUDFBeanScalarFieldEnum = {
  PK: 'PK',
  udfName: 'udfName',
  projectPK: 'projectPK',
  ordering: 'ordering',
  udfType: 'udfType',
  syncOption: 'syncOption',
  mustField: 'mustField',
  revision: 'revision'
};

exports.Prisma.DefectUDFLOVBeanScalarFieldEnum = {
  PK: 'PK',
  udfValue: 'udfValue',
  udfPK: 'udfPK',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.DefectUsersMappingBeanScalarFieldEnum = {
  PK: 'PK',
  projectDefectSettingsPK: 'projectDefectSettingsPK',
  testBenchUserPK: 'testBenchUserPK',
  defectManagementUser: 'defectManagementUser',
  defectManagementPasswd: 'defectManagementPasswd',
  revision: 'revision'
};

exports.Prisma.EntityStringBeanScalarFieldEnum = {
  PK: 'PK',
  value: 'value',
  ProjectUserBean_rolesES: 'ProjectUserBean_rolesES',
  revision: 'revision'
};

exports.Prisma.ErrorIDBeanScalarFieldEnum = {
  PK: 'PK',
  errorID: 'errorID',
  title: 'title',
  description: 'description',
  project: 'project',
  identicalVersionPK: 'identicalVersionPK',
  version: 'version',
  tester: 'tester',
  status: 'status',
  priority: 'priority',
  classification: 'classification',
  lastEdited: 'lastEdited',
  lastEditorPK: 'lastEditorPK',
  created: 'created',
  defectManagementSystem: 'defectManagementSystem',
  defectManagementProject: 'defectManagementProject',
  revision: 'revision'
};

exports.Prisma.ErrorIDRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  errorPK: 'errorPK',
  fileName: 'fileName',
  revision: 'revision'
};

exports.Prisma.ExecInfoRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  execInfoBean: 'execInfoBean',
  revision: 'revision'
};

exports.Prisma.ExecInformationBeanScalarFieldEnum = {
  PK: 'PK',
  testCaseNodePK: 'testCaseNodePK',
  specInfoPK: 'specInfoPK',
  testCyclePK: 'testCyclePK',
  testCase: 'testCase',
  identicalVersionPK: 'identicalVersionPK',
  status: 'status',
  responsible: 'responsible',
  priority: 'priority',
  reviewer: 'reviewer',
  locker: 'locker',
  targetDate: 'targetDate',
  execStatus: 'execStatus',
  verdictStatus: 'verdictStatus',
  comments: 'comments',
  testProtocolLocation: 'testProtocolLocation',
  testExecutionEngine: 'testExecutionEngine',
  verdictEvaluator: 'verdictEvaluator',
  scriptPath: 'scriptPath',
  plannedExecutionDuration: 'plannedExecutionDuration',
  actualExecutionDuration: 'actualExecutionDuration',
  ordering: 'ordering',
  TestThemeBean_execInformations: 'TestThemeBean_execInformations',
  version: 'version',
  TestCaseBean_execInformations: 'TestCaseBean_execInformations',
  checkableIn: 'checkableIn',
  revision: 'revision'
};

exports.Prisma.ExecParamCombErrorIDRelBeanScalarFieldEnum = {
  PK: 'PK',
  ordering: 'ordering',
  execParameterCombination: 'execParameterCombination',
  errorID: 'errorID',
  revision: 'revision'
};

exports.Prisma.ExecParamCombRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  execParamCombBean: 'execParamCombBean',
  revision: 'revision'
};

exports.Prisma.ExecParamCombValueBeanScalarFieldEnum = {
  PK: 'PK',
  type: 'type',
  ordering: 'ordering',
  parentPK: 'parentPK',
  instancesArray: 'instancesArray',
  representativeValue: 'representativeValue',
  equivalenceClass: 'equivalenceClass',
  textRepresentative: 'textRepresentative',
  dataTypePK: 'dataTypePK',
  revision: 'revision'
};

exports.Prisma.ExecParameterCombinationBeanScalarFieldEnum = {
  PK: 'PK',
  execInformationID: 'execInformationID',
  paramCombID: 'paramCombID',
  uniqueID: 'uniqueID',
  status: 'status',
  verdict: 'verdict',
  execStatus: 'execStatus',
  actualDuration: 'actualDuration',
  plannedDuration: 'plannedDuration',
  errorID: 'errorID',
  ordering: 'ordering',
  testerPK: 'testerPK',
  comments: 'comments',
  revision: 'revision'
};

exports.Prisma.ExecScriptBeanScalarFieldEnum = {
  PK: 'PK',
  execPK: 'execPK',
  name: 'name',
  type: 'type',
  execScriptFilePK: 'execScriptFilePK',
  resultFilePK: 'resultFilePK',
  revision: 'revision'
};

exports.Prisma.ExecScriptFileBeanScalarFieldEnum = {
  PK: 'PK',
  script: 'script',
  encoding: 'encoding',
  revision: 'revision'
};

exports.Prisma.FileBlockBeanScalarFieldEnum = {
  PK: 'PK',
  fileInfoPK: 'fileInfoPK',
  content: 'content',
  revision: 'revision'
};

exports.Prisma.FileBufferBeanScalarFieldEnum = {
  PK: 'PK',
  buffer: 'buffer',
  revision: 'revision'
};

exports.Prisma.FileInfoBeanScalarFieldEnum = {
  PK: 'PK',
  login: 'login',
  creationDate: 'creationDate',
  revision: 'revision'
};

exports.Prisma.FilterInfoBeanScalarFieldEnum = {
  PK: 'PK',
  value_pk: 'value_pk',
  value_ttPK: 'value_ttPK',
  value_name: 'value_name',
  value_ownerPK: 'value_ownerPK',
  value_userPK: 'value_userPK',
  value_active: 'value_active',
  value_global: 'value_global',
  value_filterType: 'value_filterType',
  value_cyclePK: 'value_cyclePK',
  revision: 'revision'
};

exports.Prisma.IdentVersDataTypeMapBeanScalarFieldEnum = {
  PK: 'PK',
  workDataTypePK: 'workDataTypePK',
  versionedDataTypePK: 'versionedDataTypePK',
  defTypeChanged: 'defTypeChanged',
  revision: 'revision'
};

exports.Prisma.ImageBeanScalarFieldEnum = {
  PK: 'PK',
  suffix: 'suffix',
  genesis: 'genesis',
  imageData: 'imageData'
};

exports.Prisma.ImportPropertiesBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  equalityType: 'equalityType',
  tdElemetsTypeImport: 'tdElemetsTypeImport',
  ttElemetsTypeImport: 'ttElemetsTypeImport',
  compareDataStructurTDE: 'compareDataStructurTDE',
  compareDataStructurTT: 'compareDataStructurTT',
  importRequirements: 'importRequirements',
  importUDF: 'importUDF',
  importDefectUDF: 'importDefectUDF',
  importReferences: 'importReferences',
  importKeywords: 'importKeywords',
  importTestThemeVeiw: 'importTestThemeVeiw',
  importDefects: 'importDefects',
  importDefectsMode: 'importDefectsMode',
  importFilePath: 'importFilePath',
  revision: 'revision'
};

exports.Prisma.InspectionDefinitionBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  defaultSeverity: 'defaultSeverity',
  checksum: 'checksum',
  description: 'description',
  implementation: 'implementation',
  enabled: 'enabled',
  revision: 'revision'
};

exports.Prisma.InspectionImplementationBeanScalarFieldEnum = {
  PK: 'PK',
  buffer: 'buffer',
  revision: 'revision'
};

exports.Prisma.InspectionPerProjectBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  inspectionPK: 'inspectionPK',
  severity: 'severity',
  revision: 'revision'
};

exports.Prisma.InstanceBeanScalarFieldEnum = {
  PK: 'PK',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  instancesArrayPK: 'instancesArrayPK',
  dataTypePK: 'dataTypePK',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.InstancesArrayBeanScalarFieldEnum = {
  PK: 'PK',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  dataTypePK: 'dataTypePK',
  name: 'name',
  description: 'description',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.InstanceValueBeanScalarFieldEnum = {
  PK: 'PK',
  type: 'type',
  ordering: 'ordering',
  dataTypePK: 'dataTypePK',
  parentPK: 'parentPK',
  instancesArray: 'instancesArray',
  representativeValue: 'representativeValue',
  equivalenceClass: 'equivalenceClass',
  revision: 'revision'
};

exports.Prisma.IssueBeanScalarFieldEnum = {
  PK: 'PK',
  summaryPK: 'summaryPK',
  tovPK: 'tovPK',
  cyclePK: 'cyclePK',
  inspectionPK: 'inspectionPK',
  typeOfAffectedItem: 'typeOfAffectedItem',
  affectedItemPK: 'affectedItemPK',
  destination: 'destination',
  revision: 'revision'
};

exports.Prisma.IssueSummaryBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  tovPK: 'tovPK',
  startInstant: 'startInstant',
  endInstant: 'endInstant',
  numberOfIssues: 'numberOfIssues',
  revision: 'revision'
};

exports.Prisma.JMS_MESSAGESScalarFieldEnum = {
  MESSAGEID: 'MESSAGEID',
  DESTINATION: 'DESTINATION',
  TXID: 'TXID',
  TXOP: 'TXOP',
  MESSAGEBLOB: 'MESSAGEBLOB'
};

exports.Prisma.JMS_TRANSACTIONSScalarFieldEnum = {
  TXID: 'TXID'
};

exports.Prisma.KeywordBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  projectPK: 'projectPK',
  tovPK: 'tovPK',
  variantsDefinitionPK: 'variantsDefinitionPK',
  revision: 'revision'
};

exports.Prisma.KeywordSpecRelBeanScalarFieldEnum = {
  PK: 'PK',
  keyword: 'keyword',
  keywordName: 'keywordName',
  variantsMarker: 'variantsMarker',
  parentPK: 'parentPK',
  parentType: 'parentType',
  revision: 'revision'
};

exports.Prisma.LibraryDependencyBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  callingTovPK: 'callingTovPK',
  callingLibraryPK: 'callingLibraryPK',
  callingBaselinePK: 'callingBaselinePK',
  calledLibraryPK: 'calledLibraryPK',
  foreignTovPK: 'foreignTovPK',
  foreignLibraryPK: 'foreignLibraryPK',
  baselinePK: 'baselinePK',
  version: 'version'
};

exports.Prisma.LicensesScalarFieldEnum = {
  licenseType: 'licenseType',
  licenseKey: 'licenseKey'
};

exports.Prisma.MetawordBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  callType: 'callType',
  elementName: 'elementName',
  uniqueID: 'uniqueID',
  parentUID: 'parentUID',
  locker: 'locker',
  objectVersionPK: 'objectVersionPK',
  libraryPK: 'libraryPK',
  identicalVersionPK: 'identicalVersionPK',
  historyPK: 'historyPK',
  description: 'description',
  status: 'status',
  version: 'version',
  contentType: 'contentType',
  contentExternalIdentifier: 'contentExternalIdentifier',
  contentPK: 'contentPK',
  revision: 'revision'
};

exports.Prisma.MetawordCallBeanScalarFieldEnum = {
  PK: 'PK',
  callingMetawordPK: 'callingMetawordPK',
  calledMetawordPK: 'calledMetawordPK',
  type: 'type',
  phase: 'phase',
  comments: 'comments',
  description: 'description',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.MetawordCallErrorIDRelBeanScalarFieldEnum = {
  PK: 'PK',
  ordering: 'ordering',
  metawordCall: 'metawordCall',
  errorID: 'errorID',
  revision: 'revision'
};

exports.Prisma.MetawordCallParameterBeanScalarFieldEnum = {
  PK: 'PK',
  parameterValueType: 'parameterValueType',
  ordering: 'ordering',
  representativeValue: 'representativeValue',
  parameterDataType: 'parameterDataType',
  metawordCall: 'metawordCall',
  instancesArrayValue: 'instancesArrayValue',
  parameterValue: 'parameterValue',
  defaultValue: 'defaultValue',
  revision: 'revision'
};

exports.Prisma.MetawordConditionRelBeanScalarFieldEnum = {
  PK: 'PK',
  ordering: 'ordering',
  precondition: 'precondition',
  metaword: 'metaword',
  condition: 'condition',
  revision: 'revision'
};

exports.Prisma.MetawordContentBeanScalarFieldEnum = {
  PK: 'PK',
  buffer: 'buffer',
  revision: 'revision'
};

exports.Prisma.MetawordParameterBeanScalarFieldEnum = {
  PK: 'PK',
  elementName: 'elementName',
  definitionType: 'definitionType',
  useType: 'useType',
  metawordPK: 'metawordPK',
  ordering: 'ordering',
  dataType: 'dataType',
  valueType: 'valueType',
  defaultValue: 'defaultValue',
  signatureUID: 'signatureUID',
  revision: 'revision'
};

exports.Prisma.MetawordRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  metawordBean: 'metawordBean',
  revision: 'revision'
};

exports.Prisma.MwCallParamDTSeqRelBeanScalarFieldEnum = {
  PK: 'PK',
  ordering: 'ordering',
  metawordCallParameter: 'metawordCallParameter',
  dataTypeSequence: 'dataTypeSequence',
  revision: 'revision'
};

exports.Prisma.NewlyCreatedDataTypeValueBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  objectVersionPK: 'objectVersionPK',
  dataTypePK: 'dataTypePK',
  valueType: 'valueType',
  valuePK: 'valuePK'
};

exports.Prisma.ParameterCombinationBeanScalarFieldEnum = {
  PK: 'PK',
  specInfoPK: 'specInfoPK',
  uniqueID: 'uniqueID',
  comments: 'comments',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.PlaceholderScalarFieldEnum = {
  PK: 'PK',
  tovPK: 'tovPK',
  name: 'name',
  description: 'description'
};

exports.Prisma.PlaceholderValueScalarFieldEnum = {
  PK: 'PK',
  placeholderPK: 'placeholderPK',
  variantsDefinitionPK: 'variantsDefinitionPK',
  placeholderValue: 'placeholderValue',
  baseTOVPK: 'baseTOVPK'
};

exports.Prisma.PluginBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  userPK: 'userPK',
  description: 'description',
  type: 'type',
  dataType: 'dataType',
  checksum: 'checksum',
  projectsTreeVisible: 'projectsTreeVisible',
  treeType: 'treeType',
  callString: 'callString',
  settingsString: 'settingsString',
  processorFileDate: 'processorFileDate',
  processorFileName: 'processorFileName',
  processorFileBuffer: 'processorFileBuffer',
  sampleFileDate: 'sampleFileDate',
  sampleFileName: 'sampleFileName',
  sampleFileBuffer: 'sampleFileBuffer',
  encoding: 'encoding',
  fontFilePath: 'fontFilePath',
  fontName: 'fontName',
  isPublic: 'isPublic',
  revision: 'revision'
};

exports.Prisma.PluginQuickAccessBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  pluginPK: 'pluginPK',
  ordering: 'ordering',
  scope: 'scope'
};

exports.Prisma.PluginResourceBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  checksum: 'checksum',
  fileName: 'fileName',
  resourceFilePK: 'resourceFilePK',
  revision: 'revision'
};

exports.Prisma.PluginResourceRelBeanScalarFieldEnum = {
  PK: 'PK',
  pluginID: 'pluginID',
  resourceID: 'resourceID',
  revision: 'revision'
};

exports.Prisma.PluginUserBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  pluginPK: 'pluginPK',
  revision: 'revision'
};

exports.Prisma.PreferenceColumnBeanScalarFieldEnum = {
  PK: 'PK',
  preferencesPK: 'preferencesPK',
  value: 'value',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.PreferenceFiletypeBeanScalarFieldEnum = {
  PK: 'PK',
  preferencesPK: 'preferencesPK',
  fileEnding: 'fileEnding',
  editorPath: 'editorPath',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.PreferenceOpenedSuiteFrmsBeanScalarFieldEnum = {
  PK: 'PK',
  preferencesPK: 'preferencesPK',
  value_posX: 'value_posX',
  value_posY: 'value_posY',
  value_width: 'value_width',
  value_height: 'value_height',
  value_type: 'value_type',
  value_state: 'value_state',
  value_projectPK: 'value_projectPK',
  value_objectVersion: 'value_objectVersion',
  value_testCycle: 'value_testCycle',
  value_statusView: 'value_statusView',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.PreferencesBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  mainFrame_posX: 'mainFrame_posX',
  mainFrame_posY: 'mainFrame_posY',
  mainFrame_width: 'mainFrame_width',
  mainFrame_height: 'mainFrame_height',
  mainFrame_state: 'mainFrame_state',
  projectAdminFrame_posX: 'projectAdminFrame_posX',
  projectAdminFrame_posY: 'projectAdminFrame_posY',
  projectAdminFrame_width: 'projectAdminFrame_width',
  projectAdminFrame_height: 'projectAdminFrame_height',
  projectAdminFrame_state: 'projectAdminFrame_state',
  userAdminFrame_posX: 'userAdminFrame_posX',
  userAdminFrame_posY: 'userAdminFrame_posY',
  userAdminFrame_width: 'userAdminFrame_width',
  userAdminFrame_height: 'userAdminFrame_height',
  userAdminFrame_state: 'userAdminFrame_state',
  filterAdminFrame_posX: 'filterAdminFrame_posX',
  filterAdminFrame_posY: 'filterAdminFrame_posY',
  filterAdminFrame_width: 'filterAdminFrame_width',
  filterAdminFrame_height: 'filterAdminFrame_height',
  filterAdminFrame_state: 'filterAdminFrame_state',
  pluginAdminFrame_posX: 'pluginAdminFrame_posX',
  pluginAdminFrame_posY: 'pluginAdminFrame_posY',
  pluginAdminFrame_width: 'pluginAdminFrame_width',
  pluginAdminFrame_height: 'pluginAdminFrame_height',
  pluginAdminFrame_state: 'pluginAdminFrame_state',
  preferencesAdminFrame_posX: 'preferencesAdminFrame_posX',
  preferencesAdminFrame_posY: 'preferencesAdminFrame_posY',
  preferencesAdminFrame_width: 'preferencesAdminFrame_width',
  preferencesAdminFrame_height: 'preferencesAdminFrame_height',
  preferencesAdminFrame_state: 'preferencesAdminFrame_state',
  referencesAdminFrame_posX: 'referencesAdminFrame_posX',
  referencesAdminFrame_posY: 'referencesAdminFrame_posY',
  referencesAdminFrame_width: 'referencesAdminFrame_width',
  referencesAdminFrame_height: 'referencesAdminFrame_height',
  referencesAdminFrame_state: 'referencesAdminFrame_state',
  varManagementFrame_posX: 'varManagementFrame_posX',
  varManagementFrame_posY: 'varManagementFrame_posY',
  varManagementFrame_width: 'varManagementFrame_width',
  varManagementFrame_height: 'varManagementFrame_height',
  varManagementFrame_state: 'varManagementFrame_state',
  issueListFrame_posX: 'issueListFrame_posX',
  issueListFrame_posY: 'issueListFrame_posY',
  issueListFrame_width: 'issueListFrame_width',
  issueListFrame_height: 'issueListFrame_height',
  issueListFrame_state: 'issueListFrame_state',
  numbering: 'numbering',
  elementNameDisplay: 'elementNameDisplay',
  userNameDisplay: 'userNameDisplay',
  statusView: 'statusView',
  unlockAll: 'unlockAll',
  defaultEditor: 'defaultEditor',
  copyBetweenObjectVersions: 'copyBetweenObjectVersions',
  copyInObjectVersion: 'copyInObjectVersion',
  copyBetweenProjects: 'copyBetweenProjects',
  xmlPath: 'xmlPath',
  iTorxPath: 'iTorxPath',
  reportFilePath: 'reportFilePath',
  reportChosenSetting: 'reportChosenSetting',
  reportExpandsData: 'reportExpandsData',
  showImportMessage: 'showImportMessage',
  exitConfirm: 'exitConfirm',
  displayTcExecTime: 'displayTcExecTime',
  uidDisplay: 'uidDisplay',
  checkParameterChanges: 'checkParameterChanges',
  autoInitMwCallParams: 'autoInitMwCallParams',
  openRefBehavior: 'openRefBehavior',
  referencePath: 'referencePath',
  revision: 'revision',
  insignificantErrorTreatment: 'insignificantErrorTreatment',
  tfp_ttDesc: 'tfp_ttDesc',
  tfp_ttReview: 'tfp_ttReview',
  tfp_tcsDesc: 'tfp_tcsDesc',
  tfp_tcsReview: 'tfp_tcsReview',
  tfp_interaction: 'tfp_interaction',
  tfp_iaComment: 'tfp_iaComment',
  tfp_tcSpecComment: 'tfp_tcSpecComment',
  tfp_ttRemark: 'tfp_ttRemark',
  tfp_tcsRemark: 'tfp_tcsRemark',
  tfp_tcExecComment: 'tfp_tcExecComment',
  tfp_ttExecViewRemark: 'tfp_ttExecViewRemark',
  tfp_tcsExecViewRemark: 'tfp_tcsExecViewRemark',
  tfp_tcExecViewComment: 'tfp_tcExecViewComment',
  tfp_subdivDesc: 'tfp_subdivDesc',
  tfp_interactionDesc: 'tfp_interactionDesc',
  tfp_elemsIAComment: 'tfp_elemsIAComment',
  tfp_datatypeDesc: 'tfp_datatypeDesc',
  tfp_condDesc: 'tfp_condDesc',
  tfp_pluginsDesc: 'tfp_pluginsDesc',
  tfp_adminInspectionDesc: 'tfp_adminInspectionDesc',
  tfp_projectInspectionDesc: 'tfp_projectInspectionDesc',
  tfp_variantsDefinitionDesc: 'tfp_variantsDefinitionDesc'
};

exports.Prisma.ProjectDefectSettingsBeanScalarFieldEnum = {
  PK: 'PK',
  system: 'system',
  project: 'project',
  readLogin: 'readLogin',
  readPassword: 'readPassword',
  manualSync: 'manualSync',
  firstSyncTime: 'firstSyncTime',
  syncInterval: 'syncInterval',
  lastSyncTime: 'lastSyncTime',
  lastSyncStatus: 'lastSyncStatus',
  lastSyncProtocol: 'lastSyncProtocol',
  statusAttribute: 'statusAttribute',
  statusSyncOption: 'statusSyncOption',
  statusDefaultValue: 'statusDefaultValue',
  statusValues: 'statusValues',
  priorityAttribute: 'priorityAttribute',
  prioritySyncOption: 'prioritySyncOption',
  priorityDefaultValue: 'priorityDefaultValue',
  priorityValues: 'priorityValues',
  classAttribute: 'classAttribute',
  classSyncOption: 'classSyncOption',
  classDefaultValue: 'classDefaultValue',
  classValues: 'classValues',
  revision: 'revision'
};

exports.Prisma.ProjectUserBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  projectPK: 'projectPK',
  revision: 'revision'
};

exports.Prisma.ReferenceBeanScalarFieldEnum = {
  PK: 'PK',
  filename: 'filename',
  projectPK: 'projectPK',
  refType: 'refType',
  attachmentPK: 'attachmentPK',
  version: 'version',
  identicalVersionPK: 'identicalVersionPK',
  revision: 'revision'
};

exports.Prisma.RepresentativeBeanScalarFieldEnum = {
  PK: 'PK',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  equivalenceClassPK: 'equivalenceClassPK',
  contentType: 'contentType',
  contentPK: 'contentPK',
  name: 'name',
  nameHashCode: 'nameHashCode',
  dataTypePK: 'dataTypePK',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.RepresentativeValueBeanScalarFieldEnum = {
  PK: 'PK',
  type: 'type',
  ordering: 'ordering',
  dataTypePK: 'dataTypePK',
  parentPK: 'parentPK',
  instancesArray: 'instancesArray',
  representativeValue: 'representativeValue',
  equivalenceClass: 'equivalenceClass',
  revision: 'revision'
};

exports.Prisma.RequirementAttributeBeanScalarFieldEnum = {
  PK: 'PK',
  requirementPK: 'requirementPK',
  attributeName: 'attributeName',
  attributeValue: 'attributeValue',
  revision: 'revision'
};

exports.Prisma.RequirementBaselineBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  name: 'name',
  project: 'project',
  lastUpdate: 'lastUpdate',
  type: 'type',
  repositoryID: 'repositoryID',
  revision: 'revision'
};

exports.Prisma.RequirementBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  ID: 'ID',
  extendedID: 'extendedID',
  version: 'version',
  owner: 'owner',
  status: 'status',
  priority: 'priority',
  repositoryID: 'repositoryID',
  revision: 'revision'
};

exports.Prisma.RequirementNodeBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  baselinePK: 'baselinePK',
  requirementPK: 'requirementPK',
  name: 'name',
  ID: 'ID',
  version: 'version',
  requirement: 'requirement',
  revision: 'revision'
};

exports.Prisma.RequirementProjectBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  name: 'name',
  reqRepositoryPK: 'reqRepositoryPK',
  revision: 'revision'
};

exports.Prisma.RequirementRepositoryBeanScalarFieldEnum = {
  pk: 'pk',
  projectPK: 'projectPK',
  name: 'name',
  login: 'login',
  password: 'password',
  revision: 'revision'
};

exports.Prisma.RequirementSpecRelBeanScalarFieldEnum = {
  PK: 'PK',
  requirement: 'requirement',
  specInformation: 'specInformation',
  edited: 'edited',
  revision: 'revision'
};

exports.Prisma.RequirementsUDFBeanScalarFieldEnum = {
  PK: 'PK',
  udfName: 'udfName',
  projectPK: 'projectPK',
  udfType: 'udfType',
  repositoryID: 'repositoryID',
  revision: 'revision'
};

exports.Prisma.RequirementTestCaseRelScalarFieldEnum = {
  PK: 'PK',
  requirementPK: 'requirementPK',
  testCaseSpecPK: 'testCaseSpecPK',
  edited: 'edited'
};

exports.Prisma.RichTextBeanScalarFieldEnum = {
  PK: 'PK',
  html: 'html',
  plain: 'plain'
};

exports.Prisma.SpecInfoRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  specInformationBean: 'specInformationBean',
  revision: 'revision'
};

exports.Prisma.SpecInformationBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  testCaseNodePK: 'testCaseNodePK',
  testCase: 'testCase',
  identicalVersionPK: 'identicalVersionPK',
  status: 'status',
  responsible: 'responsible',
  priority: 'priority',
  reviewer: 'reviewer',
  locker: 'locker',
  targetDate: 'targetDate',
  description: 'description',
  reviewComments: 'reviewComments',
  version: 'version',
  metaword: 'metaword',
  revision: 'revision'
};

exports.Prisma.SpecParamCombValueBeanScalarFieldEnum = {
  PK: 'PK',
  type: 'type',
  ordering: 'ordering',
  parentPK: 'parentPK',
  instancesArray: 'instancesArray',
  representativeValue: 'representativeValue',
  equivalenceClass: 'equivalenceClass',
  defaultValue: 'defaultValue',
  revision: 'revision'
};

exports.Prisma.SubdivisionBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  elementName: 'elementName',
  uniqueID: 'uniqueID',
  parentUID: 'parentUID',
  locker: 'locker',
  objectVersionPK: 'objectVersionPK',
  libraryPK: 'libraryPK',
  foreignLibraryTovPK: 'foreignLibraryTovPK',
  foreignLibraryPK: 'foreignLibraryPK',
  identicalVersionPK: 'identicalVersionPK',
  historyPK: 'historyPK',
  description: 'description',
  version: 'version',
  revision: 'revision'
};

exports.Prisma.SubdivisionRefRelBeanScalarFieldEnum = {
  PK: 'PK',
  referenceBean: 'referenceBean',
  subdivisionBean: 'subdivisionBean',
  revision: 'revision'
};

exports.Prisma.TestCaseBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  name: 'name',
  uniqueID: 'uniqueID',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  orderPos: 'orderPos',
  autInformation: 'autInformation',
  specInformation: 'specInformation',
  revision: 'revision'
};

exports.Prisma.TestCycleBeanScalarFieldEnum = {
  PK: 'PK',
  cycleName: 'cycleName',
  projectPK: 'projectPK',
  testObjectVersionPK: 'testObjectVersionPK',
  visible: 'visible',
  includeTi: 'includeTi',
  description: 'description',
  createdTime: 'createdTime',
  creationType: 'creationType',
  creationSource: 'creationSource',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate',
  revision: 'revision'
};

exports.Prisma.TestCycleCloneGroovyBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  description: 'description',
  script: 'script',
  revision: 'revision'
};

exports.Prisma.TestFilterBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  userPK: 'userPK',
  content: 'content',
  global: 'global',
  filterType: 'filterType',
  pluginFilter: 'pluginFilter',
  revision: 'revision'
};

exports.Prisma.TestingIntelligenceRoleBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  userPK: 'userPK',
  revision: 'revision'
};

exports.Prisma.TestLabelBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  userPK: 'userPK',
  global: 'global',
  projectPK: 'projectPK',
  libraryPK: 'libraryPK',
  revision: 'revision'
};

exports.Prisma.TestObjectVersionBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  versionID: 'versionID',
  visible: 'visible',
  includeTi: 'includeTi',
  description: 'description',
  createdTime: 'createdTime',
  lockerPK: 'lockerPK',
  creationType: 'creationType',
  creationSource: 'creationSource',
  status: 'status',
  startDate: 'startDate',
  endDate: 'endDate',
  cloningVisibility: 'cloningVisibility',
  baseTOV: 'baseTOV',
  sourceTOV: 'sourceTOV',
  variantsDefinitionPK: 'variantsDefinitionPK',
  revision: 'revision'
};

exports.Prisma.TestProjectBeanScalarFieldEnum = {
  PK: 'PK',
  projName: 'projName',
  testObjName: 'testObjName',
  projID: 'projID',
  projState: 'projState',
  visible: 'visible',
  description: 'description',
  lockerPK: 'lockerPK',
  customerName: 'customerName',
  customerAdress: 'customerAdress',
  contactPerson: 'contactPerson',
  testLab: 'testLab',
  checkLocation: 'checkLocation',
  ignoreNotPlanned: 'ignoreNotPlanned',
  ignoreNotEdited: 'ignoreNotEdited',
  designersMayManageReqs: 'designersMayManageReqs',
  designersMayImportReqs: 'designersMayImportReqs',
  showRequirementMetrics: 'showRequirementMetrics',
  defectSettings: 'defectSettings',
  filterSyncInterval: 'filterSyncInterval',
  overwriteExecResp: 'overwriteExecResp',
  optionalCheckIn: 'optionalCheckIn',
  hideExecAutoCheckIn: 'hideExecAutoCheckIn',
  hideKeywords: 'hideKeywords',
  minimumRoleForDeletingTSE: 'minimumRoleForDeletingTSE',
  extendedInteractionsContent: 'extendedInteractionsContent',
  enableLibraries: 'enableLibraries',
  enableGlobalDatatypes: 'enableGlobalDatatypes',
  includeTi: 'includeTi',
  createdTime: 'createdTime',
  creationType: 'creationType',
  creationSource: 'creationSource',
  startDate: 'startDate',
  endDate: 'endDate',
  revision: 'revision',
  onlyAdminsMayManageUDFs: 'onlyAdminsMayManageUDFs',
  variantsManagementEnabled: 'variantsManagementEnabled'
};

exports.Prisma.TestSequenceMarkerScalarFieldEnum = {
  PK: 'PK',
  keywordAssignmentPK: 'keywordAssignmentPK',
  metawordCallPK: 'metawordCallPK'
};

exports.Prisma.TestThemeBeanScalarFieldEnum = {
  PK: 'PK',
  parentPK: 'parentPK',
  name: 'name',
  uniqueID: 'uniqueID',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  orderPos: 'orderPos',
  autInformation: 'autInformation',
  specInformation: 'specInformation',
  revision: 'revision'
};

exports.Prisma.TovBaselineBeanScalarFieldEnum = {
  PK: 'PK',
  tovPK: 'tovPK',
  name: 'name',
  project: 'project',
  reProjectPK: 'reProjectPK',
  revision: 'revision'
};

exports.Prisma.TS_EquivalenceClassBeanScalarFieldEnum = {
  PK: 'PK',
  objectVersionPK: 'objectVersionPK',
  historyPK: 'historyPK',
  dataTypePK: 'dataTypePK',
  name: 'name',
  description: 'description',
  defaultRepresentativePK: 'defaultRepresentativePK',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.UserDefinedFieldsBeanScalarFieldEnum = {
  PK: 'PK',
  udfName: 'udfName',
  projectPK: 'projectPK',
  udfType: 'udfType',
  mustField: 'mustField',
  definedForTTInSpec: 'definedForTTInSpec',
  definedForTCSInSpec: 'definedForTCSInSpec',
  definedForTCInSpec: 'definedForTCInSpec',
  definedForTTInExec: 'definedForTTInExec',
  definedForTCSInExec: 'definedForTCSInExec',
  definedForTCInExec: 'definedForTCInExec',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.UserDefinedFieldsLOVBeanScalarFieldEnum = {
  PK: 'PK',
  udfValue: 'udfValue',
  udfPK: 'udfPK',
  ordering: 'ordering',
  revision: 'revision'
};

exports.Prisma.UserDefinedFieldsValueBeanScalarFieldEnum = {
  PK: 'PK',
  udfPK: 'udfPK',
  parentPK: 'parentPK',
  ordering: 'ordering',
  value: 'value',
  parentType: 'parentType',
  udfName: 'udfName',
  UDFType: 'UDFType',
  revision: 'revision'
};

exports.Prisma.UserInformationBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  fullName: 'fullName',
  EMail: 'EMail',
  passwordExpired: 'passwordExpired',
  active: 'active',
  revision: 'revision'
};

exports.Prisma.UserProjectViewsMappingBeanScalarFieldEnum = {
  PK: 'PK',
  userPK: 'userPK',
  elementPK: 'elementPK',
  type: 'type',
  frequency: 'frequency',
  loggedIn: 'loggedIn',
  projPK: 'projPK',
  revision: 'revision'
};

exports.Prisma.UserSessionsScalarFieldEnum = {
  login: 'login',
  expiration: 'expiration'
};

exports.Prisma.VariantsDefinitionScalarFieldEnum = {
  PK: 'PK',
  baseTOVPK: 'baseTOVPK',
  ordering: 'ordering',
  status: 'status',
  name: 'name',
  description: 'description'
};

exports.Prisma.VersionBeanScalarFieldEnum = {
  PK: 'PK',
  name: 'name',
  versionComment: 'versionComment',
  objectPK: 'objectPK',
  objectStatus: 'objectStatus',
  objectVerdict: 'objectVerdict',
  objectExecStatus: 'objectExecStatus',
  date_: 'date_',
  userName: 'userName',
  type: 'type',
  revision: 'revision'
};

exports.Prisma.VersionLabelRelBeanScalarFieldEnum = {
  PK: 'PK',
  ordering: 'ordering',
  testLabel: 'testLabel',
  version: 'version',
  revision: 'revision'
};

exports.Prisma.XmlSubReportBeanScalarFieldEnum = {
  PK: 'PK',
  projectPK: 'projectPK',
  tovPK: 'tovPK',
  objectPK: 'objectPK',
  type: 'type',
  formattedText: 'formattedText',
  content: 'content',
  encoding: 'encoding',
  revision: 'revision'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  users: 'users',
  ApplicationPropertiesBean: 'ApplicationPropertiesBean',
  AttachmentBean: 'AttachmentBean',
  AttachmentBufferBean: 'AttachmentBufferBean',
  AutInfoRefRelBean: 'AutInfoRefRelBean',
  AutInformationBean: 'AutInformationBean',
  ConditionBean: 'ConditionBean',
  ConditionRefRelBean: 'ConditionRefRelBean',
  DataTypeBean: 'DataTypeBean',
  DataTypeRefRelBean: 'DataTypeRefRelBean',
  DataTypeSequenceBean: 'DataTypeSequenceBean',
  DefectAttributeBean: 'DefectAttributeBean',
  DefectUDFBean: 'DefectUDFBean',
  DefectUDFLOVBean: 'DefectUDFLOVBean',
  DefectUsersMappingBean: 'DefectUsersMappingBean',
  EntityStringBean: 'EntityStringBean',
  ErrorIDBean: 'ErrorIDBean',
  ErrorIDRefRelBean: 'ErrorIDRefRelBean',
  ExecInfoRefRelBean: 'ExecInfoRefRelBean',
  ExecInformationBean: 'ExecInformationBean',
  ExecParamCombErrorIDRelBean: 'ExecParamCombErrorIDRelBean',
  ExecParamCombRefRelBean: 'ExecParamCombRefRelBean',
  ExecParamCombValueBean: 'ExecParamCombValueBean',
  ExecParameterCombinationBean: 'ExecParameterCombinationBean',
  ExecScriptBean: 'ExecScriptBean',
  ExecScriptFileBean: 'ExecScriptFileBean',
  FileBlockBean: 'FileBlockBean',
  FileBufferBean: 'FileBufferBean',
  FileInfoBean: 'FileInfoBean',
  FilterInfoBean: 'FilterInfoBean',
  IdentVersDataTypeMapBean: 'IdentVersDataTypeMapBean',
  ImageBean: 'ImageBean',
  ImportPropertiesBean: 'ImportPropertiesBean',
  InspectionDefinitionBean: 'InspectionDefinitionBean',
  InspectionImplementationBean: 'InspectionImplementationBean',
  InspectionPerProjectBean: 'InspectionPerProjectBean',
  InstanceBean: 'InstanceBean',
  InstancesArrayBean: 'InstancesArrayBean',
  InstanceValueBean: 'InstanceValueBean',
  IssueBean: 'IssueBean',
  IssueSummaryBean: 'IssueSummaryBean',
  JMS_MESSAGES: 'JMS_MESSAGES',
  JMS_TRANSACTIONS: 'JMS_TRANSACTIONS',
  KeywordBean: 'KeywordBean',
  KeywordSpecRelBean: 'KeywordSpecRelBean',
  LibraryDependencyBean: 'LibraryDependencyBean',
  Licenses: 'Licenses',
  MetawordBean: 'MetawordBean',
  MetawordCallBean: 'MetawordCallBean',
  MetawordCallErrorIDRelBean: 'MetawordCallErrorIDRelBean',
  MetawordCallParameterBean: 'MetawordCallParameterBean',
  MetawordConditionRelBean: 'MetawordConditionRelBean',
  MetawordContentBean: 'MetawordContentBean',
  MetawordParameterBean: 'MetawordParameterBean',
  MetawordRefRelBean: 'MetawordRefRelBean',
  MwCallParamDTSeqRelBean: 'MwCallParamDTSeqRelBean',
  NewlyCreatedDataTypeValueBean: 'NewlyCreatedDataTypeValueBean',
  ParameterCombinationBean: 'ParameterCombinationBean',
  Placeholder: 'Placeholder',
  PlaceholderValue: 'PlaceholderValue',
  PluginBean: 'PluginBean',
  PluginQuickAccessBean: 'PluginQuickAccessBean',
  PluginResourceBean: 'PluginResourceBean',
  PluginResourceRelBean: 'PluginResourceRelBean',
  PluginUserBean: 'PluginUserBean',
  PreferenceColumnBean: 'PreferenceColumnBean',
  PreferenceFiletypeBean: 'PreferenceFiletypeBean',
  PreferenceOpenedSuiteFrmsBean: 'PreferenceOpenedSuiteFrmsBean',
  PreferencesBean: 'PreferencesBean',
  ProjectDefectSettingsBean: 'ProjectDefectSettingsBean',
  ProjectUserBean: 'ProjectUserBean',
  ReferenceBean: 'ReferenceBean',
  RepresentativeBean: 'RepresentativeBean',
  RepresentativeValueBean: 'RepresentativeValueBean',
  RequirementAttributeBean: 'RequirementAttributeBean',
  RequirementBaselineBean: 'RequirementBaselineBean',
  RequirementBean: 'RequirementBean',
  RequirementNodeBean: 'RequirementNodeBean',
  RequirementProjectBean: 'RequirementProjectBean',
  RequirementRepositoryBean: 'RequirementRepositoryBean',
  RequirementSpecRelBean: 'RequirementSpecRelBean',
  RequirementsUDFBean: 'RequirementsUDFBean',
  RequirementTestCaseRel: 'RequirementTestCaseRel',
  RichTextBean: 'RichTextBean',
  SpecInfoRefRelBean: 'SpecInfoRefRelBean',
  SpecInformationBean: 'SpecInformationBean',
  SpecParamCombValueBean: 'SpecParamCombValueBean',
  SubdivisionBean: 'SubdivisionBean',
  SubdivisionRefRelBean: 'SubdivisionRefRelBean',
  TestCaseBean: 'TestCaseBean',
  TestCycleBean: 'TestCycleBean',
  TestCycleCloneGroovyBean: 'TestCycleCloneGroovyBean',
  TestFilterBean: 'TestFilterBean',
  TestingIntelligenceRoleBean: 'TestingIntelligenceRoleBean',
  TestLabelBean: 'TestLabelBean',
  TestObjectVersionBean: 'TestObjectVersionBean',
  TestProjectBean: 'TestProjectBean',
  TestSequenceMarker: 'TestSequenceMarker',
  TestThemeBean: 'TestThemeBean',
  TovBaselineBean: 'TovBaselineBean',
  TS_EquivalenceClassBean: 'TS_EquivalenceClassBean',
  UserDefinedFieldsBean: 'UserDefinedFieldsBean',
  UserDefinedFieldsLOVBean: 'UserDefinedFieldsLOVBean',
  UserDefinedFieldsValueBean: 'UserDefinedFieldsValueBean',
  UserInformationBean: 'UserInformationBean',
  UserProjectViewsMappingBean: 'UserProjectViewsMappingBean',
  UserSessions: 'UserSessions',
  VariantsDefinition: 'VariantsDefinition',
  VersionBean: 'VersionBean',
  VersionLabelRelBean: 'VersionLabelRelBean',
  XmlSubReportBean: 'XmlSubReportBean'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
