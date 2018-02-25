global.$ = global.jQuery = require('jquery');

import {SiteHelper} from './lib/SiteHelper';


$(function () {
    SiteHelper.init();
});

$(window).on('load', function () {
    SiteHelper.windowLoad();
});

$(window).on('resize', function () {
    if (typeof SiteHelper.ResizeTimeout !== 'undefined') {
        clearTimeout(SiteHelper.ResizeTimeout);
    }
    SiteHelper.ResizeTimeout = setTimeout(function () {
        SiteHelper.resizeInit();
    }, 33);
});