import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VacationService } from 'src/app/services/vacation.service';
import { Vacation } from '../../models/Vacation';

import { EventTypeService } from 'src/app/services/event-type.service';
import { EventType } from '../../models/EventType';

import { VacaEventService } from 'src/app/services/vaca-event.service';
import { VacaEvent } from '../../models/VacaEvent';

import { MatTableDataSource, MatDialog } from '@angular/material';
import { EventTypeDialogComponent } from './event-type-dialog/event-type-dialog.component';
import { DeleteConfirmComponent } from '../admin/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _eventTypeServices: EventTypeService, private _VacaEventServices: VacaEventService,
     private _vacationServices: VacationService, public dialog: MatDialog, private _ar: ActivatedRoute, private _router: Router) { 
    // this._ar.paramMap.subscribe(p=> {
    //   this._eventTypeServices.getEventTypeByID(p.get('id')).subscribe((singleEventType: EventType) =>{
    //     this.eventType = singleEventType;
    //   });
    // });
  }

  openDialog() {
    let dialogRef = this.dialog.open(EventTypeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
  
  openDialog1() {
    let dialogRef = this.dialog.open(DeleteConfirmComponent, {data: {name: 'what'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }
  
  // onDelete() {
  //   this._eventTypeServices.deleteEventType(this.eventType.EventTypeID).subscribe(() => {
  //     this._router.navigate(['/admin'])
  //   });
  // }

  ngOnInit() {

    this._eventTypeServices.getEventTypeList().subscribe((eventtype: EventType[]) => {
    this.dataSource = new MatTableDataSource<EventType>(eventtype)
    });

    this._vacationServices.getVacations().subscribe((vacation: Vacation[]) => {
    this.dataSource1 = new MatTableDataSource<Vacation>(vacation)
    });

    this._VacaEventServices.getVacaEvents().subscribe((vacaEvent: VacaEvent[]) => {
    this.dataSource2 = new MatTableDataSource<VacaEvent>(vacaEvent)
    });

  }
  columnNames = ['EventTypeID', 'EventTypeName', 'Update', 'Delete']
  columnNames1 = ['User', 'VacationName', 'Update']
  columnNames2 = ['EventID', 'VacationId', 'VacaEventName', 'Update'];

  dataSource: MatTableDataSource<EventType>;
  dataSource1: MatTableDataSource<Vacation>;
  dataSource2: MatTableDataSource<VacaEvent>;
}
