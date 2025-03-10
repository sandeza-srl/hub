import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IVociRegoleRipetizioniPrivate } from './VociRegoleRipetizioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const VociRegoleRipetizioniSchema = new mongoose.Schema<IVociRegoleRipetizioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'TxtRegolaRipetizione',

},
__Dati_Testo002: {
type: String,
alias: 'IdRegolaRipetizione',

},
__Dati_Data001: {
type: Date,
alias: 'DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'IdVoceRegolaScadenze',

},
__Dati_Numero003: {
type: Number,
alias: 'PercVIva',

},
__Dati_Testo005: {
type: String,
alias: 'IdMetodoPagamento',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroScadenza',

},
__Dati_Numero005: {
type: Number,
alias: 'PercVImponibile',

},
__Dati_Numero006: {
type: Number,
alias: 'GiorniDaScadenzaPrecedente',

},
__Dati_Numero007: {
type: Number,
alias: 'PercGiorniSuTotale',

},
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default VociRegoleRipetizioniSchema;