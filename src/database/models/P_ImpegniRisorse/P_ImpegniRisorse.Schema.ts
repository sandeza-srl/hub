import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_ImpegniRisorsePrivate } from './P_ImpegniRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_ImpegniRisorseSchema = new mongoose.Schema<IP_ImpegniRisorsePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
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
__Dati_Testo002: {
type: String,
alias: 'IdFaseProduzione',

},
__Dati_Testo003: {
type: String,
alias: 'IdRisorsa',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraInizio',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo004: {
type: String,
alias: 'DataOreOccupate',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagProduzione',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAttrezzaggio',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagDisattrezzaggio',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagManutenzione',

},
__Dati_Testo005: {
type: String,
alias: 'IdSchedaAttivitaControllo',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceFaseProduzione',

},
__Dati_Data001: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'OraFine',

},
__Dati_Ora002: {
type: String,
alias: 'OraInizio',

},
__Dati_Testo007: {
type: String,
alias: 'IdLottoProduzione',

},
__Dati_Testo008: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Testo009: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo010: {
type: String,
alias: 'IdOperatoreProduzioneDesignato',

},
__Dati_Testo011: {
type: String,
alias: 'AnnoMese',

},
__Dati_Testo012: {
type: String,
alias: 'AnnoSettimana',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipoTurno',

},
__Dati_Testo014: {
type: String,
alias: 'TxtTipoTurno',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTurnoData',

},
__Dati_Ora003: {
type: String,
alias: 'TempoTotale',

},
__Dati_Ora004: {
type: String,
alias: 'TempoImpegnoAddetti',

},
__Dati_Testo016: {
type: String,
alias: 'DataOreOccupateInSecondi',

},
__Dati_Testo017: {
type: String,
alias: 'JsonData',

},
__Dati_Testo018: {
type: String,
alias: 'IdImpegnoRisorsa',

},
__Dati_Numero007: {
type: Number,
alias: 'NumeroSlotRisorsaInizio',

},
__Dati_Numero008: {
type: Number,
alias: 'NumeroSlotRisorsaFine',

},
__Dati_Testo019: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo020: {
type: String,
alias: 'title',

},
__Dati_Testo021: {
type: String,
alias: 'resourceId',

},
__Dati_Testo022: {
type: String,
alias: 'start',

},
__Dati_Testo023: {
type: String,
alias: 'end',

},
__Dati_Testo024: {
type: String,
alias: 'className',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_ImpegniRisorseSchema;