export const SiteHelper = {

    width: $(window).width() > $('body').width() ? $(window).width() : $('body').width(),

    resolution: {
        mobile: 485,
        tablet: 768,
        desktop: 992,
        large: 1200
    },

    init: function () {
        SiteHelper.appendPage();
    },

    appendPage: function(){



    },
    windowLoad: function () {

    },
    resizeInit: function () {
        SiteHelper.width = $(window).width() > $('body').width() ? $(window).width() : $('body').width();

    }
};