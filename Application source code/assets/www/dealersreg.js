/*
 * JS for dealersreg generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '54bfebde-ff0b-4959-8e0a-400531094339';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "dealersreg",
    "location": "dealersreg.html"
}, {
    "name": "sel_dist",
    "location": "sel_dist.html"
}, {
    "name": "Agrotips",
    "location": "Agrotips.html"
}, {
    "name": "crops",
    "location": "crops.html"
}, {
    "name": "Screen4",
    "location": "Screen4.html"
}, {
    "name": "Insurance",
    "location": "Insurance.html"
}, {
    "name": "dealers_page",
    "location": "dealers_page.html"
}, {
    "name": "deal_info",
    "location": "deal_info.html"
}, {
    "name": "deal_login",
    "location": "deal_login.html"
}, {
    "name": "deler_det",
    "location": "deler_det.html"
}];

function dealersreg_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'dealersreg_mobilebutton_11',
        'spacer_21': 'dealersreg_spacer_21',
        'mobileworkarea_18': 'dealersreg_mobileworkarea_18',
        'spacer_32': 'dealersreg_spacer_32',
        'mobiletextinput_31': 'dealersreg_mobiletextinput_31',
        'mobiletextinput_30': 'dealersreg_mobiletextinput_30',
        'mobiletextinput_29': 'dealersreg_mobiletextinput_29',
        'mobiletextinput_28': 'dealersreg_mobiletextinput_28',
        'mobilebutton_27': 'dealersreg_mobilebutton_27',
        'mobileimage_3': 'dealersreg_mobileimage_3',
        'mobilelabel_20': 'dealersreg_mobilelabel_20',
        'Crops': 'dealersreg_Crops',
        'Insurance': 'dealersreg_Insurance',
        'Agrotips': 'dealersreg_Agrotips'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'dealersreg';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var dealersreg_onLoad = function() {
            dealersreg_elementsExtraJS();

            dealersreg_deviceEvents();
            dealersreg_windowEvents();
            dealersreg_elementsEvents();
        };

    // screen window events


    function dealersreg_windowEvents() {

        $('#dealersreg').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function dealersreg_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function dealersreg_elementsExtraJS() {
        // screen (dealersreg) extra code

    };

    // screen elements handler


    function dealersreg_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#dealersreg_mobileheader [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="dealersreg_panel_2"]').panel("open");

                }
            },
        }, '#dealersreg_mobileheader [name="mobilebutton_11"]');

        $(document).off("click", '#dealersreg_mobilecontainer [name="mobilebutton_27"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('dealers_page', {
                        transition: 'slideup',
                        reverse: false
                    });

                }
            },
        }, '#dealersreg_mobilecontainer [name="mobilebutton_27"]');

        $(document).off("click", '#dealersreg_panel_2 [name="Crops"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('crops', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#dealersreg_panel_2 [name="Crops"]');
        $(document).off("click", '#dealersreg_panel_2 [name="Insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Insurance', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#dealersreg_panel_2 [name="Insurance"]');
        $(document).off("click", '#dealersreg_panel_2 [name="Agrotips"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Agrotips', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#dealersreg_panel_2 [name="Agrotips"]');

    };

    $(document).off("pagebeforeshow", "#dealersreg").on("pagebeforeshow", "#dealersreg", function(event, ui) {
        Apperyio.CurrentScreen = "dealersreg";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    dealersreg_onLoad();
};

$(document).off("pagecreate", "#dealersreg").on("pagecreate", "#dealersreg", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    dealersreg_js();
});