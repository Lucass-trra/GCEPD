import { Routes } from '@angular/router';

//pages
import { GCEPD_PageComponent } from "./pages/GCEPD_page/GCEPD-page.component";
import { CategoryPageComponent } from "./pages/category-page/category-page.component";
import { ProductDetailsPageComponent } from "./pages/product-details-page/product-details-page.component";
import { ProductSignUpPageComponent } from "./pages/product_signUp-page/product_signUp-page.component";
import { ReportPageComponent } from "./pages/report-page/report-page.component";
import { SignUpPageComponent } from "./pages/user_signUp-page/user_signUp-page.component";

export const routes: Routes = [
    {
        path: "",
        component: GCEPD_PageComponent
    },

    {
        path: "category/:id",
        component: CategoryPageComponent
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
        path:"user/register",
        component: SignUpPageComponent
    },

    {
        path: "reports",
        component: ReportPageComponent
    }


];
