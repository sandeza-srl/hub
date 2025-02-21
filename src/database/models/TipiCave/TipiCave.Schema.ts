import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiCavePrivate } from './TipiCave.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiCaveSchema = new mongoose.Schema<ITipiCavePrivate>({

_id: {
type: String,
default: uuid.v4
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
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdAnagrafica',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoCava',

},
__Dati_Testo004: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo005: {
type: String,
alias: 'TxtUtenteModifica',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'Codice',

},
__Dati_Testo007: {
type: String,
alias: 'IdDocOperativoDDT',

},
__Dati_Testo008: {
type: String,
alias: 'TxtDocOperativoDDT',

},
__Dati_Testo009: {
type: String,
alias: 'IdDocOperativoProforma',

},
__Dati_Testo010: {
type: String,
alias: 'TxtDocOperativoProforma',

},
__Dati_Testo011: {
type: String,
alias: 'IdSede',

},
__Dati_Testo012: {
type: String,
alias: 'TxtSede',

},
__Dati_Testo013: {
type: String,
alias: 'TxtTipoCava',

},
__Dati_Testo014: {
type: String,
alias: 'IdSottofamigliaItem',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagIntercompany',

},
__Dati_Testo015: {
type: String,
alias: 'IdAccountSocietaControparte',

},
__Dati_Testo016: {
type: String,
alias: 'IdTipoDocOperativoAcquisto',

},
__Dati_Testo017: {
type: String,
alias: 'IdTipoDocOperativoVendita',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagRilevamentoBeaconAttivo',

},
__Dati_Testo018: {
type: String,
alias: 'BeaconUUID',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiCaveSchema;