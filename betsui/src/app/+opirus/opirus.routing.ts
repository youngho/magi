
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  { path: 'lasttable',
    loadChildren: 'app/+opirus/+lasttable/lasttable.module#LastTableModule',
    data: {pageTitle: 'Last Table'}
  },
  { path: 'retrieveLastTable',
    loadChildren: 'app/+opirus/+lasttable/retrievelasttable.module#retrieveLastTableModule',
    data: {pageTitle: 'retrieve Last Table'}
  }


];

export const routing = RouterModule.forChild(routes);
