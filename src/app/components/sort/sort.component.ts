import { Component , EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {
  @Output() sortChange = new EventEmitter<string>();

  onSortChange(sort: string): void {
    this.sortChange.emit(sort);
  }
}
