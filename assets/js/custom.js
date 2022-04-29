// Validation Additional Rules Start

jQuery.validator.addMethod("notzerostart", function(value, element) { 
    return this.optional(element) || /^[1-9][0-9]+$/i.test(value); 
}, "TCKN 0 ile başlayamaz!");

jQuery.validator.addMethod("emailExt", function(value, element) {
    return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
},"Geçerli bir eposta adresi yazmalısınız!");

// Validation Additional Rules End

function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
        }
    }
}

$(document).ready(function () {

    if($("#snationality").val()=='tc'){
        $("#inationality").hide();
        $("#inationality").val('');
    };    

    $("#snationality").change(function(){
        if($("#snationality").val()=='tc'){
            $("#icitizennumber").show();
            $("#inationality").hide();
            $("#inationality-error").hide();
        };
        if($("#snationality").val()=='other'){
            $("#icitizennumber").hide();
            $("#icitizennumber-error").hide();
            $("#inationality").show();
            $("#icitizennumber").val('');
        };
    });

});

$(document).ready(function(){
    $("#smilitary").hide();    
    $("#imcdate").hide();
    $("#imddate").hide();
    $("#imexempt").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='genderoptions']:checked").val();
        if(radioValue=='erkek'){
            $("#smilitary").show();
            // console.log('erkek seçildi');
        }else if(radioValue=='kadin'){
            // console.log('kadin seçildi');            
            $("#smilitary").get(0).selectedIndex = 0;
            $("#smilitary").hide();
            $("#imcdate").hide();            
            $("#imddate").hide();
            $("#imexempt").hide();
        }
    });

    $("#smilitary").change(function(){
        if($("#smilitary").val()=='yapti'){
            $("#imcdate").show();            
            $("#imddate").hide();            
            $("#imexempt").hide();            
        };
        if($("#smilitary").val()=='tecilli'){
            $("#imddate").show();            
            $("#imcdate").hide();            
            $("#imexempt").hide();
        };
        if($("#smilitary").val()=='muaf'){
            $("#imexempt").show();            
            $("#imddate").hide();        
            $("#imcdate").hide();
        };
    });
});

$(document).ready(function(){
    $("#ichild").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='maritaloptions']:checked").val();
        if(radioValue=='bekar'){
            $("#ichild").show();
            // console.log('bekar seçildi');
        }else if(radioValue=='evli'){
            // console.log('evli seçildi');
            $("#ichild").show();
        }
    });
});

// Masks
$(document).ready(function(){
    $('#icitizennumber').mask('00000000000');
    $('#ibdate').mask("00.00.0000");
    // $('#imcdate').mask("00.00.0000");
    // $('#imddate').mask("00.00.0000");
    // $('#iexpecdate').mask("00.00.0000");
    $('#iphone').mask('0000000000');
    $('#ifamiliarphone').mask('(000)000-00-00');
    $('#irefphone').mask('(000)000-00-00');    
});

$(document).ready(function(){
    $("#icriminal").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='criminaloptions']:checked").val();
        if(radioValue=='evet'){
            $("#icriminal").show();
        }else if(radioValue=='hayir'){
            $("#icriminal-error").hide();
            $("#icriminal").hide();
        }
    });
});

$(document).ready(function(){
    $(".sdriving").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='drivingoptions']:checked").val();
        if(radioValue=='evet'){
            $(".sdriving").show();            
        }else if(radioValue=='hayir'){            
            $(".sdriving-error").hide();
            $(".sdriving").hide();
        }
    });
});

$(document).ready(function(){
    $("#itravel").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='traveloptions']:checked").val();
        if(radioValue=='evet'){
            $("#itravel").show();            
        }else if(radioValue=='hayir'){            
            $("#itravel-error").hide();
            $("#itravel").hide();
        }
    });
});

$(document).ready(function(){
    $("#imember").hide();

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='memberoptions']:checked").val();
        if(radioValue=='evet'){
            $("#imember").show();            
        }else if(radioValue=='hayir'){            
            $("#imember-error").hide();
            $("#imember").hide();
        }
    });
});

