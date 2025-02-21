import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IImpiantiPrivate } from './Impianti.Types.Private';


/* --------
* Schema Definition
* -------- */
const ImpiantiSchema = new mongoose.Schema<IImpiantiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountProduttore',

},
__Dati_Testo003: {
type: String,
alias: 'TxtAccountProduttore',

},
__Dati_Testo004: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo005: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo006: {
type: String,
alias: 'IdRubricaProduttoreTecnico',

},
__Dati_Testo007: {
type: String,
alias: 'NomeRubricaProduttoreTecnico',

},
__Dati_Testo008: {
type: String,
alias: 'TxtItemEsteso',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceRiferimentoFornitore',

},
__Dati_Testo010: {
type: String,
alias: 'TxtOperatoreTecnico',

},
__Dati_Testo011: {
type: String,
alias: 'Note',

},
__Dati_Testo012: {
type: String,
alias: 'IdImpianto',

},
__Dati_Testo013: {
type: String,
alias: 'NumeroSerie',

},
__Dati_Data001: {
type: Date,
alias: 'DataInstallazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero002: {
type: Number,
alias: 'AnnoInstallazione',

},
__Dati_Testo014: {
type: String,
alias: 'AnnoMeseInstallazione',

},
__Dati_Data002: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo015: {
type: String,
alias: 'IdSedeDestinatario',

},
__Dati_Testo016: {
type: String,
alias: 'TxtOperatoreInstallatore',

},
__Dati_Testo017: {
type: String,
alias: 'IdAccountClienteFinale',

},
__Dati_Testo018: {
type: String,
alias: 'TxtAccountClienteFinale',

},
__Dati_Testo019: {
type: String,
alias: 'NomeRubricaClienteFinaleTecnico',

},
__Dati_Testo020: {
type: String,
alias: 'IdRubricaClienteFinaleTecnico',

},
__Dati_Testo021: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo022: {
type: String,
alias: 'IdAccountDistributore',

},
__Dati_Testo023: {
type: String,
alias: 'TxtAccountDistributore',

},
__Dati_Testo024: {
type: String,
alias: 'IdRubricaDistributore',

},
__Dati_Testo025: {
type: String,
alias: 'NomeRubricaDistributore',

},
__Dati_Testo026: {
type: String,
alias: 'IdAccountAbilitatiTutti',

},
__Dati_Numero003: {
type: Number,
alias: 'AnnoStartUp',

},
__Dati_Data003: {
type: Date,
alias: 'DataStartUp',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo027: {
type: String,
alias: 'AnnoMeseStartUp',

},
__Dati_Data004: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero004: {
type: Number,
alias: 'GgEsercizio',

},
__Dati_Testo028: {
type: String,
alias: 'IdAccountTutti',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagGestito',

},
__Dati_Testo029: {
type: String,
alias: 'FlagGestitoVedi',

},
__Dati_Testo030: {
type: String,
alias: 'FlagGestitoTxt',

},
__Dati_Testo031: {
type: String,
alias: 'IdRubricaProduttoreCommerciale',

},
__Dati_Testo032: {
type: String,
alias: 'IdRubricaClienteFinaleCommerciale',

},
__Dati_Testo033: {
type: String,
alias: 'NomeRubricaClienteFinaleCommerciale',

},
__Dati_Testo034: {
type: String,
alias: 'NomeRubricaProduttoreCommerciale',

},
__Dati_Testo035: {
type: String,
alias: 'TxtOperatoreCommerciale',

},
__Dati_Testo036: {
type: String,
alias: 'IdAccountFornitore',

},
__Dati_Testo037: {
type: String,
alias: 'TxtAccountFornitore',

},
__Dati_Testo038: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo039: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Data005: {
type: Date,
alias: 'DataAcquisto',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data006: {
type: Date,
alias: 'DataVendita',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo040: {
type: String,
alias: 'UnitaMisura',

},
__Dati_Data007: {
type: Date,
alias: 'DataScadenzaSottoscrizione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data008: {
type: Date,
alias: 'DataScadenzaGaranzia',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero006: {
type: Number,
alias: 'DurataGaranzia',

},
__Dati_Numero007: {
type: Number,
alias: 'DurataSottoscrizione',

},
__Dati_Testo041: {
type: String,
alias: 'IdRubricaFornitore',

},
__Dati_Testo042: {
type: String,
alias: 'NomeRubricaFornitore',

},
__Dati_Numero008: {
type: Number,
alias: 'AnnoVendita',

},
__Dati_Testo043: {
type: String,
alias: 'IdVoceProgetto',

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
__Dati_Numero009: {
type: Number,
alias: 'Zero',

},
__Dati_Testo044: {
type: String,
alias: 'IdAccountDestinatario',

},
__Dati_Testo045: {
type: String,
alias: 'TxtAccountDestinatario',

},
__Dati_Testo046: {
type: String,
alias: 'TxtTipoImpianto',

},
__Dati_Testo047: {
type: String,
alias: 'IdTipoImpianto',

},
__Dati_Testo048: {
type: String,
alias: 'TxtImpianto',

},
__Dati_Testo049: {
type: String,
alias: 'CodiceImpianto',

},
__Dati_Numero010: {
type: Number,
alias: 'Progressivo',

},
__Dati_Testo050: {
type: String,
alias: 'IdFornituraItem',

},
__Dati_Testo051: {
type: String,
alias: 'IdItem',

},
__Dati_Testo052: {
type: String,
alias: 'IdOperatoreCommerciale',

},
__Dati_Testo053: {
type: String,
alias: 'IdOperatoreTecnico',

},
__Dati_Testo054: {
type: String,
alias: 'IdOperatoreInstallatore',

},
__Dati_Testo055: {
type: String,
alias: 'IdTipoStatoImpianto',

},
__Dati_Testo056: {
type: String,
alias: 'TxtTipoStatoImpianto',

},
__Dati_Numero011: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Numero012: {
type: Number,
alias: 'FlagDisponibile',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagRiparazione',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagRottamato',

},
__Dati_Testo057: {
type: String,
alias: 'TxtTipoStatoImpiantoAutomatico',

},
__Dati_Testo058: {
type: String,
alias: 'TxtSedeDestinatario',

},
__Dati_Testo059: {
type: String,
alias: 'IdRubricaDestinatarioCommerciale',

},
__Dati_Testo060: {
type: String,
alias: 'IdRubricaDestinatarioTecnico',

},
__Dati_Testo061: {
type: String,
alias: 'NomeRubricaDestinatarioCommerciale',

},
__Dati_Testo062: {
type: String,
alias: 'NomeRubricaDestinatarioTecnico',

},
__Dati_Testo063: {
type: String,
alias: 'IdOperatoreLogistica',

},
__Dati_Testo064: {
type: String,
alias: 'TxtOperatoreLogistica',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagAggiornaValori',

},
__Dati_Testo065: {
type: String,
alias: 'iBeacon_Id',

},
__Dati_Testo066: {
type: String,
alias: 'iBeacon_Major',

},
__Dati_Testo067: {
type: String,
alias: 'iBeacon_Minor',

},
__Dati_Testo068: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ImpiantiSchema;