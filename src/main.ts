import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//  For using standalone modules
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// For using regular modules
platformBrowserDynamic().bootstrapModule(AppModule);
