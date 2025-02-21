import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiComunicazioniPrivate } from './TipiComunicazioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiComunicazioniSchema = new mongoose.Schema<ITipiComunicazioniPrivate>({

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
alias: 'IdTipoComunicazione',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoComunicazione',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagSollecito03',

},
__Dati_Numero003: {
type: Number,
alias: 'GiorniSollecito03',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagInvioDocContabile',

},
__Dati_Numero005: {
type: Number,
alias: 'IntervalloSollecito01_02',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoDocumento',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagSollecito01',

},
__Dati_Numero007: {
type: Number,
alias: 'GiorniSollecito01',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagSollecito02',

},
__Dati_Numero009: {
type: Number,
alias: 'GiorniSollecito02',

},
__Dati_Testo005: {
type: String,
alias: 'IdSottoTipoDocumento',

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
__Dati_Numero010: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceTipoComunicazione',

},
__Dati_Numero011: {
type: Number,
alias: 'IntervalloSollecito02_03',

},
__Dati_Numero012: {
type: Number,
alias: 'IntervalloSollecito00_01',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagTipoScadenze',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagTipoOfferte',

},
__Dati_Testo007: {
type: String,
alias: 'FlagSelezioneTipo',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagTipoFatture',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagTipoDocOperativi',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagInvioDocOperativo',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagInvioOfferta',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagInvioIntervento',

},
__Dati_Numero020: {
type: Number,
alias: 'FlagTipoIntervento',

},
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagInvioMailDiretto',

},
__Dati_Testo009: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiComunicazioniSchema;