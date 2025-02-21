import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiArticoliPrivate } from './TipiArticoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiArticoliSchema = new mongoose.Schema<ITipiArticoliPrivate>({

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
alias: 'IdTipoArticolo',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoArticolo',

},
__Dati_Testo003: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo004: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'PercRicarico',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceTipoArticolo',

},
__Dati_Testo007: {
type: String,
alias: 'IdTipoPianoCampionamento',

},
__Dati_Testo008: {
type: String,
alias: 'TxtTipoPianoCampionamento',

},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo009: {
type: String,
alias: 'UtenteCreazione',

},
__Dati_Testo010: {
type: String,
alias: 'UtenteModifica',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'GeneraCodice_Testo',

},
__Dati_Numero004: {
type: Number,
alias: 'GeneraCodice_OrdineTesto',

},
__Dati_Numero005: {
type: Number,
alias: 'GeneraCodice_Progressivo',

},
__Dati_Numero006: {
type: Number,
alias: 'GeneraCodice_NumeroCifre',

},
__Dati_Testo012: {
type: String,
alias: 'GeneraCodice_CodiceTest',

},
__Dati_Numero007: {
type: Number,
alias: 'GeneraCodice_OrdineProgressivo',

},
__Dati_Testo013: {
type: String,
alias: 'GeneraCodice_AltroIdTipoArticoloPerCodice',

},
__Dati_Numero008: {
type: Number,
alias: 'GeneraCodice_FlagUsaCodiceAltro',

},
__Dati_Numero009: {
type: Number,
alias: 'EsplosioneDistinta_CreaLottiLivelliSottostanti',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagUsaCodificaUnicaItem',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagFrequenzaStandard',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagFrequenzaPianiCampionamento',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagCostBreakdownAttivo',

},
__Dati_Testo014: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagTipiScaglioniPresenti',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagTipiFasiVincolate',

},
__Dati_Testo015: {
type: String,
alias: 'IdTipiFasiAbilitate',

},
__Dati_Testo016: {
type: String,
alias: 'NomeFormato_SchedaArticolo_MaterialiQuantita',

},
__Dati_Testo017: {
type: String,
alias: 'NomeFormato_SchedaArticolo_Qualita',

},
__Dati_Testo018: {
type: String,
alias: 'NomeFormato_SchedaArticolo_Costi',

},
__Dati_Testo019: {
type: String,
alias: 'NomeFormato_SchedaArticolo_TempiLavorazioni',

},
__Dati_Testo020: {
type: String,
alias: 'NomeFormato_SchedaArticolo_Codifiche',

},
__Dati_Testo021: {
type: String,
alias: 'ScriptStampa_SchedaArticolo_Codifiche',

},
__Dati_Testo022: {
type: String,
alias: 'ScriptStampa_SchedaArticolo_Costi',

},
__Dati_Testo023: {
type: String,
alias: 'ScriptStampa_SchedaArticolo_MaterialiQuantita',

},
__Dati_Testo024: {
type: String,
alias: 'ScriptStampa_SchedaArticolo_Qualita',

},
__Dati_Testo025: {
type: String,
alias: 'ScriptStampa_SchedaArticolo_TempiLavorazioni',

},
__Dati_Testo026: {
type: String,
alias: 'IdTipoDocumento_SchedaArticolo_Codifiche',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipoDocumento_SchedaArticolo_Costi',

},
__Dati_Testo028: {
type: String,
alias: 'IdTipoDocumento_SchedaArticolo_MaterialiQuantita',

},
__Dati_Testo029: {
type: String,
alias: 'IdTipoDocumento_SchedaArticolo_Qualita',

},
__Dati_Testo030: {
type: String,
alias: 'IdTipoDocumento_SchedaArticolo_TempiLavorazioni',

},
__Dati_Testo031: {
type: String,
alias: 'IdSottotipoDocumento_SchedaArticolo_Codifiche',

},
__Dati_Testo032: {
type: String,
alias: 'IdSottotipoDocumento_SchedaArticolo_Costi',

},
__Dati_Testo033: {
type: String,
alias: 'IdSottotipoDocumento_SchedaArticolo_MaterialiQuantita',

},
__Dati_Testo034: {
type: String,
alias: 'IdSottotipoDocumento_SchedaArticolo_Qualita',

},
__Dati_Testo035: {
type: String,
alias: 'IdSottotipoDocumento_SchedaArticolo_TempiLavorazioni',

},
__Dati_Testo036: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo037: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo038: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Numero016: {
type: Number,
alias: 'Temporaneo_AF1023_FlagNuovaSchedaDefault',

},
__Dati_Numero017: {
type: Number,
alias: 'LimitazioniScheda_EliminazioneArticolo_FlagLimitata',

},
__Dati_Testo039: {
type: String,
alias: 'LimitazioniScheda_EliminazioneArticolo_IdTipiRuoli',

},
__Dati_Numero018: {
type: Number,
alias: 'LimitazioniScheda_CreazioneArticolo_FlagLimitata',

},
__Dati_Testo040: {
type: String,
alias: 'LimitazioniScheda_CreazioneArticolo_IdTipiRuoli',

},
__Dati_Numero019: {
type: Number,
alias: 'LimitazioniScheda_Visibilit√†Lavorazioni_FlagLimitata',

},
__Dati_Testo041: {
type: String,
alias: 'LimitazioniScheda_Visibilit√†Lavorazioni_IdTipiRuoli',

},
__Dati_Numero020: {
type: Number,
alias: 'LimitazioniScheda_Visibilit√†Qualita_FlagLimitata',

},
__Dati_Testo042: {
type: String,
alias: 'LimitazioniScheda_Visibilit√†Qualita_IdTipiRuoli',

},
__Dati_Numero021: {
type: Number,
alias: 'LimitazioniScheda_VisibilitaCosti_FlagLimitata',

},
__Dati_Testo043: {
type: String,
alias: 'LimitazioniScheda_VisibilitaCosti_IdTipiRuoli',

},
__Dati_Numero022: {
type: Number,
alias: 'LimitazioniScheda_VisibilitaMateriali_FlagLimitata',

},
__Dati_Testo044: {
type: String,
alias: 'LimitazioniScheda_VisibilitaMateriali_IdTipiRuoli',

},
__Dati_Numero023: {
type: Number,
alias: 'LimitazioniScheda_VisibilitaIstruzioni_FlagLimitata',

},
__Dati_Testo045: {
type: String,
alias: 'LimitazioniScheda_Visibilit√†Istruzioni_IdTipiRuoli',

},
__Dati_Testo046: {
type: String,
alias: 'LimitazioniScheda_SettingsRoleTypesIDAll',

},
__Dati_Numero024: {
type: Number,
alias: 'DragDrop_ImmagineIdentificativa_FlagAttivato',

},
__Dati_Testo047: {
type: String,
alias: 'DragDrop_ImmagineIdentificativa_IdSottoTipoDocumento',

},
__Dati_Testo048: {
type: String,
alias: 'DragDrop_ImmagineIdentificativa_IdTipoDocumento',

},
__Dati_Numero025: {
type: Number,
alias: 'LimitazioniScheda_Visibilit√†Lotti_FlagLimitata',

},
__Dati_Testo049: {
type: String,
alias: 'LimitazioniScheda_Visibilit√†Lotti_IdTipiRuoli',

},
__Dati_Testo050: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiArticoliSchema;