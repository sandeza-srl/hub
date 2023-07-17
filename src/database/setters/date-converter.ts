import dayjs from 'dayjs';

import { isNil, isValidString } from '@proedis/utils';

import 'dayjs/locale/it';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';


dayjs.locale('it');
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Europe/Rome');


export default class DateConverter {


  private static formatAsDayjs(value: dayjs.Dayjs | Date | number | string | null | undefined): dayjs.Dayjs | null {
    /** Check value is not nil */
    if (isNil(value)) {
      return null;
    }

    /** Check value is already a dayjs object */
    if (dayjs.isDayjs(value)) {
      return value;
    }

    /** Check value is a Date */
    if (value instanceof Date) {
      return dayjs(value);
    }

    /** Check if value is unix timestamp */
    if (typeof value === 'number') {
      return dayjs(value);
    }

    /** Check value is effective a string */
    if (!isValidString(value)) {
      return null;
    }

    /** Parse from string */
    const [ datePart, hourPart = '00:00:00' ] = value.replace(/s+/g, ' ').split(' ');

    let separator = ':';

    if (hourPart.includes('.')) {
      separator = '.';
    }

    /** TEST MATTEO - Check if hourPart is with : or . */
    const [ hours = 0, minutes = 0, seconds = 0 ] = hourPart.split(separator).map(n => Number(n || 0));


    return dayjs(datePart, 'DD/MM/YYYY')
      .startOf('day')
      .add((hours * 60 * 60) + (minutes * 60) + seconds, 's');


  }


  public static convertDate(value: Date | number | string | null | undefined): Date | null {
    return this.formatAsDayjs(value)?.startOf('day').toDate() ?? null;
  }


  public static convertDateHour(value: Date | number | string | null | undefined): Date | null {
    return this.formatAsDayjs(value)?.toDate() ?? null;
  }

}
