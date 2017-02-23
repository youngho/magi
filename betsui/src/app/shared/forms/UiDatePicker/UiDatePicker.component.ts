import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IMyDateModel, IMyOptions} from 'mydatepicker';
declare var require:any;

@Component({
    selector: 'ui-date-picker',
    templateUrl: 'UiDatePicker.component.html',
    providers: []
})
export class UiDatePickerComponent implements OnInit {

    private model: Object = {date: {year: 2018, month: 10, day: 9}};   // this example is initialized to specific date
    private selector: number = 0;
    private selectedTextNormal: string = '';
    private border: string = 'none';
    private selectedDateNormal:string = '';
    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'yyyy-mm-dd',
        selectionTxtFontSize: "13px",
        inline: false
    };
    constructor() {
    }

    ngOnInit() {
    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged()2: ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';

            this.selectedDateNormal = event.formatted;
            // let re = /-/gi;
            // this.data.sysDateStart = event.formatted.replace(re,"") + "000000";
            // console.log("sysDateStart4 : " + this.data.sysDateStart);
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
            // console.log("sysDateStart2 : " + this.data.sysDateStart);
            // this.data.sysDateStart = new Date(event.jsdate).toLocaleDateString()
        }
    }

}
