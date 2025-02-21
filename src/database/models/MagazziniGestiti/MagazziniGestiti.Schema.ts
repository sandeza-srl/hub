import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IMagazziniGestitiPrivate } from './MagazziniGestiti.Types.Private';


/* --------
* Schema Definition
* -------- */
const MagazziniGestitiSchema = new mongoose.Schema<IMagazziniGestitiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'CodiceMagazzinoGestito',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdMagazzinoGestito',

},
__Dati_Testo004: {
type: String,
alias: 'IdMagazzinoFisico',

},
__Dati_Testo005: {
type: String,
alias: 'TxtMagazzinoGestito',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoMagazzino',

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
__Dati_Testo007: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo008: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaDaMagazziniFisici',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAggiornaDaTipiMagazzini',

},
__Dati_Testo010: {
type: String,
alias: 'TxtMagazzinoFisico',

},
__Dati_Testo011: {
type: String,
alias: 'TxtTipoMagazzino',

},
__Dati_Testo012: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo013: {
type: String,
alias: 'IdSede',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagPosizioniGestite',

},
__Dati_Testo014: {
type: String,
alias: 'CodiceMagazzinoFisico',

},
__Dati_Testo015: {
type: String,
alias: 'CodiceTipoMagazzino',

},
__Dati_Testo016: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default MagazziniGestitiSchema;