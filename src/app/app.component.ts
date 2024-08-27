import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CasesComponent } from "./components/cases/cases.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CasesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TribunalClient';
}
