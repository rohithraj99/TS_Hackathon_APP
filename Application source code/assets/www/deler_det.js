/*
 * JS for deler_det generated by Appery.io
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

function deler_det_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'deler_det_mobilebutton_11',
        'spacer_21': 'deler_det_spacer_21',
        'mobileworkarea_18': 'deler_det_mobileworkarea_18',
        'spacer_75': 'deler_det_spacer_75',
        'mobilegrid_21': 'deler_det_mobilegrid_21',
        'mobilegridcell_22': 'deler_det_mobilegridcell_22',
        'mobilegrid_46': 'deler_det_mobilegrid_46',
        'mobilegridcell_47': 'deler_det_mobilegridcell_47',
        'price': 'deler_det_price',
        'mobilegridcell_48': 'deler_det_mobilegridcell_48',
        'mobilelabel_52': 'deler_det_mobilelabel_52',
        'mobilegridcell_49': 'deler_det_mobilegridcell_49',
        'mobilelabel_53': 'deler_det_mobilelabel_53',
        'mobilegridcell_50': 'deler_det_mobilegridcell_50',
        'mobilelabel_54': 'deler_det_mobilelabel_54',
        'mobilebutton_35': 'deler_det_mobilebutton_35',
        'mobilegridcell_24': 'deler_det_mobilegridcell_24',
        'spacer_73': 'deler_det_spacer_73',
        'mobilegrid_55': 'deler_det_mobilegrid_55',
        'mobilegridcell_56': 'deler_det_mobilegridcell_56',
        'mobilelabel_60': 'deler_det_mobilelabel_60',
        'mobilegridcell_57': 'deler_det_mobilegridcell_57',
        'mobilelabel_61': 'deler_det_mobilelabel_61',
        'mobilegridcell_58': 'deler_det_mobilegridcell_58',
        'mobilelabel_62': 'deler_det_mobilelabel_62',
        'mobilegridcell_59': 'deler_det_mobilegridcell_59',
        'mobilelabel_63': 'deler_det_mobilelabel_63',
        'mobilebutton_37': 'deler_det_mobilebutton_37',
        'spacer_74': 'deler_det_spacer_74',
        'mobilegridcell_43': 'deler_det_mobilegridcell_43',
        'mobilegrid_64': 'deler_det_mobilegrid_64',
        'mobilegridcell_65': 'deler_det_mobilegridcell_65',
        'mobilelabel_69': 'deler_det_mobilelabel_69',
        'mobilegridcell_66': 'deler_det_mobilegridcell_66',
        'mobilelabel_70': 'deler_det_mobilelabel_70',
        'mobilegridcell_67': 'deler_det_mobilegridcell_67',
        'mobilelabel_71': 'deler_det_mobilelabel_71',
        'mobilegridcell_68': 'deler_det_mobilegridcell_68',
        'mobilelabel_72': 'deler_det_mobilelabel_72',
        'mobilebutton_45': 'deler_det_mobilebutton_45',
        'mobileimage_3': 'deler_det_mobileimage_3',
        'mobilelabel_20': 'deler_det_mobilelabel_20',
        'Crops': 'deler_det_Crops',
        'Insurance': 'deler_det_Insurance',
        'Agrotips': 'deler_det_Agrotips'
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

    Apperyio.CurrentScreen = 'deler_det';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var deler_det_onLoad = function() {
            deler_det_elementsExtraJS();

            deler_det_deviceEvents();
            deler_det_windowEvents();
            deler_det_elementsEvents();
        };

    // screen window events


    function deler_det_windowEvents() {

        $('#deler_det').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function deler_det_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function deler_det_elementsExtraJS() {
        // screen (deler_det) extra code

    };

    // screen elements handler


    function deler_det_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#deler_det_mobileheader [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="deler_det_panel_2"]').panel("open");

                }
            },
        }, '#deler_det_mobileheader [name="mobilebutton_11"]');

        $(document).off("click", '#deler_det_mobilecontainer [name="mobilebutton_35"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('deal_info', {
                        transition: 'slideup',
                        reverse: false
                    });

                }
            },
        }, '#deler_det_mobilecontainer [name="mobilebutton_35"]');

        $(document).off("click", '#deler_det_panel_2 [name="Crops"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('crops', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#deler_det_panel_2 [name="Crops"]');
        $(document).off("click", '#deler_det_panel_2 [name="Insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Insurance', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#deler_det_panel_2 [name="Insurance"]');
        $(document).off("click", '#deler_det_panel_2 [name="Agrotips"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Agrotips', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#deler_det_panel_2 [name="Agrotips"]');

    };

    $(document).off("pagebeforeshow", "#deler_det").on("pagebeforeshow", "#deler_det", function(event, ui) {
        Apperyio.CurrentScreen = "deler_det";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    deler_det_onLoad();
};

$(document).off("pagecreate", "#deler_det").on("pagecreate", "#deler_det", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    deler_det_js();
});