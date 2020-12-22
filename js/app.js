function SetFocus() {
    document.getElementById("CSTNumber").focus();
    document.getElementById("followup").checked = false;
    document.getElementById("CSTNumber").value = ""
}

function CalQuota() {
    document.getElementById("CSTQuota").value =
        Math.ceil(
            (document.getElementById("BESQuota").value /
                8 /
                8 /
                8 /
                8 /
                8 /
                8 /
                8 /
                8 /
                8 /
                8) *
            100
        ) / 100;
}

function CalQuotaEnter() {
    if (event.which == 13 || event.keyCode == 13) {
        CalQuota();
    }
}

function ResetCal() {
    document.getElementById("BESQuota").value = "";
    document.getElementById("CSTQuota").value = "";

}

function CalPrice() {
    var addonPkgs = document.querySelectorAll('input[name="addon-pkg"]');
    var summ = 0;

    for (var i = 0; i < addonPkgs.length; i++) {
        var current = addonPkgs[i];

        if (current.checked) {
            summ += parseInt(current.value);
        }
    }

    var pkg = parseInt(document.getElementById("pkg").value);

    var cpe = document.getElementById("cpe");
    if (cpe.checked == true) {
        cpe = 5;
    } else {
        cpe = 0;
    }
    var slf = document.getElementById("slf");
    if (slf.checked == true) {
        slf = 10;
    } else {
        slf = 0;
    }

    var total =
        summ +
        pkg +
        cpe +
        slf -
        parseInt(document.getElementById("Client-Balance").value);

    document.getElementById("PKGPrice").value = total + (total * 14) / 100;

    document.getElementById("PKGPriceNoTax").value = total;
}

function SpeedVariance(){
    var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Speed%20Variance&srTypeId=099002002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Speed Variance";
    var Problem = "&serviceInfoChar282=Speed Variance";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true)
    { FollowUP = "&serviceContent=Speed Variance"; } else { FollowUP = ""; }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
    }

function PendingTEWithinSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20TE%20Within%20SLA&srTypeId=103016014";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending TE Within SLA";
var Problem = "&serviceInfoChar282=Pending TE Within SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Pending TE Within SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PendingTEAfterSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20TE%20Within%20SLA&srTypeId=103016014";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending TE After SLA";
var Problem = "&serviceInfoChar282=Pending TE After SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Pending TE After SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PendingSplittingwithinSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20Splitting%20within%20SLA&srTypeId=103016013";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending Splitting within SLA";
var Problem = "&serviceInfoChar282=Pending Splitting within SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Pending Splitting within SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PendingSplittingafterSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20Splitting%20after%20SLA&srTypeId=103016012";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending Splitting after SLA";
var Problem = "&serviceInfoChar282=Pending Splitting after SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Pending Splitting after SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function LineProblemCannotbeSolved(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20Problem%20Can%20not%20be%20Solved&srTypeId=103016011";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Line Problem Can not be Solved";
var Problem = "&serviceInfoChar282=Line Problem Can not be Solved";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Line Problem Can not be Solved"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function LineProblemSolvedWithinSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20Problem%20Solved%20Within%20SLA&srTypeId=103016009";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Line Problem Solved Within SLA";
var Problem = "&serviceInfoChar282=Line Problem Solved Within SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Line Problem Solved Within SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function LineProblemSolvedAfterSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20Problem%20Solved%20Within%20SLA&srTypeId=103016009";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Line Problem Solved After SLA";
var Problem = "&serviceInfoChar282=Line Problem Solved After SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Line Problem Solved After SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function Lineproblem(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20problem&srTypeId=100014007";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Line problem";
var Problem = "&serviceInfoChar282=Line problem";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Line problem"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function LineProblemSolved(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20problem&srTypeId=100014007";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Line Problem Solved";
var Problem = "&serviceInfoChar282=Line Problem Solved";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Line Problem Solved"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PendingFixingLineProblemWithinSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20problem&srTypeId=10001400";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending Fixing Line Problem Within SLA";
var Problem = "&serviceInfoChar282=Pending Fixing Line Problem Within SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Pending Fixing Line Problem Within SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function CustomerProblemSolvedwithinSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer%20Problem%20Solved%20within%20SLA&srTypeId=103016005";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Customer Problem Solved within SLA";
var Problem = "&serviceInfoChar282=Customer Problem Solved within SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Customer Problem Solved within SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function CustomerProblemSolvedAfterSLA(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer%20Problem%20Solved%20After%20SLA&srTypeId=103016004";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Customer Problem Solved After SLA";
var Problem = "&serviceInfoChar282=Customer Problem Solved After SLA";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Customer Problem Solved After SLA"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function CustomerProblemSolved(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer%20Problem%20Solved&srTypeId=103016003";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Customer Problem Solved";
var Problem = "&serviceInfoChar282=Customer Problem Solved";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Customer Problem Solved"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PaymentNotClearBranchComplaint(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Branch&srTypeId=099021002";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Technical Complaint->Payment Not Clear->Branch";
var Problem = "&serviceInfoChar282=Payment Not Clear Branch Complaint";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Payment Not Clear Branch Complaint"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function PaymentNotClearBranchfollowup (){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Branch&srTypeId=103010005";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Payment Not Clear->Branch";
var Problem = "&serviceInfoChar282=Payment Not Clear Branch follow up ";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Payment Not Clear Branch follow up "; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function TestCPESuspension(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Test%20CPE%20Suspension&srTypeId=100015004";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech Inquiry->Internet Service->Test CPE Suspension";
var Problem = "&serviceInfoChar282=Test CPE Suspension";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Test CPE Suspension"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
document.body.style.b
function HarassmentCalls(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Harassment%20Calls&srTypeId=100036001";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech Inquiry->Harassment->Harassment Calls";
var Problem = "&serviceInfoChar282=Harassment Calls";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Harassment Calls"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function EarlyrenewalComplaint(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Early%20renewal&srTypeId=099003004";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Technical Complaint->Billing->Early renewal";
var Problem = "&serviceInfoChar282=Early renewal Complaint";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Early renewal Complaint"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function TEbillInquiry(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspended-TE%20bill&srTypeId=100015002";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=3. FBB Non Tech Inquiry->Internet Service->Suspended-TE bill";
var Problem = "&serviceInfoChar282=Suspended TE bill";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=Suspended TE bill"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}







function Extra_Quota() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota Recurring - Adding&srTypeId=100022003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Quota->Extra Quota Recurring - Adding";
    var Problem = "&serviceInfoChar282=Extra%20Quota%20Adding";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Extra%20Quota%20Adding";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function ExtraQuota1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota One time&srTypeId=100022001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Quota->Extra Quota One time";
    var Problem = "&serviceInfoChar282=Extra Quota One time";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Extra Quota One time";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Watch_it() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Watch It&srTypeId=100019020";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Offers and Campaigns->Watch It";
    var Problem = "&serviceInfoChar282=Watch_It";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Watch_It";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
let orderrama = 0 

function Rama_dan() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Ramadan Promo&srTypeId=100019021";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Offers and Campaigns->Ramadan Promo";
    var Problem = "&serviceInfoChar282=Ramadan Promo";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ramadan Promo";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Approved1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Approved Concession&srTypeId=100034003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Billing Adjustment->Approved Concession";
    var Problem = "&serviceInfoChar282=Approved Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Approved Concession";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Outage2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=No estimated time&srTypeId=102029002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Tech Problem->Outage - Data Down->No estimated time";
    var Problem = "&serviceInfoChar282=No estimated time";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=No estimated time";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Outage1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=within SLA&srTypeId=102029001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Tech Problem->Outage - Data Down->within SLA";
    var Problem = "&serviceInfoChar282=Outage within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=follow Outage within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Approved2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Complaint Team&srTypeId=098001003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Technical Complaint->ADSL VDSL->Complaint Team";
    var Problem = "&serviceInfoChar282=Technical Concession Complaint";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Technical Concession Complaint";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Disapproved2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Disapproved Concession&srTypeId=099019003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Billing Adjustment->Disapproved Concession";
    var Problem = "&serviceInfoChar282=Disapproved Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Disapproved Concession";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Other_offer() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other offer&srTypeId=100019004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Offers and Campaigns->Other offer";
    var Problem = "&serviceInfoChar282=Other offer";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Other offer";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Code1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Activation Code&srTypeId=100024001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->SMS->Activation Code";
    var Problem = "&serviceInfoChar282=Activation Code";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Activation Code";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Code2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Activation Code&srTypeId=099014001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->SMS->Activation Code";
    var Problem = "&serviceInfoChar282=Activation Code";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Activation Code";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Code3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Consumption notification&srTypeId=100024002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->SMS->Consumption notification";
    var Problem = "&serviceInfoChar282=Consumption notification";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Consumption notification";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Code4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Consumption notification&srTypeId=099014002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->SMS->Consumption notification";
    var Problem = "&serviceInfoChar282=Consumption notification";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Consumption notification";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Individual cases within SLA&srTypeId=103013002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->System issue->Individual cases within SLA";
    var Problem = "&serviceInfoChar282=Individual cases within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Individual cases within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Individual cases after SLA&srTypeId=103013001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->System issue->Individual cases after SLA";
    var Problem = "&serviceInfoChar282=Individual cases after SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Individual cases after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Promotion Individual Cases&srTypeId=099002004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Promotion Individual Cases";
    var Problem = "&serviceInfoChar282=Promotion Individual Cases";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Promotion Individual Cases";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual11() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Abnormal%20Status&srTypeId=099002014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Abnormal Status";
    var Problem = "&serviceInfoChar282=Abnormal Status";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Abnormal Status";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual12() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WE%20App%20Problem&srTypeId=099002013";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->WE App Problem";
    var Problem = "&serviceInfoChar282=WE App Problem";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=WE App Problem";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual10() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Processing%20Or%20No%20BSS%20Profile&srTypeId=099002006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Processing Or No BSS Profile";
    var Problem = "&serviceInfoChar282=Processing Or No BSS Profile";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Processing Or No BSS Profile";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual9() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=No%20Free%20Resource&srTypeId=099002012";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->No Free Resource";
    var Problem = "&serviceInfoChar282=No Free Resource";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=No Free Resource";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual8() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspended%20Offer&srTypeId=099002011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Suspended Offer";
    var Problem = "&serviceInfoChar282=Suspended Offer";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspended Offer";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual7() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension%20Life%20Cycle%20Or%20Arrears&srTypeId=099002010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Suspension Life Cycle Or Arrears";
    var Problem = "&serviceInfoChar282=Suspension Life Cycle Or Arrears";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Life Cycle Or Arrears";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual6() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Usage%20Complaint&srTypeId=099002009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Usage Complaint";
    var Problem = "&serviceInfoChar282=Usage Complaint";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Usage Complaint";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual5() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Matrix%20Disabled&srTypeId=099002007";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Matrix Disabled";
    var Problem = "&serviceInfoChar282=Matrix Disabled";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Matrix Disabled";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Matrix%20Blocked&srTypeId=099002005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Matrix Blocked";
    var Problem = "&serviceInfoChar282=Matrix Blocked";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Matrix Blocked";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Family1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103015001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Cancel Service->Within SLA";
    var Problem = "&serviceInfoChar282=Cancel Service";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Cancel Service";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Family2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103005002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Cancel Service->Within SLA";
    var Problem = "&serviceInfoChar282=Delay Cancel Service Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay Cancel Service Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Family3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=After SLA&srTypeId=103005001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Cancel Service->After SLA";
    var Problem = "&serviceInfoChar282=Delay Cancel Service After SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay Cancel Service After SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Cancellation1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103012005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Service Cancellation->Within SLA";
    var Problem = "&serviceInfoChar282=follow up Service Cancellation Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=follow up Service Cancellation Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Cancellation2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=After SLA&srTypeId=103007001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Service Cancellation->After SLA";
    var Problem = "&serviceInfoChar282=Delay Service Cancellation After SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay Service Cancellation After SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Extra1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota Recurring&srTypeId=100022002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Quota->Extra Quota Recurring";
    var Problem = "&serviceInfoChar282=Extra Quota Recurring";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Extra Quota Recurring";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Extra2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota Recurring -cancellation&srTypeId=100022004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Quota->Extra Quota Recurring -cancellation";
    var Problem = "&serviceInfoChar282=Extra Quota Recurring cancellation";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Extra Quota Recurring cancellation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue0() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Balance Fraction&srTypeId=099003001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Billing->Balance Fraction";
    var Problem = "&serviceInfoChar282=Balance Fraction";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Balance Fraction";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue8() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Balance Fraction&srTypeId=100002002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Balance Fraction";
    var Problem = "&serviceInfoChar282=Balance Fraction";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Balance Fraction";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Balance&srTypeId=100002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Balance";
    var Problem = "&serviceInfoChar282=Billing Balance";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ask about his Balance";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Bill Amount&srTypeId=100002004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Bill Amount";
    var Problem = "&serviceInfoChar282=Bill Amount";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=ask about his Bill Amount";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=General Info&srTypeId=100020007";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->General Info";
    var Problem = "&serviceInfoChar282=Payment Methods";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Payment Methods General Info";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Balance Transfer&srTypeId=100002003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Balance Transfer";
    var Problem = "&serviceInfoChar282=Balance Transfer";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=ask about Balance Transfer";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue5() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Land line Bills&srTypeId=100002009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Land line Bills";
    var Problem = "&serviceInfoChar282=Land line Bills";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=ask about Land line Bills";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue6() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension life cycle&srTypeId=100002012";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Billing->Suspension life cycle";
    var Problem = "&serviceInfoChar282=Suspension life cycle";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension life cycle";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Issue9() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspended TE bill&srTypeId=099010001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Internet Service->Suspended TE bill";
    var Problem = "&serviceInfoChar282=Suspended TE bill";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspended TE bill";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Customer_problem() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer problem&srTypeId=100014005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Customer problem";
    var Problem = "&serviceInfoChar282=Customer problem";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Customer problem";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Number1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer request within SLA&srTypeId=103003002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Change phone number->Customer request within SLA";
    var Problem = "&serviceInfoChar282=Change phone number Customer request within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change phone number Customer request within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Number2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer request after SLA&srTypeId=103003001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Change phone number->Customer request after SLA";
    var Problem = "&serviceInfoChar282=Change phone number Customer request after SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change phone number Customer request after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MSAN_TT() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MSAN&srTypeId=074012006002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Problem->Change Phone->MSAN";
    var Problem = "&serviceInfoChar282=Change Phone MSAN";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Phone MSAN";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MSAN_TT1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MSAN&srTypeId=100007002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Change phone number->MSAN";
    var Problem = "&serviceInfoChar282=Change Phone MSAN";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Phone MSAN";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MSAN_TT2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MSAN&srTypeId=099006001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Change phone number->MSAN";
    var Problem = "&serviceInfoChar282=Change Phone MSAN";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Phone MSAN";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MSAN_TT3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MSAN within SLA&srTypeId=103003004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Change phone number->MSAN within SLA";
    var Problem = "&serviceInfoChar282=Change Phone MSAN within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Phone MSAN within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MSAN_TT4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MSAN after SLA&srTypeId=103003003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Change phone number->MSAN after SLA";
    var Problem = "&serviceInfoChar282=Change Phone MSAN after SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Phone MSAN after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function NotClear() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Aggregators Payment&srTypeId=074012029";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Aggregators Payment";
    var Problem = "&serviceInfoChar282=Aggregators Payment";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=..........اسم شركة المدفوعات..........رقم الخدمة المثبت في الايصال.........تاريخ الدفع........المبلغ الاجمالى المدفوع شامل رسوم الخدمة........الرقم المرجعى أو رقم العميلة بالكامل........في حالة الدفع في فوري  كود الخدمه و  رقم الجهاز";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Paid_Through_Fawry() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Fawry&srTypeId=100020006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Fawry";
    var Problem = "&serviceInfoChar282=Paid Through Fawry";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Fawry";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Renewal2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Renewal&srTypeId=099014003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->SMS->Renewal";
    var Problem = "&serviceInfoChar282=Complaint SMS Renewal";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Complaint SMS Renewal";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Renewal1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Renewal&srTypeId=100024003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->SMS->Renewal";
    var Problem = "&serviceInfoChar282=Inquiry SMS Renewal";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Inquiry SMS Renewal";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Installed() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installed&srTypeId=100014013";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Installed";
    var Problem = "&serviceInfoChar282=Installed";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Installed";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}


function Through1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Aman&srTypeId=100020001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Aman";
    var Problem = "&serviceInfoChar282=Paid Through Aman";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Aman";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Momken&srTypeId=100020009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Momken";
    var Problem = "&serviceInfoChar282=Paid Through Momken";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Momken";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Sadad&srTypeId=100020011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Sadad";
    var Problem = "&serviceInfoChar282=Paid Through Sadad";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Sadad";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Masary&srTypeId=100020008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Masary";
    var Problem = "&serviceInfoChar282=Paid Through Masary";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Masary";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through5() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Bee&srTypeId=100020004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Payment Methods->Bee";
    var Problem = "&serviceInfoChar282=Paid Through Bee";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Paid Through Bee";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through6() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Online&srTypeId=100020010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Payment Methods->Online";
    var Problem = "&serviceInfoChar282=Payment Methods Online";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Payment Methods Online";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Through7() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Branches&srTypeId=100020005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Payment Methods->Branches";
    var Problem = "&serviceInfoChar282=Payment Methods Branches";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Payment Methods Branches";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function General1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Called by mistake&srTypeId=100013009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->General Information->Called by mistake";
    var Problem = "&serviceInfoChar282=Called by mistake";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Called by mistake";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function General2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=General Info&srTypeId=100013010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->General Information->General Info";
    var Problem = "&serviceInfoChar282=General Information";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=General Information";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Level_Up() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Level Up&srTypeId=100021018";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Products info->Level Up";
    var Problem = "&serviceInfoChar282=Level Up";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Level Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Level_Up1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Level Up Subscription&srTypeId=100021019";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Products info->Level Up Subscription";
    var Problem = "&serviceInfoChar282=Level Up Subscription";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Level Up Subscription";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Level_Up2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Level Up Cancellation&srTypeId=100021020";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Products info->Level Up Cancellation";
    var Problem = "&serviceInfoChar282=Level Up Subscription";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Level Up Cancellation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103010002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Payment Not Clear->Within SLA";
    var Problem = "&serviceInfoChar282=Payment Not Clear Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Payment Not Clear Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=After SLA&srTypeId=103010001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Payment Not Clear->After SLA";
    var Problem = "&serviceInfoChar282=Payment Not Clear After SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Payment Not Clear After SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Billing request within SLA&srTypeId=103001001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing->Billing request within SLA";
    var Problem = "&serviceInfoChar282=Billing request within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Billing request within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Billing request after SLA&srTypeId=103001002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing->Billing request after SLA";
    var Problem = "&serviceInfoChar282=Billing request after SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Billing request after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online5() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Recharge By Mistake&srTypeId=095002006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Billing Adjustment->Recharge By Mistake";
    var Problem = "&serviceInfoChar282=Recharge By Mistake";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Recharge By Mistake";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Change_Number() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer Request&srTypeId=100007001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Change phone number->Customer Request";
    var Problem = "&serviceInfoChar282=Change phone number Customer Request";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change phone number Customer Request";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Change_offer() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change offering&srTypeId=100017001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Migration->Change offering";
    var Problem = "&serviceInfoChar282=Change offering";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change offering";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Root_Operator() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=adjustment for abnormal orders&srTypeId=074012028";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->adjustment for abnormal orders ";
    var Problem = "&serviceInfoChar282=Root Operator";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Package removed by Root Operator";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Enable_by_mistake() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=enable by mistake.&srTypeId=074012011008006&t=1584720036509&tabId=sr0.5672676104309249";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Billing adjustment->Non technical->enable by mistake.";
    var Problem = "&serviceInfoChar282=Enable by mistake";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Enable by mistake";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Concession_Delay() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Concession after SLA&srTypeId=103002003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing Adjustment->Technical Concession after SLA";
    var Problem = "&serviceInfoChar282=Technical Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Technical Concession";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Level_Up_PS4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=IOE Exist Customer%20 Add ons&srTypeId=074013001005024";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non-Technical->Inquiry->ADSL Products info->IOE Exist Customer Add ons";
    var Problem = "&serviceInfoChar282=IOE Exist Customer Add ons";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Level_Up_PS4";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Bills_Debts() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Resume manual dunning suspension&srTypeId=101002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Request->Internet Service->Resume manual dunning suspension";
    var Problem = "&serviceInfoChar282=Resume manual dunning suspension";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Resume manual dunning suspension";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Ask_to_Renew_Without() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Early renewal&srTypeId=100002007";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Early renewal";
    var Problem = "&serviceInfoChar282=Early renewal";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=ask about Early renewal";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Indigo_Inquiry() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Indigo&srTypeId=100021002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Products info->Indigo";
    var Problem = "&serviceInfoChar282=Indigo_Inquiry";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Indigo_Inquiry";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Indigo_Inquiry1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension Non payment&srTypeId=099003005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Billing->Suspension Non payment";
    var Problem = "&serviceInfoChar282=Indigo_Inquiry";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Indigo_Inquiry";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
function Indigo_Plus_Inquiry() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Indigo Plus&srTypeId=100021003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Products info->Indigo Plus";
    var Problem = "&serviceInfoChar282=Indigo Plus Inquiry";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Indigo Plus Inquiry";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Pending_Splitting() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103006002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Installation Order->Within SLA";
    var Problem = "&serviceInfoChar282=Pending Splitting A Within SLA";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Pending Splitting A Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Splitting_Delay() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending Splitting&srTypeId=074012001005006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->Pending Splitting";
    var Problem = "&serviceInfoChar282=Delay Pending Splitting";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay in Pending Splitting";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Splitting_Del() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending splitting&srTypeId=100014008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Pending splitting";
    var Problem = "&serviceInfoChar282=Pending splitting";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Pending splitting";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Splitting_Del1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pop problem ports Jumpers&srTypeId=100014009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Pop problem ports Jumpers";
    var Problem = "&serviceInfoChar282=Pop problem ports Jumpers";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Pop problem ports Jumpers";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function delayPendingTE() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending TE&srTypeId=074012001005004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->Pending TE";
    var Problem = "&serviceInfoChar282=Delay Pending TE";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay in Delay Pending TE";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Automatic_Configuration() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Service activation&srTypeId=099014004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->SMS->Service activation";
    var Problem = "&serviceInfoChar282=Complaint SMS Service activation";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Complaint SMS Service activation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Automatic_Configuration1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Welcome Call Within SLA&srTypeId=100014011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order-> Welcome Call Within SLA";
    var Problem = "&serviceInfoChar282=Welcome Call Within SLA";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Welcome Call Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Automatic_Configuration2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Welcome Call&srTypeId=074012001005008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->Welcome Call";
    var Problem = "&serviceInfoChar282=Delay on Welcome Call";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay on Welcome Call";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Automatic_Configuration3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Delay in Welcome Call after SLA&srTypeId=100014012";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Delay in Welcome Call after SLA";
    var Problem = "&serviceInfoChar282=Delay in Welcome Call after SLA";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay in Welcome Call after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function TE_Problem() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE Problem&srTypeId=074012001005005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->TE Problem";
    var Problem = "&serviceInfoChar282=Delay Installation TE Problem";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay  Installation  TE Problem";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function TEProblemWithinSLA(){
    var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE%20Problem%20Within%20SLA&srTypeId=103016019";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->TE Problem Within SLA";
    var Problem = "&serviceInfoChar282=TE Problem Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true)
    { FollowUP = "&serviceContent=TE Problem Within SLA"; } else { FollowUP = ""; }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
    }

function TEProbleminformed(){
var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE%20Problem%20informed&srTypeId=103016018";
var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->TE Problem informed";
var Problem = "&serviceInfoChar282=TE Problem informed";
var secondaryMobile = "&serviceInfoChar272=0";
var cpeTypeselect = "&serviceInfoChar278=1";
var pre = "&serviceInfoChar276=2";
var FollowUP = document.getElementById("followup");
if (FollowUP.checked == true)
{ FollowUP = "&serviceContent=TE Problem informed"; } else { FollowUP = ""; }
window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}  

function PendingPostingTEAfterSLA(){
    var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20Posting%20TE%20After%20SLA&srTypeId=103016017";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending Posting TE After SLA";
    var Problem = "&serviceInfoChar282=Pending Posting TE After SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true)
    { FollowUP = "&serviceContent=Pending Posting TE After SLA"; } else { FollowUP = ""; }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
    }




function PendingPostingTEWithinSLA(){
    var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Pending%20Posting%20TE%20Within%20SLA&srTypeId=103016016";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Pending Posting TE Within SLA";
    var Problem = "&serviceInfoChar282=Pending Posting TE Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true)
    { FollowUP = "&serviceContent=Pending Posting TE Within SLA"; } else { FollowUP = ""; }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
    }

function TE_Problem3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE Problem Solved&srTypeId=074012001005009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->TE Problem Solved";
    var Problem = "&serviceInfoChar282=TE Problem Solved";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=TE Problem Solved";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function TEproblemSolvedWithinSLA(){
    var srlink = "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE%20problem%20Solved%20Within%20SLA&srTypeId=103016022&";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->TE problem Solved Within SLA";
    var Problem = "&serviceInfoChar282=TE problem Solved Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true)
    { FollowUP = "&serviceContent=TE problem Solved Within SLA"; } else { FollowUP = ""; }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
    }

function TE_Problem2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=TE%20Problem%20Can%20not%20be%20Solved&srTypeId=103016024";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up--Installation Order--TE Problem Can't be Solved";
    var Problem = "&serviceInfoChar282=TE Problem Can't be Solved";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=TE Problem Can't be Solved";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Activation_follow_up() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Waiting CST Response/Activation follow up&srTypeId=100014010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Waiting CST Response/Activation follow up";
    var Problem = "&serviceInfoChar282=Waiting CST Response/Activation follow up";
    var productPhone1 = "&serviceInfoChar265=3";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Waiting CST Response/Activation follow up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Change_package1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change package&srTypeId=100014002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Change package";
    var Problem = "&serviceInfoChar282=FBB Non Tech Inquiry->Installation Order->Change package";
    var Problem = "&serviceInfoChar282=Change package";
    var productPhone1 = "&serviceInfoChar265=3";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change package";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function TE_problem_Solved() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Service activation&srTypeId=100024004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->SMS->Service activation";
    var Problem = "&serviceInfoChar282=Inquiry SMS Service activation";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Inquiry SMS Service activation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Cust_Pro_Solved() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer Problem Solved&srTypeId=074012001005002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Installation->Customer Problem Solved";
    var Problem = "&serviceInfoChar282=Customer Problem Solved";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Delay Installation Customer Problem Solved";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Billing_Validation() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Billing Validation&srTypeId=074012001006002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Service Cancellation->Billing Validation";
    var Problem = "&serviceInfoChar282=Billing Validation";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Billing Validation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPE_Collection() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE Collection&srTypeId=074012001006001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Service Cancellation->CPE Collection";
    var Problem = "&serviceInfoChar282=CPE Collection";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=CPE Collection";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Posting_Cancellation() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=OMU&srTypeId=074012001006005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Delay->Service Cancellation->OMU";
    var Problem = "&serviceInfoChar282=Posting Cancellation";
    var productPhone1 = "&serviceInfoChar265=3411266";    
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Posting Cancellation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + productPhone1 + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Pop_Problem() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103006002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Installation Order->Within SLA";
    var Problem = "&serviceInfoChar282=pop problem-ports";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";    
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=pop problem-ports";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Recharge_by_mistake() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Recharge%20By%20Mistake&srTypeId=100034005"
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Billing Adjustment->Recharge By Mistake";
    var Problem = "&serviceInfoChar282=Recharge by mistake";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Recharge by mistake";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
} 

