import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiNormativePrivate } from './TipiNormative.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiNormativeSchema = new mongoose.Schema<ITipiNormativePrivate>({

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
alias: 'IdTipoNormativa',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoNormativa',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceTipoNormativa',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

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
__Dati_Testo005: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo006: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Testo007: {
type: String,
alias: 'CodiceTxtTipoNormativaAutomatico',

},
__Dati_Data003: {
type: Date,
alias: 'DataEmissioneNormativa',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'DataScadenzaNormativa',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Testo008: {
type: String,
alias: 'Note',

},
__Dati_Testo009: {
type: String,
alias: 'IdDocumentoPrincipale',

},
__Dati_Data005: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo010: {
type: String,
alias: 'FlagSelezione',

},
__Dati_Testo011: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo012: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo013: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo014: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo015: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiNormativeSchema;