exports.action = function(data){

JarvisAskMe('tu es né quand ...',function(result){
    console.log("donc vous êtes né le : "+result.trim())

   
function getpet (result) {

var mois = ""
    if (result.search('janvier')    >-1){ var mois="1"}
    if (result.search('février')    >-1){ var mois="2"}
    if (result.search('mars')       >-1){ var mois="3"}
    if (result.search('avril')      >-1){ var mois="4"}
    if (result.search('mai')        >-1){ var mois="5"}
    if (result.search('juin')       >-1){ var mois="6"}
    if (result.search('juillet')    >-1){ var mois="7"}
    if (result.search('aout')       >-1){ var mois="8"}
    if (result.search('septembre')  >-1){ var mois="9"}
    if (result.search('octobre')    >-1){ var mois="10"}
    if (result.search('novembre')   >-1){ var mois="11"}
    if (result.search('décembre')   >-1){ var mois="12"}
if(mois=="")    {console.log(mois);return false}

   var day=result.replace(new RegExp('[^0-9]', 'ig'),"")//on garde que les chiffres
console.log('on garde ceci : '+day) 
if(day.length<1){JarvisIASpeech("je n'ai pas compris");return false}
			console.log(mois);
            console.log("jour : "+day+" mois "+mois);

var msg = "";{
if( ((mois==12)&&(day>=13))  || ((mois==1)&& (day<=9)) ) {var msg="un lézard !"}
if( ((mois==1)&&(day>=10))  || ((mois==2)&& (day<=6)) ) {var msg="un gorille ou singe !"}
if( ((mois==2)&&(day>=7))  || ((mois==3)&& (day<=6))) {var msg="une faucon !"}
if( ((mois==3)&&(day>=7))  || ((mois==4)&& (day<=3))) {var msg="un jaguard !"}
if( ((mois==4)&&(day>=4)) || ((mois==5)&& (day<=1))) {var msg="un renard ou un chien !"}
if( ((mois==5)&&(day>=2)) || ((mois==5)&& (day<=29))) {var msg="un serpent !"}
if( ((mois==5)&&(day>=30)) || ((mois==6)&& (day<=26))) {var msg="un écureuil !"}
if( ((mois==6)&&(day>=27)) || ((mois==7)&& (day<=25))) {var msg="une tortue !"}

if( ((mois==7)&&(day>=26)) || ((mois==8)&& (day<=22))) {var msg="une chauve-souris !"}
if( ((mois==8)&&(day>=23)) || ((mois==9)&& (day<=19))) {var msg="un scorpion !"}
if( ((mois==9)&&(day>=20)) || ((mois==10)&& (day<=17))) {var msg="un cerf !"}
if( ((mois==10)&&(day>=18)) || ((mois==11)&& (day<=14))) {var msg="une chouette !"}
if( ((mois==11)&&(day>=15)) || ((mois==12)&& (day<=12))) {var msg="un paon !"}
 
			console.log(msg);
			JarvisIASpeech("Alors... dans l'ancienne astrologie Maya, vous aurez été "+msg);
}
}
  getpet (result)
return  
})
}