$(document).ready(function () {

    $("#sedlevel").change(function(){
        if($("#sedlevel").val()=='1'){
            $("#sedname").addClass("d-none");
            $("#iedname").removeClass("d-none");

            $("#sedname").val('');
            $("#iedname").val('');

            $("#seddep").addClass("d-none");
            $("#ieddep").removeClass("d-none");

            $("#seddep").val('');
            $("#ieddep").val('');
        };
        if($("#sedlevel").val()=='2' || $("#sedlevel").val()=='3' || $("#sedlevel").val()=='4' || $("#sedlevel").val()=='5'){
            $("#iedname").addClass("d-none");
            $("#sedname").removeClass("d-none");

            $("#iedname").val('');
            $("#sedname").val('');

            $("#ieddep").addClass("d-none");
            $("#seddep").removeClass("d-none");

            $("#ieddep").val('');
            $("#seddep").val('');
        };
    });

    $("#ifeddate").prop('disabled', true);
    $("#ifeddate").val('');

    $("#sedsta").change(function(){
        if($("#sedsta").val()=='Mezun'){
            $("#ifeddate").val('');
            // console.log('mezun seçili');
            $("#ifeddate").prop('disabled', false);
        };
        if($("#sedsta").val()=='Devam Ediyor'){
            // console.log('devam seçili');
            $("#ifeddate").prop('disabled', true);
            $("#ifeddate").val('---');
        };
    });
});

$(document).ready(function(){

    $("#education-plus-error").hide();
    var counter = 0;
    $("#education-list").hide();
    $("#education-addrow").click(function(){
        if( $("#sedlevel").val() != null && (($("#sedname").val() != null) || ($("#iedname").val()!='')) && (($("#seddep").val() != null) || ($("#ieddep").val()!='')) && $("#sedsta").val() != null && $("#iseddate").val()!='' && $("#ifeddate").val()!=''){

            // console.log('Şart sağlandı');
            $("#education-plus-error").hide();

            $("#education-list").show();
            var sedlevel = $("#sedlevel").val();
            var oname="";
            switch(sedlevel){
              case "1" : oname="Lise"; break;
              case "2" : oname="Ön Lisans"; break;
              case "3" : oname="Lisans"; break;
              case "4" : oname="Yüksek Lisans"; break;
              case "5" : oname="Doktora"; break;
            }

            var edname = $("#sedname").val() || $("#iedname").val();
            var eddep = $("#seddep").val() || $("#ieddep").val();
            var iseddate = $("#iseddate").val();
            var sedsta = $("#sedsta").val();
            var ifeddate = $("#ifeddate").val();
            var markup = "<tr id='"+sedlevel+"'><td><input type='hidden' value='" + oname + "' name='sedlevel[]'></input>" + oname + "</td><td><input type='hidden' value='" + edname + "' name='edname[]'></input>" + edname + "</td><td><input type='hidden' value='" + eddep + "' name='eddep[]'></input>" + eddep + "</td><td><input type='hidden' value='" + iseddate + "' name='iseddate[]'></input>" + iseddate + "</td><td><input type='hidden' value='" + sedsta + "' name='sedsta[]'></input>" + sedsta + "</td><td><input type='hidden' value='" + ifeddate + "' name='ifeddate[]'></input>" + ifeddate + "</td><td><input type='button' name='record' id='"+sedlevel+"' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";        
            $("#education-list tbody").append(markup);
            counter++;
            console.log(counter);

            schools.push($("#sedlevel").val());

            console.log(schools);
            
            $("#sedlevel").val('');
            $("#sedname").val('');
            $("#iedname").val('');
            $("#seddep").val('');
            $("#ieddep").val('');
            $("#iseddate").val('');
            $("#sedsta").val('');
            $("#ifeddate").val('');

        }else{
            // console.log('sağlanmadı');
            $("#education-plus-error").show();
        }
    });
    
    $("#education-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        removeItem(schools,this.id);
        console.log(schools);
         counter -= 1
        if (counter=='') {
            $("#education-list").hide();
        }
    });

});

