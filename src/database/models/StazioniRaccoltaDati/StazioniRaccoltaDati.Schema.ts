import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IStazioniRaccoltaDatiPrivate } from './StazioniRaccoltaDati.Types.Private';


/* --------
* Schema Definition
* -------- */
const StazioniRaccoltaDatiSchema = new mongoose.Schema<IStazioniRaccoltaDatiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdStazioneRaccoltaDati',

},
__Dati_Testo002: {
type: String,
alias: 'TxtStazioneRaccoltaDati',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdRisorseAbilitate',

},
__Dati_Testo004: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo005: {
type: String,
alias: 'TxtReparto',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceStazioneRaccoltaDati',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo008: {
type: String,
alias: 'TxtRisorseAbilitate',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceTxtStazioneRaccoltaDatiAutomatico',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaTotali',

},
__Dati_Ora001: {
type: String,
alias: 'MaxTempoAssegnabile',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagLoginNfcAttivo',

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
alias: 'IdInstallazione',

},
__Dati_Testo011: {
type: String,
alias: 'IdOperatoriProduzioneEsclusi',

},
__Dati_Testo012: {
type: String,
alias: 'IdSedeCompagnia',

},
__Dati_Testo013: {
type: String,
alias: 'TxtSedeCompagnia',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default StazioniRaccoltaDatiSchema;