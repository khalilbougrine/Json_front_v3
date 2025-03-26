import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('Application started successfully');
    if (window.location.href.includes('state=')) {
      window.location.href = '/voitures'; // Force la redirection
    }
  })
  .catch(err => console.error('Bootstrap error', err));
