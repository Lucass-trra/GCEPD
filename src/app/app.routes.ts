import { Routes } from '@angular/router';

//pages
import { GCEPD_PageComponent } from "./pages/GCEPD_page/GCEPD-page.component";
import { ProductDetailsPageComponent } from "./pages/product-details-page/product-details-page.component";
import { ProductSignUpPageComponent } from "./pages/product_signUp-page/product_signUp-page.component";
import { ReportPageComponent } from "./pages/report-page/report-page.component";
import { Home } from "./pages/home/home";

export const routes: Routes = [
    {
        path:"",
        component: Home
    },

    {
        path: "GCEPD",
        component: GCEPD_PageComponent
    },

    {
        path: "product/details/:id",
        component:ProductDetailsPageComponent
    },

    {
        path: "product/register",
        component: ProductSignUpPageComponent
    },


    {
        path: "reports",
        component: ReportPageComponent
    }


];
