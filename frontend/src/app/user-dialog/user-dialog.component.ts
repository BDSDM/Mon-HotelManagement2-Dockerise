import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.css'],
})
export class UpdateUserDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    this.form = this.fb.group({
      name: [data.user.name, [Validators.required, Validators.minLength(3)]],
      email: [data.user.email, [Validators.required, Validators.email]],
      role: [data.user.role || ''],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedUser: User = {
        ...this.data.user,
        ...this.form.value,
      };
      this.dialogRef.close(updatedUser);
    }
  }
}
