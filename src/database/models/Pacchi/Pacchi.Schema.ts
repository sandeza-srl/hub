import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPacchiPrivate } from './Pacchi.Types.Private';


/* --------
* Schema Definition
* -------- */
const PacchiSchema = new mongoose.Schema<IPacchiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraRegistrazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo001: {
type: String,
alias: 'IdItem',

},
__Dati_Testo002: {
type: String,
alias: 'IdPosizione',

},
__Dati_Testo003: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo004: {
type: String,
alias: 'UnitaMisura',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Quantita',

},
__Dati_Testo005: {
type: String,
alias: 'IdPacco',

},
__Dati_Testo006: {
type: String,
alias: 'IdMagazzinoGestito',

},
__Dati_Numero003: {
type: Number,
alias: 'VUnitario',

},
__Dati_Numero004: {
type: Number,
alias: 'VTotale',

},
__Dati_Testo007: {
type: String,
alias: 'Tracciabilita_NumeroSerie',

},
__Dati_Testo008: {
type: String,
alias: 'IdFornituraItem',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Data001: {
type: Date,
alias: 'Tracciabilita_DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo010: {
type: String,
alias: 'Tracciabilita_CodiceLotto',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo011: {
type: String,
alias: 'CodicePacco',

},
__Dati_Testo012: {
type: String,
alias: 'CodiceItem',

},
__Dati_Numero005: {
type: Number,
alias: 'Progressivo',

},
__Dati_Numero006: {
type: Number,
alias: 'Anno',

},
__Dati_Numero007: {
type: Number,
alias: 'Settimana',

},
__Dati_Testo013: {
type: String,
alias: 'iBeacon_Id',

},
__Dati_Testo014: {
type: String,
alias: 'iBeacon_Major',

},
__Dati_Testo015: {
type: String,
alias: 'iBeacon_Minor',

},
__Dati_Numero008: {
type: Number,
alias: 'Zero',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagPaccoConTracciabilita',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagPaccoConTracciabilitaMultipla',

},
__Dati_Testo016: {
type: String,
alias: 'Tracciabilita_Taglia',

},
__Dati_Testo017: {
type: String,
alias: 'Tracciabilita_Colore',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAggiornaDaMovimenti',

},
__Dati_Testo018: {
type: String,
alias: 'AnnoMese',

},
__Dati_Testo019: {
type: String,
alias: 'AnnoSettimana',

},
__Dati_Testo020: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo021: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo022: {
type: String,
alias: 'IdTracciabilitaItem',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagAggiornaDaTracciabilita',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagAggiornaDaItems',

},
__Dati_Data002: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo023: {
type: String,
alias: 'Tracciabilita_InfoExtra',

},
__Dati_Testo024: {
type: String,
alias: 'Tracciabilita_CodiceAutomatico',

},
__Dati_Testo025: {
type: String,
alias: 'CodicePosizione',

},
__Dati_Testo026: {
type: String,
alias: 'IdMagazzinoFisico',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipoMagazzino',

},
__Dati_Testo028: {
type: String,
alias: 'TxtMagazzinoFisico',

},
__Dati_Testo029: {
type: String,
alias: 'TxtMagazzinoGestito',

},
__Dati_Testo030: {
type: String,
alias: 'TxtTipoMagazzino',

},
__Dati_Testo031: {
type: String,
alias: 'Tracciabilita_CodiceTxtAutomatico',

},
__Dati_Testo032: {
type: String,
alias: 'Tracciabilita_TxtAutomatico',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagPaccoVuoto',

},
__Dati_Testo033: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo034: {
type: String,
alias: 'Tracciabilita_CodiceRegistrazioneFaseProduzione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PacchiSchema;