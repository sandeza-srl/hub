import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStoricoTipoAnagraficaPrivate } from './StoricoTipoAnagrafica.Types.Private';


/* --------
* Schema Definition
* -------- */
const StoricoTipoAnagraficaSchema = new mongoose.Schema<IStoricoTipoAnagraficaPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipologiaAccount',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipologiaAccount',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccount',

},
__Dati_Data001: {
type: Date,
alias: 'Data',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo005: {
type: String,
alias: 'Note',

},
__Dati_Testo006: {
type: String,
alias: 'IdStoricoTipoAnagrafica',

},
__Dati_Ora001: {
type: String,
alias: 'Ora',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo007: {
type: String,
alias: 'CodiceTipologiaAccount',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagClientePrimario',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagIntermediario',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagClienteFinale',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagFornitore',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagOperatore',

},
__Dati_Testo009: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StoricoTipoAnagraficaSchema;