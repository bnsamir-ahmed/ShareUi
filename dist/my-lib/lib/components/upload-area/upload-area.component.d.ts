import { EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as i0 from "@angular/core";
export declare class UploadAreaComponent {
    private message;
    candidate: AbstractControl;
    fileType: string;
    accept: string;
    required: boolean;
    maxFileNameLength: number;
    index: number;
    maxFileSize: number;
    allowMultiple: boolean;
    fileSelected: EventEmitter<{
        file: File;
        index: number;
        fileType: string;
    }>;
    removeFile: EventEmitter<{
        index: number;
        fileType: string;
        fileIndex?: number;
    }>;
    fileSizeError: EventEmitter<{
        message: string;
        index: number;
        fileType: string;
    }>;
    constructor(message: NzMessageService);
    /**
     * Safe cast from AbstractControl to FormGroup for template usage.
     */
    getAsFormGroup(control: AbstractControl): FormGroup;
    /**
     * Handle file selection and emit to parent
     */
    onLocalFileSelected(event: Event, index: number, fileType: string): void;
    /**
     * Handle file removal and emit to parent
     */
    onRemoveFile(fileType: string, index: number, fileIndex?: number): void;
    /**
     * Get uploaded files as array
     */
    getUploadedFiles(): any[];
    /**
     * Check if any files are uploaded
     */
    hasFiles(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadAreaComponent, "app-upload-area", never, { "candidate": { "alias": "candidate"; "required": false; }; "fileType": { "alias": "fileType"; "required": false; }; "accept": { "alias": "accept"; "required": false; }; "required": { "alias": "required"; "required": false; }; "maxFileNameLength": { "alias": "maxFileNameLength"; "required": false; }; "index": { "alias": "index"; "required": false; }; "maxFileSize": { "alias": "maxFileSize"; "required": false; }; "allowMultiple": { "alias": "allowMultiple"; "required": false; }; }, { "fileSelected": "fileSelected"; "removeFile": "removeFile"; "fileSizeError": "fileSizeError"; }, never, never, true, never>;
}