$(document).ready(function(){
    $("#language-plus-error").hide();
    var counter = 0;
    $("#language-list").hide();
    $("#language-addrow").click(function(){
        if( $("#slangname").val() != null && $("#slangread").val() != null && $("#slangwrite").val() != null && $("#slangspeak").val() != null ){
            $("#language-plus-error").hide();
            $("#language-list").show();
            var slangname = $("#slangname").val();
            var slangread = $("#slangread").val();
            var slangwrite = $("#slangwrite").val();
            var slangspeak = $("#slangspeak").val();
            var markup = "<tr><td><input type='hidden' value='" + slangname + "' name='slangname[]'></input>" + slangname + "</td><td><input type='hidden' value='" + slangread + "' name='slangread[]'></input>" + slangread + "</td><td><input type='hidden' value='" + slangwrite + "' name='slangwrite[]'></input>" + slangwrite + "</td><td><input type='hidden' value='" + slangspeak + "' name='slangspeak[]'></input>" + slangspeak + "</td><td><input type='button' name='record' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";        
            $("#language-list tbody").append(markup);
            counter++;
            console.log(counter);
            
            $("#slangname").val('');
            $("#slangread").val('');
            $("#slangwrite").val('');
            $("#slangspeak").val('');
        }else{
            // console.log('sağlanmadı');
            $("#language-plus-error").show();
        }
    });
    
    $("#language-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        counter -= 1
        if (counter=='') {
            $("#language-list").hide();
        }
    });
});

$(document).ready(function(){
    $("#program-plus-error").hide();
    var counter = 0;
    $("#program-list").hide();
    $("#program-addrow").click(function(){
        if($("#iprogname").val()!='' && $("#sproglevel").val() != null) {
            $("#program-plus-error").hide();
            $("#program-list").show();
            var iprogname = $("#iprogname").val();
            var sproglevel = $("#sproglevel").val();
            var markup = "<tr><td><input type='hidden' value='" + iprogname + "' name='iprogname[]'></input>" + iprogname + "</td><td><input type='hidden' value='" + sproglevel + "' name='sproglevel[]'></input>" + sproglevel + "</td><td><input type='button' name='record' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";        
            $("#program-list tbody").append(markup);
            counter++;
            console.log(counter);
            
            $("#iprogname").val('');
            $("#sproglevel").val('');
        }else{
            $("#program-plus-error").show();
        }
    });
    
    $("#program-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        counter -= 1
        if (counter=='') {
            $("#program-list").hide();
            $("#program-plus-error").hide();
        }
    });
});

// Kurs Seminer Start
$(document).ready(function(){
    $("#course-plus-error").hide();
    var counter = 0;
    $("#course-list").hide();
    $("#course-addrow").click(function(){
        if($("#icoursename").val()!='' && $("#icoursesubject").val()!='' && $("#icoursetime").val()!='' && $("#icoursedate").val()!=''){
            $("#course-plus-error").hide();
            $("#course-list").show();
            var icoursename = $("#icoursename").val();
            var icoursesubject = $("#icoursesubject").val();
            var icoursetime = $("#icoursetime").val();
            var icoursedate = $("#icoursedate").val();
            var markup = "<tr><td><input type='hidden' value='" + icoursename + "' name='icoursename[]'></input>" + icoursename + "</td><td><input type='hidden' value='" + icoursesubject + "' name='icoursesubject[]'></input>" + icoursesubject + "</td><td><input type='hidden' value='" + icoursetime + "' name='icoursetime[]'></input>" + icoursetime + "</td><td><input type='hidden' value='" + icoursedate + "' name='icoursedate[]'></input>" + icoursedate + "</td><td><input type='button' name='record' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";
            $("#course-list tbody").append(markup);
            counter++;
            console.log(counter);
            
            $("#icoursename").val('');
            $("#icoursesubject").val('');
            $("#icoursetime").val('');
            $("#icoursedate").val('');
        }else{
            $("#course-plus-error").show();
        }
    });
    
    $("#course-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        counter -= 1
        if (counter=='') {
            $("#course-list").hide();
            $("#course-plus-error").hide();
        }
    });
});
// Kurs Seminer End