function Call_drop() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Call Dropped&srTypeId=100004001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Call Back->Call Dropped";
    var Problem = "&serviceInfoChar282=Call Dropped";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Call Dropped";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
} 

function Contracting1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Subscription%20Done&srTypeId=100009003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Contracting Methods->Subscription Done";
    var Problem = "&serviceInfoChar282=Subscription Done";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Subscription Done";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Contracting2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Subscription%20Not%20Done&srTypeId=100009004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Contracting Methods->Subscription Not Done";
    var Problem = "&serviceInfoChar282=Subscription Not Done";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Subscription Not Done";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function drop1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Call Dropped&srTypeId=099004001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Call Back->Call Dropped";
    var Problem = "&serviceInfoChar282=Call Dropped";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Call Dropped";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Asked_to_call_manager() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Asked to call manager&srTypeId=074003001004001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Boradband->Call Center->Complaint Non-Technical->Escalation->Asked to call manager ";
    var Problem = "&serviceInfoChar282=Asked to call manager";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Contact name ************** Contact Mobile ************ Complaint Reason";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
} 

function Technical() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=internet not working ";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical6() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=internet working but slow";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical7() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=internet working but unstable";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}


function Technical8() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=voice down";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical9() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=wireless problem";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical10() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=voice overlapping ";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical11() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=port time out/access denied";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical12() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=access point";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical13() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=repeater";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical14() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=speed variance";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical15() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Q&srTypeId=100026014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Technical Q";
    var Problem = "&serviceInfoChar282=Transfer Technical Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=wrong profile on matrix";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical0() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Telephonet&srTypeId=100026015";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Telephonet";
    var Problem = "&serviceInfoChar282=Transfer Telephonet";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer Telephonet";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Fixed line&srTypeId=100026005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Fixed line";
    var Problem = "&serviceInfoChar282=Transfer Fixed line";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer Fixed line";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=GSM-Postpaid (Indigo- Indigo plus)&srTypeId=100026010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->GSM-Postpaid (Indigo- Indigo plus)";
    var Problem = "&serviceInfoChar282=Transfer GSM-Postpaid  Indigo- Indigo plus";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer GSM-Postpaid (Indigo- Indigo plus)";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=GSM-Prepaid&srTypeId=100026011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->GSM-Prepaid";
    var Problem = "&serviceInfoChar282=Transfer GSM-Prepaid";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer GSM-Prepaid";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=FTTH&srTypeId=100026006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->FTTH";
    var Problem = "&serviceInfoChar282=Transfer FTTH";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer FTTH";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Technical5() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Retention Queue&srTypeId=103012006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Service Cancellation->Retention Queue";
    var Problem = "&serviceInfoChar282=Retention Queue";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Retention Queue";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function postpaid1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=postpaid&srTypeId=100021013";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Products info->postpaid";
    var Problem = "&serviceInfoChar282=postpaid";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=postpaid";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function postpaid2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Postpaid bill&srTypeId=100002010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Postpaid bill";
    var Problem = "&serviceInfoChar282=Postpaid bill";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Postpaid bill";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function postpaid3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=From PrePaid to PostPaid&srTypeId=100017004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Migration->From PrePaid to PostPaid";
    var Problem = "&serviceInfoChar282=Prepaid to Postpaid ";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Inquiry Migration From Prepaid to Postpaid ";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function mistake1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Non-Technical Concession within SLA&srTypeId=103002002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing Adjustment->Non-Technical Concession within SLA";
    var Problem = "&serviceInfoChar282=Non Technical Concession within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Non Technical Concession within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function mistake2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Non-Technical Concession after SLA&srTypeId=103002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing Adjustment->Non-Technical Concession after SLA";
    var Problem = "&serviceInfoChar282=Non Technical Concession after SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Non Technical Concession after SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Follow_concession() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Technical Concession within SLA&srTypeId=103002004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Billing Adjustment->Technical Concession within SLA";
    var Problem = "&serviceInfoChar282=Follow_concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow_concession";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function ATCM_ON_spot() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Asked to call manager-on the spot&srTypeId=074020001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Complaint Non Technical->Asked to call manager-on the spot ";
    var Problem = "&serviceInfoChar282=Asked to call manager-on the spot";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Contact name ************** Contact Mobile ************ Complaint Reason";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Asked_for_Complaint() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Asked for Complaint&srTypeId=074021003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->NonTechnical Complaint->Asked for Complaint";
    var Problem = "&serviceInfoChar282=Asked for Complaint";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Contact name ************** Contact Mobile ************ Complaint Reason";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function BillingIssue() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension%20Non%20payment&srTypeId=100002013";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Billing->Suspension Non payment";
    var Problem = "&serviceInfoChar282=Suspension Non payment";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Non payment";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}


