import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IOriginiTipiDocOperativiPrivate } from './OriginiTipiDocOperativi.Types.Private';


/* --------
* Schema Definition
* -------- */
const OriginiTipiDocOperativiSchema = new mongoose.Schema<IOriginiTipiDocOperativiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'FlagScaricaQtDocOrigine',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_GruppoLavoro_Copia',

  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdTipoDocOperativo',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoDocOperativo_OrigineDati',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtTipoDocOperativo_OrigineDati',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagScaricaImportoDocOrigine',

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
  __Dati_Numero004: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'TxtTipoDocOperativo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'NuoviStati_Flag',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Anagrafica_Copia',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Destinatario_Copia',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Intermediario_Copia',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_CodiceEsterno_Copia',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Extra_Copia',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_Quantita_Copia',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_ValoreUnitario_Copia',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_DataRichiesta_Copia',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_DataPrevista_Copia',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'FlagTipo_TipoLista',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Valuta_Copia',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_ValoreUnitarioDefinitivo_Copia',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_QuantitaSconto_Copia',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_DescrizioniVoce_Copia',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_RicaviSpese_Copia',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_RegolePagamento_Copia',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_ValoreUnitario_Proponi',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_ValoreUnitarioDefinitivo_Proponi',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_Qt_Proponi',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_NoteVoce_Proponi',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_RiferimentiCliente_Proponi',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_RiferimentiCliente_Copia',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_RiferimentiFornitore_Copia',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'NuoviStati_FlagVoci_RiferimentiFornitore_Proponi',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdOrigineTipoDocOperativo',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'FlagTipo_TipoLista_OrigineDati',

  },
  __Dati_Numero029: {
    type: Number,
    alias: 'FlagAggiornaDaTipiDocOperativi',

  },
  __Dati_Numero030: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_ValoreUnitario_DaValorizzazioneMagazzino',

  },
  __Dati_Numero031: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_TxtDocOperativo_Copia',

  },
  __Dati_Numero032: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_DataConfermata_Copia',

  },
  __Dati_Numero033: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_DatiAccountCompagnia_Copia',

  },
  __Dati_Numero034: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Vettore_Copia',

  },
  __Dati_Numero035: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Magazzini_Copia',

  },
  __Dati_Numero036: {
    type: Number,
    alias: 'ImpostazioneCampi_VociDocOperativo_RiferimentiItem_Copia',

  },
  __Dati_Numero037: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Consegna_Copia',

  },
  __Dati_Numero038: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Economici_Copia',

  },
  __Dati_Numero039: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_PA_Copia',

  },
  __Dati_Numero040: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Banca_Copia',

  },
  __Dati_Numero041: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Pagamento_Copia',

  },
  __Dati_Numero042: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Intervento_Copia',

  },
  __Dati_Numero043: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Resa_Copia',

  },
  __Dati_Numero044: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Trasporto_Copia',

  },
  __Dati_Numero045: {
    type: Number,
    alias: 'ImpostazioneCampi_DocOperativo_Dettagli_Vettore_Copia',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdTipoDocOperativo_OrigineDati_ConScarico',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default OriginiTipiDocOperativiSchema;