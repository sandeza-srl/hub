import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFamiglieItemPrivate } from './FamiglieItem.Types.Private';


/* --------
* Schema Definition
* -------- */
const FamiglieItemSchema = new mongoose.Schema<IFamiglieItemPrivate>({

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
alias: 'IdFamigliaItem',

},
__Dati_Testo002: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagTipoAzione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagTipoBene',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagTipoContratto',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagTipoLavorazione',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceFamigliaItem',

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
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'IdFamigliaItemOrigine',

},
__Dati_Testo006: {
type: String,
alias: 'GeneraCodiceItem_AltroIdFamigliaItemPerCodice',

},
__Dati_Testo007: {
type: String,
alias: 'GeneraCodiceItem_CodiceTest',

},
__Dati_Numero007: {
type: Number,
alias: 'GeneraCodiceItem_FlagTipoCodice_AltraFamiglia',

},
__Dati_Numero008: {
type: Number,
alias: 'GeneraCodiceItem_NumeroCifre',

},
__Dati_Numero009: {
type: Number,
alias: 'GeneraCodiceItem_OrdineProgressivo',

},
__Dati_Numero010: {
type: Number,
alias: 'GeneraCodiceItem_OrdineTesto',

},
__Dati_Numero011: {
type: Number,
alias: 'GeneraCodiceItem_Progressivo',

},
__Dati_Testo008: {
type: String,
alias: 'GeneraCodiceItem_Testo',

},
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo010: {
type: String,
alias: 'GeneraCodiceItem_Espressione',

},
__Dati_Testo011: {
type: String,
alias: 'GeneraCodiceItem_CodiceEsempio',

},
__Dati_Numero012: {
type: Number,
alias: 'GeneraCodiceItem_FlagTipoCodice_Standard',

},
__Dati_Numero013: {
type: Number,
alias: 'GeneraCodiceItem_FlagCodiceValidato',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagTipoOraLavoro',

},
__Dati_Testo012: {
type: String,
alias: 'UnitaDiMisura',

},
__Dati_Numero015: {
type: Number,
alias: 'GeneraCodiceItem_FlagTipoCodice_Proprio',

},
__Dati_Numero016: {
type: Number,
alias: 'GeneraCodiceItem_FlagProgressivoContinuo',

},
__Dati_Numero017: {
type: Number,
alias: 'GeneraCodiceItem_FlagProgressivoAnnuale',

},
__Dati_Numero018: {
type: Number,
alias: 'GeneraCodiceItem_FlagProgressivoMensile',

},
__Dati_Numero019: {
type: Number,
alias: 'GeneraCodiceItem_FlagModificaCodicePermessa',

},
__Dati_Testo013: {
type: String,
alias: 'GeneraCodiceItem_TxtTipoCodice',

},
__Dati_Testo014: {
type: String,
alias: 'IdTipoMercato',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTipoMercato',

},
__Dati_Numero020: {
type: Number,
alias: 'LimitazioniScheda_SettingDelete_FlagRestricted',

},
__Dati_Testo016: {
type: String,
alias: 'LimitazioniScheda_SettingDelete_RoleTypesID',

},
__Dati_Numero021: {
type: Number,
alias: 'LimitazioniScheda_SettingsCreation_FlagRestricted',

},
__Dati_Testo017: {
type: String,
alias: 'LimitazioniScheda_SettingsCreation_RoleTypesID',

},
__Dati_Numero022: {
type: Number,
alias: 'LimitazioniScheda_SettingsDetagliImpo_FlagRestricted',

},
__Dati_Testo018: {
type: String,
alias: 'LimitazioniScheda_SettingsDetagliImpo_RoleTypesID',

},
__Dati_Testo019: {
type: String,
alias: 'LimitazioniScheda_SettingsRoleTypesIDAll',

},
__Dati_Numero023: {
type: Number,
alias: 'LimitazioniScheda_SettingsTabValoriVisibility_FlagRestricted',

},
__Dati_Testo020: {
type: String,
alias: 'LimitazioniScheda_SettingsTabValoriVisibility_RoleTypesID',

},
__Dati_Numero024: {
type: Number,
alias: 'LimitazioniScheda_SettingsTabControloVisibility_FlagRestricted',

},
__Dati_Testo021: {
type: String,
alias: 'LimitazioniScheda_SettingsTabControloVisibility_RoleTypesID',

},
__Dati_Numero025: {
type: Number,
alias: 'LimitazioniScheda_SettingsTabAcquistoVisibility_FlagRestricted',

},
__Dati_Testo022: {
type: String,
alias: 'LimitazioniScheda_SettingsTabAcquistoVisibility_RoleTypesID',

},
__Dati_Numero031: {
type: Number,
alias: 'LimitazioniScheda_SettingsTabVenditaVisibility_FlagRestricted',

},
__Dati_Testo028: {
type: String,
alias: 'LimitazioniScheda_SettingsTabVenditaVisibility_RoleTypesID',

},
__Dati_Numero032: {
type: Number,
alias: 'LimitazioniScheda_SettingsTabDetagliCollegamentiVisibility_FlagRestricted',

},
__Dati_Testo029: {
type: String,
alias: 'LimitazioniScheda_SettingsTabDetagliCollegamentiVisibility_RoleTypesID',

},
__Dati_Numero033: {
type: Number,
alias: 'FlagTipoSottoprodottoLavorazione',

},
__Dati_Testo030: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FamiglieItemSchema;