$(document).ready(function () {
    var x = document.getElementById("sexpreason");
    if($("#genderoptions")=='erkek'){
        $("#sexpreason").val();
    }else if($("#genderoptions")=='kadin'){
    }

    $("#sexpname").hide();
    
    $("#sexpoption").change(function(){
        if($("#sexpoption").val()=='1'){
            $("#iexpname").prop('disabled', true);
            $("#sexpname").prop('disabled', true);
            $("#sexptype").prop('disabled', true);
            $("#iexptitle").prop('disabled', true);
            $("#isexpdate").prop('disabled', true);
            $("#sexpsta").prop('disabled', true);
            $("#ifexpdate").prop('disabled', true);
            $("#sexpreason").prop('disabled', true);
            
            $("#iexpname").val('---');
            $("#sexpname").val('---');
            $("#sexptype").val('---');
            $("#iexptitle").val('---');
            $("#isexpdate").val('---');
            $("#sexpsta").val('---');
            $("#ifexpdate").val('---');
            $("#sexpreason").val('---');
        }else{
            $("#iexpname").prop('disabled', false);
            $("#sexpname").prop('disabled', false);
            $("#sexptype").prop('disabled', false);
            $("#iexptitle").prop('disabled', false);
            $("#isexpdate").prop('disabled', false);
            $("#sexpsta").prop('disabled', false);
            $("#ifexpdate").prop('disabled', false);
            $("#sexpreason").prop('disabled', false);
        }
        if($("#sexpoption").val()=='2'){
            $("#iexpname").hide();
            $("#sexpname").show();
            $("#iexpname").val('');
            $("#sexpname").val('');
            $("#sexptype").val('');
            $("#iexptitle").val('');
            $("#isexpdate").val('');
            $("#sexpsta").val('');
            $("#ifexpdate").val('');
            $("#sexpreason").val('');
        };
        if($("#sexpoption").val()=='3'){
            console.log($("#sexptype").val());
            $("#sexpname").hide();
            $("#iexpname").show();
            $("#iexpname").val('');
            $("#sexpname").val('');
            $("#sexptype").val('');
            $("#iexptitle").val('');
            $("#isexpdate").val('');
            $("#sexpsta").val('');
            $("#ifexpdate").val('');
            $("#sexpreason").val('');
        };
    });

    $("#ifexpdate").prop('disabled', true);
    $("#ifexpdate").val('');
    
    $("#sexpreason").prop('disabled', true);

    $("#sexpsta").change(function(){
        if($("#sexpsta").val()=='Ayrıldı'){
            $("#ifexpdate").val('');
            $("#ifexpdate").prop('disabled', false);
            $("#sexpreason").prop('disabled', false);
            $("#sexpreason").val('');
        };
        if($("#sexpsta").val()=='Devam Ediyor'){
            $("#ifexpdate").prop('disabled', true);
            $("#ifexpdate").val('---');
            $("#sexpreason").prop('disabled', true);
            $("#sexpreason").val('---');
        };
    });

    $("#experience-addrow").click(function(){
        if($("#sexpoption").val() != null && (($("#iexpname").val()!='') || ($("#sexpname").val() != null)) && $("#sexptype").val() != null && $("#iexptitle").val()!='' && $("#isexpdate").val()!='' && $("#sexpsta").val() != null && $("#ifexpdate").val()!='' && $("#sexpreason").val() != null) {

            var sexpoption = $("#sexpoption").val();

            var expnewname="";
            switch(sexpoption){
              case "1" : expnewname="İş Tecrübem Yok"; break;
              case "2" : expnewname="Sabancı İçi"; break;
              case "3" : expnewname="Sabancı Dışı"; break;
            }

            var iexpname = $("#iexpname").val() || $("#sexpname").val() ;
            var sexptype = $("#sexptype").val();
            var iexptitle = $("#iexptitle").val();
            var isexpdate = $("#isexpdate").val();
            var sexpsta = $("#sexpsta").val();
            var ifexpdate = $("#ifexpdate").val();
            var sexpreason = $("#sexpreason").val();
            var markup = "<tr><td><input type='hidden' value='" + expnewname + "' name='sexpoption[]'></input>" + expnewname + "</td><td><input type='hidden' value='" + iexpname + "' name='iexpname[]'></input>" + iexpname + "</td><td><input type='hidden' value='" + sexptype + "' name='sexptype[]'></input>" + sexptype + "</td><td><input type='hidden' value='" + iexptitle + "' name='iexptitle[]'></input>" + iexptitle + "</td><td><input type='hidden' value='" + isexpdate + "' name='isexpdate[]'></input>" + isexpdate + "</td><td><input type='hidden' value='" + sexpsta + "' name='sexpsta[]'></input>" + sexpsta + "</td><td><input type='hidden' value='" + ifexpdate + "' name='ifexpdate[]'></input>" + ifexpdate + "</td><td><input type='hidden' value='" + sexpreason + "' name='sexpreason[]'></input>" + sexpreason + "</td><td><input type='button' name='record' id='"+sexpoption+"' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";
            $("#experience-list tbody").append(markup);
           
            experiences.push($("#sexpoption").val());
            console.log(experiences);
            
            $("#experience-list").removeClass("d-none");
            $("#experience-plus-error").addClass("d-none");
            
            $("#sexpoption").val('');
            $("#sexpname").val('');
            $("#iexpname").val('');
            $("#sexptype").val('');
            $("#iexptitle").val('');
            $("#isexpdate").val('');
            $("#sexpsta").val('');
            $("#ifexpdate").val('');
            $("#sexpreason").val('');
        }else{
            $("#experience-plus-error").removeClass("d-none");
        }
    });
    
    $("#experience-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        removeItem(experiences,this.id);
        console.log(experiences);
        if (experiences.length==0) {
            $("#experience-list").addClass("d-none");
        }
    });

});

