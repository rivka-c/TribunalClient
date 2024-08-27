import { Component, EventEmitter, Output  } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  onFilterChange(filter: string): void {
    this.filterChange.emit(filter);
  }
  
}