import { Component, Input } from '@angular/core';
import { Case } from '../../models/case';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // ייבוא CommonModule



@Component({
  selector: 'app-case',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent {
  @Input() case!: Case;
}