$(document).ready(function () {

    $("#isalvalue").prop('disabled', true);
    
    $("#ssaltype").change(function(){
        if($("#ssaltype").val()=='brut'){
            $("#isalvalue").prop('disabled', false);
        };
        if($("#ssaltype").val()=='net'){
            $("#isalvalue").prop('disabled', false);
        };
    });
    
    $("#ibenbonus").hide();
    $("#ibenother").hide();    

    $("#sbenopt").change(function(){

        if($("select#sbenopt option:selected").filter(":contains('Prim')").length === 0) {
            selected_option = $("select#sbenopt option:selected");
            $("#ibenbonus").hide();
            $("#ibenbonus-error").hide();
        } else {
            $("#ibenbonus").show();
        }
        
        if($("select#sbenopt option:selected").filter(":contains('Diğer')").length === 0) {
            selected_option = $("select#sbenopt option:selected");
            $("#ibenother").hide();
            $("#ibenother-error").hide();
        } else {
            $("#ibenother").show();
        }
        
    });

});

$(document).ready(function () {
    $("#iposname").hide();
    $(".sposname").hide();

    $("#spostype").change(function(){
        if($("#spostype").val()=='Mağaza'){
            $(".sposname").show();
            $("#iposname").hide();
        };
        if($("#spostype").val()=='Merkez'){
            $(".sposname").hide();
            $("#iposname").show();
        };
    });

    $("#sposname").change(function(){
        if($("select#sposname option:selected")) {
            selected_option = $("select#sposname option:selected");
            $("#sposname-error").hide();
        }
    });
    
    $("#iexpecvalue").prop('disabled', true);

    $("#sexpectype").change(function(){
        if($("#sexpectype").val()=='brut'){
            $("#iexpecvalue").prop('disabled', false);
        };
        if($("#sexpectype").val()=='net'){
            $("#iexpecvalue").prop('disabled', false);
        };
    });
});

