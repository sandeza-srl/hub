import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISottoTipiDocumentiPrivate } from './SottoTipiDocumenti.Types.Private';


/* --------
* Schema Definition
* -------- */
const SottoTipiDocumentiSchema = new mongoose.Schema<ISottoTipiDocumentiPrivate>({

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
alias: 'TxtTipoDocumento',

},
__Dati_Testo002: {
type: String,
alias: 'TxtSottoTipoDocumento',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'IdSottoTipoDocumento',

},
__Dati_Testo005: {
type: String,
alias: 'IdTipoDocumento',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagPubblicabile',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'IdUtentiNoVisualizzazione',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagFirma',

},
__Dati_Testo007: {
type: String,
alias: 'NoteSottotipi',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceRiferimento',

},
__Dati_Testo009: {
type: String,
alias: 'TxtSottotipoCodiceRiferimentoAutomatico',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagSalvataggioDaPathAbilitato',

},
__Dati_Testo010: {
type: String,
alias: 'TxtEstensioniFileAbilitate',

},
__Dati_Testo011: {
type: String,
alias: 'IdEstensioniFileAbilitate',

},
__Dati_Testo012: {
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
alias: 'DataOraModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero006: {
type: Number,
alias: 'FlagNomeDocumentoUnivoco',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipiRuoliPerVisibilitaDocumento',

},
__Dati_Testo014: {
type: String,
alias: 'IdTipiRuoliPerModificaDocumento',

},
__Dati_Testo015: {
type: String,
alias: 'IdTipiRuoliPerEliminazioneDocumento',

},
__Dati_Testo016: {
type: String,
alias: 'IdRubricaDestinatariAvvisoScadenza',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagVisibilitaDocumentoLimitata',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagModificaDocumentoLimitata',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagEliminazioneDocumentoLimitata',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagEstensioneFileCondizionata',

},
__Dati_Testo017: {
type: String,
alias: 'IdTipiRuoliTutti',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagNomeDocumentoVincolato',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagSalvataggioDaLinkAbilitato',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagAggiornaDaDocumenti',

},
__Dati_Numero014: {
type: Number,
alias: 'NumeroDocumentiSottoTipo',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagModificaDocumentoAbilitata_Note',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SottoTipiDocumentiSchema;