function BillingIssue1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension Non payment&srTypeId=099003005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Billing->Suspension Non payment";
    var Problem = "&serviceInfoChar282=Suspension Non payment";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Non payment";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Pending_Installation() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103006002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Installation Order->Within SLA";
    var Problem = "&serviceInfoChar282=Pending%20Installation";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Pending%20Installation%20CST%20informed%20about%20the%20process%201WD";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Change_offering() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change offering Done&srTypeId=100017002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Migration->Change offering Done";
    var Problem = "&serviceInfoChar282=Change offering Done";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=AFV CST asked to make change package to package *******Gb";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Usage_Quota() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Basic Quota&srTypeId=100029002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Usage->Basic Quota";
    var Problem = "&serviceInfoChar282=Usage%20Remaining%20Quota";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Usage%20Remaining%20Quota";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Usage_Quota1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota&srTypeId=100029001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Usage->Extra Quota";
    var Problem = "&serviceInfoChar282=Usage%20Remaining%20Extra Quota";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Usage%20Remaining%20Extra Quota";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Usage_Quota2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Add ons&srTypeId=100029003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Usage->Add ons";
    var Problem = "&serviceInfoChar282=Usage%20Remaining%20Add ons";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Usage%20Remaining%20Add ons";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Throttling() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Throttling&srTypeId=100025001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Speed->Throttling";
    var Problem = "&serviceInfoChar282=Slowness Streaming Throttling";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Slowness Streaming Throttling";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Salfny() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Salfny added&srTypeId=100001009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->Salfny added";
    var Problem = "&serviceInfoChar282=Salfny%20added";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=AFV%20ask%20to%20Salfny%20added";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Salfny_not() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Salfny&srTypeId=100001008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->Salfny";
    var Problem = "&serviceInfoChar282=ask about Salfny";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=ask about Salfny";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function UnsupportedCase() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unsupported%20Services&srTypeId=074001001019033";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Unsupported%20Case";
    var Problem = "&serviceInfoChar282=Unsupported%20Case";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP);
}

function Ask_for_Suspension() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Ask for Suspension&srTypeId=100015001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Internet Service->Ask for Suspension";
    var Problem = "&serviceInfoChar282=Ask for Suspension";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ask for Suspension";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPE() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE&srTypeId=100011001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Devices->CPE";
    var Problem = "&serviceInfoChar282=Cpe";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Products  Cpe";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Blocked_matrix() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Blocked matrix&srTypeId=099011001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Matrix Issue->Blocked matrix";
    var Problem = "&serviceInfoChar282=Blocked matrix";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Restart%20the%20port%20one%20time";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPEUser_Password() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=User%20name%20and%20Password-Activation&srTypeId=104003003"
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Tech Inquiry->User name and Password->User name and Password-Activation";
    var Problem = "&serviceInfoChar282=User name and Password-Activation";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=User name and Password-Activation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPEUser_Password1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Router UN and PW&srTypeId=100013005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->General Information->Router UN and PW";
    var Problem = "&serviceInfoChar282=Router UN and PW";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Router UN and PW";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Individual_cases() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Individual cases&srTypeId=099002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->System issue->Individual cases";
    var Problem = "&serviceInfoChar282=Individual cases";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Individual cases";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Pending_Posting_TE() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Within SLA&srTypeId=103016001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Installation Order->Within SLA";
    var Problem = "&serviceInfoChar282=follow up Installation Order Within SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=follow up Installation Order Within SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP  + cpeTypeselect + pre + secondaryMobile);
}

