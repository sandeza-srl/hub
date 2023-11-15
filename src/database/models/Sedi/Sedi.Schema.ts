import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ISediPrivate } from './Sedi.Types.Private';


/* --------
* Schema Definition
* -------- */
const SediSchema = new mongoose.Schema<ISediPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccount',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdSede',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'TxtAccount',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'Cap',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'Citta',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'Fax',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'NomeSede',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'NomeNazione',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'Via',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'TxtLiberoIndirizzo',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'NomeNazioneIng',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdNazione',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'DescrizioneStampabile',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'TxtZona',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'NoteTrasporti',

  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataModificaNoteTrasporti',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo016: {
    type: String,
    alias: 'UtenteModificaNoteTrasporti',

  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModificaNoteAlloggio',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo017: {
    type: String,
    alias: 'NoteAlloggio',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'UtenteModificaNoteAlloggio',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'NoteVitto',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'UtenteModificaNoteVitto',

  },
  __Dati_Data003: {
    type: Date,
    alias: 'DataModificaNoteVitto',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo021: {
    type: String,
    alias: 'NoteVarie',

  },
  __Dati_Data004: {
    type: Date,
    alias: 'DataModificaNoteVarie',
    set: (value: any) => {
      return DateConverter.convertDate(value);
    }
  },
  __Dati_Testo022: {
    type: String,
    alias: 'UtenteModificaNoteVarie',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'KmDaSede',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'OreViaggioDaSede',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'Priorita',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagLegale',

  },
  __Dati_Testo023: {
    type: String,
    alias: 'FlagLegaleVedi',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagSpedizione',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'FlagSpedizioneVedi',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'GiorniTrasporto',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'ChiusureSettimanali',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdZona',

  },
  __Dati_Testo027: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraUltimaModifica',
    set: (value: any) => {
      return DateConverter.convertDateHour(value);
    }
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagImpiantoCreato',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'Latitudine',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Longitudine',

  },
  __Dati_Testo028: {
    type: String,
    alias: 'IdPeriodoChiusura',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'GiorniProduzione',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GiorniApprovvigionamento',

  },
  __Dati_Testo029: {
    type: String,
    alias: 'IndirizzoCompleto',

  },
  __Dati_Testo030: {
    type: String,
    alias: 'Latitudine_Longitudine_JSON',

  },
  __Dati_Testo031: {
    type: String,
    alias: 'CodiceSede',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo032: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'FlagAggiornaSede',

  },
  __Dati_Testo033: {
    type: String,
    alias: 'Tel',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagGestioneGiorniRitiroConsengaAttiva',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'Consegna_Lunedi_Attivo',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'Consegna_Martedi_Attivo',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'Consegna_Mercoledi_Attivo',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'Consegna_Giovedi_Attivo',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'Consegna_Venerdi_Attivo',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'Consegna_Sabato_Attivo',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'Consegna_Domenica_Attivo',

  },
  __Dati_Ora001: {
    type: String,
    alias: 'Consegna_Lunedi_OraInizio',

  },
  __Dati_Ora002: {
    type: String,
    alias: 'Consegna_Martedi_OraInizio',

  },
  __Dati_Ora003: {
    type: String,
    alias: 'Consegna_Mercoledi_OraInizio',

  },
  __Dati_Ora004: {
    type: String,
    alias: 'Consegna_Giovedi_OraInizio',

  },
  __Dati_Ora005: {
    type: String,
    alias: 'Consegna_Venerdi_OraInizio',

  },
  __Dati_Ora006: {
    type: String,
    alias: 'Consegna_Sabato_OraInizio',

  },
  __Dati_Ora007: {
    type: String,
    alias: 'Consegna_Domenica_OraInizio',

  },
  __Dati_Ora008: {
    type: String,
    alias: 'Consegna_Lunedi_OraFine',

  },
  __Dati_Ora009: {
    type: String,
    alias: 'Consegna_Martedi_OraFine',

  },
  __Dati_Ora010: {
    type: String,
    alias: 'Consegna_Mercoledi_OraFine',

  },
  __Dati_Ora011: {
    type: String,
    alias: 'Consegna_Giovedi_OraFine',

  },
  __Dati_Ora012: {
    type: String,
    alias: 'Consegna_Venerdi_OraFine',

  },
  __Dati_Ora013: {
    type: String,
    alias: 'Consegna_Sabato_OraFine',

  },
  __Dati_Ora014: {
    type: String,
    alias: 'Consegna_Domenica_OraFine',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'Consegna_Lunedi_GiorniPreparazione',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'Consegna_Martedi_GiorniPreparazione',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'Consegna_Mercoledi_GiorniPreparazione',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'Consegna_Giovedi_GiorniPreparazione',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'Consegna_Venerdi_GiorniPreparazione',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'Consegna_Sabato_GiorniPreparazione',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'Consegna_Domenica_GiorniPreparazione',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'Ritiro_Lunedi_GiorniPreparazione',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'Ritiro_Martedi_GiorniPreparazione',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'Ritiro_Mercoledi_GiorniPreparazione',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'Ritiro_Giovedi_GiorniPreparazione',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'Ritiro_Venerdi_GiorniPreparazione',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'Ritiro_Sabato_GiorniPreparazione',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'Ritiro_Domenica_GiorniPreparazione',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'Ritiro_Lunedi_Attivo',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'Ritiro_Martedi_Attivo',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'Ritiro_Mercoledi_Attivo',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'Ritiro_Giovedi_Attivo',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'Ritiro_Venerdi_Attivo',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'Ritiro_Sabato_Attivo',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'Ritiro_Domenica_Attivo',

  },
  __Dati_Ora015: {
    type: String,
    alias: 'Ritiro_Lunedi_OraInizio',

  },
  __Dati_Ora016: {
    type: String,
    alias: 'Ritiro_Martedi_OraInizio',

  },
  __Dati_Ora017: {
    type: String,
    alias: 'Ritiro_Mercoledi_OraInizio',

  },
  __Dati_Ora018: {
    type: String,
    alias: 'Ritiro_Giovedi_OraInizio',

  },
  __Dati_Ora019: {
    type: String,
    alias: 'Ritiro_Venerdi_OraInizio',

  },
  __Dati_Ora020: {
    type: String,
    alias: 'Ritiro_Sabato_OraInizio',

  },
  __Dati_Ora021: {
    type: String,
    alias: 'Ritiro_Domenica_OraInizio',

  },
  __Dati_Ora022: {
    type: String,
    alias: 'Ritiro_Lunedi_OraFine',

  },
  __Dati_Ora023: {
    type: String,
    alias: 'Ritiro_Martedi_OraFine',

  },
  __Dati_Ora024: {
    type: String,
    alias: 'Ritiro_Mercoledi_OraFine',

  },
  __Dati_Ora025: {
    type: String,
    alias: 'Ritiro_Giovedi_OraFine',

  },
  __Dati_Ora026: {
    type: String,
    alias: 'Ritiro_Venerdi_OraFine',

  },
  __Dati_Ora027: {
    type: String,
    alias: 'Ritiro_Sabato_OraFine',

  },
  __Dati_Ora028: {
    type: String,
    alias: 'Ritiro_Domenica_OraFine',

  },
  __Dati_Testo034: {
    type: String,
    alias: 'Consegna_IdVettore',

  },
  __Dati_Testo035: {
    type: String,
    alias: 'Ritiro_IdVettore',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'FlagAggiornaDaTipiZone',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default SediSchema;