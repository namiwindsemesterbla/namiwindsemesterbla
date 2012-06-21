function Question (qname,
type,
qstring,
response,
corrects,
explan,
ifcorrect,ifwrong,ifnull,
img)
{this.qname=qname;
this.type=type;
this.qstring=qstring;
this.response=response;
this.corrects=corrects;
this.explan=explan;
this.ifcorrect=ifcorrect;
this.ifwrong=ifwrong;
this.ifnull=ifnull;
this.img=img;
}

resp=new Array("<font face=\"Verdana\" size=2>Masse geht vor Klasse, so viele Aufgaben wie m&ouml;glich sammeln.</font>","<font face=\"Verdana\" size=2>Von den PSP vergangener Pl&auml;ne l&auml;sst man besser die Finger, jedes Projekt ist neu.</font>","<font face=\"Verdana\" size=2>Im PSP geht es nur um den Inhalt des Projektes, Aufgaben wie Pr&auml;sentationen, Marketing, Genehmigungen usw. haben dort nicht zu suchen.</font>","<font face=\"Verdana\" size=2>Bei gro&szlig;en Projekten kann man Teile des PSP erst erstellen, wenn die Arbeiten einen gewissen Stand erreicht haben.</font>","<font face=\"Verdana\" size=2>Steht der PSP einmal, soll er nicht mehr ver&auml;ndert werden.</font>")
corr=new Array("0","1","1","0","1")
quest001 = new Question(
"Frage 1",
1,
"<font face=\"Verdana\" size=2>Welcher dieser Aussagen bezogen auf einen Projektstrukturplan stimmen Sie nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Zu Antwort 2: PSP vergangener Projekte liefern wichtige Informationen, auf die man nicht verzichten sollte.</font><br><font face=\"Verdana\" size=2>Zu Antwort 3: Im PSP stehen alle, wirklich alle zu erledigenden Aufgaben. Denn sie kosten alle Zeit.</font><br><font face=\"Verdana\" size=2>Zu Antwort 5: Auch der PSP entwickelt sich weiter, im Verlauf eines Projektes kommen immer Aufgaben hinzu, die hier erfasst werden m&uuml;ssen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Expertenbefragung</font>","<font face=\"Verdana\" size=2>Expertenbefragung</font>","<font face=\"Verdana\" size=2>Analyse der Abh&auml;ngigkeiten</font>","<font face=\"Verdana\" size=2>Dokumentenanalyse</font>","<font face=\"Verdana\" size=2>Auswertung alter Projekte</font>","<font face=\"Verdana\" size=2>Sch&auml;tzung der Dauer</font>")
corr=new Array("1","1","0","1","1","0")
quest002 = new Question(
"Frage 2",
1,
"<font face=\"Verdana\" size=2>Welche dieser Methoden kommt bei der Entwicklung eines PSP zum Einsatz?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Ein Arbeitspaket ist deutlich umfangreicher als die anderen.</font>","<font face=\"Verdana\" size=2>Zur Bearbeitung eines Arbeitspaketes sind sehr unterschiedliche Hilfsmittel erforderlich.</font>","<font face=\"Verdana\" size=2>Niemand im Projektteam hat Erfahrung mit dieser Art von Aufgabe.</font>","<font face=\"Verdana\" size=2>Das Arbeitspaket ist risikoreich und besonders wichtig f&uuml;r das Projekt.</font>","<font face=\"Verdana\" size=2>Ein Teammitglied kennt sich mit dem Arbeitspaket in allen Details aus.</font>")
corr=new Array("1","1","1","1","0")
quest003 = new Question(
"Frage 3",
1,
"<font face=\"Verdana\" size=2>Bei der Entwicklung eines PSP muss sich der Projektleiter entscheiden, wie detailliert er ihn gliedern will, in wie kleine Teile er die einzelnen Aufgaben aufteilen will. Im folgenden finden Sie Gr&uuml;nde, ein oder mehrere Arbeitspakete noch weiter in ihre Bestandteile zu zerlegen. Welchen stimmen Sie zu?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Ein Arbeitspaket kann mehrere Vorg&auml;nger bzw. Nachfolger haben.</font>","<font face=\"Verdana\" size=2>Je mehr Arbeitspakete parallel geplant werden k&ouml;nnen, um so k&uuml;rzer ist das Projekt.</font>","<font face=\"Verdana\" size=2>Mit Ausnahme von Start und Ende hat jedes Arbeitspaket mindestens einen Vorg&auml;nger und mindestens einen Nachfolger.</font>","<font face=\"Verdana\" size=2>Sind Abh&auml;ngigkeiten nicht klar zu erkennen, sollte man Arbeitspakete zu einem gr&ouml;&szlig;eren AP zusammenfassen.</font>","<font face=\"Verdana\" size=2>Je mehr Arbeitspakete parallel verlaufen, um so h&ouml;her ist der Abstimmungsaufwand.</font>")
corr=new Array("1","1","1","0","1")
quest004 = new Question(
"Frage 4",
1,
"<font face=\"Verdana\" size=2>Ein Projekt-Ablaufplan stellt die Abh&auml;ngigkeiten zwischen Arbeitspaketen dar. Welche der folgenden Aussagen &uuml;ber Ablaufplanung trifft zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Bei Antwort 4 ist das Gegenteil richtig, bei unklaren Abh&auml;ngigkeiten sollte man die AP weiter zergliedern, um besser „Durchzublicken“.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>die Anzahl Arbeitspakete im Projekt</font>","<font face=\"Verdana\" size=2>die Komplexit&auml;t der Abh&auml;ngigkeitsbeziehungen zwischen den Arbeitspaketen</font>","<font face=\"Verdana\" size=2>die Dauer des Projektes</font>","<font face=\"Verdana\" size=2>die Art von Aufgaben, die zu erledigen ist</font>","<font face=\"Verdana\" size=2>die Zust&auml;ndigkeiten bei der Erledigung der Aufgaben</font>")
corr=new Array("0","0","1","0","1")
quest005 = new Question(
"Frage 5",
1,
"<font face=\"Verdana\" size=2>Ihnen wird der Entwurf eines Ablaufplanes vorgelegt. Welche Information k&ouml;nnen Sie diesem nicht entnehmen?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Experten befragen</font>","<font face=\"Verdana\" size=2>vergangene Projekte auswerten</font>","<font face=\"Verdana\" size=2>Durchschnittswerte aller Arbeitspakete bilden</font>","<font face=\"Verdana\" size=2>weitere Zerlegung des Arbeitspakets in Teilschritte</font>","<font face=\"Verdana\" size=2>Sch&auml;tzung durch eine Gruppe vornehmen lassen</font>")
corr=new Array("0","0","1","0","0")
quest006 = new Question(
"Frage 6",
1,
"<font face=\"Verdana\" size=2>Die Dauer eines Arbeitspaketes zu sch&auml;tzen ist nicht ganz einfach. Welche der folgenden Hilfen halten Sie f&uuml;r nicht geeignet, einen Projektleiter hierbei zu unterst&uuml;tzten?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Je neuartiger ein Projekt ist, um so gro&szlig;z&uuml;giger sollte man am Anfang sch&auml;tzen.</font>","<font face=\"Verdana\" size=2>Im Zweifel sollte man optimistisch sein.</font>","<font face=\"Verdana\" size=2>die Leiter &auml;hnlicher Projekte fragen, wo es die gr&ouml;&szlig;ten Schwierigkeiten gab und dies im eigenen Plan ber&uuml;cksichtigen</font>","<font face=\"Verdana\" size=2>bei sehr kritischen Arbeitspaketen die Einsch&auml;tzung des Auftraggebers einholen</font>","<font face=\"Verdana\" size=2>Falls sich das Projektteam nicht einig ist, sollte der Projektleiter allein entscheiden.</font>")
corr=new Array("1","0","1","1","0")
quest007 = new Question(
"Frage 7",
1,
"<font face=\"Verdana\" size=2>Ein erfahrener Projektleiter gibt einem Neuling die folgenden Regeln f&uuml;r die Aufwandssch&auml;tzung mit auf den Weg. Welchen stimmen Sie zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Zu Antwort 2: Die Erfahrung lehrt: Es dauert alles l&auml;nger, als man es plant. Da ist zus&auml;tzlicher Optimismus fehl am Platz.</font><br><font face=\"Verdana\" size=2>Zu Antwort 5: Besser ist es, einen Durchschnittswert der Sch&auml;tzungen der einzelnen Teammitglieder zu bilden.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Hinweise zur Qualifikation, die zur Erledigung des Arbeitspaktes erforderlich ist</font>","<font face=\"Verdana\" size=2>Angaben zu Hilfsmitteln oder Werkzeugen, die zur Erledigung ben&ouml;tigt werden</font>","<font face=\"Verdana\" size=2>Hinweise auf Experten, die hinzugezogen werden m&uuml;ssen</font>","<font face=\"Verdana\" size=2>Kennzeichnung, dass die Aufwandssch&auml;tzung sehr unsicher ist</font>","<font face=\"Verdana\" size=2>Hinweise, dass bestimmte &Uuml;berpr&uuml;fungstermine eingehalten werden m&uuml;ssen</font>")
corr=new Array("1","1","1","1","1")
quest008 = new Question(
"Frage 8",
1,
"<font face=\"Verdana\" size=2>Bei der Aufwandssch&auml;tzung ist immer der zeitliche Aufwand in Personentagen zu sch&auml;tzen. H&auml;ufig ist es sinnvoll, diese Sch&auml;tzung um weitere Informationen zum Arbeitspaket zu erg&auml;nzen, um sp&auml;ter eine sinnvolle Projektplanung machen zu k&ouml;nnen. Welche der folgenden Informationen halten Sie in diesem Zusammenhang f&uuml;r sinnvoll?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Mangel an Personal</font>","<font face=\"Verdana\" size=2>zu hohe Erwartungen an das Ergebnis</font>","<font face=\"Verdana\" size=2>Vernachl&auml;ssigung von Schnittstellen</font>","<font face=\"Verdana\" size=2>&Uuml;bermotivation des Projektteams</font>","<font face=\"Verdana\" size=2>unrealistische Zeitpl&auml;ne</font>","<font face=\"Verdana\" size=2>schlechte Qualit&auml;t externer Dienstleister</font>")
corr=new Array("0","0","0","1","0","0")
quest009 = new Question(
"Frage 9",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie ein Reihe typischer Projektrisiken. Welche(s) halten Sie f&uuml;r vernachl&auml;ssigbar?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>bewusst mit dem Risiko leben und es im Auge behalten</font>","<font face=\"Verdana\" size=2>Aktennotiz anlegen</font>","<font face=\"Verdana\" size=2>Plan &auml;ndern</font>","<font face=\"Verdana\" size=2>Risiko ignorieren</font>","<font face=\"Verdana\" size=2>Alternativplan entwickeln</font>","<font face=\"Verdana\" size=2>Fr&uuml;hwarnsignale festlegen</font>")
corr=new Array("0","1","0","1","0","0")
quest010 = new Question(
"Frage 10",
1,
"<font face=\"Verdana\" size=2>Welches ist keine sinnvolle Methode des Risikomanagements?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>unzureichend qualifiziertes Personal – Trainingsma&szlig;nahmen</font>","<font face=\"Verdana\" size=2>zu wenig Personal – Fremdvergabe planen</font>","<font face=\"Verdana\" size=2>unrealistische Zeitplanung – Puffer einplanen</font>","<font face=\"Verdana\" size=2>st&auml;ndige Ziel&auml;nderungen – h&auml;ufig mit Auftraggeber kommunizieren</font>","<font face=\"Verdana\" size=2>schlechte Arbeitsqualit&auml;t – Arbeitspakete schriftlich definieren</font>","<font face=\"Verdana\" size=2>zu hohe Erwartungen an das Ergebnis – Machbarkeitsstudie durchf&uuml;hren</font>")
corr=new Array("0","0","0","1","0","0")
quest011 = new Question(
"Frage 11",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie typische Projektrisiken und jeweils einen Vorschlag, wie man mit ihnen umgehen kann. Welchem Vorschlag folgen Sie nicht?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Zu Antwort 4: Hier hilft nur ein klarer, schriftlicher Projektauftrag.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Personentage sind nicht automatisch Kalendertage, denn selten arbeitet jemand nur f&uuml;r ein Projekt.</font>","<font face=\"Verdana\" size=2>F&uuml;r Vorbereitungsarbeiten, Abstimmungen usw. sollte man die Personentage mit einem Faktor 1,3 bis 1,5 multiplizieren, um den tats&auml;chlichen Aufwand zu erhalten.</font>","<font face=\"Verdana\" size=2>Arbeitspakete mit unsicherer Aufwandssch&auml;tzung sollte man zun&auml;chst nur vorl&auml;ufig einplanen.</font>","<font face=\"Verdana\" size=2>Ist der Endtermin nicht einzuhalten, besteht ein L&ouml;sungsweg darin, weitere Arbeitspakete parallel oder &uuml;berlappend einzuplanen.</font>","<font face=\"Verdana\" size=2>Je mehr Arbeitspakete parallel bearbeitet werden, um so mehr Kontrolltermine f&uuml;r den Projektleiter sind einzuplanen.</font>")
corr=new Array("0","0","1","0","0")
quest012 = new Question(
"Frage 12",
1,
"<font face=\"Verdana\" size=2>Bei der endg&uuml;ltigen Projektplanung werden den Arbeitspakten Termine zugeordnet. Welche der folgenden Regeln f&uuml;r die Terminplanung ist nicht hilfreich?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Gerade solche Arbeitspakete sind besonders sorgf&auml;ltig zu behandeln. Ggf. sind sie noch einmal zu analysieren und der Aufwand noch einmal zu sch&auml;tzen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Es ist nicht bekannt, was alles zu tun ist – ausreichend Zeit f&uuml;r Arbeit am Strukturplan</font>","<font face=\"Verdana\" size=2>Die Teammitglieder haben Schwierigkeiten, klare Aussagen zu ihrer Verf&uuml;gbarkeit zu machen – Zeitmanagement-Training f&uuml;r das gesamte Team</font>","<font face=\"Verdana\" size=2>Nicht alle Schnittstellen wurden ber&uuml;cksichtigt – mehr Meetings mit den anderen Projektleitern einplanen</font>","<font face=\"Verdana\" size=2>Abh&auml;ngigkeiten zwischen Arbeitspaketen wurden nicht erkannt – fertigen Projektplan noch einmal durch alle Beteiligten &uuml;berpr&uuml;fen lassen</font>")
corr=new Array("0","0","1","0")
quest013 = new Question(
"Frage 13",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie einige Gr&uuml;nde, warum die Terminplanung fehlerhaft sein kann und Vorschl&auml;ge, wie man diese Fehlerquelle (nahezu) ausschalten kann. Welcher dieser Vorschl&auml;ge &uuml;berzeugt Sie nicht?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Dies erh&ouml;ht den zeitlichen Aufwand noch. Besser ist es, zu Beginn des Projektes in die Schnittstellenanalyse zu investieren.</font></small>",
1,
0,
0,
"");

questions = new Array (
quest001,quest002,quest003,quest004,quest005,quest006,quest007,quest008,quest009,quest010,quest011,quest012,quest013)

function doQuestion(quest)
{
var numdo;
var numord=eval(quest+1);
var i=-1, ii, type, myname, gadget;
type=questions[quest].type;
numdo=type>=3?1:questions[quest].response.length;

document.write("\n")
document.write("       <div id=\"q")
document.write(numord)
document.write("\" style=\"display:none\">\n")
document.write("       <table border=\"0\" width=\"100%\" cellspacing=\"4\" cellpadding=\"10\">\n")
document.write("       <tr>\n")
document.write("       <td width=\"5%\" align=\"center\" valign=\"top\" bgcolor=\"#E6E6FF\"><font face=\"Verdana,Arial\"\n")
document.write("      color=\"#000080\"><strong><small>")
document.write(numord)
document.write("</small></strong></font></td>\n")
document.write("       <td width=\"95%\" valign=\"top\" bgcolor=\"#F4F4FF\">\n")
document.write("       ")
if (questions[quest].img!="") {
document.write("\n")
document.write("          <p><img border=\"0\" src=\"")
document.write(questions[quest].img)
document.write("\"></p>\n")
document.write("       ")
}
document.write("\n")
document.write("       <p><font face=\"Verdana,Arial\" color=\"#000080\"><strong><small>")
document.writeln(questions[quest].qstring)
document.write("</small></strong></font></p>\n")
document.write("       ")
for (i=0; i<numdo; i++) {
myname=questions[quest].qname;
gadget="radio";
if (type>=3) gadget="text";
else if (type==1) {
myname+="_"+(i<9?"0":"")+(i+1);
gadget="checkbox";}
document.write("\n")
document.write("          &nbsp;")
document.write(" <input type="+gadget+" name=\""+myname);
if (type<3) document.write("\" value=\""+i+"\">\n")
else document.write("\" class=\"input\" value=\"\">\n")
document.write(" <small><small><font face=\"Verdana,Arial\" color=\"#000000\">")
if (type<3) document.write(questions[quest].response[i]);
document.write("</font></small></small><br>\n")
document.write("       ")
}
document.write("</td>\n")
document.write("       </tr>\n")
document.write("       </table>\n")
document.write("       </div>\n")
document.write("       <div id=\"q")
document.write(numord)
document.write("a\" style=\"display:none\">\n")
document.write("       <p>\n")
document.write("          ")
if (quest>0) {
document.write("\n")
document.write("              <a href=\"javascript:void(0)\" ")
document.write(" onClick=\"myshow("+(quest)+")\"")
document.write(" onmouseout=\"flipImage ('Back")
document.write(numord)
document.write("', 'BackImage_normal');\" onmouseover=\"flipImage ('Back")
document.write(numord)
document.write("', 'BackImage_up');\"><img alt=\"Back\" border=0 height=50 width=78 name=Back")
document.write(numord)
document.write(" src=\"m_back_button.gif\"></a>\n")
document.write("          ")
}
document.write("\n")
document.write("          ")
if (quest<questions.length-1) {
document.write("\n")
document.write("             <a href=\"javascript:void(0)\" ")
document.write(" onClick=\"myshow("+(quest+2)+")\"")
document.write(" onmouseout=\"flipImage ('Next")
document.write(numord)
document.write("', 'NextImage_normal');\" onmouseover=\"flipImage ('Next")
document.write(numord)
document.write("', 'NextImage_up');\"><img alt=\"Next\" border=0 height=50 width=78 name=Next")
document.write(numord)
document.write(" src=\"m_next_button.gif\"></a>\n")
document.write("          ")
}
document.write("\n")
document.write("          ")
if (quest==questions.length-1) {
document.write("\n")
document.write("             <a href=\"javascript:void(0)\" ")
document.write(" onClick='correct(document.WapForm)'")
document.write(" onmouseout=\"flipImage ('ShowEval', 'EvaluateImage_normal');\" onmouseover=\"flipImage ('ShowEval', 'EvaluateImage_up');\"><img alt=\"Evaluate\" border=0 height=50 width=78 name=ShowEval src=\"m_eval_button.gif\"></a>\n")
document.write("          ")
}
document.write("\n")
document.write("       </p>\n")
document.write("       </div>\n")
document.write("    ")
}
function doTest() {
var count, i;
if (navigator.appName!="Microsoft Internet Explorer")
{
alert('Dieses Quiz erfordert\nMicrosoft Internet Explorer');
return;
}

count=questions.length;
for (i=0; i<count; i++) doQuestion(i);
}
function fill(s,l){
s=s+""
for (y=1;y<=l;y++)
if (s.length>=l) break; else s="0"+s;
return s
}
function CheckQName(wapf,ii,i,multi,selection){
var len;
if (!multi) return(wapf.elements[ii].name==questions[i].qname);
len=questions[i].qname.length;
if (wapf.elements[ii].name.substring(0,len)!=questions[i].qname) return false;
if (wapf.elements[ii].name.substring(len,len+1)!="_") return false;
if (eval(wapf.elements[ii].name.substring(len+1,len+3))==(selection+1)) return true;
return false;
}
function errore(uno,due,tre)
{
if (!errori) winr.document.write("<H3>Sie haben folgende Fehler gemacht</H3>");
++errori;
winr.document.write("<p><b>"+uno+"</b><br>"+due+"<br>"+tre+"</p>");
}
function testIE5plus(){
var pos=navigator.appVersion.lastIndexOf('MSIE ');
if (pos != -1) {
pos+=5;
if (eval(navigator.appVersion.charAt(pos))>4)
return true;}
return false;}
function correct(wapf)
{
var i, ii, t, re, tmp, selection, multi, type, isnull, iswrong, iscorrect, evaluation=0, total=0, udat;
errori=0;
udat=new Array();
for (i=0, ii=0; i<wapf.elements.length; i++)
{tmp=wapf.elements[i];
if (tmp.name.substring(0,13)=="Quiz.UserData"){
t=tmp.name.substring(14,tmp.name.length);
re=new RegExp("_", "g");
t=t.replace(re," ");
udat[ii++]=t+": <i>"+tmp.value+"</i><br>";}}
winr=window.open('','wapres', 'titlebar=1,location=0,directories=0,menubar=1,toolbar=0,scrollbars=1,resizable=1,status=1')
winr.document.write("<html><head><title>Ergebnis</title><BASE target='_blank'></head><body bgcolor='#FFFFFF'><font face='Verdana, Arial'><table border=0 cellpadding=0 cellspacing=0 width='100%' bgcolor='#C0C0C0'><tr><td width='100%'><font face='Verdana, Arial' size=5 color='#FFFFFF'><b>&nbsp;Ergebnis</b></font></td></tr></table>")
now= new Date()
winr.document.write("<small><p>"+fill(now.getDate(),2)+"/"+fill((now.getMonth()+1),2)+"/"+now.getYear()+"&nbsp;&nbsp;"+fill(now.getHours(),2)+":"+fill(now.getMinutes(),2)+"</p>")
if (udat.length>0) {
//winr.document.write("<b>Information</b><br>\n");
for (i=0; i<udat.length; i++) winr.document.write(udat[i]);}

for (i=0; i<questions.length; i++) {
type=questions[i].type;
if (type==1) multi=1;
else multi=0;
isnull=true;
iscorrect=false;iswrong=false;
selection=0;
evaluation=0;
for (ii=0; ii<wapf.elements.length; ii++) {
if (CheckQName(wapf,ii,i,multi,selection)) {
if (type>=3 && wapf.elements[ii].value!="") {
isnull=false;
if (wapf.elements[ii].value.toLowerCase()==questions[i].corrects.toLowerCase()) iscorrect=true;
else iswrong=true;
++selection;}
else if (wapf.elements[ii].checked) {
if (isnull) isnull=false;
if (questions[i].corrects[selection]=="1") iscorrect=(iswrong==false)?true:false;
else {
iswrong=true;
if (multi) errore(questions[i].qname,"Die Auswahlbox  <i>"+questions[i].response[selection]+"</i>  sollte nicht markiert sein.",questions[i].explan)
}} else {
if (questions[i].corrects[selection]=="1") {
iswrong=true;
if (multi) errore(questions[i].qname,"Die Auswahlbox  <i>"+questions[i].response[selection]+"</i>  sollte markiert sein.",questions[i].explan);
}}
++selection;
}}
if (multi==false && (isnull || iswrong)) {
var okresp, z;
if (type>=3) okresp=questions[i].corrects;
else {
for (z=0; z<questions[i].corrects.length; z++) {
if (questions[i].corrects[z]==1) {
okresp=questions[i].response[z];
break;
}}}
errore(questions[i].qname,"Die richtige Antwort ist <i>"+okresp+".</i>",questions[i].explan);
}
if (isnull) evaluation+=questions[i].ifnull;
else if (iswrong) evaluation+=questions[i].ifwrong;
else if (iscorrect) evaluation+=questions[i].ifcorrect;
total+=evaluation;}
if (errori) winr.document.write("<br><b>Sie haben "+errori+" Fehler gemacht.</b>");
else winr.document.write("<h3>Herzlichen Glückwunsch, absolut fehlerfrei</h3>")
winr.document.write("<br><b>Gesamtpunkte: "+total+".</b><br>");

winr.document.write("</small><hr noshade><center><form>")
printest=(((navigator.appName=='Netscape') && (navigator.appVersion.charAt(0)>='4')) || (testIE5plus() == true))? 'print()': 'alert("Diese Funktion ist nur bei Netscape Navigator 4 oder\nMicrosoft Internet Explorer 5 verf&uuml;gbar. Bitte benutzen Sie die\nDruckfunktion Ihres Browsers.")'
winr.document.write("<input type='button' value='Drucken...' onClick='"+printest+"'>&nbsp;&nbsp;&nbsp;&nbsp;")
winr.document.write("<input type='button' value='Schlie&szlig;en' onClick='window.close()'></form></center>")
winr.document.write(aknw)
winr.document.close()
if (navigator.appVersion.lastIndexOf('MSIE 3') == -1) nomsie3=true
else nomsie3=false
if (nomsie3) winr.focus()
}
aknw="<br><p align='center'><small><small>Entworfen und erstellt mit <a title='Zur Website von WebQuiz hier klicken' href='http://www.smartlite.it/go.asp?OLDLO' target = '_blank'>SmartLite WebQuiz</a></small></small></p>"
var recent, recent2, recdone=false;
function myshow(count)
{
var id, id2;
id=eval("q"+count);
id2=eval("q"+count+"a");
if (recdone==false) {
recent=wq_user;
recent2="";
recdone=true;}
recent.style.display="none";
if (recent2!="") recent2.style.display="none";
id.style.display="";
id2.style.display="";
if (questions[count-1].type>2) document.WapForm.elements[questions[count-1].qname].focus();
recent=id;recent2=id2;}
