import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISchedeAttivitaControlloPrivate } from './SchedeAttivitaControllo.Types.Private';


/* --------
* Schema Definition
* -------- */
const SchedeAttivitaControlloSchema = new mongoose.Schema<ISchedeAttivitaControlloPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdSchedaAttivitaControllo',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraInizioPianificata',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero001: {
type: Number,
alias: 'FlagAttiva',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagBloccaProduzione',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagDerogabile',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo003: {
type: String,
alias: 'IdAreaRisorsa',

},
__Dati_Testo004: {
type: String,
alias: 'IdAttivitaControllo',

},
__Dati_Testo005: {
type: String,
alias: 'IdImpianto',

},
__Dati_Testo006: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo007: {
type: String,
alias: 'IdStrumento',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoAttivitaControllo',

},
__Dati_Testo009: {
type: String,
alias: 'IdUtensile',

},
__Dati_Numero004: {
type: Number,
alias: 'NumeroAddetti',

},
__Dati_Ora001: {
type: String,
alias: 'TempoCheckPrevisto',

},
__Dati_Testo010: {
type: String,
alias: 'TxtAreaRisorsa',

},
__Dati_Testo011: {
type: String,
alias: 'TxtAttivitaControllo',

},
__Dati_Testo012: {
type: String,
alias: 'TxtOggettoAttivitaAutomatico',

},
__Dati_Testo013: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Testo014: {
type: String,
alias: 'TxtStrumento',

},
__Dati_Testo015: {
type: String,
alias: 'TxtTipoAttivitaControllo',

},
__Dati_Testo016: {
type: String,
alias: 'TxtImpianto',

},
__Dati_Testo017: {
type: String,
alias: 'TxtUtensile',

},
__Dati_Testo018: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo019: {
type: String,
alias: 'TxtUtenteUltimaModifica',

},
__Dati_Numero005: {
type: Number,
alias: 'Uno',

},
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraFinePianificata',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Data001: {
type: Date,
alias: 'DataInizioPianificata',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFinePianificata',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora002: {
type: String,
alias: 'OraFinePianificata',

},
__Dati_Ora003: {
type: String,
alias: 'OraInizioPianificata',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagEseguito',

},
__Dati_Testo020: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_Testo021: {
type: String,
alias: 'TxtAccountOperatore',

},
__Dati_Testo022: {
type: String,
alias: 'IdDocumentoPrincipale',

},
__Dati_Data003: {
type: Date,
alias: 'DataFineEsecuzione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'DataInizioEsecuzione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_DataOra005: {
type: Date,
alias: 'DataOraInizioEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra006: {
type: Date,
alias: 'DataOraFineEsecuzione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Ora004: {
type: String,
alias: 'OraFineEsecuzione',

},
__Dati_Ora005: {
type: String,
alias: 'OraInizioEsecuzione',

},
__Dati_Ora006: {
type: String,
alias: 'TempoPianificato',

},
__Dati_Ora007: {
type: String,
alias: 'TempoEsecuzione',

},
__Dati_Testo023: {
type: String,
alias: 'IdAccount',

},
__Dati_Testo024: {
type: String,
alias: 'IdRubricaDestinatariReport',

},
__Dati_Testo025: {
type: String,
alias: 'IdRubricaReferente',

},
__Dati_Testo026: {
type: String,
alias: 'IdSede',

},
__Dati_Testo027: {
type: String,
alias: 'IdTipoImpianto',

},
__Dati_Testo028: {
type: String,
alias: 'IdTipologiaAccount',

},
__Dati_Testo029: {
type: String,
alias: 'IdTipoStrumento',

},
__Dati_Testo030: {
type: String,
alias: 'IdTipoUtensile',

},
__Dati_Testo031: {
type: String,
alias: 'TxtAccount',

},
__Dati_Testo032: {
type: String,
alias: 'TxtRegolaRipetizione',

},
__Dati_Testo033: {
type: String,
alias: 'TxtRubricaReferente',

},
__Dati_Testo034: {
type: String,
alias: 'TxtSede',

},
__Dati_Testo035: {
type: String,
alias: 'TxtTipoOggettoAttivitaAutomatico',

},
__Dati_Testo036: {
type: String,
alias: 'NoteLavoro',

},
__Dati_Numero008: {
type: Number,
alias: 'NumeroControlliTotali',

},
__Dati_Numero009: {
type: Number,
alias: 'NumeroControlliEseguiti',

},
__Dati_Numero010: {
type: Number,
alias: 'NumeroControlliDaEseguire',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagScaduta',

},
__Dati_Testo037: {
type: String,
alias: 'TxtStatoScheda',

},
__Dati_Numero013: {
type: Number,
alias: 'AnnoMesePianificata',

},
__Dati_Data005: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero014: {
type: Number,
alias: 'OrdineEsecuzione',

},
__Dati_Testo038: {
type: String,
alias: 'IdIntervento',

},
__Dati_DataOra007: {
type: Date,
alias: 'DataOraFirma',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Contenitore001: {
type: String,
alias: 'Firma',

},
__Dati_Testo039: {
type: String,
alias: 'FirmaTxt',

},
__Dati_Testo040: {
type: String,
alias: 'GeolocalizzazioneFirma',

},
__Dati_Testo041: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo042: {
type: String,
alias: 'TxtArticolo',

},
__Dati_Ora008: {
type: String,
alias: 'TempoGestionePrevisto',

},
__Dati_Ora009: {
type: String,
alias: 'TempoTotalePrevisto',

},
__Dati_Testo043: {
type: String,
alias: 'NoteConsiderazioni',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagEseguitaConFirma',

},
__Dati_Testo044: {
type: String,
alias: 'IdProcesso',

},
__Dati_Testo045: {
type: String,
alias: 'IdStepProcesso',

},
__Dati_Testo046: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Testo047: {
type: String,
alias: 'IdTracciabilitaItem',

},
__Dati_Testo048: {
type: String,
alias: 'IdMovimentoTracciabilitaItem',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagPianoCampionamento',

},
__Dati_Testo049: {
type: String,
alias: 'CodiceOggettoAttivitaAutomatico',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagModificato',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagDerogato',

},
__Dati_Testo050: {
type: String,
alias: 'IdTipoPianoCampionamento',

},
__Dati_Testo051: {
type: String,
alias: 'CodiceTxtTipoPianoCampionamento',

},
__Dati_Testo052: {
type: String,
alias: 'CodiceTxtOggettoSchedaAttivitaAutomatico',

},
__Dati_Testo053: {
type: String,
alias: 'IdRigaDistintaImpianto',

},
__Dati_Numero019: {
type: Number,
alias: 'Anno',

},
__Dati_Numero020: {
type: Number,
alias: 'SettimanaPianificata',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagFirmaTipoAttivita',

},
__Dati_Data006: {
type: Date,
alias: 'DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero022: {
type: Number,
alias: 'FlagScadenzaVincolante',

},
__Dati_Ora010: {
type: String,
alias: 'TempoGestioneReale',

},
__Dati_Ora011: {
type: String,
alias: 'TempoCheckReale',

},
__Dati_Ora012: {
type: String,
alias: 'TempoEsecuzioneReale',

},
__Dati_Testo054: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Testo055: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Testo056: {
type: String,
alias: 'IdTipoArticolo',

},
__Dati_Testo057: {
type: String,
alias: 'IdTipoDocOperativo',

},
__Dati_Numero023: {
type: Number,
alias: 'NumeroControlliEsitoPositivo',

},
__Dati_Numero024: {
type: Number,
alias: 'NumeroControlliEsitoNegativo',

},
__Dati_Numero025: {
type: Number,
alias: 'NumeroControlliObbligatoriEsitoNegativo',

},
__Dati_Numero026: {
type: Number,
alias: 'NumeroControlliObbligatoriEsitoPositivo',

},
__Dati_Numero027: {
type: Number,
alias: 'NumeroControlliObbligatori',

},
__Dati_Numero028: {
type: Number,
alias: 'PercControlliEsitoPositivo',

},
__Dati_Numero029: {
type: Number,
alias: 'PercControlliObbligatoriEsitoPositivo',

},
__Dati_Numero030: {
type: Number,
alias: 'FlagEsitoPositivoScheda',

},
__Dati_Testo058: {
type: String,
alias: 'TxtContenitore',

},
__Dati_Testo059: {
type: String,
alias: 'IdContenitore',

},
__Dati_Testo060: {
type: String,
alias: 'CodiceOggettoTipoAttivitaAutomatico',

},
__Dati_Testo061: {
type: String,
alias: 'CodiceTxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo062: {
type: String,
alias: 'CodiceTxtOggettoAttivitaAutomatico',

},
__Dati_Testo063: {
type: String,
alias: 'TxtOggettoTipoAttivitaAutomatico',

},
__Dati_Testo064: {
type: String,
alias: 'IdItem',

},
__Dati_Testo065: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo066: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero031: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_Mobile',

},
__Dati_Numero032: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCompilabile_StazioneRaccoltaDati',

},
__Dati_Numero033: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_Mobile',

},
__Dati_Numero034: {
type: Number,
alias: 'VincoliTipoAccesso_FlagCreabile_StazioneRaccoltaDati',

},
__Dati_Numero035: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_Mobile',

},
__Dati_Numero036: {
type: Number,
alias: 'VincoliTipoAccesso_FlagVisibile_StazioneRaccoltaDati',

},
__Dati_Testo067: {
type: String,
alias: 'SchedaIpad_HelpIdCheckSelezionato',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SchedeAttivitaControlloSchema;