function Pending_TE() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=After SLA&srTypeId=103006001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up->Delay Installation Order->After SLA";
    var Problem = "&serviceInfoChar282=follow up Delay Installation Order After SLA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=follow up Delay Installation Order After SLA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function online_Pay_issue() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Payment issue&srTypeId=074017001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Dispute customer->Payment issue";
    var Problem = "";
    var service = "&serviceInfoChar052=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=CST%20pay%20from%20******%20amount%20****%20time%20******%20but%20payment%20not%20clear";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + service);
}

function online_Pay_issue1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Online%20Payment%20Deduction&srTypeId=103010004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech follow up -- Payment Not Clear -- Online Payment Deduction";
    var Problem = "&serviceInfoChar282=Online Payment Deduction";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Online Payment Deduction";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Disabled_matrix() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Disabled matrix&srTypeId=099011002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Matrix Issue->Disabled matrix";
    var Problem = "&serviceInfoChar282=Disabled matrix";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Disabled matrix";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function DSLUser_Password() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=ADSL%20username%20and%20password&srTypeId=074013001078001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=ADSL%20Username%20and%20Password";
    var Problem = "&serviceInfoChar282=ADSL%20Username%20and%20Password";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP);
}

function Option_Pack() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Option Pack&srTypeId=100001006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->Option Pack";
    var Problem = "&serviceInfoChar282=Option%20Pack";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Option%20Pack";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Sales_Leads() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Sales Leads&srTypeId=074012007002001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->New Account->Target Customer->Sales Leads";
    var Problem = "&serviceInfoChar282=Sales%20Leads";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Sales%20Leads%20CST%20number%20******";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function WeApp() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=We App&srTypeId=100001010";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->We App";
    var Problem = "&serviceInfoChar282=We%20App";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=We%20App";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Customer_Problem1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other ISP&srTypeId=100028003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer ISP->Other ISP";
    var Problem = "&serviceInfoChar282=Other ISP";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Other ISP";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Family_Filter() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Family Filter&srTypeId=100001005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->Family Filter";
    var Problem = "&serviceInfoChar282=Family%20Filter";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Family%20Filter";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Ecare() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=E-care&srTypeId=100001004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service->E-care";
    var Problem = "&serviceInfoChar282=E%20Care";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=E%20Care";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Ask_for_Cancellation() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Ask for Cancellation&srTypeId=100023001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Service Cancellation->Ask for Cancellation";
    var Problem = "&serviceInfoChar282=Ask%20for%20Cancellation";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ask%20for%20Cancellation";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Ask_for_Cancellation1() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Cancellation%20before%20installed&srTypeId=100014001"
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Installation Order->Cancellation before installed";
    var Problem = "&serviceInfoChar282=Cancellation before installed";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Cancellation before installed";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Retention_Follow_Up() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Retention Follow Up&srTypeId=101005001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Request->Service Cancellation->Retention Follow Up";
    var Problem = "&serviceInfoChar282=Retention%20Follow%20Up";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP+ secondaryMobile + cpeTypeselect + pre);
}

function ChangeData() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=111&srTypeId=100006001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Change Data->111";
    var Problem = "&serviceInfoChar282=Change Data";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=AFV with MR/MS ASK TO Change Data from 111";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function ChangeData1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Modify Data&srTypeId=100014003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Installation Order->Modify Data";
    var Problem = "&serviceInfoChar282=Modify Data";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=AFV with MR/MS ASK TO Modify Data";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function ChangeData4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Branch&srTypeId=100006002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Change Data->Branch";
    var Problem = "&serviceInfoChar282=Change Data->Branch";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Change Data->Branch";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Branches() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Working hours and Address&srTypeId=100003001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Branches->Working hours and Address";
    var Problem = "&serviceInfoChar282=Working hours and Address";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Working hours and Address";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Inquiry() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Telephonet&srTypeId=100021016";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Products info->Telephonet";
    var Problem = "&serviceInfoChar282=Telephonet";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Telephonet%20CST";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Inquiry1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Telephonet Bill&srTypeId=100002015";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Telephonet Bill";
    var Problem = "&serviceInfoChar282=Telephonet Bill";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Telephonet Bill";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Inquiry2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Telephonet&srTypeId=100026015";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Transfer->Telephonet";
    var Problem = "&serviceInfoChar282=Transfer Telephonet Q";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Transfer Telephonet Q";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Renewaldate() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Renewal date&srTypeId=100002011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Renewal date";
    var Problem = "&serviceInfoChar282=Renewal date";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ask about Renewal date ??";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Complaints() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=ADSL Billing Complaints&srTypeId=095001001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->ADSL Billing Complaints";
    var Problem = "&serviceInfoChar282=Telephonet_Complaints";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Telephonet_Complaints";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Tele_Change_Package() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change Package&srTypeId=095001007";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->Change Package";
    var Problem = "&serviceInfoChar282=Telephonet_Complaints";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Telephonet_Change_Package";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Consumption1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Main package&srTypeId=099007002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Consumption->Main package";
    var Problem ="&serviceInfoChar282=Consumption Main package";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Consumption Main package";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Consumption2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Extra Quota&srTypeId=099007001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Technical Complaint->Consumption->Extra Quota";
    var Problem ="&serviceInfoChar282=Consumption Extra Quota";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Consumption Extra Quota";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Consumption3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Basic Quota&srTypeId=100029002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Usage->Basic Quota";
    var Problem ="&serviceInfoChar282=Consumption priority";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Consumption priority";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function PackageDetails() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WE space prices and quota&srTypeId=100021008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Products info->WE space prices and quota";
    var Problem ="&serviceInfoChar282=WE space prices and quota";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=WE space prices and quota";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function PackageDetails1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WE space need more package&srTypeId=100021006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Products info->WE space need more package";
    var Problem ="&serviceInfoChar282=WE space need more package";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=WE space need more package";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPE2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WIFI repeater&srTypeId=100011005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Devices->WIFI repeater";
    var Problem ="&serviceInfoChar282=WiFi Repeater";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Ask about Wi Fi Repeater";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPE3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Test%20CPE&srTypeId=100011006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Devices->Test CPE";
    var Problem ="&serviceInfoChar282=Test CPE";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Test CPE";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Voucher1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Voucher recharge&srTypeId=100030001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Voucher->Voucher recharge";
    var Problem ="&serviceInfoChar282=Voucher recharge";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Voucher recharge";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Voucher2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Recharge Black list&srTypeId=100030002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Voucher->Recharge Black list";
    var Problem ="&serviceInfoChar282=Recharge Black list";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Recharge Black list";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Voucher3() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Loyalty%20Voucher&srTypeId=100019017"
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Offers and Campaigns->Loyalty Voucher";
    var Problem ="&serviceInfoChar282=Loyalty Voucher";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Loyalty Voucher";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Voucher4() {
    var srlink =
    "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Loyalty%20Voucher%20complaint&srTypeId=100019018"
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Offers and Campaigns->Loyalty Voucher complaint";
    var Problem ="&serviceInfoChar282=Loyalty Voucher complaint";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Loyalty Voucher complaint";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Other() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=VAS Complaints&srTypeId=095001005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->VAS Complaints";
    var Problem ="&serviceInfoChar282=VAS Complaints";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Reason : Others";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Other1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension Reason (Others)&srTypeId=095001012";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->Suspension Reason (Others)";
    var Problem ="&serviceInfoChar282=Suspension Reason (Others)";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Reason (Others)";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Other2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Voice Down (Need to reconnect)&srTypeId=095001013";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->Voice Down (Need to reconnect)";
    var Problem ="&serviceInfoChar282=Voice Down (Need to reconnect)";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Voice Down (Need to reconnect)";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet_Other3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension Reason (Manual Dunning)&srTypeId=095001011";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Telephonet->Non Technical Complaint->Suspension Reason (Manual Dunning)";
    var Problem ="&serviceInfoChar282=Suspension Reason (Manual Dunning)";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Reason (Manual Dunning)";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Telephonet1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Suspension Non payment Telephonet&srTypeId=100002014";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Suspension Non payment Telephonet";
    var Problem ="&serviceInfoChar282=Suspension Non payment Telephonet";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Suspension Non payment Telephonet";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function CPEs() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE&srTypeId=074013001029001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=CPE";
    var Problem = "&serviceInfoChar282=CPE";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP);
}

function CPEConfiguration() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Configuration&srTypeId=074001001019018";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=CPE%20Configuration";
    var Problem = "&serviceInfoChar282=CPE%20Configuration";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP);
}

function Early_Renewal_done() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Early renewal%C2%A0done&srTypeId=100002008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non-Tech Inquiry->Billing->Early renewal done";
    var Problem = "&serviceInfoChar282=Early renewal done";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=AFV CST asked to make early renewal and done";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function MigratedCSTs_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Close%20Approved%20Concession&srTypeId=074012002002009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Close%20Approved%20Concession";
    var Problem = "&serviceInfoChar282=Close%20Approved%20Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function AnyVoiceCase_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Voice%20overlapping%20cross%20connection&srTypeId=074012011007006";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function DowngradedByMistake() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Downgraded By Mistake&srTypeId=074012011008009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Broadband->Non Technical Request->Billing adjustment->Non technical->Downgraded By Mistake";
    var Problem = "&serviceInfoChar282=Downgraded By Mistake";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function DataDown_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Data%20Down&srTypeId=074012011007001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function PhysicalInstability_BLQ_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Physical%20instability%20BLQ&srTypeId=074012011007002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function WrongCard_Port_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Wrong%20card%20and%20port&srTypeId=074012011007007";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Browsing_UnabletoObtainIP_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unable%20to%20Obtain%20IP%20browsing&srTypeId=074012011007005";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Slowness_Utilization_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Slowness%20Utilization&srTypeId=074012011007009";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function LogicalInstability_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Logical%20Instability&srTypeId=074012011007004";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function GlobalProblem_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Global%20problem%20outage&srTypeId=074012011007003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function WrongProfile_() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Wrong%20Matrix%20wrong%20profile&srTypeId=074012011007008";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=Concession";
    var Problem = "&serviceInfoChar282=Concession";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=1";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Follow%20Up";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}


function Contact_Us1() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Contact Channels&srTypeId=100013002";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->General Information->Contact Channels";
    var Problem = "&serviceInfoChar282=Contact Channels";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Contact Channels";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Contact_Us2() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Call Price&srTypeId=100013001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->General Information->Call Price";
    var Problem = "&serviceInfoChar282=Call Price";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Call Price";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Contact_Us3() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Call center&srTypeId=100031001";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Working hours->Call center";
    var Problem = "&serviceInfoChar282=Working hours Call center";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Working hours Call center";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}

function Contact_Us4() {
    var srlink =
        "https://10.20.101.222:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=NTRA&srTypeId=100008003";
    var CSTNumber = "&subsNumber=" + document.getElementById("CSTNumber").value;
    var Title = "&serviceTitle=FBB Non Tech Inquiry->Complaint->NTRA";
    var Problem = "&serviceInfoChar282=Complaint NTRA";
    var secondaryMobile = "&serviceInfoChar272=0";
    var cpeTypeselect = "&serviceInfoChar278=1";
    var pre = "&serviceInfoChar276=2";
    var FollowUP = document.getElementById("followup");
    if (FollowUP.checked == true) {
        FollowUP = "&serviceContent=Complaint NTRA";
    } else {
        FollowUP = "";
    }
    window.open(srlink + CSTNumber + Title + Problem + FollowUP + secondaryMobile + cpeTypeselect + pre);
}
