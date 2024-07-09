import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'welcome',component:WelcomeComponent},
    {path: 'about-us', component: AboutUsComponent}
    // {
    //     path: 'about-us', component: AboutUsComponent, children: [
    //     { path: 'vision-mission', component: VisionMissionComponent },
    //     ]
    //   },
];
