/**
 * Created by krm on 05/09/2017.
 */

$(document).ready(function () {

    // 'Proceed to Payment' button's freeze/unfreeze behavior on 'Pricing Step 2' page
    function triggerChange(){
        $("#billingTermsAgreementCheck").trigger("change");
    }

    $("#billingTermsAgreementCheck").change(function() {
        $('#proceedToPayment').toggleClass('frozen');
    });

    triggerChange();



    // 'Upload' button's freeze/unfreeze behavior on 'Post a Resume' page
    function triggerChange2(){
        $("#agreedToTerms").trigger("change");
    }

    $("#agreedToTerms").change(function() {
        $('#uploadResume').toggleClass('frozen');
    });

    triggerChange2();





    // Preview Test
    var previewButton = $("#jobPreview");

    var jobTitle = $('input#jobTitle');
    var jobTitlePreview = $('#jobTitlePreview');

    var summary = $('input#summary');
    var summaryPreview = $('#jobSummaryPreview');

    var jobDescription = $('input#jobDescription');
    var jobDescriptionPreview = $('#jobDescriptionPreview');

    $(previewButton).on('click',function () {

        // console.log($(jobTitle).val());
        $(jobTitle).val();
        $(jobTitlePreview).text($(jobTitle).val());

        $(summary).val();
        $(summaryPreview).text($(summary).val());

        $(jobDescription).val();
        $(jobDescriptionPreview).text($(jobDescription).val());

    });

    // var conceptName = $('#aioConceptName').find(":selected").text();


    $(window).width();
    $(document).width();

    if ($(window).width() < 525) {
        $('html,body').animate({
            scrollTop: $("#onlyForJobseekerz").offset().top}, 'slow');

    }

});


$(window).on('load resize', function(){

    $(window).width();

    if ($(window).width() < 525) {
        $('html,body').animate({
            scrollTop: $("#onlyForJobseekerz").offset().top}, 'slow');

    }


});