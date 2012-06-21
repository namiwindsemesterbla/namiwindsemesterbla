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

resp=new Array("<font face=\"Verdana\" size=2>neue Werbekampagne</font>","<font face=\"Verdana\" size=2>Abteilungsfeier</font>","<font face=\"Verdana\" size=2>Monatsinventur</font>","<font face=\"Verdana\" size=2>neue Software einf&uuml;hren</font>","<font face=\"Verdana\" size=2>Qualit&auml;tsprobleme bei einem Produkt</font>","<font face=\"Verdana\" size=2>Einstellung eines Mitarbeiters</font>")
corr=new Array("0","1","1","0","0","1")
quest001 = new Question(
"Frage 1",
1,
"<font face=\"Verdana\" size=2>Projekte sind nicht-allt&auml;gliche Vorhaben, die f&uuml;r eine Organisation eine besondere Bedeutung haben. Welches der folgenden Vorhaben gen&uuml;gt diesen Anspr&uuml;chen nicht?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Projektteam</font>","<font face=\"Verdana\" size=2>Projektmanagementsoftware</font>","<font face=\"Verdana\" size=2>Top-Management</font>","<font face=\"Verdana\" size=2>Kommunikation und Information</font>","<font face=\"Verdana\" size=2>Zielflexibilit&auml;t</font>","<font face=\"Verdana\" size=2>Projektleiter</font>")
corr=new Array("0","1","0","0","1","0")
quest002 = new Question(
"Frage 2",
1,
"<font face=\"Verdana\" size=2>Welcher der folgenden Faktoren ist kein wesentlicher Erfolgsfaktor f&uuml;r Projekte?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Projektmanagementsoftware ist nur ein Werkzeug, das mehr oder weniger intelligent genutzt werden kann. Zielflexibilit&auml;t, d.h. Ziel&auml;nderung ist ein echter Misserfolgsfaktor.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Orientierung am Endkunden</font>","<font face=\"Verdana\" size=2>Schnittstellen und Vernetzungen beachten</font>","<font face=\"Verdana\" size=2>vom Groben zum Detail vorgehen</font>","<font face=\"Verdana\" size=2>eine schrittweise Methodik w&auml;hlen</font>","<font face=\"Verdana\" size=2>Verantwortung auf viele Schultern verteilen</font>")
corr=new Array("0","0","0","0","1")
quest003 = new Question(
"Frage 3",
1,
"<font face=\"Verdana\" size=2>Welches der folgenden Prinzipien gilt nicht f&uuml;r die Projektarbeit?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Verantwortung muss personalisiert sein, d.h. einer Person zugeordnet werden k&ouml;nnen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Gesch&auml;ftsf&uuml;hrer</font>","<font face=\"Verdana\" size=2>Projektleiter</font>","<font face=\"Verdana\" size=2>Projektteam</font>","<font face=\"Verdana\" size=2>Teilprojektleiter</font>","<font face=\"Verdana\" size=2>Auftraggeber</font>","<font face=\"Verdana\" size=2>Unternehmensberater</font>")
corr=new Array("0","1","1","0","1","0")
quest004 = new Question(
"Frage 4",
1,
"<font face=\"Verdana\" size=2>In einer Projektorganisation gibt es so genannte Muss-Beteiligte, das sind Funktionen, die immer wahrgenommen werden m&uuml;ssen. Welche der folgenden sind dies?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>fachliches Projektergebnis erarbeiten</font>","<font face=\"Verdana\" size=2>geeignetes Vorgehen w&auml;hlen</font>","<font face=\"Verdana\" size=2>Beschl&uuml;sse &uuml;ber das Projekt f&auml;llen</font>","<font face=\"Verdana\" size=2>Aufgaben verteilen und das Team f&uuml;hren</font>")
corr=new Array("1","0","1","0")
quest005 = new Question(
"Frage 5",
1,
"<font face=\"Verdana\" size=2>Welche der folgenden Projektaufgaben geh&ouml;rt nicht zu 100% in die Verantwortung des Projektleiters?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>In Fachfragen sind immer auch Auftraggeber und/oder Kunden und/oder Experten zu fragen. Alle wichtigen Beschl&uuml;sse &uuml;ber das Projekt werden vom Auftraggeber und/oder vom Lenkungsausschuss gef&auml;llt.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>andere &uuml;berzeugen</font>","<font face=\"Verdana\" size=2>Konflikte schlichten</font>","<font face=\"Verdana\" size=2>Kosten kalkulieren</font>","<font face=\"Verdana\" size=2>Ziele setzen</font>","<font face=\"Verdana\" size=2>delegieren</font>","<font face=\"Verdana\" size=2>sich gut verkaufen</font>")
corr=new Array("0","0","0","0","0","1")
quest006 = new Question(
"Frage 6",
1,
"<font face=\"Verdana\" size=2>Welche der folgenden T&auml;tigkeiten geh&ouml;ren nicht zum Aufgabenbereich eines Projektleiters?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Er soll das Team und das Projekt „verkaufen“.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Projektauftr&auml;ge erteilen</font>","<font face=\"Verdana\" size=2>Projektergebnis abnehmen</font>","<font face=\"Verdana\" size=2>Aufgabenverteilung im Projektteam</font>","<font face=\"Verdana\" size=2>Ressourcen f&uuml;r das Projekt zur Verf&uuml;gung stellen</font>","<font face=\"Verdana\" size=2>Budgetverwaltung</font>","<font face=\"Verdana\" size=2>Projektmarketing</font>")
corr=new Array("0","0","1","0","1","0")
quest007 = new Question(
"Frage 7",
1,
"<font face=\"Verdana\" size=2>Der Auftraggeber spielt eine Schl&uuml;sselrolle. Welche Aufgaben liegen dennoch nicht in seinem Zust&auml;ndigkeitsbereich?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Diese Aufgaben obliegen eindeutig dem Projektleiter. Projektmarketing ist auch eine Kernaufgabe des Projektleiters, aber der Auftraggeber sollte hier auf Grund seiner herausgehobenen Stellung in der Organisation aktiv mitarbeiten.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>den Projektleiter von F&uuml;hrungsaufgaben entlasten</font>","<font face=\"Verdana\" size=2>die Koordination zwischen Teilprojekten entlasten</font>","<font face=\"Verdana\" size=2>Informationen auf einen kleinen Kreis eingrenzen</font>","<font face=\"Verdana\" size=2>Entscheidungsprozesse innerhalb des Projektes beschleunigen</font>","<font face=\"Verdana\" size=2>einen schnellen Wechsel innerhalb des Projektteams zu erm&ouml;glichen</font>")
corr=new Array("1","1","0","1","0")
quest008 = new Question(
"Frage 8",
1,
"<font face=\"Verdana\" size=2>Bei gro&szlig;en Projekten wird h&auml;ufig innerhalb des Projektteams eine sogenanntes Kernteam gebildet. Welche der folgenden Funktionen soll solche Kernteams &uuml;bernehmen?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Vorstellungsrunde machen</font>","<font face=\"Verdana\" size=2>Zeit f&uuml;r Fragen einr&auml;umen</font>","<font face=\"Verdana\" size=2>eine erste Projektplanung vorlegen</font>","<font face=\"Verdana\" size=2>&uuml;ber Ziele und Randbedingungen informieren</font>","<font face=\"Verdana\" size=2>Erwartungen kl&auml;ren</font>")
corr=new Array("1","1","0","1","1")
quest009 = new Question(
"Frage 9",
1,
"<font face=\"Verdana\" size=2>Ein neu zusammengesetztes Projektteam durchl&auml;uft beim ersten Treffen eine so genannte Orientierungsphase, die von Unsicherheit und vielen Fragen gepr&auml;gt ist. Mit welchen der folgenden Aktivit&auml;ten kann ein Projektleiter in der ersten Sitzung dem Team helfen, sich schnell zu finden?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Legt der Projektleiter schon jetzt eine erste Planung vor, f&uuml;hlt sich das Team &uuml;berfahren und wird demotiviert.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>regelm&auml;&szlig;iges Feedback</font>","<font face=\"Verdana\" size=2>Coaching</font>","<font face=\"Verdana\" size=2>laufen lassen, nicht st&ouml;ren</font>","<font face=\"Verdana\" size=2>konsequentes Controlling</font>","<font face=\"Verdana\" size=2>Ergebnisse dokumentieren</font>")
corr=new Array("0","0","1","0","0")
quest010 = new Question(
"Frage 10",
1,
"<font face=\"Verdana\" size=2>Stellen Sie sich vor, ein Team hat sich zu einem Hochleistungsteam entwickelt. Wie kann ein Projektleiter daf&uuml;r sorgen, dass es in dieser Leistungsphase bleibt? Welche der folgenden M&ouml;glichkeiten ist falsch?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Laufen lassen wird &uuml;ber kurz oder lang zur Folge haben, dass auftretende Konflikte nicht rechtzeitig gekl&auml;rt werden und das Team die Leistungsphase verl&auml;sst.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>den Diskutierer bremsen, in dem man andere Meinungen einholt</font>","<font face=\"Verdana\" size=2>den Schweiger durch gezielte Fragen aktivieren</font>","<font face=\"Verdana\" size=2>dem Alleswisser zeigen, wo seine Grenzen liegen</font>","<font face=\"Verdana\" size=2>den Uninteressierten nach seinen pers&ouml;nlichen Erfahrungen fragen</font>")
corr=new Array("0","0","1","0")
quest011 = new Question(
"Frage 11",
1,
"<font face=\"Verdana\" size=2>Projektmeetings sind nicht immer leicht zu leiten. Im folgenden finden Sie einige typische Teilnehmer und jeweils einen Vorschlag, wie man mit ihnen umgehen sollte. Welchen Vorschlag halten Sie f&uuml;r falsch?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Dies w&auml;re ein Angriff, der nicht ohne Folgen bleibt. Besser w&auml;re es, auf das Rederecht anderer zu verweisen oder ihn Zusammenfassungen machen zu lassen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>mit dem Negativen ein 4-Augen-Gespr&auml;ch f&uuml;hren</font>","<font face=\"Verdana\" size=2>dem Selbstdarsteller keine zustimmenden Reaktionen zeigen und andere zum Thema befragen </font>","<font face=\"Verdana\" size=2>dem Harmoniestifter die Schw&auml;chen eines fr&uuml;hen Kompromisses aufzeigen, bei Bedarf gezielt einsetzen</font>","<font face=\"Verdana\" size=2>den Positiven reden lassen</font>")
corr=new Array("0","0","0","1")
quest012 = new Question(
"Frage 12",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie weitere typische Teilnehmer und jeweils einen Vorschlag, wie man mit ihnen umgehen sollte. Welchen Vorschlag halten Sie hier f&uuml;r falsch?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Redet der Positive zu viel, wird er schnell abgelehnt und seine g&uuml;nstige Wirkung dreht sich ins Gegenteil. Er ist gut geeignet, um Zusammenfassungen zu machen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>ein kritischer Abschnitt wird erreicht</font>","<font face=\"Verdana\" size=2>Projektmeeting</font>","<font face=\"Verdana\" size=2>Abnahmetermin durch Kunden</font>","<font face=\"Verdana\" size=2>eine wichtige Entscheidung ist zu f&auml;llen</font>","<font face=\"Verdana\" size=2>ein wichtiges Teilergebnis ist erarbeitet</font>")
corr=new Array("0","1","0","0","0")
quest013 = new Question(
"Frage 13",
1,
"<font face=\"Verdana\" size=2>Meilensteine sind wichtige Ereignisse im Verlauf eines Projektes. Welches der folgenden Beispiele ist aus Ihrer Sicht kein Meilenstein?</font>",
resp,
corr,
"",
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
// winr.document.write("<b>Information</b><br>\n");
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
