import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiStepProcessiPrivate } from './TipiStepProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiStepProcessiSchema = new mongoose.Schema<ITipiStepProcessiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipoProcesso',

},
__Dati_Testo002: {
type: String,
alias: 'NoteGenerali',

},
__Dati_Testo003: {
type: String,
alias: 'TxtTipoStepProcessi',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoStepProcessi',

},
__Dati_Numero002: {
type: Number,
alias: 'GiorniDaPropedeutico',

},
__Dati_Numero003: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo005: {
type: String,
alias: 'IdTipoStepProcessiPropedeutico',

},
__Dati_Testo006: {
type: String,
alias: 'TxtTipoRuoloRespEsecuzione',

},
__Dati_Testo007: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagGeneraNotificaEsterna',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoRuoloFirma',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagDocumentiPresenti',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Testo009: {
type: String,
alias: 'IdTipoRuoloRespEsecuzione',

},
__Dati_Testo010: {
type: String,
alias: 'IdTipoRuoloInvitatiEsecuzione',

},
__Dati_Testo011: {
type: String,
alias: 'IdTipoRuoloNotifica',

},
__Dati_Testo012: {
type: String,
alias: 'NoteInput',

},
__Dati_Testo013: {
type: String,
alias: 'NoteOutput',

},
__Dati_Ora001: {
type: String,
alias: 'Durata',

},
__Dati_Testo014: {
type: String,
alias: 'IdTipiProcessoOutput',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagGeneraEventoCalendario',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTipoRuoliEsecuzioneTutti',

},
__Dati_Testo016: {
type: String,
alias: 'TxtOrdineTipoStepProcessoAutomatico',

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
__Dati_Testo017: {
type: String,
alias: 'NomeFormato',

},
__Dati_Testo018: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo019: {
type: String,
alias: 'IdTipiRuolo_TuttiCoinvolti',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAggiorna',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagObbligatorio',

},
__Dati_Testo020: {
type: String,
alias: 'NomeScriptStampa',

},
__Dati_Testo021: {
type: String,
alias: 'NomeScriptNotificaEsterna',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagFirmaRichiesta',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagRegistrazioneOreRichiesta',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagEsecuzioneEsterna',

},
__Dati_Numero014: {
type: Number,
alias: 'GiorniDaInizio_Progressivo',

},
__Dati_Testo022: {
type: String,
alias: 'NomeScriptEventoCalendario',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagCollegamentoTipoProcessoPresente',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagCollegamentoAltroCreazione',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagCollegamentoAltroCollegamento',

},
__Dati_Testo023: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiStepProcessiSchema;