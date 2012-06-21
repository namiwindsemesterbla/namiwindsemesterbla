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

resp=new Array("<font face=\"Verdana\" size=2>Was soll genau das Ergebnis des Projektes sein?</font>","<font face=\"Verdana\" size=2>Welche Randbedingungen sind zu beachten?</font>","<font face=\"Verdana\" size=2>Welches ist der &uuml;bergeordnete Zweck des Projektes, warum wird es gemacht?</font>","<font face=\"Verdana\" size=2>Was soll nicht herauskommen?</font>","<font face=\"Verdana\" size=2>Welche Ressourcen stehen zur Verf&uuml;gung?</font>","<font face=\"Verdana\" size=2>Gibt es Standards f&uuml;r die Abwicklung von Projekten?</font>")
corr=new Array("1","1","1","1","1","1")
quest001 = new Question(
"Frage 1",
1,
"<font face=\"Verdana\" size=2>Stellen Sie sich vor, Sie sind frisch ernannter Projektleiter und f&uuml;hren ein erstes Gespr&auml;ch mit dem Auftraggeber. Welche der folgenden Fragen halten sie in einem solchen Gespr&auml;ch f&uuml;r unerl&auml;sslich?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Begr&uuml;&szlig;ung, Vorstellung</font>","<font face=\"Verdana\" size=2>&Uuml;bersicht aktueller Stand des Projektes</font>","<font face=\"Verdana\" size=2>Auswahl der Teammitglieder</font>","<font face=\"Verdana\" size=2>Analyse der Ausgangssituation</font>","<font face=\"Verdana\" size=2>Erarbeitung der Grobplanung</font>")
corr=new Array("0","0","1","0","0")
quest002 = new Question(
"Frage 2",
1,
"<font face=\"Verdana\" size=2>Stellen Sie sich vor, Sie laden zum Startworkshop eines Ihrer Projekte ein. Welche Punkte geh&ouml;ren nicht auf die Tagesordnung?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Das Team sollte bereits vor dem Startworkshop feststehen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Wie ist die Aufgabenstellung?</font>","<font face=\"Verdana\" size=2>Welche Chancen sind erkennbar?</font>","<font face=\"Verdana\" size=2>Welche Randbedingungen sind zu beachten?</font>","<font face=\"Verdana\" size=2>Welche Schnittstellen gibt es?</font>","<font face=\"Verdana\" size=2>Welche Risiken sind erkennbar?</font>","<font face=\"Verdana\" size=2>Wie lautet die Zielformulierung?</font>")
corr=new Array("0","0","0","0","0","1")
quest003 = new Question(
"Frage 3",
1,
"<font face=\"Verdana\" size=2>Welche der folgenden Fragestellungen geh&ouml;rt nicht in die Situationsanalyse eine Projektes?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Die Situationsanalyse ist ein Schritt, um die Ableitung der Zielformulierung vorzubereiten, eine Zielformulierung an dieser Stelle w&auml;re zu fr&uuml;h.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Software muss ohne neue Hardware eingef&uuml;hrt werden.</font>","<font face=\"Verdana\" size=2>Regeln des Corporate Designs m&uuml;ssen eingehalten werden.</font>","<font face=\"Verdana\" size=2>Teammitglieder sind auch w&auml;hrend der Projektarbeit an Weisungen ihrer unmittelbaren Vorgesetzten gebunden.</font>","<font face=\"Verdana\" size=2>Die Aufgabenverteilung im Projektteam bedarf der Zustimmung der Abteilungen, aus denen die Teammitglieder stammen.</font>","<font face=\"Verdana\" size=2>Projekt ist ohne &Uuml;berstunden zu realisieren.</font>")
corr=new Array("0","0","1","1","0")
quest004 = new Question(
"Frage 4",
1,
"<font face=\"Verdana\" size=2>Projekte werden nicht im luftleeren Raum durchgef&uuml;hrt, sie m&uuml;ssen immer Randbedingungen ber&uuml;cksichtigen. Im folgenden finden Sie einige typische Bedingungen. Welche w&uuml;rden Sie nicht akzeptieren?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Dies w&auml;ren Eingriffe in die Verantwortung des Projektleiters, die dieser keinesfalls akzeptieren sollte. F&uuml;r die Zeit der Projektarbeit muss er weisungsbefugt sein.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Stakeholder findet man innerhalb und au&szlig;erhalb der Organisation.</font>","<font face=\"Verdana\" size=2>Stakeholder ist jeder, der dem Projekt schaden kann.</font>","<font face=\"Verdana\" size=2>Kleine Stakeholdergruppen soll man zu einer gro&szlig;en zusammenfassen, das erleichtert die &Uuml;bersicht.</font>","<font face=\"Verdana\" size=2>Man soll sich vor allem um die Stakeholder k&uuml;mmern, die das Projekt behindern k&ouml;nnen.</font>","<font face=\"Verdana\" size=2>Stakeholder-Pflege ist Aufgabe des Auftraggebers.</font>")
corr=new Array("0","0","1","1","0")
quest005 = new Question(
"Frage 5",
1,
"<font face=\"Verdana\" size=2>Stakeholder sind Personen oder Gruppen, die vom Projekt betroffen sind. Welche der folgenden Aussagen halten Sie bezogen auf diese f&uuml;r falsch?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Die Gr&ouml;&szlig;e einer Anspruchsgruppe sagt nichts &uuml;ber ihren Einfluss aus. Zudem k&ouml;nnen die Erwartungen auch kleiner Gruppen sehr unterschiedlich sein. Auch die positiv gestimmten Stakeholder sind wichtig, sie helfen beim Kampf um Kopf und Herzen der Gegner.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Mitarbeiter</font>","<font face=\"Verdana\" size=2>Kunden</font>","<font face=\"Verdana\" size=2>Top-Management</font>","<font face=\"Verdana\" size=2>Personalvertretung</font>","<font face=\"Verdana\" size=2>Betroffene Abteilung</font>","<font face=\"Verdana\" size=2>Sekret&auml;rinnen</font>")
corr=new Array("0","0","0","0","0","1")
quest006 = new Question(
"Frage 6",
1,
"<font face=\"Verdana\" size=2>Es gibt typische Stakeholder, die in den meisten Projekten auftreten. Welche der folgenden z&auml;hlen Sie nicht dazu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Sie haben oft gro&szlig;en Einfluss, sind aber keine typische Anspruchsgruppe, die auf besondere Art und Weise betreut werden sollte.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>festlegen der Zielgruppen im Projektmarketing</font>","<font face=\"Verdana\" size=2>ableiten des Projektzieles (Was soll erreicht werden?)</font>","<font face=\"Verdana\" size=2>Differenzierung des Projektzieles in Muss-, Soll- und Kannziele</font>","<font face=\"Verdana\" size=2>Projektablaufplanung</font>","<font face=\"Verdana\" size=2>festlegen der Ma&szlig;nahmen im Projektmarketing</font>","<font face=\"Verdana\" size=2>Risikoanalyse des Projektes</font>")
corr=new Array("0","0","0","1","0","0")
quest007 = new Question(
"Frage 7",
1,
"<font face=\"Verdana\" size=2>In einer Stakeholderanalyse werden die Erwartungen verschiedener Gruppen an das Projekt ermittelt. Diese Erkenntnisse sind im weiteren Verlauf des Projektes sehr wichtig. Im folgenden finden Sie einige Beispiele, wo dies der Fall ist. Welchem Beispiel stimmen Sie nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Die Projektablaufplanung basiert auf der Projektstrukturplanung. Informationen aus der Stakeholderanalyse gehen in den PSP ein und damit allenfalls indirekt in die Ablaufplanung.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>S f&uuml;r schnell</font>","<font face=\"Verdana\" size=2>M f&uuml;r machbar</font>","<font face=\"Verdana\" size=2>A f&uuml;r anspruchsvoll</font>","<font face=\"Verdana\" size=2>R f&uuml;r realistisch</font>","<font face=\"Verdana\" size=2>T f&uuml;r terminlich strukturiert</font>")
corr=new Array("1","1","0","0","0")
quest008 = new Question(
"Frage 8",
1,
"<font face=\"Verdana\" size=2>Ziele sollen SMART sein. Die Buchstaben stehen f&uuml;r bestimmte Eigenschaften. Welche trifft nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>1. S f&uuml;r spezifisch, 2. M f&uuml;r messbar</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>80 % der bis zum 31.12.2004 befragten Kunden geben unserem Service die Note 2 auf einer Skala von 1 bis 5.</font>","<font face=\"Verdana\" size=2>Bei einer 5 %igen Stichprobe aller 2003 ausgehenden Bescheide werden 70 % von einem unabh&auml;ngigen Experten als gut verst&auml;ndlich eingestuft.</font>","<font face=\"Verdana\" size=2>Die neue Projektmanagement-Software ist bis zum 30.09.2005 im ganzen Unternehmen eingef&uuml;hrt.</font>","<font face=\"Verdana\" size=2>Bis zum 30.06.2005 sinkt die Zahl nicht termingerecht erledigter Projekt-Arbeitspakete auf 5% aller Arbeitspakete.</font>","<font face=\"Verdana\" size=2>Die Kunden &auml;ndern ab dem 01.01.2005 ihre Stammdaten &uuml;ber das Internet.</font>")
corr=new Array("0","0","1","0","1")
quest009 = new Question(
"Frage 9",
1,
"<font face=\"Verdana\" size=2>Ziele sollen messbar sein. Welcher der folgenden Formulierungen erf&uuml;llt nicht die Anforderungen an die Messbarkeit von Zielen?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Zu Antwort 3: Wer nutzt die Software und in welchem Ausma&szlig; (welche Funktionen)?</font><br><font face=\"Verdana\" size=2>Zu Antwort 5: Alle Kunden? Alle Stammdaten? Sofort ab dem 01.01.2005 und ohne Ausnahme?</font><br></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Ich schreibe jeden 1. Montag im Monat eine E-Mail mit neuen Informationen f&uuml;r meine Kunden!</font>","<font face=\"Verdana\" size=2>Ich werde mich mehr um meine Kinder k&uuml;mmern.</font>","<font face=\"Verdana\" size=2>Bei maximal 3 % unserer Lieferung im Jahr 2004 haben Kunden R&uuml;ckfragen.</font>","<font face=\"Verdana\" size=2>Jeder Mitarbeiter macht drei Verbesserungsvorschl&auml;ge.</font>","<font face=\"Verdana\" size=2>Alle Sekret&auml;rinnen beherrschen das neue Textverarbeitungsprogramm bis Ende 2004.</font>")
corr=new Array("0","1","0","1","1")
quest010 = new Question(
"Frage 10",
1,
"<font face=\"Verdana\" size=2>Welcher der folgenden S&auml;tze ist keine vollst&auml;ndige Zielformulierung?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>2 Messgr&ouml;&szlig;en fehlen.</font><br><font face=\"Verdana\" size=2>4 Terminangabe fehlt, bis wann, in welchem Zeitraum.</font><br><font face=\"Verdana\" size=2>5 Das ganze Programm? Angabe &uuml;ber die zu beherrschenden Funktionen fehlt.</font><br></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Die Grobplanung zeigt allen Beteiligten schon vor einer aufwendigen Detailplanung auf, wie der Weg zum Ziel aussieht.</font>","<font face=\"Verdana\" size=2>Die Grobplanung hilft, die Realit&auml;tsn&auml;he der Zielformulierung zu &uuml;berpr&uuml;fen.</font>","<font face=\"Verdana\" size=2>Der Auftrag f&uuml;r den n&auml;chsten Projektabschnitt (Planungsphase) muss die weitere Vorgehensweise beinhalten. Hierzu ben&ouml;tigt man die Grobplanung.</font>","<font face=\"Verdana\" size=2>Eine gute Grobplanung kann bei innovativen Projekten die Detailplanung &uuml;berfl&uuml;ssig machen.</font>","<font face=\"Verdana\" size=2>Der Auftraggeber ist so leichter in der Lage, eine pers&ouml;nliche Risikoabw&auml;gung vorzunehmen.</font>")
corr=new Array("1","1","1","0","1")
quest011 = new Question(
"Frage 11",
1,
"<font face=\"Verdana\" size=2>Zur Definition eines Projektes geh&ouml;rt neben einer pr&auml;zisen Zielformulierung auch eine grobe Durchf&uuml;hrungsplanung. Welchem der folgenden Gr&uuml;nde f&uuml;r die Notwendigkeit einer solchen Grobplanung stimmen Sie zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>4 ist falsch, denn auch bei innovativen Projekten ist eine Detailplanung erforderlich.</font><br></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Welche Hauptaufgaben sind zu erf&uuml;llen?</font>","<font face=\"Verdana\" size=2>Wann sind Meilensteintermine?</font>","<font face=\"Verdana\" size=2>Welche Kosten werden ungef&auml;hr entstehen?</font>","<font face=\"Verdana\" size=2>Wie lange werden die Hauptaufgaben dauern?</font>","<font face=\"Verdana\" size=2>Welche Risiken sind erkennbar?</font>","<font face=\"Verdana\" size=2>Wer pr&auml;sentiert die Zwischenergebnisse?</font>")
corr=new Array("0","0","0","0","0","1")
quest012 = new Question(
"Frage 12",
1,
"<font face=\"Verdana\" size=2>Welche der folgenden &Uuml;berlegungen ist bei der Grobplanung eines Projektes &uuml;berfl&uuml;ssig?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Pr&auml;sentation</font>","<font face=\"Verdana\" size=2>Projektposter</font>","<font face=\"Verdana\" size=2>Intranet</font>","<font face=\"Verdana\" size=2>Gespr&auml;ch</font>","<font face=\"Verdana\" size=2>E-Mail</font>","<font face=\"Verdana\" size=2>Firmenzeitung</font>")
corr=new Array("1","1","1","1","1","1")
quest013 = new Question(
"Frage 13",
1,
"<font face=\"Verdana\" size=2>Im Projektmarketing versucht man, die Anspruchsgruppen &uuml;ber den jeweils besten Weg (Informationskanal) &uuml;ber das Projekt zu informieren. Welchen der folgenden Wege halten Sie f&uuml;r geeignet?</font>",
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
