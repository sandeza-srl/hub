import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IP_RisorsePrivate } from './P_Risorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const P_RisorseSchema = new mongoose.Schema<IP_RisorsePrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdRisorsa',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'SlotLiberi01',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagAggiornaSlot',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'SlotRisorsa01',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'SlotImpegnati01',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagAggiornaImpegni',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Impegno_01_Giorni',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'Impegno_01_DataCalcolo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'Impegno_01_NumeroSlotFinale',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Impegno_01_Percentuale',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'Impegno_02_DataCalcolo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'Impegno_02_Giorni',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Impegno_02_NumeroSlotFinale',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Impegno_02_Percentuale',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'Impegno_03_DataCalcolo',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Impegno_03_Giorni',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'Impegno_03_NumeroSlotFinale',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Impegno_03_Percentuale',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'UltimoSlotImpegnato01',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'ValoreFrazionamentoTempo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'SlotImpegnati02',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'SlotLiberi02',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'SlotRisorsa02',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'SlotImpegnati03',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'SlotLiberi03',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'SlotRisorsa03',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'SlotImpegnati04',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'SlotLiberi04',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'SlotRisorsa04',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'SlotImpegnati05',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'SlotLiberi05',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'SlotRisorsa05',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'UltimoSlotImpegnato02',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'UltimoSlotImpegnato03',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'UltimoSlotImpegnato04',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'UltimoSlotImpegnato05',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Impegno_01_Percentuale01',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Impegno_01_Percentuale02',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Impegno_01_Percentuale03',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'Impegno_01_Percentuale04',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'Impegno_01_Percentuale05',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'Impegno_02_Percentuale01',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Impegno_02_Percentuale02',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'Impegno_02_Percentuale03',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'Impegno_02_Percentuale04',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'Impegno_02_Percentuale05',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'Impegno_03_Percentuale01',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Impegno_03_Percentuale02',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'Impegno_03_Percentuale03',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'Impegno_03_Percentuale04',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'Impegno_03_Percentuale05',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdP_Risorsa',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default P_RisorseSchema;