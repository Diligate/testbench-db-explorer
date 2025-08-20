declare let ParentKey: {
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
declare function setParentKey(value: any): void;
export { ParentKey, setParentKey };
