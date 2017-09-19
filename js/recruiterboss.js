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


});