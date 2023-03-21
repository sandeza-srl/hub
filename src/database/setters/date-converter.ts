import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);


export default class DateConverter {

  public static convertDate(value: any) {

    if (typeof value === 'string') {
      return dayjs(value, 'DD-MM-YYYY').toDate();
    }

    return value;

  }


  public static convertDateHour(value: any) {

    if (typeof value === 'string') {
      return dayjs(value, 'DD-MM-YYYY HH:mm:ss').toDate();
    }

    return value;

  }

}
