jQuery('#headerDropdown').on('change', function () {

    if (jQuery('#headerDropdown').is(':checked')) {
        jQuery('#menu-mainnav').css('height', '3.5rem');
        jQuery('.dropdown').hide();
        jQuery('.dropup').show();
    } else {
        jQuery('#menu-mainnav').css('height', '0rem');
        jQuery('.dropup').hide();
        jQuery('.dropdown').show();
    }
});