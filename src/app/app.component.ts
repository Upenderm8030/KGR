import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HerobannerComponent } from "./herobanner/herobanner.component";
import { AboutUsComponent } from "./about-us/about-us.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        VisionMissionComponent,
        HomeComponent,
        FormComponent, HerobannerComponent, AboutUsComponent]
})
export class AppComponent {
  title = 'kgr-college-website';
}
