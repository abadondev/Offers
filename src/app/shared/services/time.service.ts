import { Injectable } from '@angular/core';
import * as moment from 'moment';




@Injectable()
export class TimeService {

  period;

  getCurrentDate() {
    this.period = {
      startDate: moment().format('D MMM YYYY'),
      endDate: moment().format('D MMM YYYY')
    }
    return this.period;
  }
  getStartEndDateOfWeek() {
    this.period = {
      startDate: moment().format('D MMM YYYY'),
      endDate: moment().add(1, 'week').format('D MMM YYYY')
    }
    return this.period;
  }
  getStartEndDateOfMonth() {
    this.period = {
      startDate: moment().format('D MMM YYYY'),
      endDate: moment().add(1, 'month').format('D MMM YYYY')
    }
    return this.period;
  }


}
