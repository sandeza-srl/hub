import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPeriodiChiusuraPrivate } from './PeriodiChiusura.Types.Private';


/* --------
* Schema Definition
* -------- */
const PeriodiChiusuraSchema = new mongoose.Schema<IPeriodiChiusuraPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdPeriodoChiusura',

},
__Dati_Testo002: {
type: String,
alias: 'IdSede',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizioPeriodo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFinePeriodo',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Numero003: {
type: Number,
alias: 'SettimaneChiusura',

},
__Dati_Testo004: {
type: String,
alias: 'IdItem',

},
__Dati_Numero004: {
type: Number,
alias: 'AnnoSettimanaInizioChiusura',

},
__Dati_Numero005: {
type: Number,
alias: 'AnnoSettimanaFineChiusura',

},
__Dati_Testo005: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo006: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Data003: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data005: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo007: {
type: String,
alias: 'AnnoSettimaneChiusura',

},
__Dati_Numero006: {
type: Number,
alias: 'GiorniChiusura',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PeriodiChiusuraSchema;