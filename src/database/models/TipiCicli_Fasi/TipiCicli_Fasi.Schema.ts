import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiCicli_FasiPrivate } from './TipiCicli_Fasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiCicli_FasiSchema = new mongoose.Schema<ITipiCicli_FasiPrivate>({

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
alias: 'IdTipoFase',

},
__Dati_Testo002: {
type: String,
alias: 'IdTipoCiclo',

},
__Dati_Testo003: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo004: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Testo005: {
type: String,
alias: 'TxtTipoFase',

},
__Dati_Testo006: {
type: String,
alias: 'TxtTipoCiclo',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceFase',

},
__Dati_Numero002: {
type: Number,
alias: 'IncidenzaScarto',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroFase',

},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo010: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo011: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipoCicli_Fasi',

},
__Dati_Testo014: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo015: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo016: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo017: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiCicli_FasiSchema;