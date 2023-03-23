import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISelezioniItemsPrivate } from './SelezioniItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const SelezioniItemsSchema = new mongoose.Schema<ISelezioniItemsPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'CodiceTxtItemAutomatico',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdSelezioneItem',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdItem',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtFornituraItem',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdFornituraItem',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'QuantitaSelezione',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdCiclo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdListinoItem',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoApprovigionamento',

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
  __Dati_Data001: {
    type: Date,
    alias: 'DataSelezione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdAccountFornitore',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagConfermaSelezione',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdUtenteCreazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'PostazioneCreazione',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'TxtUtenteCreazione',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'AnnoSettimanaSelezione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdDocOperativo',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdRigaOrdine',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagTipoPreparazioneSpedizione',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagTipoRichiestaMovimentazione',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagTipoCompilazioneVociDocOperativo',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagTipoCompilazioneVociOfferta',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAcquisto',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagProduzione',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VUnitario',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VImponibile',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagSelezioneElaborata',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagSelezioneSelezionata',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdGruppo',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdSessioneSelezione',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraSessioneSelezione',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdVoceDocOperativo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'CodiceDocOperativo',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'QuantitaFornitura',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'IdAccountRaggruppamento',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountDocOperativo',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdAccountClienteFinale',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'TxtClienteFinaleItem',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'TxtFornitore',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdVoceDocOperativoOrigine',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdLottoProduzione',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdFaseProduzione',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'VUnitarioDefinitivo',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdDocOperativoOrigine',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdTipoDocOperativoOrigine',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdDocOperativoOrigineTutti',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdTipoDocOperativoOrigineTutti',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataConsegnaRichiesta',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataConsegnaPrevista',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdTipoListino',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'IdMagazzinoGestitoOrigine',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdMagazzinoGestitoDestinazione',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdPosizioneMagazzinoDestinazione',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdPosizioneMagazzinoOrigine',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'IdTracciabilitaItem',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdPacco',

  },
  __Dati_Testo040: {
    type: String,
    alias: 'IdStatoPosizioneMagazzinoOrigine',

  },
  __Dati_Testo041: {
    type: String,
    alias: 'IdStatoPosizioneMagazzinoDestinazione',

  },
  __Dati_Testo042: {
    type: String,
    alias: 'CodicePosizioneMagazzinoDestinazione',

  },
  __Dati_Testo043: {
    type: String,
    alias: 'CodicePosizioneMagazzinoOrigine',

  },
  __Dati_Testo044: {
    type: String,
    alias: 'CodicePacco',

  },
  __Dati_Testo045: {
    type: String,
    alias: 'TxtMagazzinoGestitoDestinazione',

  },
  __Dati_Testo046: {
    type: String,
    alias: 'TxtMagazzinoGestitoOrigine',

  },
  __Dati_Testo047: {
    type: String,
    alias: 'IdMagazzinoFisicoDestinazione',

  },
  __Dati_Testo048: {
    type: String,
    alias: 'IdMagazzinoFisicoOrigine',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagPosizioniGestiteMagazzinoFisicoDestinazione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagPosizioniGestiteMagazzinoFisicoOrigine',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagControlloMultimagazzino',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Multimagazzino_QuantitaPacco',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SelezioniItemsSchema;