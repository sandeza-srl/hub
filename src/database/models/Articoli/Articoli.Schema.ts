import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IArticoliPrivate } from './Articoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const ArticoliSchema = new mongoose.Schema<IArticoliPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtArticolo',

  },
  __Dati_Contenitore001: {
    type: String,
    alias: 'ImgIdentificativa',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceAmministrativo',

  },
  __Dati_Contenitore002: {
    type: String,
    alias: 'ImgDisegno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'RevisioneArticolo',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataRevisioneArticolo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoArticolo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceDisegno',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataCreazione',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdTipoArticolo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'RevisioneDisegno',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'UmFinito',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'VCProg',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'VCIng',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdStatoArticoloCiclo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'TxtStatoArticoloCiclo',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagProduzione',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataModificaStato',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo012: {
    type: String,
    alias: 'UtenteModificaStato',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Progressivo',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtDocumentoDisegno',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdDocImgDisegno',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'IdDocImgIdentificativa',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'CodiceArticolo',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdItemArticolo',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'PercRicarico',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagModificheArticolo',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'ProssimoLotto_TxtAvviso',

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
  __Dati_Data004: {
    type: Date,
    alias: 'DataModifica',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAttivo',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'CodiceTxtArticoloAutomatico',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'CodiceTxtDisegnoArticoloAutomatico',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'UtenteModifica',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'UtenteCreazione',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'CodiceTxtOrdinamentoStatoAutomatico',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagAggiornaTotali01',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagAggiornaTotali02',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'PercorsoCartellaCondivisa',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'TxtOrdinamentoStatoAutomatico',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'CodiceCommercialeItem',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagArticoloConsolidato',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'Note',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'VCProg_Ore',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'VCProg_CostoOrario',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'VCIng_Ore',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'VCIng_CostoOrario',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'FlagEsplodiDistinta',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagAlertRevisioneArticolo',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'ProssimoLotto_FlagAvviso',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'LivelloMassimoDistinta',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagAggiornaContenutiDaItems',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'IdDocumentoPrincipale',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ArticoliSchema;