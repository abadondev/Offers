import { TimeService } from './../shared/services/time.service';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';


@Component({
  selector: 'app-start-end-date',
  templateUrl: './start-end-date.component.html',
  styleUrls: ['./start-end-date.component.scss']
})
export class StartEndDateComponent {
  @Output() dateUpdater = new EventEmitter();
  @Output() filterItems = new EventEmitter();

  active = true;

  period = ['all', 'day', 'week', 'month']
  selectedValue = 'all';

  setStartDate;
  setEndDate;

  start = {
    startDate: '',
    endDate: ''
  }

  end = {
    startDate: '',
    endDate: ''
  }

  dateObj;

  constructor(private timeService: TimeService) {

  }

  ngOnInit() {
    this.getSelectValue(this.selectedValue);
  }

  getSelectValue(data) {
    switch (data) {
      case 'day':
        this.dateObj = this.timeService.getCurrentDate();
        break;
      case 'week':
        this.dateObj = this.timeService.getStartEndDateOfWeek();
        break;
      case 'month':
        this.dateObj = this.timeService.getStartEndDateOfMonth();
        break;
      default:
        this.dateObj = this.timeService.getCurrentDate();
    }
    this.dateUpdater.emit(this.dateObj);
  }

  getStartDate() {
    this.end.startDate = this.setStartDate;
  }

  getEndDate() {
    this.start.endDate = this.setEndDate;
  }

  updateCustomDate() {
    this.dateObj.startDate = this.setStartDate;
    this.dateObj.endDate = this.setEndDate;
    this.dateUpdater.emit(this.dateObj);
  }

  filterResults(data) {
     this.filterItems.emit(data);
  }

}
