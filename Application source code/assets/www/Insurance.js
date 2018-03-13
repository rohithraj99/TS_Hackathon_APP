/*
 * JS for Insurance generated by Appery.io
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

function Insurance_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'Insurance_mobilebutton_11',
        'spacer_21': 'Insurance_spacer_21',
        'mobileworkarea_18': 'Insurance_mobileworkarea_18',
        'spacer_33': 'Insurance_spacer_33',
        'mobilelabel_30': 'Insurance_mobilelabel_30',
        'pop1': 'Insurance_pop1',
        'spacer_27': 'Insurance_spacer_27',
        'mobilelabel_28': 'Insurance_mobilelabel_28',
        'spacer_29': 'Insurance_spacer_29',
        'html_32': 'Insurance_html_32',
        'getinfo_insurance': 'Insurance_getinfo_insurance',
        'mobileimage_3': 'Insurance_mobileimage_3',
        'mobilelabel_20': 'Insurance_mobilelabel_20',
        'Crops': 'Insurance_Crops',
        'Insurance': 'Insurance_Insurance',
        'Agrotips': 'Insurance_Agrotips'
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

    Apperyio.CurrentScreen = 'Insurance';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Insurance_onLoad = function() {
            Insurance_elementsExtraJS();

            Insurance_deviceEvents();
            Insurance_windowEvents();
            Insurance_elementsEvents();
        };

    // screen window events


    function Insurance_windowEvents() {

        $('#Insurance').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Insurance_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Insurance_elementsExtraJS() {
        // screen (Insurance) extra code

        /* pop1 */
        $("#Insurance_pop1").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function Insurance_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Insurance_mobileheader [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Insurance_panel_2"]').panel("open");

                }
            },
        }, '#Insurance_mobileheader [name="mobilebutton_11"]');

        $(document).off("click", '#Insurance_mobilecontainer [name="getinfo_insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var popupElement = Apperyio("pop1");
                    if (popupElement.popup("option", "positionTo") === "origin") {
                        popupElement.popup("open", {
                            transition: "pop",
                            positionTo: "#" + $(this).attr("id")
                        });
                    } else {
                        popupElement.popup("open", {
                            transition: "pop"
                        });
                    };

                }
            },
        }, '#Insurance_mobilecontainer [name="getinfo_insurance"]');

        $(document).off("click", '#Insurance_panel_2 [name="Crops"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('crops', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#Insurance_panel_2 [name="Crops"]');
        $(document).off("click", '#Insurance_panel_2 [name="Insurance"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Insurance', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#Insurance_panel_2 [name="Insurance"]');
        $(document).off("click", '#Insurance_panel_2 [name="Agrotips"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Agrotips', {
                        transition: 'fade',
                        reverse: false
                    });

                }
            },
        }, '#Insurance_panel_2 [name="Agrotips"]');

    };

    $(document).off("pagebeforeshow", "#Insurance").on("pagebeforeshow", "#Insurance", function(event, ui) {
        Apperyio.CurrentScreen = "Insurance";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Insurance_onLoad();
};

$(document).off("pagecreate", "#Insurance").on("pagecreate", "#Insurance", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Insurance_js();
});