import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAttivitaControlloPrivate } from './AttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const AttivitaControlloSchema = new mongoose.Schema<IAttivitaControlloPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAttivitaControllo',

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
__Dati_Ora001: {
type: String,
alias: 'TempoCheckPrevisto',

},
__Dati_Data001: {
type: Date,
alias: 'DataProssimoIntervento',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Contenitore001: {
type: String,
alias: 'ImmagineOggettoTipoAttivita',

},
__Dati_Testo005: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo006: {
type: String,
alias: 'TxtUtenteUltimaModifica',

},
__Dati_Data002: {
type: Date,
alias: 'DataUltimaAttivitaEseguita',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero001: {
type: Number,
alias: 'NumeroAddetti',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagBloccaProduzione',

},
__Dati_Data003: {
type: Date,
alias: 'DataUltimaAttivitaPianificata',
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
__Dati_Numero003: {
type: Number,
alias: 'Uno',

},
__Dati_Numero004: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
type: String,
alias: 'IdUtensile',

},
__Dati_Testo008: {
type: String,
alias: 'IdStrumento',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo010: {
type: String,
alias: 'IdImpianto',

},
__Dati_Testo011: {
type: String,
alias: 'IdRegolaRipetizione',

},
__Dati_Testo012: {
type: String,
alias: 'TxtImpianto',

},
__Dati_Testo013: {
type: String,
alias: 'TxtStrumento',

},
__Dati_Testo014: {
type: String,
alias: 'TxtUtensile',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagBloccato',

},
__Dati_Testo015: {
type: String,
alias: 'CodiceTipoAttivitaControllo',

},
__Dati_Testo016: {
type: String,
alias: 'TxtTipoOggettoAttivitaAutomatico',

},
__Dati_Testo017: {
type: String,
alias: 'TxtOggettoAttivitaAutomatico',

},
__Dati_Testo018: {
type: String,
alias: 'TxtRegolaRipetizione',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagDerogabile',

},
__Dati_Testo019: {
type: String,
alias: 'IdTipoAttivitaControllo',

},
__Dati_Testo020: {
type: String,
alias: 'IdTipoImpianto',

},
__Dati_Testo021: {
type: String,
alias: 'IdTipoStrumento',

},
__Dati_Testo022: {
type: String,
alias: 'IdTipoUtensile',

},
__Dati_Testo023: {
type: String,
alias: 'TxtAttivitaControllo',

},
__Dati_Testo024: {
type: String,
alias: 'NoteAttrezzature',

},
__Dati_Testo025: {
type: String,
alias: 'NoteControllo',

},
__Dati_Testo026: {
type: String,
alias: 'NoteEsecuzione',

},
__Dati_Testo027: {
type: String,
alias: 'IdDocumentoPrincipale',

},
__Dati_Testo028: {
type: String,
alias: 'IdTipologiaAccount',

},
__Dati_Testo029: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo030: {
type: String,
alias: 'IdSede',

},
__Dati_Testo031: {
type: String,
alias: 'IdRubricaReferente',

},
__Dati_Testo032: {
type: String,
alias: 'IdRubricaDestinatariReport',

},
__Dati_Testo033: {
type: String,
alias: 'TxtAccount',

},
__Dati_Testo034: {
type: String,
alias: 'TxtSede',

},
__Dati_Testo035: {
type: String,
alias: 'TxtRubricaReferente',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Testo036: {
type: String,
alias: 'CodiceAccount',

},
__Dati_Testo037: {
type: String,
alias: 'CodiceImpianto',

},
__Dati_Testo038: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Testo039: {
type: String,
alias: 'CodiceStrumento',

},
__Dati_Testo040: {
type: String,
alias: 'CodiceUtensile',

},
__Dati_Testo041: {
type: String,
alias: 'CodiceOggettoAttivitaAutomatico',

},
__Dati_Ora002: {
type: String,
alias: 'OraInizioProgrammazione',

},
__Dati_Testo042: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo043: {
type: String,
alias: 'TxtArticolo',

},
__Dati_Testo044: {
type: String,
alias: 'CodiceArticolo',

},
__Dati_Testo045: {
type: String,
alias: 'TxtAutomaticoDocOperativo',

},
__Dati_Testo046: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo047: {
type: String,
alias: 'FlagAutoAssociaAttivita',

},
__Dati_Testo048: {
type: String,
alias: 'IdTipoPianoCampionamento',

},
__Dati_Testo049: {
type: String,
alias: 'CodiceTxtTipoPianoCampionamento',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagTracciabilita',

},
__Dati_Testo050: {
type: String,
alias: 'FormatoStampa',

},
__Dati_Testo051: {
type: String,
alias: 'IdSottoTipoDocumentoStampa',

},
__Dati_Testo052: {
type: String,
alias: 'IdTipoDocumentoStampa',

},
__Dati_Testo053: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Testo054: {
type: String,
alias: 'IdItem',

},
__Dati_Testo055: {
type: String,
alias: 'CodiceDocOperativo',

},
__Dati_Testo056: {
type: String,
alias: 'CodiceItem',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagFirmaTipoAttivita',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagScadenzaVincolante',

},
__Dati_Ora003: {
type: String,
alias: 'TempoGestionePrevisto',

},
__Dati_Ora004: {
type: String,
alias: 'TempoTotalePrevisto',

},
__Dati_Testo057: {
type: String,
alias: 'IdProcesso',

},
__Dati_Testo058: {
type: String,
alias: 'IdStepProcesso',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagPianoCampionamento',

},
__Dati_Testo059: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Testo060: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo061: {
type: String,
alias: 'IdTipoArticolo',

},
__Dati_Testo062: {
type: String,
alias: 'IdContenitore',

},
__Dati_Testo063: {
type: String,
alias: 'CodiceTxtArticolo',

},
__Dati_Testo064: {
type: String,
alias: 'CodiceTxtDocOperativo',

},
__Dati_Testo065: {
type: String,
alias: 'CodiceTxtImpianto',

},
__Dati_Testo066: {
type: String,
alias: 'CodiceTxtItem',

},
__Dati_Testo067: {
type: String,
alias: 'CodiceContenitore',

},
__Dati_Testo068: {
type: String,
alias: 'CodiceTxtContenitore',

},
__Dati_Testo069: {
type: String,
alias: 'CodiceTxtRisorsa',

},
__Dati_Testo070: {
type: String,
alias: 'CodiceTxtStrumento',

},
__Dati_Testo071: {
type: String,
alias: 'CodiceTxtTipoAttivitaControllo',

},
__Dati_Testo072: {
type: String,
alias: 'CodiceTxtUtensile',

},
__Dati_Testo073: {
type: String,
alias: 'TxtContenitore',

},
__Dati_Testo074: {
type: String,
alias: 'CodiceTxtOggettoAttivitaAutomatico',

},
__Dati_Testo075: {
type: String,
alias: 'CodiceTxtAccount',

},
__Dati_Testo076: {
type: String,
alias: 'CodiceOggettoTipoAttivitaAutomatico',

},
__Dati_Testo077: {
type: String,
alias: 'TxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo078: {
type: String,
alias: 'CodiceTxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo079: {
type: String,
alias: 'IdTipoContenitore',

},
__Dati_Testo080: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero013: {
type: Number,
alias: 'Provenienza_FlagAnagrafica',

},
__Dati_Numero014: {
type: Number,
alias: 'Provenienza_FlagArticolo',

},
__Dati_Numero015: {
type: Number,
alias: 'Provenienza_FlagContenitore',

},
__Dati_Numero016: {
type: Number,
alias: 'Provenienza_FlagDocOperativo',

},
__Dati_Numero017: {
type: Number,
alias: 'Provenienza_FlagImpianto',

},
__Dati_Numero018: {
type: Number,
alias: 'Provenienza_FlagItem',

},
__Dati_Numero019: {
type: Number,
alias: 'Provenienza_FlagProcesso',

},
__Dati_Numero020: {
type: Number,
alias: 'Provenienza_FlagRisorsa',

},
__Dati_Numero021: {
type: Number,
alias: 'Provenienza_FlagStepProcesso',

},
__Dati_Numero022: {
type: Number,
alias: 'Provenienza_FlagStrumento',

},
__Dati_Numero023: {
type: Number,
alias: 'Provenienza_FlagUtensile',

},
__Dati_Numero024: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_Mobile',

},
__Dati_Numero025: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_StazioneRaccoltaDati',

},
__Dati_Numero026: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_Mobile',

},
__Dati_Numero027: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_StazioneRaccoltaDati',

},
__Dati_Numero028: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_Mobile',

},
__Dati_Numero029: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_StazioneRaccoltaDati',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AttivitaControlloSchema;