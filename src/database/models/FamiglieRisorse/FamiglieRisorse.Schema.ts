import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFamiglieRisorsePrivate } from './FamiglieRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const FamiglieRisorseSchema = new mongoose.Schema<IFamiglieRisorsePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'TxtFamigliaRisorsa',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdFamigliaRisorsa',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagLavInternaPianificabile',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagLavInternaNonPianificabile',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagImballoParziale',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagImballoFinale',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagLavEsterna',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Numero008: {
type: Number,
alias: 'NumeroOreGiornoPerDataLimite',

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
alias: 'IdInstallazione',

},
__Dati_Testo005: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo006: {
type: String,
alias: 'IdSottoFamigliaItem',

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
export default FamiglieRisorseSchema;