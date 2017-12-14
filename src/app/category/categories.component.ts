/**
 * Created by SerhiiTsymbaliuk on 7/16/17.
 */

import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {CategoriesService} from "./categories.sercice";
import {ICategoryBase} from "./CategoryBase";


@Component({
    selector: 'app-categories',
    providers: [CategoriesService],
    templateUrl: './category.menu.html',
    styles: []
})

export class CategoryListComponent {
    categories: ICategoryBase[];

    constructor(private router: Router, private categoriesService: CategoriesService) {
        this.categoriesService.getAll().subscribe(p => this.categories = p);
    }
}
