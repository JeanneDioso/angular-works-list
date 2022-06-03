import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { IWork, IWorkItem, IWorkAuthor } from "src/app/core/models/work.model";
import { WorksService } from "src/app/core/services/work.service";

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
    public data: IWork = {
        items: []
    };
    public searchInput: string = "";
    public isLoading: boolean = false;
    constructor(
        private _worksService: WorksService
    ) { }

    public ngOnInit(): void {
        this.getData();
    }

    public getData(query?: string, rows?: number, offset?: number): void {
        this.isLoading = true;
        this._worksService.getMenuData(query, rows, offset).subscribe(data => {
            this.data = data;
            this.data.items = this.data.items.sort((a, b) => ((a["container-title"] ? a["container-title"][0] : "") > (b["container-title"] ? b["container-title"][0] : "")) ? 1 : -1);
            this.isLoading = false;
        });
    }

    public pagedDate(e: PageEvent): void {
       this.getData(this.searchInput, e.pageSize, (e.pageSize * e.pageIndex));
    }

    public viewArticle(item: IWorkItem): void {
        window.location.href = item.URL;
    }

    public getAuthors(authors: IWorkAuthor[]) : string {
        return authors ? authors.map( a => a.family).join(", ") : "";
    }

    public makeUnique(array: string[]) : string[] {
        return [...new Set(array)];
    }
}