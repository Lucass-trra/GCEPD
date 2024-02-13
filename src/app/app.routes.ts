import { Routes } from '@angular/router';

//pages
import { CategoryPageComponent } from "./pages/category-page/category-page.component";

export const routes: Routes = [
    {
        path: "",
        component: CategoryPageComponent
    },

    {
        path: "category/:name",
        component: CategoryPageComponent
    }

];
