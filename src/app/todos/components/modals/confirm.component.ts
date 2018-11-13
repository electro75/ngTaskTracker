import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'app-confirm',
    template: `<h1 mat-dialog-title>Are you sure?</h1>
                <mat-dialog-content>
                    <p>Are you sure you want to delete \"{{todo.todo.text}}\"?</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-raised-button color='warn' [mat-dialog-close]="true">Delete</button>
                    <button mat-raised-button color='primary' [mat-dialog-close]="false">Cancel</button>
                </mat-dialog-actions>`
})
export class ConfirmComponent {

    constructor(@Inject(MAT_DIALOG_DATA)public todo: any) { 
        console.log(this.todo);
     }
 }