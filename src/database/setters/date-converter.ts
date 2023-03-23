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

    if (typeof value === 'string') {
      const newDate = dayjs.tz(value, 'DD-MM-YYYY', 'Europe/Dublin').toDate();
      console.log(newDate);
      return dayjs.tz(value, 'DD-MM-YYYY', 'Europe/Dublin').toDate();
    }

    return value;

  }


  public static convertDateHour(value: any) {

    if (value === '') {
      return value;
    }

    if (typeof value === 'string') {
      return dayjs(value, 'DD-MM-YYYY HH:mm:ss').toDate();
    }

    return value;

  }

}
