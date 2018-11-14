import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'app-edit',
    template: `<h1 mat-dialog-title>Edit Task</h1>
                <mat-dialog-content>
                    <p>Update Task?</p>
                    <mat-form-field>
                        <input matInput [(ngModel)]="todo.todo.text">
                    </mat-form-field>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-raised-button color='primary' [mat-dialog-close]="false">Cancel</button>
                    <button mat-raised-button color='accent' [mat-dialog-close]="todo">Edit</button>
                </mat-dialog-actions>`
})
export class EditComponent {

    constructor(@Inject(MAT_DIALOG_DATA)public todo: any) { 
        // console.log(this.todo);
     }
 }