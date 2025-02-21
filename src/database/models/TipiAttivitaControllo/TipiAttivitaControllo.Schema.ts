import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiAttivitaControlloPrivate } from './TipiAttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiAttivitaControlloSchema = new mongoose.Schema<ITipiAttivitaControlloPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdTipoAttivitaControllo',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoAttivitaControllo',

},
__Dati_Testo003: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo004: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Testo005: {
type: String,
alias: 'NoteAttrezzature',

},
__Dati_Ora001: {
type: String,
alias: 'TempoCheckPrevisto',

},
__Dati_Testo006: {
type: String,
alias: 'CodiceRevisione',

},
__Dati_Contenitore001: {
type: String,
alias: 'ImmagineOggettoTipoAttivita',

},
__Dati_Testo007: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo008: {
type: String,
alias: 'TxtUtenteUltimaModifica',

},
__Dati_Numero001: {
type: Number,
alias: 'NumeroAddetti',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagBloccaProduzione',

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
__Dati_Numero003: {
type: Number,
alias: 'Uno',

},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo009: {
type: String,
alias: 'IdTipoUtensile',

},
__Dati_Testo010: {
type: String,
alias: 'IdTipoStrumento',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo012: {
type: String,
alias: 'IdTipoImpianto',

},
__Dati_Testo013: {
type: String,
alias: 'TxtTipoAttivitaControlloEstesa',

},
__Dati_Testo014: {
type: String,
alias: 'IdRegolaRipetizione',

},
__Dati_Testo015: {
type: String,
alias: 'NoteEsecuzione',

},
__Dati_Testo016: {
type: String,
alias: 'NoteControllo',

},
__Dati_Data001: {
type: Date,
alias: 'DataRevisione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo017: {
type: String,
alias: 'TxtTipoImpianto',

},
__Dati_Testo018: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo019: {
type: String,
alias: 'TxtTipoStrumento',

},
__Dati_Testo020: {
type: String,
alias: 'TxtTipoUtensile',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Ora002: {
type: String,
alias: 'TempoTotalePrevisto',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagBloccato',

},
__Dati_Testo021: {
type: String,
alias: 'CodiceTipoAttivitaControllo',

},
__Dati_Testo022: {
type: String,
alias: 'TxtTipoOggettoAttivitaAutomatico',

},
__Dati_Testo023: {
type: String,
alias: 'TxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo024: {
type: String,
alias: 'TxtRegolaRipetizione',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagDerogabile',

},
__Dati_Testo025: {
type: String,
alias: 'TxtTipoDocOperativoPerGenerazioneScheda',

},
__Dati_Testo026: {
type: String,
alias: 'IdDocumentoPrincipale',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipologiaAccount',

},
__Dati_Testo028: {
type: String,
alias: 'TxtTipologiaAccount',

},
__Dati_Testo029: {
type: String,
alias: 'IdRubricaDestinatariReport',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagScalaData',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagCreatoMobile',

},
__Dati_Testo030: {
type: String,
alias: 'IdTipoArticolo',

},
__Dati_Testo031: {
type: String,
alias: 'CodiceTipoArticolo',

},
__Dati_Testo032: {
type: String,
alias: 'TxtTipoArticolo',

},
__Dati_Testo033: {
type: String,
alias: 'CodiceSottoFamigliaItem',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagAutoAssociaAttivita',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Ora003: {
type: String,
alias: 'TempoGestionePrevisto',

},
__Dati_Testo034: {
type: String,
alias: 'Stampa_NomeFormato',

},
__Dati_Testo035: {
type: String,
alias: 'Stampa_IdTipoDocumento',

},
__Dati_Testo036: {
type: String,
alias: 'Stampa_IdSottoTipoDocumento',

},
__Dati_Testo037: {
type: String,
alias: 'CodiceTipoImpianto',

},
__Dati_Testo038: {
type: String,
alias: 'CodiceTipoStrumento',

},
__Dati_Testo039: {
type: String,
alias: 'CodiceTipoUtensile',

},
__Dati_Testo040: {
type: String,
alias: 'IdRubricaDestinatari',

},
__Dati_Testo041: {
type: String,
alias: 'IdItem',

},
__Dati_Testo042: {
type: String,
alias: 'TxtRubricaDestinatari',

},
__Dati_Testo043: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo044: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo045: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo046: {
type: String,
alias: 'TxtTipoDocOperativo',

},
__Dati_Testo047: {
type: String,
alias: 'CodiceTipoDocOperativo',

},
__Dati_Testo048: {
type: String,
alias: 'IdTipoDocOperativoPerGenerazioneScheda',

},
__Dati_Testo049: {
type: String,
alias: 'IdTipiRuoliDestinatari',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagFirmaNecessaria',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagFirmaTipoAttivita',

},
__Dati_Testo050: {
type: String,
alias: 'IdTipoRuoloFirma',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagScadenzaVincolante',

},
__Dati_Testo051: {
type: String,
alias: 'CodiceTxtItem',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagTracciabilita',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagPianoCampionamento',

},
__Dati_Testo052: {
type: String,
alias: 'IdTipoPianoCampionamento',

},
__Dati_Testo053: {
type: String,
alias: 'CodiceTxtTipoPianoCampionamento',

},
__Dati_Testo054: {
type: String,
alias: 'IdTipoAttivitaEsitoPositivo',

},
__Dati_Testo055: {
type: String,
alias: 'IdTipoAttivitaEsitoNegativo',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagCreazioneAutomatica',

},
__Dati_Testo056: {
type: String,
alias: 'IdTipoContenitore',

},
__Dati_Testo057: {
type: String,
alias: 'CodiceTipoContenitore',

},
__Dati_Testo058: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Testo059: {
type: String,
alias: 'CodiceTipologiaAccount',

},
__Dati_Testo060: {
type: String,
alias: 'TxtTipoContenitore',

},
__Dati_Testo061: {
type: String,
alias: 'CodiceTxtRisorsa',

},
__Dati_Testo062: {
type: String,
alias: 'CodiceTxtTipoArticolo',

},
__Dati_Testo063: {
type: String,
alias: 'CodiceTxtSottoFamigliaItem',

},
__Dati_Testo064: {
type: String,
alias: 'CodiceTxtTipoAttivitaControllo',

},
__Dati_Testo065: {
type: String,
alias: 'CodiceTxtTipoContenitore',

},
__Dati_Testo066: {
type: String,
alias: 'CodiceTxtTipoDocOperativo',

},
__Dati_Testo067: {
type: String,
alias: 'CodiceTxtTipoImpianto',

},
__Dati_Testo068: {
type: String,
alias: 'CodiceTxtTipologiaAccount',

},
__Dati_Testo069: {
type: String,
alias: 'CodiceTxtTipoStrumento',

},
__Dati_Testo070: {
type: String,
alias: 'CodiceTxtTipoUtensile',

},
__Dati_Testo071: {
type: String,
alias: 'CodiceOggettoTipoAttivitaAutomatico',

},
__Dati_Testo072: {
type: String,
alias: 'CodiceTxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo073: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero018: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_Mobile',

},
__Dati_Numero019: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_StazioneRaccoltaDati',

},
__Dati_Numero020: {
type: Number,
alias: 'Provenienza_FlagRisorsa',

},
__Dati_Numero021: {
type: Number,
alias: 'Provenienza_FlagTipoContenitore',

},
__Dati_Numero022: {
type: Number,
alias: 'Provenienza_FlagItem',

},
__Dati_Numero023: {
type: Number,
alias: 'Provenienza_FlagTipoDocOperativo',

},
__Dati_Numero024: {
type: Number,
alias: 'Provenienza_FlagTipologiaAnagrafica',

},
__Dati_Numero025: {
type: Number,
alias: 'Provenienza_FlagTipoUtensile',

},
__Dati_Numero026: {
type: Number,
alias: 'Provenienza_FlagTipoImpianto',

},
__Dati_Numero027: {
type: Number,
alias: 'Provenienza_FlagTipoStrumento',

},
__Dati_Numero028: {
type: Number,
alias: 'Provenienza_FlagTipoArticolo',

},
__Dati_Numero029: {
type: Number,
alias: 'Provenienza_FlagProcesso',

},
__Dati_Numero030: {
type: Number,
alias: 'Provenienza_FlagStepProcesso',

},
__Dati_Numero031: {
type: Number,
alias: 'Provenienza_FlagSottoFamiglieItems',

},
__Dati_Numero032: {
type: Number,
alias: 'Provenienza_FlagAnagrafica',

},
__Dati_Numero033: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_StazioneRaccoltaDati',

},
__Dati_Numero034: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_StazioneRaccoltaDati',

},
__Dati_Numero035: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_Mobile',

},
__Dati_Numero036: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_Mobile',

},
__Dati_Testo074: {
type: String,
alias: 'Stampa_NomeScriptStampa',

},
__Dati_Testo075: {
type: String,
alias: 'Stampa_NomeScriptSetup',

},
__Dati_Numero037: {
type: Number,
alias: 'Stampa_FlagSalvaDocumento',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiAttivitaControlloSchema;