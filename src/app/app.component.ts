import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    The content below is only a placeholder and can be replaced 
  <section>  
    <div class="example-label">Basic</div>
  <div class="example-button-row">
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
<mat-divider></mat-divider>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
}
