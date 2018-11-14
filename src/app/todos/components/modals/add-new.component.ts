import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'app-add-new',
    template: `<h1 mat-dialog-title>Add Task</h1>
                <mat-dialog-content>
                    <p>New Task?</p>
                    <mat-form-field>
                        <input matInput [(ngModel)]="todo.text">
                    </mat-form-field>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-raised-button color='primary' [mat-dialog-close]="false">Cancel</button>
                    <button mat-raised-button color='accent' [mat-dialog-close]="todo.text">Add</button>
                </mat-dialog-actions>`
})
export class AddNewComponent {

    constructor(@Inject(MAT_DIALOG_DATA)public todo: any) { 
        this.todo = {
            text: ''
        }
     }
 }