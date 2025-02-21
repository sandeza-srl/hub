import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRegistrazioniRisorsePrivate } from './RegistrazioniRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const RegistrazioniRisorseSchema = new mongoose.Schema<IRegistrazioniRisorsePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'FlagSelezione',

},
__Dati_Testo001: {
type: String,
alias: 'IdFamigliaRisorsa',

},
__Dati_Testo002: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo003: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Data001: {
type: Date,
alias: 'DataInizio',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataFine',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Ora001: {
type: String,
alias: 'TA_R',

},
__Dati_Ora002: {
type: String,
alias: 'TD_R',

},
__Dati_Ora003: {
type: String,
alias: 'TF_R',

},
__Dati_Ora004: {
type: String,
alias: 'TT_R',

},
__Dati_Testo004: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo005: {
type: String,
alias: 'IdStazioneRaccoltaDati',

},
__Dati_Numero003: {
type: Number,
alias: 'NumeroAddetti_R',

},
__Dati_Numero004: {
type: Number,
alias: 'Anno',

},
__Dati_Numero005: {
type: Number,
alias: 'GiornoSettimana',

},
__Dati_Testo006: {
type: String,
alias: 'IdOperatoreProduzione',

},
__Dati_Numero006: {
type: Number,
alias: 'Mese',

},
__Dati_Testo007: {
type: String,
alias: 'TxtTurnoData',

},
__Dati_Testo008: {
type: String,
alias: 'TxtOperatoreProduzione',

},
__Dati_Ora005: {
type: String,
alias: 'OraFine',

},
__Dati_Ora006: {
type: String,
alias: 'OraInizio',

},
__Dati_Ora007: {
type: String,
alias: 'TT_R_ConPausa',

},
__Dati_Ora008: {
type: String,
alias: 'TPausa',

},
__Dati_Testo009: {
type: String,
alias: 'TxtReparto',

},
__Dati_Testo010: {
type: String,
alias: 'TxtStazioneRaccoltaDati',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountOperatore',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraInizio',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero007: {
type: Number,
alias: 'FlagStatoRegistrazione',

},
__Dati_Testo012: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagRegistrazioneAperta',

},
__Dati_Testo014: {
type: String,
alias: 'TxtStatoRegistrazione',

},
__Dati_Testo015: {
type: String,
alias: 'AnnoMese',

},
__Dati_Testo016: {
type: String,
alias: 'IdTipoTurno',

},
__Dati_Testo017: {
type: String,
alias: 'CodiceTipoTurno',

},
__Dati_Testo018: {
type: String,
alias: 'IdRegistrazioneRisorsa',

},
__Dati_Ora009: {
type: String,
alias: 'TEffettivoLavoroMacchina',

},
__Dati_Numero009: {
type: Number,
alias: 'DistrTempi_SommaSecondiTeoriciQT_R',

},
__Dati_Testo019: {
type: String,
alias: 'AnnoSettimana',

},
__Dati_Testo020: {
type: String,
alias: 'CodiceTxtRisorsaAutomatico',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagAggiornaDaCorrelate',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAggiornaTotali',

},
__Dati_Ora010: {
type: String,
alias: 'TP_R',

},
__Dati_Testo021: {
type: String,
alias: 'TxtTipoTurno',

},
__Dati_Numero012: {
type: Number,
alias: 'Zero',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagLavInternaPianificabile',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagLavInternaNonPianificabile',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagLavEsterna',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagImballoParziale',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagImballoFinale',

},
__Dati_Numero018: {
type: Number,
alias: 'NumeroRegistrazioniFasiProduzione',

},
__Dati_Testo022: {
type: String,
alias: 'IdDispositivoRaccoltaDati',

},
__Dati_Testo023: {
type: String,
alias: 'CodiceContenitore',

},
__Dati_Testo024: {
type: String,
alias: 'Contenitore_iBeacon_Id',

},
__Dati_Testo025: {
type: String,
alias: 'Contenitore_iBeacon_Major',

},
__Dati_Testo026: {
type: String,
alias: 'Contenitore_iBeacon_Minor',

},
__Dati_Ora011: {
type: String,
alias: 'HAttraversamentoLinea_T',

},
__Dati_Ora012: {
type: String,
alias: 'DistrTempi_SommaTA_T',

},
__Dati_Ora013: {
type: String,
alias: 'DistrTempi_SommaTD_T',

},
__Dati_Testo027: {
type: String,
alias: 'IdContenitore',

},
__Dati_Numero019: {
type: Number,
alias: 'PercTEffettivoLavoroMacchina',

},
__Dati_Numero020: {
type: Number,
alias: 'FlagAggiornaDaMacchine',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagModificaTempi',

},
__Dati_DataOra003: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero022: {
type: Number,
alias: 'FlagRegistrazioneNested',

},
__Dati_Testo029: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo030: {
type: String,
alias: 'IdNumeroSerieLottoProduzione_Tutti',

},
__Dati_Numero023: {
type: Number,
alias: 'FlagAggiornaContenutiDaRisorsa',

},
__Dati_Numero024: {
type: Number,
alias: 'StatoRegistrazione_FlagInChiusura',

},
__Dati_Testo031: {
type: String,
alias: 'CodiceRegistrazioneRisorsa',

},
__Dati_Numero025: {
type: Number,
alias: 'LavorazioneEsterna_FlagAperturaAutomatica',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RegistrazioniRisorseSchema;