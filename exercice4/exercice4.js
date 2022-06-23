let PU
let QTECOM
let PAP
let REM=0
let PORT=6
let TOT

PU=prompt("Saisir le prix unitaire ? ")
QTECOM=prompt("Quantité commandée ? ")
TOT=PU*QTECOM

if (TOT<100){
REM=0
REM=TOT-REM         
PORT=TOT*0.02
PAP=TOT+PORT
}


if (TOT>=100&&TOT<=200){
REM=TOT*0.05
REM=TOT-REM
}


if(TOT>200) {

REM=TOT*0.10
REM=TOT-REM
}

if(REM<500){
PORT=REM*0.02
PAP=REM+PORT
}

if (REM>500){
PORT=0
PAP=REM+PORT
}

else if(PORT<=6)
{
PORT=6
PAP=REM+PORT
}


console.log("PRIX SANS REMISE: "+TOT+ "€")
console.log("PRIX AVEC REMISE: "+REM+ "€")
console.log("FRAIS DE PORT: "+PORT+ "€")
console.log("PRIX À PAYER: "+PAP+ "€")