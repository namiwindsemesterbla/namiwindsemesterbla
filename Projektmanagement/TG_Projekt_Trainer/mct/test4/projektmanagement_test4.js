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

resp=new Array("<font face=\"Verdana\" size=2>Ein Lieferant h&auml;lt Zusagen nicht ein – f&uuml;r die weitere Zusammenarbeit Konventionalstrafen vereinbaren</font>","<font face=\"Verdana\" size=2>Das Top-Management hat sich alles „ganz anders“ vorgestellt – pr&auml;zise Kosten und zeitlichen Aufwand f&uuml;r &Auml;nderungen ermitteln und pr&auml;sentieren</font>","<font face=\"Verdana\" size=2>Ein Teilprojekt wird voraussichtlich nicht rechtzeitig fertig – Meeting mit Teilprojektleiter, L&ouml;sung suchen, ggf. Auftraggeber einschalten</font>","<font face=\"Verdana\" size=2>Ein Teilprojekt ist wesentlich komplexer als erwartet und der Plan ist nicht mehr einzuhalten – auf Termineinhaltung bestehen</font>","<font face=\"Verdana\" size=2>Der Einsatz eines externen Beraters wird vom Team abgelehnt – zun&auml;chst nur einen Workshop mit ihm vereinbaren, Vertragsverl&auml;ngerung erst nach positivem Verlauf</font>","<font face=\"Verdana\" size=2>Ein Abteilungsleiter will seine Leute zur&uuml;ckziehen, weil die Arbeit in der Abteilung &uuml;berhand nimmt – Gespr&auml;che f&uuml;hren, auf Projektauftrag verweisen, ggf. Auftraggeber einschalten</font>")
corr=new Array("0","0","0","1","0","0")
quest001 = new Question(
"Frage 1",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie einige typische Probleme der Umsetzungsphase und Vorschl&auml;ge f&uuml;r eine Reaktion. Welchen Vorschlag halten Sie f&uuml;r ungeeignet?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Rechthaberei ersetzt nicht die gemeinsame Suche nach L&ouml;sungen, wenn es unerwartet Schwierigkeiten gibt.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Teammitglied austauschen – erh&ouml;hter Koordinationsaufwand, Einarbeitungszeit</font>","<font face=\"Verdana\" size=2>Projekt reorganisieren – Projekt wird von au&szlig;en als gescheitert eingestuft</font>","<font face=\"Verdana\" size=2>Externes Know-How einkaufen – es entsteht m&ouml;glicherweise fachliche Abh&auml;ngigkeit</font>","<font face=\"Verdana\" size=2>Lieferanten wechseln – langfristige Gesch&auml;ftsbeziehung gest&ouml;rt</font>","<font face=\"Verdana\" size=2>&Uuml;berstunden ansetzen – erh&ouml;hter Koordinationsaufwand, Motivationsprobleme</font>")
corr=new Array("0","0","0","1","0")
quest002 = new Question(
"Frage 2",
1,
"<font face=\"Verdana\" size=2>Ma&szlig;nahmen, um Soll-Ist-Abweichungen zu kompensieren, verursachen oft wieder eigene Probleme. Im folgenden finden Sie einige Ma&szlig;nahmen und m&ouml;gliche daraus resultierende Probleme. Welcher Aussagenkombination stimmen Sie nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Langwierige Gesch&auml;ftsbeziehungen ersetzen nicht Qualit&auml;t und Liefertreue.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Arbeitspakete parallel bearbeiten lassen – erh&ouml;hter Koordinationsaufwand</font>","<font face=\"Verdana\" size=2>zus&auml;tzliches Personal – Demotivation des Projektteams</font>","<font face=\"Verdana\" size=2>zus&auml;tzliches fremdes Personal – Einarbeitungszeit, erh&ouml;hter Koordinationsaufwand</font>","<font face=\"Verdana\" size=2>Fremdvergabe von Arbeitspaketen – erh&ouml;hter Kontrollaufwand</font>","<font face=\"Verdana\" size=2>Muss- in Sollziele verwandeln – Kundenanforderungen werden nicht mehr ganz erf&uuml;llt, schleichende Reduzierung des Ergebnisses</font>")
corr=new Array("0","1","0","0","0")
quest003 = new Question(
"Frage 3",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie weitere Ma&szlig;nahmen und m&ouml;gliche daraus resultierende Probleme. Welcher Aussagenkombination stimmen Sie nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Neues Personal stellt eine Hilfe und keinen Vorwurf des Versagens dar.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>erst die Methode, dann die Werkzeuge</font>","<font face=\"Verdana\" size=2>Der Aufwand zur Bedienung muss in einem vern&uuml;nftigen Verh&auml;ltnis zum Nutzen stehen.</font>","<font face=\"Verdana\" size=2>Wenn eine Software eingef&uuml;hrt wird, muss sie in allen Projekte eingesetzt werden.</font>","<font face=\"Verdana\" size=2>Alle im Team m&uuml;ssen ausreichend geschult werden.</font>","<font face=\"Verdana\" size=2>im Zweifel die einfachere L&ouml;sung w&auml;hlen</font>")
corr=new Array("0","0","0","1","0")
quest004 = new Question(
"Frage 4",
1,
"<font face=\"Verdana\" size=2>H&auml;ufig wird in Projekten mit einer speziellen Projektmanagementsoftware gearbeitet. Im folgenden finden Sie einige Aussagen, die sich auf den Einsatz solcher Programme beziehen. Welcher stimmen Sie nicht zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Wenn sich der Aufwand nicht lohnt, z.B. bei kleineren Projekten, kann durchaus „per Hand“ gearbeitet werden.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Was wurde bisher getan?</font>","<font face=\"Verdana\" size=2>Wo steht das Projekt?</font>","<font face=\"Verdana\" size=2>Wie ist die Stimmung im Projektteam?</font>","<font face=\"Verdana\" size=2>Welche Probleme gibt es?</font>","<font face=\"Verdana\" size=2>Was wird gegen Probleme unternommen?</font>","<font face=\"Verdana\" size=2>Was soll damit bewirkt werden?</font>")
corr=new Array("0","0","1","0","0","0")
quest005 = new Question(
"Frage 5",
1,
"<font face=\"Verdana\" size=2>Welche der folgenden Fragen muss ein Statusbericht nicht beantworten?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Diese Frage ist allenfalls dann aufzunehmen, wenn die Stimmung so schlecht ist, dass sie ein Projektrisiko darstellt.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Machen Sie keine Ausnahmen, die Bestimmungen &uuml;ber Statusberichte sind strikt einzuhalten.</font>","<font face=\"Verdana\" size=2>Werden Sie nicht nerv&ouml;s, wenn ein Projekt hinter Plan ist. Das kommt immer vor. Kritisch wird es erst dann, wenn der Projektleiter keine Vorschl&auml;ge macht, wie das Problem gel&ouml;st werden kann.</font>","<font face=\"Verdana\" size=2>K&uuml;mmern Sie sich zun&auml;chst um die Projekte, die Abweichungen vom Plan aufweisen.</font>","<font face=\"Verdana\" size=2>K&uuml;mmern Sie sich dann um die Projekte, wo Risiken erkennbar sind und pr&uuml;fen Sie die Ma&szlig;nahmen, die der Projektleiter vorschl&auml;gt.</font>","<font face=\"Verdana\" size=2>Projekte, die keine Abweichungen und/oder Risiken aufweisen, betrachten Sie nicht weiter.</font>")
corr=new Array("1","1","1","1","0")
quest006 = new Question(
"Frage 6",
1,
"<font face=\"Verdana\" size=2>Welcher der folgenden Empfehlungen f&uuml;r Auftraggeber, bezogen auf den Statusbericht, stimmen Sie zu?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Hier sollte ein Auftraggeber nicht viel Zeit investieren, aber f&uuml;r ein Lob f&uuml;r das Projektteam reicht die Zeit immer.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Berichte und Pr&auml;sentationen m&uuml;ssen schnell und &uuml;bersichtlich informieren.</font>","<font face=\"Verdana\" size=2>Eine einheitliche Form hilft dem Empf&auml;nger, sich auf die Sache zu konzentrieren.</font>","<font face=\"Verdana\" size=2>Eine einheitliche Form hilft dem Empf&auml;nger, bei einer gro&szlig;en Zahl Berichte oder Pr&auml;sentationen leichter den &Uuml;berblick zu behalten.</font>","<font face=\"Verdana\" size=2>Formbl&auml;tter stellen sicher, dass kein Aspekt vergessen wird.</font>","<font face=\"Verdana\" size=2>Bei Projekt-Pr&auml;sentationen sollte man im Interesse des Projektes die vielen M&ouml;glichkeiten einer Pr&auml;sentationssoftware nutzen.</font>","<font face=\"Verdana\" size=2>Es ist auch hilfreich zu wissen, dass ein Thema in einer bestimmten Situation nicht relevant ist.</font>")
corr=new Array("0","0","0","0","1","0")
quest007 = new Question(
"Frage 7",
1,
"<font face=\"Verdana\" size=2>Sie halten einen Vortrag vor jungen Projektleitern. Zum Thema Berichte und Pr&auml;sentationen hat Ihnen ein Mitarbeiter die folgenden Aussagen in Ihr Manuskript geschrieben. Welche streichen Sie wieder heraus?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Entscheidend sind die Informationsbed&uuml;rfnisse des Empf&auml;ngers (schnell, klar, sicher, handlungsorientiert). Nutzt man alle Gestaltungsm&ouml;glichkeiten einer Pr&auml;sentationssoftware f&uuml;hrt dies meist dazu, dass die Pr&auml;sentation &uuml;berladen und un&uuml;bersichtlich wirkt.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Welche offenen Punkte aus der vergangen Sitzung wurden erledigt?</font>","<font face=\"Verdana\" size=2>Welche offenen Punkte aus der vergangen Sitzung sind weiter offen?</font>","<font face=\"Verdana\" size=2>Welche Arbeitspakete wurden seit der letzten Sitzung bearbeitet?</font>","<font face=\"Verdana\" size=2>Wie ist der Bearbeitungsstand dieser Arbeitspakete? Welche sind nicht im Plan?</font>","<font face=\"Verdana\" size=2>Was h&auml;tte man dar&uuml;ber hinaus noch erledigen k&ouml;nnen?</font>")
corr=new Array("0","0","0","0","1")
quest008 = new Question(
"Frage 8",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie den ersten Teil der Agenda einer Statusbesprechung. Welchen TOP halten Sie f&uuml;r &uuml;berfl&uuml;ssig?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Arbeitspakete, die nicht im Plan sind: Ursachen und Konsequenzen?</font>","<font face=\"Verdana\" size=2>Wer ist daf&uuml;r verantwortlich?</font>","<font face=\"Verdana\" size=2>Wie k&ouml;nnen die Abweichungen wieder aufgefangen werden?</font>","<font face=\"Verdana\" size=2>Sind Risiken bei den kommenden Arbeitspaketen erkennbar?</font>","<font face=\"Verdana\" size=2>Welche Ma&szlig;nahmen sollten hierf&uuml;r ergriffen werden?</font>")
corr=new Array("0","1","0","0","0")
quest009 = new Question(
"Frage 9",
1,
"<font face=\"Verdana\" size=2>Im folgenden finden Sie den zweiten Teil der Agenda einer Statusbesprechung. Welchen TOP halten Sie f&uuml;r &uuml;berfl&uuml;ssig?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Die Suche nach Schuldigen hilft in aller Regel nicht weiter!</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>immer auf aktuellem Stand</font>","<font face=\"Verdana\" size=2>leicht verst&auml;ndliche Gliederung der Dokumente</font>","<font face=\"Verdana\" size=2>vollst&auml;ndige und korrekte Informationen</font>","<font face=\"Verdana\" size=2>einheitlich f&uuml;r alle Projekte geregelt</font>","<font face=\"Verdana\" size=2>vom Projektleiter zu f&uuml;hren</font>")
corr=new Array("1","1","1","1","0")
quest010 = new Question(
"Frage 10",
1,
"<font face=\"Verdana\" size=2>Projektarbeit muss dokumentiert werden. Welcher der folgenden allgemeinen Regeln f&uuml;r Projektdokumentation stimmen Sie zu?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Inhaltsverzeichnis</font>","<font face=\"Verdana\" size=2>Projektorganisation</font>","<font face=\"Verdana\" size=2>Projektauftr&auml;ge</font>","<font face=\"Verdana\" size=2>Planungsunterlagen</font>","<font face=\"Verdana\" size=2>Berichte</font>","<font face=\"Verdana\" size=2>Protokolle, Schriftverkehr</font>")
corr=new Array("1","1","1","1","1","1")
quest011 = new Question(
"Frage 11",
1,
"<font face=\"Verdana\" size=2>Ein Mitarbeiter schl&auml;gt Ihnen eine Gliederung f&uuml;r einen einheitlichen Projektordner vor. Welchen Gliederungspunkten stimmen Sie zu?</font>",
resp,
corr,
"",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>mit einem Fragebogen das Projektteam um seine Meinung bitten</font>","<font face=\"Verdana\" size=2>In einer Abschlusssitzung bewertet der Projektleiter die Arbeit eines jeden Teammitgliedes.</font>","<font face=\"Verdana\" size=2>den Auftraggeber um seine Meinung bitten</font>","<font face=\"Verdana\" size=2>die Liste mit den Erwartungen der Stakeholder mit dem Projektergebnis vergleichen</font>","<font face=\"Verdana\" size=2>die wichtigsten Stakeholder pers&ouml;nlich befragen</font>")
corr=new Array("0","1","0","0","0")
quest012 = new Question(
"Frage 12",
1,
"<font face=\"Verdana\" size=2>Am Ende eines Projektes gilt es, R&uuml;ckschau auf den Verlauf zu halten und sich zu fragen, was im Projekt gut und was weniger gut war. Welche der folgenden Aktivit&auml;ten halten Sie f&uuml;r diesen Zweck f&uuml;r ungeeignet?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Dies geh&ouml;rt zwingend in pers&ouml;nliche Gespr&auml;che unter vier Augen.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Wie gut haben wir das Ziel erreicht?</font>","<font face=\"Verdana\" size=2>Wie zufrieden sind unsere Kunden?</font>","<font face=\"Verdana\" size=2>Wie gut war die Vorgehensweise?</font>","<font face=\"Verdana\" size=2>Wie gut war die Zusammenarbeit im Team?</font>","<font face=\"Verdana\" size=2>Wie professionell war der Projektleiter?</font>","<font face=\"Verdana\" size=2>Wie war die Zusammenarbeit Projektleiter – Auftraggeber?</font>")
corr=new Array("0","0","0","0","0","1")
quest013 = new Question(
"Frage 13",
1,
"<font face=\"Verdana\" size=2>Nehmen wir an, Sie korrigieren einen Fragebogen f&uuml;r die Bewertung von Projekten durch die Mitglieder des jeweiligen Projektteams. Welche der folgenden Fragen geh&ouml;rt nicht in diesen Fragebogen?</font>",
resp,
corr,
"<small><font face=\"Verdana\" size=2>Diese Frage entzieht sich der Bewertung durch das Team.</font></small>",
1,
0,
0,
"");

resp=new Array("<font face=\"Verdana\" size=2>Stratege mit guten &Uuml;berblick</font>","<font face=\"Verdana\" size=2>Planer mit Blick f&uuml;rs Detail</font>","<font face=\"Verdana\" size=2>Krisenmanager mit starken Nerven</font>","<font face=\"Verdana\" size=2>Verk&auml;ufer mit &Uuml;berzeugskraft</font>","<font face=\"Verdana\" size=2>F&uuml;hrer mit Motivationskraft</font>","<font face=\"Verdana\" size=2>Unternehmer im Unternehmen</font>")
corr=new Array("1","1","1","1","1","1")
quest014 = new Question(
"Frage 14",
1,
"<font face=\"Verdana\" size=2>Welcher der folgenden Aussagen &uuml;ber die Rolle eines Projektleiters stimmen Sie nun im R&uuml;ckblick auf die vorangehenden Fragen zu?</font>",
resp,
corr,
"",
1,
0,
0,
"");

questions = new Array (
quest001,quest002,quest003,quest004,quest005,quest006,quest007,quest008,quest009,quest010,quest011,quest012,quest013,quest014)

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
