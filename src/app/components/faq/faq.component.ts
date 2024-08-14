import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  isOpen = false;
  openIndex: number | null = null;

  faqsData = [
    { id: 1, question: 'Pregunta 1', answer: 'Respuesta 1!', isOpen: false },
    { id: 2, question: 'Pregunta 2', answer: 'Respuesta 2!', isOpen: false },
    { id: 3, question: 'Pregunta 3', answer: 'Respuesta 3!', isOpen: false }
  ];

  public toggleOpen(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }
}
