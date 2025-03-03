import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';

export const routes: Routes = [
     { path: '', redirectTo:"Home",pathMatch:"full" },
      { path: 'Home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news-details', component: NewsDetailsComponent },
];





