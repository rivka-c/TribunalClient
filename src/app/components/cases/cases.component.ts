import { Component, computed, inject, OnInit } from '@angular/core';
import { CaseService } from '../../services/case.service';
import { CaseComponent } from '../case/case.component';
import { MatSelectModule } from '@angular/material/select';
import { Case } from '../../models/case';
import { FilterComponent } from '../filter/filter.component';
import { SortComponent } from '../sort/sort.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CaseComponent,MatSelectModule,FilterComponent,SortComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent implements OnInit {
  caseService = inject(CaseService);
  cases = computed(() => this.caseService.cases());
  filteredCases: Case[] = [];
  currentFilter: string = 'all';
  currentSortCriteria: string = 'fileOpeningDate';
  judgeId: number | null = null;

ngOnInit() {
  this.judgeId = this.getJudgeIdFromLocalStorage();
    this.caseService.getCases();
    this.applyFilterAndSort();
  }
  getJudgeIdFromLocalStorage(): number | null {
    const id = localStorage.getItem('judgeId');
    return id ? parseInt(id, 10) : null;
  }
  sortCases(criteria: string): void {
    this.currentSortCriteria = criteria;
    this.applyFilterAndSort();
  }
  filterCases(filter: string): void {
    this.currentFilter = filter;
    this.applyFilterAndSort();
  }
  applyFilterAndSort(): void {
    let filtered = [...this.cases()];

    if (this.currentFilter === 'myCases') {
      filtered = filtered.filter(c => c.practitionerId === this.judgeId);
    } else if (this.currentFilter === 'activeCases') {
      filtered = filtered.filter(c => c.status === 'פתוח');
    } else if (this.currentFilter === 'closedCases') {
      filtered = filtered.filter(c => c.status === 'סגור');
    }

    this.filteredCases = filtered.sort((a, b) => {
      if (this.currentSortCriteria === 'fileOpeningDate') {
        return new Date(a.fileOpeningDate).getTime() - new Date(b.fileOpeningDate).getTime();
      } else if (this.currentSortCriteria === 'caseNumber') {
        return a.caseNumber.localeCompare(b.caseNumber);
      }
      return 0;
    });
  }
  trackByIndex(index: number, item: Case): number {
    return index;
  }
}
