import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FAQ_LIST } from '../../constants/faq.constants';

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
  public isOpen = false;
  public openIndex: number | null = null;
  public faqsData = FAQ_LIST;

  public toggleOpen(index: number) {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }
}
