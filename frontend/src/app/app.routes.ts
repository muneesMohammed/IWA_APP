import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { DonationComponent } from './components/donation/donation.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { EventsDetailsComponent } from './components/events-details/events-details.component';

export const routes: Routes = [
     { path: '', redirectTo:"Home",pathMatch:"full" },
      { path: 'Home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news-details', component: NewsDetailsComponent },
      {path: 'blog', component:BlogComponent},
      {path:'volunteer', component:VolunteerComponent},
      {path:'donation', component:DonationComponent},
      {path:'teams', component:TeamsComponent},
      {path: 'events', component: EventsComponent},
      {path: 'event-details', component: EventsDetailsComponent } 
];





