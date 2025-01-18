import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { PaletteGenerator } from './utils/palette-generator';
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: PaletteGenerator.generatePalette('#03fc4e'),
    colorScheme: {
      light: {
        text: {
          color: '#373737'
        }
      },
      dark: {
        color: '#FFFFFF'
      }
    }
  },
  extend: {
    secondary: {
      color:'#005500'
    },
    text:{
      error:'#FF0000'
    }
  }
});



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: MyPreset }, ripple: false, inputStyle: 'outlined' })
  ]
};
