import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IAnalisiCostoArticoliPrivate } from './AnalisiCostoArticoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const AnalisiCostoArticoliSchema = new mongoose.Schema<IAnalisiCostoArticoliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAnalisiCosto',

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
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagAggiornaTotali01',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagAggiornaTotali02',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoArticolo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'PercRicarico',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdAccountCliente',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceProgetto',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'Note',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtAnalisiCosto',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'UtenteCreazione',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'UtenteModifica',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagInCorso',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagChiusa',

  },
  __Dati_DataOra003: {
    type: Date,
    alias: 'DataOraChiusura',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Testo012: {
    type: String,
    alias: 'UtenteChiusura',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Quantita',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Quantita_TollPiuPerc',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Quantita_TollMenoPerc',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Quantita_LimiteInferiore',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Quantita_LimiteSuperiore',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'CTADT',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'CTIngT',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'CTLET',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'CTLT',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'CTMT',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'CTProgT',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'CTPT',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'CTQT',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'CTST',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'CTT',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'CTT_Ricarico',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'CTT_UnitaBuone',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'CTTRAT',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'CTUtT',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'CUADT',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'CUIngT',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'CULET',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'CULT',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'CUMT',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'CUProgT',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'CUPT',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'CUQT',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'CUST',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'CUT',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'CUT_Ricarico',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'CUT_UnitaBuone',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'CUTRAT',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'CUUtT',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'Risultato_CUADT_Media',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'Risultato_CUADT_Deviazione',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'Risultato_CUPT_Deviazione',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'Risultato_CUPT_Media',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'Risultato_CULET_Media',

  },
  __Dati_Numero046: {
    type: Number,
    alias: 'Risultato_CULT_Media',

  },
  __Dati_Numero047: {
    type: Number,
    alias: 'Risultato_CUMT_Media',

  },
  __Dati_Numero048: {
    type: Number,
    alias: 'Risultato_CUST_Media',

  },
  __Dati_Numero049: {
    type: Number,
    alias: 'Risultato_CUTRAT_Media',

  },
  __Dati_Numero050: {
    type: Number,
    alias: 'Risultato_CUQT_Media',

  },
  __Dati_Numero051: {
    type: Number,
    alias: 'Risultato_CUUtT_Media',

  },
  __Dati_Numero052: {
    type: Number,
    alias: 'Risultato_CTIngT_Media',

  },
  __Dati_Numero053: {
    type: Number,
    alias: 'Risultato_CTProgT_Media',

  },
  __Dati_Numero054: {
    type: Number,
    alias: 'Risultato_CUT_Media',

  },
  __Dati_Numero055: {
    type: Number,
    alias: 'Risultato_CTIngT_Deviazione',

  },
  __Dati_Numero056: {
    type: Number,
    alias: 'Risultato_CULET_Deviazione',

  },
  __Dati_Numero057: {
    type: Number,
    alias: 'Risultato_CULT_Deviazione',

  },
  __Dati_Numero058: {
    type: Number,
    alias: 'Risultato_CUMT_Deviazione',

  },
  __Dati_Numero059: {
    type: Number,
    alias: 'Risultato_CTProgT_Deviazione',

  },
  __Dati_Numero060: {
    type: Number,
    alias: 'Risultato_CUQT_Deviazione',

  },
  __Dati_Numero061: {
    type: Number,
    alias: 'Risultato_CUST_Deviazione',

  },
  __Dati_Numero062: {
    type: Number,
    alias: 'Risultato_CUT_Deviazione',

  },
  __Dati_Numero063: {
    type: Number,
    alias: 'Risultato_CUTRAT_Deviazione',

  },
  __Dati_Numero064: {
    type: Number,
    alias: 'Risultato_CUUtT_Deviazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdAccountOperatore',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtAccountClienteFinale',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtAccountOperatore',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataScadenza',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdDocumentoDisegno',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdDocumentoImmagine',

  },
  __Dati_Numero065: {
    type: Number,
    alias: 'CUADT_Deviazione',

  },
  __Dati_Numero066: {
    type: Number,
    alias: 'CUIngT_Deviazione',

  },
  __Dati_Numero067: {
    type: Number,
    alias: 'CULET_Deviazione',

  },
  __Dati_Numero068: {
    type: Number,
    alias: 'CULT_Deviazione',

  },
  __Dati_Numero069: {
    type: Number,
    alias: 'CUMT_Deviazione',

  },
  __Dati_Numero070: {
    type: Number,
    alias: 'CUProgT_Deviazione',

  },
  __Dati_Numero071: {
    type: Number,
    alias: 'CUPT_Deviazione',

  },
  __Dati_Numero072: {
    type: Number,
    alias: 'CUQT_Deviazione',

  },
  __Dati_Numero073: {
    type: Number,
    alias: 'CUST_Deviazione',

  },
  __Dati_Numero074: {
    type: Number,
    alias: 'CUTRAT_Deviazione',

  },
  __Dati_Numero075: {
    type: Number,
    alias: 'CUUtT_Deviazione',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'CodificaClienteItem',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'DescrizioneClienteItem',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtTipoArticolo',

  },
  __Dati_Numero076: {
    type: Number,
    alias: 'CUT_Deviazione',

  },
  __Dati_Numero077: {
    type: Number,
    alias: 'CUT_UnitaBuone_Deviazione',

  },
  __Dati_Numero078: {
    type: Number,
    alias: 'CUT_Ricarico_Deviazione',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdFamigliaItem',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdSottoFamigliaItem',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'CUADT_Id',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'CUIngT_Id',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'CULET_Id',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'CULT_Id',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'CUMT_Id',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'CUProgT_Id',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'CUPT_Id',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'CUQT_Id',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CUST_Id',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'CUT_Id',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'CUTRAT_Id',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'CUUtT_Id',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'IdTipoCiclo',

  },
  __Dati_Testo036: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo037: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo038: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo039: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default AnalisiCostoArticoliSchema;