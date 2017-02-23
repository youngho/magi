"use strict";
var router_1 = require("@angular/router");
exports.routes = [
    { path: 'lotyield',
        loadChildren: 'app/20yield/lotyield/lotyield.module#LotYieldModule',
        data: { pageTitle: 'Program register' }
    },
    { path: 'subbin',
        loadChildren: 'app/20yield/subbin/subbin.module#SubBinModule',
        data: { pageTitle: 'Bin description' }
    },
    { path: 'ngbin',
        loadChildren: 'app/20yield/ngbin/ngbin.module#NgBinModule',
        data: { pageTitle: 'Bin description' }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
