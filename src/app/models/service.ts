export class Service {

    public idService: number;
    public serviceName: string;
    public description: string;
    public url: string;
    public image: string;
    public flagAllowedChange: string;
    public dateGp: number;
    public disabledSince:number;
    public disabledDays:string;
    public endDate: any;

    constructor () {

        this.idService = null;
        this.serviceName = null;
        this.description = null;
        this.url = null;
        this.image = null;
        this.flagAllowedChange = null;
        this.dateGp = null;
        this.disabledSince = null;
        this.disabledDays = null;
        this.endDate = null;

    }

    public set ( service:Service ) {

        console.log (service);
        this.idService = service.idService;
        this.serviceName = service.serviceName;
        this.description = service.description;
        this.url = service.url;
        this.image = service.image;
        this.flagAllowedChange = service.flagAllowedChange;
        this.dateGp = service.dateGp;
        this.disabledSince = service.disabledSince;
        this.disabledDays = service.disabledDays;
        this.endDate = service.endDate;

    }

 }
