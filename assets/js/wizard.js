/*!

 =========================================================
 * Bootstrap Wizard - v1.1.1
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/bootstrap-wizard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/bootstrap-wizard/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// Get Shit Done Kit Bootstrap Wizard Functions

searchVisible = 0;
transparent = true;

var schools = [];
var ed_forward=false;

var experiences = [];
var ex_forward=false;

var group_references = [];
var group_ref_forward=false;

var references = [];
var ref_forward=false;

$(document).ready(function(){

    /*  Activate the tooltips      */
    $('[rel="tooltip"]').tooltip();

    // Code for the Validator
    var $validator = $('.wizard-card form').validate({
		rules: {
			iname: "required",
			icitizennumber:{
				required:true,
				digits: true,
				minlength: 11,
				maxlength: 11,
				notzerostart:true
			},
			inationality: "required",
			sbirthplace: "required",		
			ibdate: "required",	
			genderoptions: "required",
			smilitary: "required",
			imcdate: "required",
			imddate: "required",
			imexempt: "required",
			maritaloptions: "required",
			ichild: {
				digits: true
			},
			iaddress: "required",
			sacity: "required",
			satown: "required",
			iphone: {
				required: true,
				minlength: 10
			},
			imail: {
				required:true,
				emailExt:true
			},
			criminaloptions: "required",
			icriminal: "required",
			drivingoptions: "required",
			sdriving: "required",
			traveloptions: "required",
            itravel: "required",
            memberoptions: "required",
			imember: "required",
			ssaltype: "required",
			isalvalue: {
				required: true,
				digits: true
			},
			ibenbonus: "required",
			ibenother: "required",
			spostype: "required",
			sposname: "required",
			iposname: "required",
			sexpectype: "required",
			iexpecvalue: {
				required: true,
				digits: true
			},
			iexpecdate: "required",
			ifamiliarname: "required",
			ifamiliarwho: "required",
			ifamiliarphone: {
				required: true,
				minlength: 14
			},
			groupoptions: "required",
			kvkkcheck: "required",
			consent: "required",
			refcommit: "required",
			gsm: {
				required: true,
				minlength: 10
			},
			ikod: "required"
		},
		messages: {			
			iname:{
				required:"Bu alan boş bırakılamaz!"
			},			
			icitizennumber:{
				required:"Bu alan boş bırakılamaz!",
				minlength:"TCKN 11 karakter olmalı!",
				maxlength:"TCKN 11 karakter olmalı!",
				digits:"TCKN yalnızca sayı içermeli!"
			},
			inationality:{
				required:"Bu alan boş bırakılamaz!"
			},
			sbirthplace: {
				required:"Bu alan boş bırakılamaz!"
			},
			ibdate: {
				required:"Bu alan boş bırakılamaz!"
			},
			genderoptions:{
				required:"Bu alan boş bırakılamaz!"
			},				
			smilitary:{
				required:"Bu alan boş bırakılamaz!"
			},				
			imcdate:{
				required:"Terhis tarihi boş bırakılamaz!"
			},
			imddate:{
				required:"Tecil tarihi boş bırakılamaz!"
			},
			imexempt:{
				required:"Muafiyet nedeni boş bırakılamaz!"
			},
			maritaloptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			ichild:{
				digits:"Yalnızca sayı içermeli!"
			},
			iaddress:{
				required:"Bu alan boş bırakılamaz!"
			},
			sacity:{
				required:"Bu alan boş bırakılamaz!"
			},
			satown:{
				required:"Bu alan boş bırakılamaz!"
			},
			iphone:{
				required:"Bu alan boş bırakılamaz!",
				minlength:"Telefon numarasını eksik doldurdunuz!"
			},
			imail:{
				required:"Bu alan boş bırakılamaz!",
				emailExt:"Geçerli bir eposta adresi yazmalısınız!"
			},
			criminaloptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			icriminal:{
				required:"Bu alan boş bırakılamaz!"
			},
			drivingoptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			sdriving:{
				required:"Bu alan boş bırakılamaz!"
			},
			traveloptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			itravel:{
				required:"Bu alan boş bırakılamaz!"
            },
            memberoptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			imember:{
				required:"Bu alan boş bırakılamaz!"
			},
			ssaltype: {
				required: "Bu alan boş bırakılamaz!"
			},
			isalvalue: {
				required: "Bu alan boş bırakılamaz!",
				digits:"Ücret yalnızca sayı içermeli!"
			},
			ibenbonus : {
				required: "Bu alan boş bırakılamaz!"
			},
			ibenother: {
				required: "Bu alan boş bırakılamaz!"
			},
			spostype: {
				required: "Bu alan boş bırakılamaz!"
			},
			sposname: {
				required: "Bu alan boş bırakılamaz!"
			},
			iposname: {
				required: "Bu alan boş bırakılamaz!"
			},
			sexpectype: {
				required: "Bu alan boş bırakılamaz!"
			},
			iexpecvalue: {
				required: "Bu alan boş bırakılamaz!",
				digits:"Ücret yalnızca sayı içermeli!"
			},
			iexpecdate: {
				required: "Bu alan boş bırakılamaz!"
			},
			ifamiliarname: {
				required: "Bu alan boş bırakılamaz!"
			},
			ifamiliarwho: {
				required: "Bu alan boş bırakılamaz!"
			},
			ifamiliarphone:{
				required:"Bu alan boş bırakılamaz!",
				minlength:"Telefon numarasını eksik doldurdunuz!"
			},
			groupoptions:{
				required:"Bu alan boş bırakılamaz!"
			},
			kvkkcheck:{
				required:"KVKK metnini okuyup onaylamalısınız!"
			},
			consent:{
				required:"Rıza metnini okuyup onaylamalısınız!"
			},
			refcommit:{
				required:"Referans taahhüdünü okuyup onaylamalısınız!"
			},
			gsm:{
				required:"Bu alan boş bırakılamaz!",
				minlength:"Telefon numarasını eksik doldurdunuz!"
			},
			ikod:{
				required:"Doğrulama kodu ile doğrulama yapmalısınız!"
			}
		},
		errorPlacement: function(error, element) {
		 if(element.is("#ibdate")){
            $("#ibdate_error").html(error)
          }else if(element.attr("name") == "genderoptions") {
			error.appendTo('#rgender_error');
		  }else if(element.is("#imcdate")){
			$("#imdate_error").html(error);
		  }else if(element.is("#imddate")){
			$("#imdate_error").html(error);
		  }else if(element.attr("name") == "maritaloptions") {
			error.appendTo('#rmarital_error');
		  }else if(element.attr("name") == "criminaloptions") {
			error.appendTo('#rcriminal_error');
		  }else if(element.attr("name") == "drivingoptions") {
			error.appendTo('#rdriving_error');
		  }else if(element.attr("name") == "sdriving") {
			error.appendTo('#sdriving_error');
		  }else if(element.attr("name") == "traveloptions") {
			error.appendTo('#rtravel_error');
          }else if(element.attr("name") == "memberoptions") {
			error.appendTo('#rmember_error');
		  }else if(element.attr("name") == "sposname") {
			error.appendTo('#sposname_error');
		  }else if(element.is("#iexpecdate")){
			$("#iexpecdate_error").html(error);
		  }else if(element.attr("name") == "groupoptions") {
			error.appendTo('#rgroup_error');
		  }else if(element.is("#kvkkcheck")){
			$("#kvkkcheck_error").html(error);
		  }else if(element.is("#consent")){
			$("#consent_error").html(error);
		  }else if(element.is("#refcommit")){
			$("#refcommit_error").html(error);
		  }else if(element.is("#gsm")){
			$("#gsm_error").html(error);
		  }else if(element.is("#ikod")){
			$("#sms_error").html(error);
		  }else {
            error.insertAfter(element);
		  };
		}
	});

    // Wizard Initialization
  	$('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function(tab, navigation, index) {
						
			var $valid = $('.wizard-card form').valid();
			// console.log('page ındex'+index);

			if(index==3){				
				if(schools.includes("1")){

					if(schools.includes("4") || schools.includes("5")){
						if(schools.includes("3")){
							ed_forward=true;
						}else{
							ed_forward=false;
						}
					}else{
						ed_forward=true;
					}
				}else{
					ed_forward=false;
				}
				if(!ed_forward){
				$valid=false;
				}
			}//index ed control end

			if(index==6){
				if(experiences.length==0){
					ex_forward=false;
				}else{
					ex_forward=true;
				}
				if(!ex_forward){
					$valid=false;
				}
				console.log($('.sbenopt').val());
    			$(".sbenopt").val('');
				if(experiences.includes("1")){
					$("#ssaltype").val('---');
					$("#ssaltype").prop('disabled', true);
					$("#isalvalue").val('---');
					$("#isalvalue").prop('disabled', true);
					$(".sbenopt").val('---');
					$(".sbenopt").prop('disabled', true);
				}else{
					console.log('1 seçili değil');
					$("#ssaltype").get(0).selectedIndex = 0;
					$("#ssaltype").prop('disabled', false);
					$("#isalvalue").val('');
					$("#isalvalue").prop('disabled', false);
					$(".sbenopt").get(0).selectedIndex = 0;
					$(".sbenopt").prop('disabled', false);
				}
			}//index ex control end

			if(index==8){
				
				if(document.getElementById('groupradio2').checked){
					group_ref_forward=true;
				}

				if(document.getElementById('groupradio1').checked){

					if(group_references.length==0){
						group_ref_forward=false;
					}else{
						group_ref_forward=true;
					}
					
				}
				
				if(!group_ref_forward){
					$valid=false;
				}
			}//index ex control end

			if(index==9){
				if(references.length<2){
					ref_forward=false;
				}else{
					ref_forward=true;
				}
			
				if(!ref_forward){
					$valid=false;
				}
			}//index ex2 control end			

        	if(!$valid) {
        		$validator.focusInvalid();
        		return false;
        	}
        },

        onInit : function(tab, navigation, index){

          //check number of tabs and fill the entire row
          var $total = navigation.find('li').length;
          $width = 100/$total;
          var $wizard = navigation.closest('.wizard-card');

          $display_width = $(document).width();

          if($display_width < 600 && $total > 3){
              $width = 50;
          }

           navigation.find('li').css('width',$width + '%');
           $first_li = navigation.find('li:first-child a').html();
           $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
           $('.wizard-card .wizard-navigation').append($moving_div);
           refreshAnimation($wizard, index);
           $('.moving-tab').css('transition','transform 0s');
       },

        onTabClick : function(tab, navigation, index){

            var $valid = $('.wizard-card form').valid();

            if(!$valid){
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function(tab, navigation, index) {
			
            var $total = navigation.find('li').length;
            var $current = index+1;

			var $wizard = navigation.closest('.wizard-card');
			
			console.log('görüntülenen tab:'+index);

            // If it's the last tab then hide the last button and show the finish instead
            if($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            $("#current").html($current);
            $("#total").html($total);

            setTimeout(function(){
                $('.moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if( !index == 0 ){
                $(checkbox).css({
                    'opacity':'0',
                    'visibility':'hidden',
                    'position':'absolute'
                });
            } else {
                $(checkbox).css({
                    'opacity':'1',
                    'visibility':'visible'
                });
			}
			
			if(index==9){
				console.log('kod doğrulanmadı!');
				$($wizard).find('.btn-finish').prop( "disabled", true );				
			}//index kod control end

            refreshAnimation($wizard, index);
        }
  	});


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function(){
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function(){
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked','true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function(){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked','true');
        }
    });

    $('.set-full-height').css('height', 'auto');

});



 //Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(window).resize(function(){
    $('.wizard-card').each(function(){
        $wizard = $(this);
        index = $wizard.bootstrapWizard('currentIndex');
        refreshAnimation($wizard, index);

        $('.moving-tab').css({
            'transition': 'transform 0s'
        });
    });
});

function refreshAnimation($wizard, index){
    total_steps = $wizard.find('li').length;
    move_distance = $wizard.width() / total_steps;
    step_width = move_distance;
    move_distance *= index;

    $wizard.find('.moving-tab').css('width', step_width);
    $('.moving-tab').css({
        'transform':'translate3d(' + move_distance + 'px, 0, 0)',
        'transition': 'all 0.3s ease-out'

    });
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
