import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-payer',
  standalone: true,
  imports:[
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule ,
    MatInputModule,
    MatFormFieldModule,
    DialogAddPayerComponent,
    MatDialogModule,
  
    ],
  templateUrl: './dialog-add-payer.component.html',
  styleUrl: './dialog-add-payer.component.scss'
})
export class DialogAddPayerComponent {
name:string='';

onNoClick(){

}

}
