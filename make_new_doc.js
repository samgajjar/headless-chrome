/*----------------------------------------------------*/
/* Javascript for the "SAP B2B Project"               */
/*                                                    */
/* Document:       new.js                             */
/* Description:    launches new order and catalog     */
/* Version:        1.0                                */
/* Author:         SAP AG                             */
/* Creation-Date:  29.03.2001                         */
/*                                                    */
/*                           (c) Pixelpark AG, Berlin */
/*----------------------------------------------------*/
// loads new catalog and creates order
/* loading the busy image destroys the current document in netscape, so
   rewriteURL has to be called in advance, because later it is not known anymore
   and you would get an error saying: function rewriteURL is not known */
   function load_catalog() {
    var rewURL = rewriteURL("/b2b/catalogstart.do");
    displayBusy(); 
    isaTop().parent.location.href=rewURL;
  }
  function create_order(processtype, dealerIdName,popup) {
    alert("Hello");
    window.location.replace('basket.html');
    // var rewURL = rewriteURL("/b2b/createbasket.do")+"?processtype="+processtype+"&soldToId="+getSoldTo(dealerIdName)+"&popup="+popup;
    // displayBusy(); 
    // parent.form_input.location.href=rewURL;
  }
  function create_collective_order() {
    var rewURL = rewriteURL("/b2b/createcollectiveorder.do");
    parent.parent.header.busy(parent.form_input);
    parent.form_input.location.href=rewURL;
  }
  function create_orderwtemp(processtype, oobSoldToId, dealerIdName) {
    var searchName = searchScreenORDERTMP + '@forminput';
    var reqP = "?genericsearch.name="+searchName+"&genericsearch.start=true&GSnoselectoptions=true&target=order&processtype="+processtype+"&rc_documenttypes=ORDERTMP";
    reqP = reqP + "&GSdocumenthandlernoadd=yes&GSdocumenthandlerbusobjadd=true&GSnoselectoptions=true" + "&GSincludestoshow=predoc";
    reqP = reqP + "&genericsearch.resultlist="+resultListORDERTEMP;
    if (getSoldTo(dealerIdName) != "") {
         reqP = reqP + "&rc_partner_range=OTHER&rc_partnerid="+getSoldTo(dealerIdName);
    }
    var rewURL = rewriteURL("/genericsearch.do")+reqP;
    if (oobSoldToId != null  &&  oobSoldToId != "") {
        rewURL = rewURL + "&rc_soldtoId=" + oobSoldToId;
    }
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function create_orderwquot(processtype, dealerIdName) {
    var searchName = searchScreenQUOTATION + '@forminput';
    var reqP = "?genericsearch.name="+searchName+"&genericsearch.start=true&GSnoselectoptions=true&target=order&processtype="+processtype+"&rc_documenttypes=QUOTATION";
    reqP = reqP + "&GSdocumenthandlernoadd=yes&GSdocumenthandlerbusobjadd=true&GSnoselectoptions=true" + "&GSincludestoshow=predoc";
    reqP = reqP + "&genericsearch.resultlist="+resultListQUOTATION;
    if (getSoldTo(dealerIdName) != "") {
         reqP = reqP + "&rc_partner_range=OTHER&rc_partnerid="+getSoldTo(dealerIdName);
    }
    var rewURL = rewriteURL("/genericsearch.do")+reqP;
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function create_quotation(processtype, dealerIdName) {
    var rewURL = rewriteURL("/b2b/createquotation.do")+"?processtype="+processtype+"&soldToId="+getSoldTo(dealerIdName);
    parent.parent.header.busy(parent.form_input);
    parent.form_input.location.href=rewURL;
  }
  
  function create_quotwtemp(processtype, dealerIdName) {
    var searchName = searchScreenORDERTMP + '@forminput';
    var reqP = "?genericsearch.name="+searchName+"&genericsearch.start=true&GSnoselectoptions=true&target=quotation&processtype="+processtype+"&rc_documenttypes=ORDERTMP";
    reqP = reqP + "&GSdocumenthandlernoadd=yes&GSdocumenthandlerbusobjadd=true&GSnoselectoptions=true" + "&GSincludestoshow=predoc";
    reqP = reqP + "&genericsearch.resultlist="+resultListORDERTEMP;
    if (getSoldTo(dealerIdName) != "") {
         reqP = reqP + "&rc_partner_range=OTHER&rc_partnerid="+getSoldTo(dealerIdName);
    }
    var rewURL = rewriteURL("/genericsearch.do")+reqP;
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function create_temp(dealerIdName) {
    var rewURL = rewriteURL("/b2b/createordertemplate.do")+"?soldToId="+getSoldTo(dealerIdName);
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function create_negotiatedContract(processtype,dealerIdName) {
    var rewURL = rewriteURL("/b2b/createnegotiatedcontract.do")+"?ncontracttransactiontype="+processtype+"&soldToId="+getSoldTo(dealerIdName);
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function order_quot(dealerIdName) {
    var searchName = searchScreenQUOTATION + '@forminput';
    var reqP = "?genericsearch.name="+searchName+"&genericsearch.start=true&GSnoselectoptions=true&target=quotation&rc_documenttypes=QUOTATION";
    reqP = reqP + "&GSdocumenthandlernoadd=yes&GSdocumenthandlerbusobjadd=true&GSnoselectoptions=true" + "&GSincludestoshow=predoc&rc_status_head2=RELEASED";
    reqP = reqP + "&genericsearch.resultlist="+resultListQUOTATION;
    if (getSoldTo(dealerIdName) != "") {
         reqP = reqP + "&rc_partner_range=OTHER&rc_partnerid="+getSoldTo(dealerIdName);
    }
    var rewURL = rewriteURL("/genericsearch.do")+reqP;
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function order_quotR3(dealerIdName) {
    var searchName = searchScreenQUOTATION + '@forminput';
    var reqP = "?genericsearch.name="+searchName+"&genericsearch.start=true&GSnoselectoptions=true&target=quotation&rc_documenttypes=QUOTATION&rc_vdatetoken1=today";
    reqP = reqP + "&GSdocumenthandlernoadd=yes&GSdocumenthandlerbusobjadd=true&GSnoselectoptions=true" + "&GSincludestoshow=predoc&rc_status_head2=released";
    reqP = reqP + "&genericsearch.resultlist="+resultListQUOTATION;
    if (getSoldTo(dealerIdName) != "") {
         reqP = reqP + "&rc_partner_range=OTHER&rc_partnerid="+getSoldTo(dealerIdName);
    }
    var rewURL = rewriteURL("/genericsearch.do")+reqP;
    displayBusy(); 
    parent.form_input.location.href=rewURL;
  }
  function getSoldTo(dealerIdName) {
    var soldToId;
    var selectbox;
    // get the right element
    element = getElement(dealerIdName);
    if (element != null) {
        if (element.options!=null) {
            soldToId = element.options[element.selectedIndex].value;
        }
        else {
            soldToId = element.value;
        }
    } else {
            soldToId = "";
    }
    return soldToId;
  }
  
// checks the quantity entered by the user.
// requered parameters are:
// quantityField An instance of the HTML object where it is coming from
// userKeyCodeEvent The event itself
// dec The decimal that is allowed to use. In German it is a "," in US it is ".".
function checkQuantity(quantityField, userKeyCodeEvent, dec) {
    var usedKey;
    var usedChar;
    if (window.event) {
        usedKey = window.event.keyCode;
    } else if (userKeyCodeEvent) {
        usedKey = userKeyCodeEvent.which;
    } else {
        return true;
    }
    usedChar = String.fromCharCode(usedKey);
    // special keys are allowed
    if ( (usedKey == 17) || (usedKey == 16) || (usedKey == 20) ||
         (usedKey == 18) || (usedKey == 0)  || (usedKey == 27) ||
         (usedKey == 8)  || (usedKey == 13) || (usedKey == 9)  ||
         (usedKey == null) ) {
       return true;
    }
    // All numbers are allowed as well
    if ((("0123456789").indexOf(usedChar) > -1)) {
       return true;
    }
    // the decimal point or comma is allowed, but only one of them
    if (dec==usedChar && (quantityField.value.indexOf(dec) == -1) ) {
            return true;
    }
    return false;
}