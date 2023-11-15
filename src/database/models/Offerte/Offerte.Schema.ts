import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOffertePrivate } from './Offerte.Types.Private';


/* --------
* Schema Definition
* -------- */
const OfferteSchema = new mongoose.Schema<IOffertePrivate>({

  _id: {
    type: String,
    default: uuid.v4
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
    alias: 'DataOfferta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataInvio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountClienteFinale',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'NoteFinali',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAccountClienteFinale',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdOfferta',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TitoloOfferta',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'PercentualeIva',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CondizioniPagamento',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'VImponibile',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'TxtAccountCompagnia',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'AnnoMeseOfferta',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'GiornoOfferta',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Mese',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Settimana',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdAccountIntestazione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtAccountIntestazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdRubricaCompagnia',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'NomeRubricaCompagnia',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdRubricaIntestazione',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdRubricaClienteFinale',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'NomeRubricaClienteFinale',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'NomeRubricaIntestazione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'VIva',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'VTotale',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ConversioneValuta',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdValuta',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'SimboloValuta',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'TxtValuta',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'VTotaleConvertito',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'VImponibileConvertito',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VIvaConvertito',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VPreVariazioniConvertito',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdAccountTutti',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'ValiditaGg',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagAccettata',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagRifiutata',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagScaduta',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagInScadenza',

  },
  __Dati_Data005: {
    type: Date,
    alias: 'DataCorrente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data006: {
    type: Date,
    alias: 'DataRisposta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtStatoAutomaticoLinguaPrincipale',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'Lingua',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'NoteIniziali',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'SottoTitoloOfferta',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdAccountDistributore',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'TxtAccountDistributore',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdRubricaDistributore',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'NomeRubricaDistributore',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'VCostoMateriale',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'VPreVariazioni',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'VVariazioni',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'VVariazioniConvertito',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'VMargine',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'VMarginePercentuale',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdFirma',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'TxtUtenteModifica',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdStatoOfferta',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'TxtStatoOfferta',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagStandard',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdAliquota',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'TxtAliquota',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'FlagBloccato',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdSedeClienteFinale',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdDocumentoAssociato',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'AnnoOfferta',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'CodiceOfferta',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'IdTipoOfferta',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'ProssimoProgressivo',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'VVariazioniPercentuale',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'OrdineStatoOfferta',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'PercProbabilitaSuccesso',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'VImponibilePonderato',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'IdTipiDocOperativoCreabili',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'FlagInviaSollecito',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'IdComunicazione01',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'IdComunicazione02',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'IdComunicazione03',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'AnnoMeseScadenzaOfferta',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'AnnoScadenzaOfferta',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'VVariazioneIncondizionata',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'VVariazioneIncondizionataConvertito',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'VVariazioneIncondizionataPercentuale',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'VProvvigioni',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'VProvvigioniConvertito',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'VProvvigioniStimate',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'VProvvigioniStimateConvertito',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'VimponibileDefinitivo',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'VimponibileDefinitivoConvertito',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'VivaDefinitiva',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'VivaDefinitivaConvertito',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'VTotaleDefinitivo',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'VTotaleDefinitivoConvertito',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'VProvvigioniPercentuale',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'FlagEscludiProvvigioni',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'VCostoTotale',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'NoteInterne',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'Porto',

  },
  __Dati_Testo049: {
    type: String,
    alias: 'Spedizione',

  },
  __Dati_Testo050: {
    type: String,
    alias: 'CodiceRichiestaCliente',

  },
  __Dati_Data007: {
    type: Date,
    alias: 'DataRichiestaCliente',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo051: {
    type: String,
    alias: 'MezzoRichiestaCliente',

  },
  __Dati_Testo052: {
    type: String,
    alias: 'IdTipoOffertaPerCodice',

  },
  __Dati_Testo053: {
    type: String,
    alias: 'IdUtenteRevisioneOfferta',

  },
  __Dati_Testo054: {
    type: String,
    alias: 'TxtUtenteRevisioneOfferta',

  },
  __Dati_Testo055: {
    type: String,
    alias: 'IdRevisione',

  },
  __Dati_Testo056: {
    type: String,
    alias: 'IdIncoterm',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'RevisioneOfferta',

  },
  __Dati_Data008: {
    type: Date,
    alias: 'DataRevisioneOfferta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo057: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo058: {
    type: String,
    alias: 'TxtIncoterm',

  },
  __Dati_Testo059: {
    type: String,
    alias: 'AspettoEsteriore',

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
  __Dati_Numero053: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'FlagAggiornaDaCapitoli',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'InformazioniAggiuntive_FlagRicalcolaLista',

  },
  __Dati_Testo060: {
    type: String,
    alias: 'InformazioniAggiuntive_Lista',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'VImponibileAccettato',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'VimponibileAccettatoConvertito',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'VivaAccettata',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'VivaAccettataConvertita',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'VMargineAccettato',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'VMargineAccettatoPercentuale',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'VTotaleAccettato',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'VTotaleAccettatoConvertito',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'VVariazioniAccettato',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'VVariazioniAccettatoConvertito',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'VVariazioniAccettatoPercentuale',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OfferteSchema;