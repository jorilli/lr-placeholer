import {Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContactComponent} from "./contact/contact.component";
import { AngeboteComponent } from './angebote/angebote.component';

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'angebote', component: AngeboteComponent}
];
