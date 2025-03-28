import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule),
    importProvidersFrom(CommonModule),
    provideHttpClient(withFetch()),  
  ]
})
  .catch((err) => console.error(err));
