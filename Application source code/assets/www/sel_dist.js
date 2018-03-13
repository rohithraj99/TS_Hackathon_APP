/*
 * JS for sel_dist generated by Appery.io
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

function sel_dist_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'sel_dist_mobilebutton_11',
        'spacer_21': 'sel_dist_spacer_21',
        'mobileworkarea_18': 'sel_dist_mobileworkarea_18',
        'spacer_23': 'sel_dist_spacer_23',
        'mobilelabel_21': 'sel_dist_mobilelabel_21',
        'html_22': 'sel_dist_html_22',
        'getinfo2': 'sel_dist_getinfo2',
        'mobileimage_3': 'sel_dist_mobileimage_3',
        'mobilelabel_20': 'sel_dist_mobilelabel_20',
        'Crops': 'sel_dist_Crops',
        'Insurance': 'sel_dist_Insurance',
        'Agrotips': 'sel_dist_Agrotips'
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

    Apperyio.CurrentScreen = 'sel_dist';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var sel_dist_onLoad = function() {
            sel_dist_elementsExtraJS();

            sel_dist_deviceEvents();
            sel_dist_windowEvents();
            sel_dist_elementsEvents();
        };

    // screen window events


    function sel_dist_windowEvents() {

        $('#sel_dist').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function sel_dist_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function sel_dist_elementsExtraJS() {
        // screen (sel_dist) extra code

    };

    // screen elements handler


    function sel_dist_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#sel_dist_mobileheader [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="sel_dist_panel_2"]').panel("open");

                }
            },
        }, '#sel_dist_mobileheader [name="mobilebutton_11"]');

        $(document).off("click", '#sel_dist_mobilecontainer [name="getinfo2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('deler_det', {
                        transition: 'slideup',
                        reverse: false
                    });

                }
            },
        }, '#sel_dist_mobilecontainer [name="getinfo2"]');

        $(document).off("click", '#sel_dist_panel_2 [name="Crops"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('crops', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#sel_dist_panel_2 [name="Crops"]');
        $(document).off("click", '#sel_dist_panel_2 [name="Insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Insurance', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#sel_dist_panel_2 [name="Insurance"]');
        $(document).off("click", '#sel_dist_panel_2 [name="Agrotips"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Agrotips', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#sel_dist_panel_2 [name="Agrotips"]');

    };

    $(document).off("pagebeforeshow", "#sel_dist").on("pagebeforeshow", "#sel_dist", function(event, ui) {
        Apperyio.CurrentScreen = "sel_dist";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    sel_dist_onLoad();
};

$(document).off("pagecreate", "#sel_dist").on("pagecreate", "#sel_dist", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    sel_dist_js();
});