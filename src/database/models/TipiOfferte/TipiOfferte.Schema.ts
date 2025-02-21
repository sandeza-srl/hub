import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiOffertePrivate } from './TipiOfferte.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiOfferteSchema = new mongoose.Schema<ITipiOffertePrivate>({

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
alias: 'IdTipoOfferta',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoOfferta',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagStandard',

},
__Dati_Testo003: {
type: String,
alias: 'FlagStandardVedi',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceTipoOfferta',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagGeneraCodice',

},
__Dati_Numero004: {
type: Number,
alias: 'GeneraCodice_FlagAnnuale',

},
__Dati_Testo006: {
type: String,
alias: 'GeneraCodice_Testo',

},
__Dati_Testo007: {
type: String,
alias: 'GeneraCodice_FlagAnnualeVedi',

},
__Dati_Testo008: {
type: String,
alias: 'FlagGeneraCodiceVedi',

},
__Dati_Numero005: {
type: Number,
alias: 'GeneraCodice_Progressivo',

},
__Dati_Numero006: {
type: Number,
alias: 'GeneraCodice_CifreProgressivo',

},
__Dati_Numero007: {
type: Number,
alias: 'GeneraCodice_FlagAnnoPrima',

},
__Dati_Testo009: {
type: String,
alias: 'GeneraCodice_FlagAnnoPrimaVedi',

},
__Dati_Testo010: {
type: String,
alias: 'GeneraCodice_ProssimoCodice',

},
__Dati_Numero008: {
type: Number,
alias: 'GeneraCodice_AnnoTest',

},
__Dati_Testo011: {
type: String,
alias: 'TerminiPagamento',

},
__Dati_Testo012: {
type: String,
alias: 'IdFirma',

},
__Dati_Testo013: {
type: String,
alias: 'IdStato',

},
__Dati_Testo014: {
type: String,
alias: 'Lingua',

},
__Dati_Testo015: {
type: String,
alias: 'NoteFinali',

},
__Dati_Testo016: {
type: String,
alias: 'NoteIniziali',

},
__Dati_Testo017: {
type: String,
alias: 'TitoloOfferta',

},
__Dati_Testo018: {
type: String,
alias: 'IdTipiProtocolliCreabili',

},
__Dati_Testo019: {
type: String,
alias: 'IdTipiDocOperativoCreabili',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAltraCodifica',

},
__Dati_Testo020: {
type: String,
alias: 'GeneraCodice_AltroIdTipoOffertaPerCodice',

},
__Dati_Numero010: {
type: Number,
alias: 'GeneraCodice_FlagUsaAltroCodice',

},
__Dati_Testo021: {
type: String,
alias: 'GeneraCodice_IdTipoOffertaPerCodice',

},
__Dati_Testo022: {
type: String,
alias: 'IdInstallazione',

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
__Dati_Numero011: {
type: Number,
alias: 'Zero',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagTipoRuoloRichiesto',

},
__Dati_Testo023: {
type: String,
alias: 'IdTipiRuoliAbilitati',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagUtilizzaNuovaScheda',

},
__Dati_Testo024: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Numero014: {
type: Number,
alias: 'NumeroDecimaliValori_VociLibere',

},
__Dati_Numero015: {
type: Number,
alias: 'NumeroDecimaliQuantita_VociLibere',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiOfferteSchema;