import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiEtichetteLavorazioniPrivate } from './TipiEtichetteLavorazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiEtichetteLavorazioniSchema = new mongoose.Schema<ITipiEtichetteLavorazioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'TxtTipoEtichettaLavorazione',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoEtichettaLavorazione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoControllo',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagTipoData',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagTipoNumero',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagTipoTesto',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagValoriLiberi',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagValoriLista',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagValoriOkKo',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagValoriRange',

},
__Dati_Testo005: {
type: String,
alias: 'FlagValoriTxt',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagTipiControlli',

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
__Dati_Testo006: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo007: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Testo008: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo009: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiEtichetteLavorazioniSchema;