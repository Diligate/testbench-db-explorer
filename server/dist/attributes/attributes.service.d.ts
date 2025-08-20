import { PrismaService } from "src/prisma/prisma.service";
import { PrismaService2 } from "src/prisma/prisma2.service";
import { CreateAttributeDto, EditAttributeDto } from "./dto";
export declare class AttributesService {
    private prisma;
    private prisma2;
    constructor(prisma: PrismaService, prisma2: PrismaService2);
    create(dto: CreateAttributeDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getAll(): Promise<(import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    getOne(id: number): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getByTableId(id: number): Promise<(import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    delete(id: number): Promise<{
        id: number;
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    deleteOfTable(id: number): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditAttributeDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findName(tableName: string): Promise<(import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        type: string;
        description: string;
        pKey: string;
        fTable: string;
        pColumn: string;
        indexName: string;
        tableName: string;
        tableId: number;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    init(): Promise<{
        name: string;
    }[]>;
    importDbAttribute(data: any): Promise<any[]>;
    exportRelations(): Promise<{
        RelationshipKey: {
            TestProjectBean: {
                name: string[];
                tableName: string;
            };
            TestObjectVersionBean: {
                name: string[];
                tableName: string;
            };
            TestCycleBean: {
                name: string[];
                tableName: string;
            };
            UserInformationBean: {
                name: string[];
                tableName: string;
            };
            AttachmentBufferBean: {
                name: string[];
                tableName: string;
            };
            AttachmentBean: {
                name: string[];
                tableName: string;
            };
            ReferenceBean: {
                name: string[];
                tableName: string;
            };
            AutInformationBean: {
                name: string[];
                tableName: string;
            };
            SubdivisionBean: {
                name: string[];
                tableName: string;
            };
            ConditionBean: {
                name: string[];
                tableName: string;
            };
            DataTypeBean: {
                name: string[];
                tableName: string;
            };
            DataTypeSequenceBean: {
                name: string[];
                tableName: string;
            };
            MetawordBean: {
                name: string[];
                tableName: string;
            };
            MetawordParameterBean: {
                name: string[];
                tableName: string;
            };
            ErrorIDBean: {
                name: string[];
                tableName: string;
            };
            UserDefinedFieldsBean: {
                name: string[];
                tableName: string;
            };
            ProjectDefectSettingsBean: {
                name: string[];
                tableName: string;
            };
            ExecInformationBean: {
                name: string[];
                tableName: string;
            };
            RichTextBean: {
                name: string[];
                tableName: string;
            };
            SpecInformationBean: {
                name: string[];
                tableName: string;
            };
            TestThemeBean: {
                name: string[];
                tableName: string;
            };
            TestCaseBean: {
                name: string[];
                tableName: string;
            };
            ExecParameterCombinationBean: {
                name: string[];
                tableName: string;
            };
            InstancesArrayBean: {
                name: string[];
                tableName: string;
            };
            RepresentativeBean: {
                name: string[];
                tableName: string;
            };
            TS_EquivalenceClassBean: {
                name: string[];
                tableName: string;
            };
            ParameterCombinationBean: {
                name: string[];
                tableName: string;
            };
            ExecScriptFileBean: {
                name: string[];
                tableName: string;
            };
            FileInfoBean: {
                name: string[];
                tableName: string;
            };
            FileBufferBean: {
                name: string[];
                tableName: string;
            };
            TestFilterBean: {
                name: string[];
                tableName: string;
            };
            InspectionImplementationBean: {
                name: string[];
                tableName: string;
            };
            InspectionDefintionBean: {
                name: string[];
                tableName: string;
            };
            IssueSummaryBean: {
                name: string[];
                tableName: string;
            };
            VariantsDefinition: {
                name: string[];
                tableName: string;
            };
            KeywordBean: {
                name: string[];
                tableName: string;
            };
            VersionBean: {
                name: string[];
                tableName: string;
            };
            MetawordContentBean: {
                name: string[];
                tableName: string;
            };
            MetawordCallBean: {
                name: string[];
                tableName: string;
            };
            MetawordCallParameterBean: {
                name: string[];
                tableName: string;
            };
            Placeholder: {
                name: string[];
                tableName: string;
            };
            PluginBean: {
                name: string[];
                tableName: string;
            };
            PreferencesBean: {
                name: string[];
                tableName: string;
            };
            RequirementBean: {
                name: string[];
                tableName: string;
            };
            RequirementBaselineBean: {
                name: string[];
                tableName: string;
            };
            RequirementRepositoryBean: {
                name: string[];
                tableName: string;
            };
            RequirementProjectBean: {
                name: string[];
                tableName: string;
            };
            TestLabelBean: {
                name: string[];
                tableName: string;
            };
        };
        ParentKey: {
            SubdivisionBean: {
                name: string[];
                tableName: string;
            };
            TestThemeBean: {
                name: string[];
                tableName: string;
            };
            SpecInformationBean: {
                name: string[];
                tableName: string;
            };
            ExecInformationBean: {
                name: string[];
                tableName: string;
            };
        };
    }>;
    importRelations(data: any): Promise<{
        RelationshipKey: {
            TestProjectBean: {
                name: string[];
                tableName: string;
            };
            TestObjectVersionBean: {
                name: string[];
                tableName: string;
            };
            TestCycleBean: {
                name: string[];
                tableName: string;
            };
            UserInformationBean: {
                name: string[];
                tableName: string;
            };
            AttachmentBufferBean: {
                name: string[];
                tableName: string;
            };
            AttachmentBean: {
                name: string[];
                tableName: string;
            };
            ReferenceBean: {
                name: string[];
                tableName: string;
            };
            AutInformationBean: {
                name: string[];
                tableName: string;
            };
            SubdivisionBean: {
                name: string[];
                tableName: string;
            };
            ConditionBean: {
                name: string[];
                tableName: string;
            };
            DataTypeBean: {
                name: string[];
                tableName: string;
            };
            DataTypeSequenceBean: {
                name: string[];
                tableName: string;
            };
            MetawordBean: {
                name: string[];
                tableName: string;
            };
            MetawordParameterBean: {
                name: string[];
                tableName: string;
            };
            ErrorIDBean: {
                name: string[];
                tableName: string;
            };
            UserDefinedFieldsBean: {
                name: string[];
                tableName: string;
            };
            ProjectDefectSettingsBean: {
                name: string[];
                tableName: string;
            };
            ExecInformationBean: {
                name: string[];
                tableName: string;
            };
            RichTextBean: {
                name: string[];
                tableName: string;
            };
            SpecInformationBean: {
                name: string[];
                tableName: string;
            };
            TestThemeBean: {
                name: string[];
                tableName: string;
            };
            TestCaseBean: {
                name: string[];
                tableName: string;
            };
            ExecParameterCombinationBean: {
                name: string[];
                tableName: string;
            };
            InstancesArrayBean: {
                name: string[];
                tableName: string;
            };
            RepresentativeBean: {
                name: string[];
                tableName: string;
            };
            TS_EquivalenceClassBean: {
                name: string[];
                tableName: string;
            };
            ParameterCombinationBean: {
                name: string[];
                tableName: string;
            };
            ExecScriptFileBean: {
                name: string[];
                tableName: string;
            };
            FileInfoBean: {
                name: string[];
                tableName: string;
            };
            FileBufferBean: {
                name: string[];
                tableName: string;
            };
            TestFilterBean: {
                name: string[];
                tableName: string;
            };
            InspectionImplementationBean: {
                name: string[];
                tableName: string;
            };
            InspectionDefintionBean: {
                name: string[];
                tableName: string;
            };
            IssueSummaryBean: {
                name: string[];
                tableName: string;
            };
            VariantsDefinition: {
                name: string[];
                tableName: string;
            };
            KeywordBean: {
                name: string[];
                tableName: string;
            };
            VersionBean: {
                name: string[];
                tableName: string;
            };
            MetawordContentBean: {
                name: string[];
                tableName: string;
            };
            MetawordCallBean: {
                name: string[];
                tableName: string;
            };
            MetawordCallParameterBean: {
                name: string[];
                tableName: string;
            };
            Placeholder: {
                name: string[];
                tableName: string;
            };
            PluginBean: {
                name: string[];
                tableName: string;
            };
            PreferencesBean: {
                name: string[];
                tableName: string;
            };
            RequirementBean: {
                name: string[];
                tableName: string;
            };
            RequirementBaselineBean: {
                name: string[];
                tableName: string;
            };
            RequirementRepositoryBean: {
                name: string[];
                tableName: string;
            };
            RequirementProjectBean: {
                name: string[];
                tableName: string;
            };
            TestLabelBean: {
                name: string[];
                tableName: string;
            };
        };
        ParentKey: {
            SubdivisionBean: {
                name: string[];
                tableName: string;
            };
            TestThemeBean: {
                name: string[];
                tableName: string;
            };
            SpecInformationBean: {
                name: string[];
                tableName: string;
            };
            ExecInformationBean: {
                name: string[];
                tableName: string;
            };
        };
    }>;
}
