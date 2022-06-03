export interface IWorkResponse {
    "message": IWork;
    "message-type": string;
    "message-version": string;
    "status": string;
}

export interface IWork {
    "facets"?: any;
    "items"?: IWorkItem[];
    "items-per-page"?: number;
    "total-results"?: number;
}

export interface IWorkItem {
    "doi": string;
    "URL": string;
    "publisher": string;
    "type": string;
    "title": string[];
    "container-title": string[];
    "subject": string[];
    "author": IWorkAuthor[];
}

export interface IWorkAuthor {
    "family": string;
    "given": string;
    "sequence": string;
}