$(document).ready(function(){

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='groupoptions']:checked").val();
        if(radioValue=='evet'){            
            $("#group-detail").removeClass("d-none");
        }else if(radioValue=='hayir'){
            $("#igroupname").val('');
            $("#sgroupcomp").val('');
            $("#igrouptitle").val('');
            $("#igroupfamiliar").val('');
            $("#group-detail-list tbody tr").remove();
            if (group_references.length==0) {
                $("#group-detail-list").addClass("d-none");
            }
            $("#group-detail").addClass("d-none");
            $("#group-detail-list").addClass("d-none");
            
        }
    });

    $("#group-addrow").click(function(){
        if($("#igroupname").val()!='' && $("#sgroupcomp").val() != null && $("#igrouptitle").val() != '' && $("#igroupfamiliar").val()!=''){

            var igroupname = $("#igroupname").val();
            var sgroupcomp = $("#sgroupcomp").val();
            var igrouptitle = $("#igrouptitle").val();
            var igroupfamiliar = $("#igroupfamiliar").val();
            var markup = "<tr><td><input type='hidden' value='" + igroupname + "' name='igroupname[]'></input>" + igroupname + "</td><td><input type='hidden' value='" + sgroupcomp + "' name='sgroupcomp[]'></input>" + sgroupcomp + "</td><td><input type='hidden' value='" + igrouptitle + "' name='igrouptitle[]'></input>" + igrouptitle + "</td><td><input type='hidden' value='" + igroupfamiliar + "' name='igroupfamiliar[]'></input>" + igroupfamiliar + "</td><td><input type='button' name='record' id='" + igroupname + "' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";        
            $("#group-detail-list tbody").append(markup);
            
            group_references.push($("#igroupname").val());
            console.log(group_references);

            $("#group-detail-list").removeClass("d-none");
            $("#group-plus-error").addClass("d-none");
            
            $("#igroupname").val('');
            $("#sgroupcomp").val('');
            $("#igrouptitle").val('');
            $("#igroupfamiliar").val('');
        }
        else{
            $("#group-plus-error").removeClass("d-none");
        }
    });
    
    $("#group-detail-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        removeItem(group_references,this.id);
        console.log(group_references);
        if (group_references.length==0) {
            $("#group-detail-list").addClass("d-none");
        }
    });

});

$(document).ready(function(){  

    $("#ref-addrow").click(function(){
        if($("#irefname").val()!='' && $("#irefcomp").val()!='' && $("#ireftitle").val()!='' && $("#irefphone").val()!=''){
           
            var irefname = $("#irefname").val();
            var irefcomp = $("#irefcomp").val();
            var ireftitle = $("#ireftitle").val();
            var irefphone = $("#irefphone").val();
            var markup = "<tr><td><input type='hidden' value='" + irefname + "' name='irefname[]'></input>" + irefname + "</td><td><input type='hidden' value='" + irefcomp + "' name='irefcomp[]'></input>" + irefcomp + "</td><td><input type='hidden' value='" + ireftitle + "' name='ireftitle[]'></input>" + ireftitle + "</td><td><input type='hidden' value='" + irefphone + "' name='irefphone[]'></input>" + irefphone + "</td><td><input type='button' name='record' id='"+irefname+"' class='ibtnDel delete-row btn fa-input' value='&#xf057'/></tr>";        
            $("#ref-list tbody").append(markup);

            references.push($("#irefname").val());
            console.log(references);

            $("#ref-list").removeClass("d-none");
            $("#ref-plus-error").addClass("d-none");
            
            $("#irefname").val('');
            $("#irefcomp").val('');
            $("#ireftitle").val('');
            $("#irefphone").val('');

        }else{
            $("#ref-plus-error").removeClass("d-none");
        }
    });
    
    $("#ref-list tbody").on("click", ".ibtnDel", function (event) {
        $(this).parents("tr").remove();
        removeItem(references,this.id);
        console.log(references);
        console.log(references.length);
        if (references.length==0) {
            $("#ref-list").addClass("d-none");
        }
    });

    var minLength = 14;
    $("#irefphone-error-2").hide();
    $("#irefphone").on("keydown keyup change", function(){
        var value = $(this).val();
        if (value.length < minLength){
            $("#irefphone-error-2").show();
        }else{
            $("#irefphone-error-2").hide();
        }
    });

});

$(document).ready(function(){
    $("#iphone").on("keydown keyup change", function(){
        var bla = $("#iphone").val();
        // console.log($("#iphone").val());
        $("#gsm").val(bla);
    });
});