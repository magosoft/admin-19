import { Routes } from '@angular/router';
import { DisenoComponent } from './pages/diseno/diseno.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [{ path: '', component: DisenoComponent }]
    }
];
