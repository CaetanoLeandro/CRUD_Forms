import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
export const environment = {
  apiUrl: 'https://jsonplaceholder.typicode.com/users' // API to test
}