import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface DocumentFile {
    id: number;
    originalName: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    fileSize: number;
    createdAt: string;
    updatedAt: string;
    employeeId: number;
    documentType: string;
}
export interface DocumentSection {
    type: string;
    displayName: string;
    files: DocumentFile[];
    hasFiles: boolean;
}
export declare class DocumentViewerComponent {
    canUpdate: boolean;
    canDelete: boolean;
    canRead: boolean;
    canCreate: boolean;
    documentSections: DocumentSection[];
    showSectionHeaders: boolean;
    uploadPlaceholderText: string;
    onUpload: EventEmitter<string>;
    onDownload: EventEmitter<DocumentFile>;
    onView: EventEmitter<DocumentFile>;
    onRemove: EventEmitter<number>;
    getDocumentDisplayName(document: DocumentFile): string;
    getDocumentSubtitle(document: DocumentFile): string;
    private getTimeAgo;
    uploadFile(sectionType: string): void;
    viewFile(doc: DocumentFile): void;
    downloadFile(doc: DocumentFile): void;
    removeFile(fileId: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocumentViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocumentViewerComponent, "app-document-viewer", never, { "canUpdate": { "alias": "canUpdate"; "required": false; }; "canDelete": { "alias": "canDelete"; "required": false; }; "canRead": { "alias": "canRead"; "required": false; }; "canCreate": { "alias": "canCreate"; "required": false; }; "documentSections": { "alias": "documentSections"; "required": false; }; "showSectionHeaders": { "alias": "showSectionHeaders"; "required": false; }; "uploadPlaceholderText": { "alias": "uploadPlaceholderText"; "required": false; }; }, { "onUpload": "onUpload"; "onDownload": "onDownload"; "onView": "onView"; "onRemove": "onRemove"; }, never, never, true, never>;
}
