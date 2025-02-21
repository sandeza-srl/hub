import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IDatiRipartitoriPrivate } from './DatiRipartitori.Types.Private';


/* --------
* Schema Definition
* -------- */
const DatiRipartitoriSchema = new mongoose.Schema<IDatiRipartitoriPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Altezza',

},
__Dati_Numero002: {
type: Number,
alias: 'CoefficienteDispersioneVolumica',

},
__Dati_Testo001: {
type: String,
alias: 'DescrizioneLocale',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiorna01',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAggiorna02',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdImpianto',

},
__Dati_Testo004: {
type: String,
alias: 'IdOperatoreInstallatore',

},
__Dati_Testo005: {
type: String,
alias: 'IdRigaDistintaImpianto',

},
__Dati_Testo006: {
type: String,
alias: 'IdRigaDistintaImpiantoCustom',

},
__Dati_Numero005: {
type: Number,
alias: 'Larghezza',

},
__Dati_Numero006: {
type: Number,
alias: 'NumElementi',

},
__Dati_Numero007: {
type: Number,
alias: 'Ordine',

},
__Dati_Numero008: {
type: Number,
alias: 'Watt_02',

},
__Dati_Numero009: {
type: Number,
alias: 'Passo',

},
__Dati_Numero010: {
type: Number,
alias: 'Profondita',

},
__Dati_Numero011: {
type: Number,
alias: 'Superficie_01',

},
__Dati_Testo007: {
type: String,
alias: 'TipoRadiatore',

},
__Dati_Numero012: {
type: Number,
alias: 'Uno',

},
__Dati_Numero013: {
type: Number,
alias: 'Volume_01',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceFinestraLetture',

},
__Dati_Testo009: {
type: String,
alias: 'Piano',

},
__Dati_Testo010: {
type: String,
alias: 'Padiglione',

},
__Dati_Testo011: {
type: String,
alias: 'Reparto',

},
__Dati_Testo012: {
type: String,
alias: 'TipoUbicazione',

},
__Dati_Testo013: {
type: String,
alias: 'Ubicazione',

},
__Dati_Testo014: {
type: String,
alias: 'PortataMinima',

},
__Dati_Testo015: {
type: String,
alias: 'PortataMassima',

},
__Dati_Testo016: {
type: String,
alias: 'Interasse',

},
__Dati_Testo017: {
type: String,
alias: 'Diametro',

},
__Dati_Testo018: {
type: String,
alias: 'TipoSensore',

},
__Dati_Testo019: {
type: String,
alias: 'IdItem',

},
__Dati_Testo020: {
type: String,
alias: 'SerialeCentrale',

},
__Dati_Testo021: {
type: String,
alias: 'TipoMisurazione',

},
__Dati_Numero014: {
type: Number,
alias: 'Zero',

},
__Dati_Testo022: {
type: String,
alias: 'IdDescrizioneRipartitori',

},
__Dati_Testo023: {
type: String,
alias: 'IdMaterialiRadiatori',

},
__Dati_Testo024: {
type: String,
alias: 'TxtDescrizioneRipartitori',

},
__Dati_Testo025: {
type: String,
alias: 'TxtMaterialeRadiatore',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagRipartitoreInstallato',

},
__Dati_Testo026: {
type: String,
alias: 'Note',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipologiaRadiatori',

},
__Dati_Testo028: {
type: String,
alias: 'TxtTipologiaRadiatori',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default DatiRipartitoriSchema;