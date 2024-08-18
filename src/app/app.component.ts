import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BannerComponent } from './components/banner/banner.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { BannerCtaComponent } from './components/banner-cta/banner-cta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    BannerComponent,
    PricingComponent,
    FaqComponent,
    AboutComponent,
    BannerCtaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lsn-program';

  public clickedNavEvent(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
