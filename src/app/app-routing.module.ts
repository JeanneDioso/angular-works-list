import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkComponent } from "./views/work/work.component";

const routes: Routes = [
    {
        path: '', component: WorkComponent, pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy"})],
    exports: [RouterModule]
})

export class AppRoutingModule {} 