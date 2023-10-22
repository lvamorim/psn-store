import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <app-header></app-header>
        <main>
          <div class="container route-content">
            <router-outlet></router-outlet>
          </div>
        </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .content {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  `]
})
export class AppComponent {}
