import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';


dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);


export default class DateConverter {


  public static convertDate(value: any) {

    if (value === '') {
      return value;
    }
    else if (value === '?') {
      return '';
    }
    else if (typeof value === 'string') {
      return dayjs.tz(value, 'DD-MM-YYYY', 'Europe/Dublin').toDate();
    }

    return value;

  }


  public static convertDateHour(value: any) {

    if (value === '') {
      return value;
    }
    else if (value === '?') {
      return '';
    }
    else if (typeof value === 'string') {
      return dayjs.tz(value, 'DD-MM-YYYY HH:mm:ss', 'Europe/Dublin').toDate();
    }

    return value;

  }

}
