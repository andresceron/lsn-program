import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() clickedNavEvent = new EventEmitter<string>();

  public isMenuOpen = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu() {
    this.isMenuOpen = false;
  }

  public scrollToSection(section: string) {
    this.clickedNavEvent.emit(section);
  }
}
