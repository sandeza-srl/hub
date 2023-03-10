import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IControlliPrivate } from './Controlli.Types.Private';


/* --------
* Schema Definition
* -------- */
const ControlliSchema = new mongoose.Schema<IControlliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdArticolo'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdCiclo'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdFase'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdControlloOpzione'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoControllo'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ValoreNominale'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'TolleranzaPiu'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'TolleranzaMeno'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FrequenzaControllo'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Criticita'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TxtTipoResponsabile'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtTipoStrumento'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdStrumento'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'UM'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'PosizioneControllo'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'UmOpzione'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FrequenzaControlloOpzione'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRigaOrdine'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdLottoProduzione'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdFaseProduzione'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRegistrazioneFaseProduzione'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'Data'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'Ora'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdOperatore'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtOperatore'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdReparto'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdStazioneRaccoltaDati'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'Esito'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagCalcoloMatematico'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'ValoreRaccolto'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagEsitoPositivo'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtArticolo'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtFase'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtReparto'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtRisorsa'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtStazioneRaccoltaDati'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdControlloFaseProduzione'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdControlloArticolo'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOra'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAperto'
  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdControlloRegistrazione'
  },
  __Dati_Testo029: {
    type: String,
    alias: 'CodiceTipoControllo'
  },
  __Dati_Testo030: {
    type: String,
    alias: 'CodiceTipoStrumento'
  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdDispositivoRaccoltaDati'
  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdTipoTurno'
  },
  __Dati_Testo033: {
    type: String,
    alias: 'TxtTipoTurno'
  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdTipoFase'
  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdAccountCliente'
  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdAccountOperatore'
  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdTipoStrumento'
  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdTipoControllo'
  },
  __Dati_Testo039: {
    type: String,
    alias: 'CodiceFase'
  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'NumeroControlliFatti'
  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Testo042: {
    type: String,
    alias: 'TxtTurnoData'
  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodiceTipoTurno'
  },
  __Dati_Testo044: {
    type: String,
    alias: 'CodiceArticolo'
  },
  __Dati_Testo045: {
    type: String,
    alias: 'CodiceCiclo'
  },
  __Dati_Testo046: {
    type: String,
    alias: 'CodiceDisegno'
  },
  __Dati_Testo047: {
    type: String,
    alias: 'CodiceFaseProduzione'
  },
  __Dati_Testo048: {
    type: String,
    alias: 'CodiceLottoProduzione'
  },
  __Dati_Testo049: {
    type: String,
    alias: 'CodiceRigaOrdine'
  },
  __Dati_Testo050: {
    type: String,
    alias: 'CodiceRisorsa'
  },
  __Dati_Testo051: {
    type: String,
    alias: 'CodiceTxtTipoControlloAutomatico'
  },
  __Dati_Testo052: {
    type: String,
    alias: 'TxtCiclo'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraRevisione'
  },
  __Dati_Testo053: {
    type: String,
    alias: 'TxtUtenteRevisione'
  },
  __Dati_Testo054: {
    type: String,
    alias: 'NotaRevisione'
  },
  __Dati_Testo055: {
    type: String,
    alias: 'NoteControllo'
  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdTipoPianoCampionamento'
  },
  __Dati_Testo057: {
    type: String,
    alias: 'TxtTipoPianoCampionamento'
  },
  __Dati_Testo058: {
    type: String,
    alias: 'CodiceTxtStrumentoNumeroSerie'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataRevisionata'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'OraRevisionata'
  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraRevisionata'
  },
  __Dati_Testo059: {
    type: String,
    alias: 'FlagSelezione'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'Anno'
  },
  __Dati_Testo060: {
    type: String,
    alias: 'AnnoMese'
  },
  __Dati_Testo061: {
    type: String,
    alias: 'AnnoSettimana'
  },
  __Dati_Testo062: {
    type: String,
    alias: 'RevisioneArticolo'
  },
  __Dati_Testo063: {
    type: String,
    alias: 'RevisioneDisegno'
  },
  __Dati_Testo064: {
    type: String,
    alias: 'CodiceTipoNormativa'
  },
  __Dati_Testo065: {
    type: String,
    alias: 'CodiceTxtTipoStrumentoAutomatico'
  },
  __Dati_Testo066: {
    type: String,
    alias: 'CodiceTxtTipoNormativaAutomatico'
  },
  __Dati_Testo067: {
    type: String,
    alias: 'IdRegistrazioneRisorsa'
  },
  __Dati_Testo068: {
    type: String,
    alias: 'CodiceStrumento'
  },
  __Dati_Testo069: {
    type: String,
    alias: 'NumeroSerieStrumento'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'QtRegistrazioneAlControllo'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'GiornoSettimana'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Mese'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Settimana'
  },
  __Dati_Testo070: {
    type: String,
    alias: 'IdOpzioneProd'
  },
  __Dati_Testo071: {
    type: String,
    alias: 'IdTipoResponsabile'
  },
  __Dati_Testo072: {
    type: String,
    alias: 'IdTipoNormativa'
  },
  __Dati_Testo073: {
    type: String,
    alias: 'TxtTipoNormativa'
  },
  __Dati_Testo074: {
    type: String,
    alias: 'IdDocumentoCollegato'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'CUQ_T'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'CUQ_T_UmOpzione'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'ValoreRevisionato'
  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagFrequenzaStandard'
  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagFrequenzaPianiCampionamento'
  },
  __Dati_Testo075: {
    type: String,
    alias: 'Gruppo'
  },
  __Dati_Testo076: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico'
  },
  __Dati_Testo077: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico'
  },
  __Dati_Testo078: {
    type: String,
    alias: 'CodiceTxtFaseAutomatico'
  },
  __Dati_Testo079: {
    type: String,
    alias: 'CodiceTxtFaseRisorsaAutomatico'
  },
  __Dati_Testo080: {
    type: String,
    alias: 'CodiceTxtRisorsaAutomatico'
  },
  __Dati_DataOra004: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra005: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo081: {
    type: String,
    alias: 'CodiceTipoResponsabile'
  },
  __Dati_Testo082: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo083: {
    type: String,
    alias: 'IdNumeroSerieLottoProduzione'
  },
  __Dati_Testo084: {
    type: String,
    alias: 'TxtTipoControlloPosizione'
  },
  __Dati_Testo085: {
    type: String,
    alias: 'IdControllo'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ControlliSchema;