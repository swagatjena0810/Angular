import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('createComment', { static: true }) createComment!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Safe content (e.g., from an API, user input)
    const safeText = 'test';  // This text can come from user input or external sources

    // Create a new span element
    const span = this.renderer.createElement('span');
    
    // Create a text node for the span
    const text = this.renderer.createText(safeText);  // Avoids unsafe innerHTML
    
    // Append the text to the span
    this.renderer.appendChild(span, text);
    
    // Append the span to the div container
    this.renderer.appendChild(this.createComment.nativeElement, span);
  }
}
