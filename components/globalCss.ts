import { Component, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../services/configService';

@Component({
    selector: 'global-css',
    template: '',
    encapsulation: ViewEncapsulation.None,
    styles: [
    // extra bootstrap 3 additions for extra large screens
    `
        .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12,
        .col-xxl-1, .col-xxl-2, .col-xxl-3, .col-xxl-4, .col-xxl-5, .col-xxl-6, .col-xxl-7, .col-xxl-8, .col-xxl-9, .col-xxl-10, .col-xxl-11, .col-xxl-12 { position: relative; min-height: 1px; padding-right: 15px; padding-left: 15px;}
        @media (min-width: 1750px) {
            .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {  float: left; }
            .col-xl-12 { width: 100%; }
            .col-xl-11 { width: 91.66666667%; }
            .col-xl-10 { width: 83.33333333%; }
            .col-xl-9 { width: 75%;}
            .col-xl-8 { width: 66.66666667%;}  
            .col-xl-7 { width: 58.33333333%;}
            .col-xl-6 {width: 50%;}
            .col-xl-5 { width: 41.66666667%;}
            .col-xl-4 {width: 33.33333333%;}
            .col-xl-3 {width: 25%;}
            .col-xl-2 {width: 16.66666667%;}
            .col-xl-1 {width: 8.33333333%;}
            .col-xl-pull-12 { right: 100%;}
            .col-xl-pull-11 { right: 91.66666667%;}
            .col-xl-pull-10 {right: 83.33333333%;}
            .col-xl-pull-9 {right: 75%;}
            .col-xl-pull-8 {right: 66.66666667%;}
            .col-xl-pull-7 {right: 58.33333333%;}
            .col-xl-pull-6 {right: 50%;}
            .col-xl-pull-5 {right: 41.66666667%;}
            .col-xl-pull-4 {right: 33.33333333%;}
            .col-xl-pull-3 {right: 25%;}
            .col-xl-pull-2 {right: 16.66666667%;}
            .col-xl-pull-1 {right: 8.33333333%;}
            .col-xl-pull-0 {right: auto;}
            .col-xl-push-12 {left: 100%;}
            .col-xl-push-11 {left: 91.66666667%;}
            .col-xl-push-10 {left: 83.33333333%;}
            .col-xl-push-9 {left: 75%;}
            .col-xl-push-8 {left: 66.66666667%;}
            .col-xl-push-7 {left: 58.33333333%;}
            .col-xl-push-6 {left: 50%;}
            .col-xl-push-5 {left: 41.66666667%;}
            .col-xl-push-4 {left: 33.33333333%;}
            .col-xl-push-3 {left: 25%;}
            .col-xl-push-2 {left: 16.66666667%;}
            .col-xl-push-1 {left: 8.33333333%;}
            .col-xl-push-0 {left: auto;}
            .col-xl-offset-12 {margin-left: 100%;}
            .col-xl-offset-11 {margin-left: 91.66666667%;}
            .col-xl-offset-10 {margin-left: 83.33333333%;}  
            .col-xl-offset-9 {margin-left: 75%;}
            .col-xl-offset-8 {margin-left: 66.66666667%;}
            .col-xl-offset-7 {margin-left: 58.33333333%;}
            .col-xl-offset-6 {margin-left: 50%;}
            .col-xl-offset-5 {margin-left: 41.66666667%;}
            .col-xl-offset-4 {margin-left: 33.33333333%;}
            .col-xl-offset-3 {margin-left: 25%;}
            .col-xl-offset-2 {margin-left: 16.66666667%;}
            .col-xl-offset-1 {margin-left: 8.33333333%;}
            .col-xl-offset-0 {margin-left: 0;}
        }
        @media (min-width: 2400px) {
            .col-xxl-1, .col-xxl-2, .col-xxl-3, .col-xxl-4, .col-xxl-5, .col-xxl-6, .col-xxl-7, .col-xxl-8, .col-xxl-9, .col-xxl-10, .col-xxl-11, .col-xxl-12 {  float: left; }
            .col-xxl-12 { width: 100%; }
            .col-xxl-11 { width: 91.66666667%; }
            .col-xxl-10 { width: 83.33333333%; }
            .col-xxl-9 { width: 75%;}
            .col-xxl-8 { width: 66.66666667%;}  
            .col-xxl-7 { width: 58.33333333%;}
            .col-xxl-6 {width: 50%;}
            .col-xxl-5 { width: 41.66666667%;}
            .col-xxl-4 {width: 33.33333333%;}
            .col-xxl-3 {width: 25%;}
            .col-xxl-2 {width: 16.66666667%;}
            .col-xxl-1 {width: 8.33333333%;}
            .col-xxl-pull-12 { right: 100%;}
            .col-xxl-pull-11 { right: 91.66666667%;}
            .col-xxl-pull-10 {right: 83.33333333%;}
            .col-xxl-pull-9 {right: 75%;}
            .col-xxl-pull-8 {right: 66.66666667%;}
            .col-xxl-pull-7 {right: 58.33333333%;}
            .col-xxl-pull-6 {right: 50%;}
            .col-xxl-pull-5 {right: 41.66666667%;}
            .col-xxl-pull-4 {right: 33.33333333%;}
            .col-xxl-pull-3 {right: 25%;}
            .col-xxl-pull-2 {right: 16.66666667%;}
            .col-xxl-pull-1 {right: 8.33333333%;}
            .col-xxl-pull-0 {right: auto;}
            .col-xxl-push-12 {left: 100%;}
            .col-xxl-push-11 {left: 91.66666667%;}
            .col-xxl-push-10 {left: 83.33333333%;}
            .col-xxl-push-9 {left: 75%;}
            .col-xxl-push-8 {left: 66.66666667%;}
            .col-xxl-push-7 {left: 58.33333333%;}
            .col-xxl-push-6 {left: 50%;}
            .col-xxl-push-5 {left: 41.66666667%;}
            .col-xxl-push-4 {left: 33.33333333%;}
            .col-xxl-push-3 {left: 25%;}
            .col-xxl-push-2 {left: 16.66666667%;}
            .col-xxl-push-1 {left: 8.33333333%;}
            .col-xxl-push-0 {left: auto;}
            .col-xxl-offset-12 {margin-left: 100%;}
            .col-xxl-offset-11 {margin-left: 91.66666667%;}
            .col-xxl-offset-10 {margin-left: 83.33333333%;}  
            .col-xxl-offset-9 {margin-left: 75%;}
            .col-xxl-offset-8 {margin-left: 66.66666667%;}
            .col-xxl-offset-7 {margin-left: 58.33333333%;}
            .col-xxl-offset-6 {margin-left: 50%;}
            .col-xxl-offset-5 {margin-left: 41.66666667%;}
            .col-xxl-offset-4 {margin-left: 33.33333333%;}
            .col-xxl-offset-3 {margin-left: 25%;}
            .col-xxl-offset-2 {margin-left: 16.66666667%;}
            .col-xxl-offset-1 {margin-left: 8.33333333%;}
            .col-xxl-offset-0 {margin-left: 0;}
        }
    `,
    `
        * {outline: none}
        html { height: 100% }
        body { background-color: rgb(51,51,51); color: #fafafa; font-family: az_ea_font,wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif }
        body { padding-top: 0px; height: 100%; position: relative; font-size: 10pt;}
        .row > [class*='col-'] { margin-bottom: 25px;}
        .row.no-margin-bottom > [class*='col-'] { margin-bottom: 10px; }
        .row.no-gap {  margin-left: 0; margin-right: 0; }
        .row.no-gap > [class*='col-'] { padding-left: 0; padding-right: 0px; }
        .no-padding { padding: 0px !important; }
        .float-left { float: left; }
        .float-right { float: right; }
        .clear-both { clear: both; }
        .no-margin-bottom { margin-bottom: 0; }
        .no-margin { margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; }
        a { text-decoration: none; }
        a:hover, a:focus { text-decoration: none; }
        .font-weight-300 { font-weight: 300; }
        .text-indent { text-indent: 1em; }
        .app-container .content-container .side-body { padding-top: 70px; }
        .app-container .content-container .side-body.padding-top { padding-top: 84px; }
        .app-container .side-body { margin-left: 75px; margin-right: 15px;-webkit-transition: all 0.25s;transition: all 0.25s; }
        .app-container.expanded .side-body { margin-left: 260px; }
    `,
    `
        .card { background-color: #FFF; border-radius: 1px; overflow: hidden; position: relative; }
        .card .card-body { padding: 25px; }
        .card .card-body .sub-title { font-size: 1.2em; padding: 1.2em 0em 0.4em 0em; margin-bottom: 25px; }
        .card .card-body .sub-title .description { padding-left: 0.4em; font-size: 0.8em; opacity: 0.8; }
        .card .card-body.half-padding {padding: 12.5px; }
        .card .card-header .card-title {padding: 1.2em 25px;float: left; }
        .card .card-header .card-title .title {font-family: 'Roboto Condensed', sans-serif; font-size: 1.5em;text-decoration: none; }
        .card .card-header .pull-right { padding: 0.5em 1em; }
        .card .card-header:after { content: ""; display: block; clear: both; }
        .card .card-profile-img img {width: 100%; height: auto; }
        .card .card-jumbotron { padding: 1.5em 1.5em; }
        .card:hover .card-header .title {text-decoration: none !important; }
        .card.summary-inline .card-body {padding: 20px; }
        .card.summary-inline .card-body .content { float: right; }
        .card.summary-inline .card-body .content .title { font-family: 'Lato', sans-serif; margin-top: -0.3em; font-size: 3.5em; text-align: right; }
        .card.summary-inline .card-body .content .sub-title { font-family: 'Lato', sans-serif; font-size: 0.9em; text-align: right; margin-top: -10px; margin-bottom: 0; padding: 0; border-bottom: 0; }
        .card.profile .card-body { padding: 0.5em 0.8em; }
        .card.profile .card-footer { padding: 0.5em 0.8em; }
        .panel {border-radius: 1px; }
        .panel .panel-heading { border-top-left-radius: 2px; border-top-right-radius: 2px; }
        .chart { padding: 15px; }
        .chart.no-padding { padding: 0; margin-bottom: -5px; }
        .btn { margin-top: 5px; margin-bottom: 5px; border-radius: 1px; border-width: 1px; font-family: 'Roboto Condensed', sans-serif; }
        .btn-group-lg > .btn, .btn-group-lg > .btn-lg {  border-radius: 1px; }
        .progress { border-radius: 1px; box-shadow: none; }
        .progress .progress-bar {  box-shadow: none; }
        .pagination {margin-top: 5px;margin-bottom: 5px; }
        .pagination li:first-child > a, .pagination li:first-child span {border-top-left-radius: 3px;border-bottom-left-radius: 3px; }
        .pagination li:last-child > a, .pagination li:last-child span { border-top-right-radius: 3px;border-bottom-right-radius: 3px; }
        .form-control { border-radius: 1px;box-shadow: none; }
        .bs-example-modal .modal { z-index: 100; position: relative; display: block; }
        .modal { z-index: 100001; }
        .modal .modal-dialog .modal-header { font-family: 'Roboto Condensed', sans-serif; }
        .modal .modal-dialog .modal-content { border-radius: 1px; box-shadow: none; }
        .modal .modal-dialog .modal-footer .btn { margin-top: 0; margin-bottom: 0; }
        .modal-backdrop { z-index: 100000; }
        .modal-backdrop.in { opacity: 0.8; }
        .alert { border-width: 0px; border-radius: 1px; }
        .list-group .badge { border-radius: 1px; }
        .list-group .list-group-item:last-child { border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; }
        .list-group .list-group-item:first-child { border-top-right-radius: 3px; border-top-left-radius: 3px; }
        .checkbox3, .radio3 { margin-top: 0px; margin-bottom: 0px; }
        .checkbox-inline { margin-bottom: 5px; }
        .checkbox3 label, .radio3 label { padding: 8px 0 8px 30px; }
        .checkbox3 label::before, .radio3 label::before { top: 5px; }
        .checkbox3 label::after, .radio3 label::after { top: 5px; }
        .checkbox3 label, .radio3 label, .checkbox-inline, .radio-inline { font-weight: normal; }
        .bootstrap-switch { border-radius: 1px; }
        .thumbnail { border-radius: 1px; padding: 0; }
        .thumbnail .caption { padding: 0.5em 1.2em; }
        .thumbnail .caption .h1, .thumbnail .caption .h2, .thumbnail .caption .h3, .thumbnail .caption h1, .thumbnail .caption h2, .thumbnail .caption h3 {margin-top: 15px; }
        body.login-page {background: no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover; }
        body.login-page .login-box { width: 100%; max-width: 320px; position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%); padding: 0; }
        body.login-page .login-box > .title { margin-bottom: 1em; }
        body.login-page .login-box > .row { margin-left: 0; margin-right: 0; margin-bottom: 0; }
        body.login-page .login-form { padding: 0em; }
        body.login-page .login-form .login-header { margin-bottom: 1.2em; font-size: 1.5em; }
        body.login-page .login-form .login-body { padding: 1.5em; border-radius: 1px; }
        body.login-page .login-form input { margin-bottom: 0.8em; margin-top: 0.5em; padding: 1.2em 1em; font-size: 1.1em; border-radius: 1px; }
        body.login-page .login-button .btn { padding: 0.5em 2em; font-size: 1.1em; border-radius: 1px; margin-bottom: 0; }
        body.login-page .login-footer { padding-top: 8px; padding-bottom: 8px; width: 100%; text-align: right; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; }
        @media (max-width: 768px) {
            body.login-page .login-form .login-header { margin-bottom: 1em; }
            body.login-page .login-box { width: 100%; max-width: 260px; } 
        }`,
    `
        .dataTables_wrapper .row { margin-bottom: 0.5em; }
        .dataTables_wrapper .top { margin-bottom: 6px; position: relative; }
        .dataTables_wrapper .bottom { margin-top: 6px; }
        .dataTables_wrapper .top:after, .dataTables_wrapper .bottom:after { position: relative; clear: both; display: block; content: ""; }
        .dataTables_wrapper .dataTables_paginate .paginate_button { padding: 0; margin-left: 0; border: 0; }
        .dataTables_wrapper .dataTables_paginate .paginate_button:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active { border: 0; }
        .dataTables_wrapper tfoot { display: none; }
        .code-preview { width: 100%; min-height: 400px; }
        .nav-tabs > li { margin-bottom: -1px; }
        .nav-tabs > li > a { border-radius: 0; border: 0; }
        .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { border-radius: 0; border-top: 0; }
        .tab-content > div { padding: 20px; }
        .tabs-below > .nav-tabs,.tabs-right > .nav-tabs,.tabs-left > .nav-tabs { border-bottom: 0; }
        .tab-content > .tab-pane,.pill-content > .pill-pane {  display: none; }
        .tab-content > .active,.pill-content > .active {  display: block; }
        .tabs-below > .nav-tabs > li { margin-top: -1px; margin-bottom: 0; }
        .tabs-below > .nav-tabs > li > a:hover, .tabs-below > .nav-tabs > li > a:focus { border-bottom-color: transparent; }
        .tabs-left > .nav-tabs > li, .tabs-right > .nav-tabs > li { float: none; }
        .tabs-left > .nav-tabs > li > a, .tabs-right > .nav-tabs > li > a { min-width: 74px; margin-right: 0;  margin-bottom: 3px; }
        .tabs-left, .tabs-right { display: table; }
        .tabs-left > .nav-tabs { display: table-cell; margin-right: 19px; }
        .tabs-left > .nav-tabs > li > a { margin-right: -1px; }
        .tabs-right > .nav-tabs { display: table-cell;margin-left: 19px; }
        .tabs-right > .nav-tabs > li > a { margin-left: -1px; }
        .tab:after { content: "";display: block;clear: both; }
        .step .nav-tabs {border-bottom: 0px;margin-left: 0;margin-right: 0;margin-bottom: 20px; }
        .step .nav-tabs > li[class^="col-"] {padding-left: 0; padding-right: 0; }
        .step .nav-tabs > li:first-child { border-top-left-radius: 3px;border-bottom-left-radius: 3px; }
        .step .nav-tabs > li { border-right: 0; }
        .step .nav-tabs > li > a {margin-right: 0;display: block;width: 100%;padding: 1em;padding-left: 2em;vertical-align: middle;white-space: nowrap;overflow: hidden;text-align: left;border-bottom: 0; }
        .step .nav-tabs > li > a .icon { font-size: 2.5em; display: inline-block; margin-right: 0.25em; vertical-align: middle; }
        .step .nav-tabs > li > a .step-title { width: auto;display: inline-block;vertical-align: middle;text-align: left; }
        .step .nav-tabs > li > a .step-title .title { font-weight: bold;font-size: 1.1em; }
        .step .nav-tabs > li > a .step-title .description { font-size: 0.9em; }
        .step .nav-tabs > li > a:hover { border-bottom: 0; }
        .step .nav-tabs > li:after {content: ""; width: 0; height: 0; position: absolute;top: 50%;right: -15px; transform: translate(0%, -50%); z-index: 100001; }
        .step .nav-tabs > li:before {content: ""; width: 0; height: 0; position: absolute; top: 50%; right: -16px; transform: translate(0%, -50%); z-index: 100000; }
        .step .nav-tabs > li.active > a, .step .nav-tabs > li.active > a:focus, .step .nav-tabs > li.active > a:hover { border: 0; border-radius: 0; border-bottom: 0; }
        .step .nav-tabs > li:last-child { border-top-right-radius: 3px;border-bottom-right-radius: 3px; }
        .step .nav-tabs > li:last-child:before, .step .nav-tabs > li:last-child:after { display: none; }
        .step .tab-content > div {  padding: 0; }
        .step.card-no-padding .nav-tabs {margin-bottom: 0px; }
        .step.card-no-padding .nav-tabs > li {border-radius: 0; }
        .step.card-no-padding .tab-content > div {padding: 20px; }
        .step.tabs-left .tab-content { padding: 5px 15px;display: table-cell; vertical-align: top; }
        .step.tabs-left .tab-content > div { padding: 20px; }
        .step.tabs-left .nav-tabs {border-bottom: 0px;margin-left: 0;margin-right: 0;margin-bottom: 0; }
        .step.tabs-left .nav-tabs > li[class^="col-"] {padding-left: 0;padding-right: 0; }
        .step.tabs-left .nav-tabs > li:first-child { border-top-left-radius: 0px;border-top-right-radius: 0px; }
        .step.tabs-left .nav-tabs > li {border-right: 0px;min-width: 250px;display: table;width: 250px; }
        .step.tabs-left .nav-tabs > li > a { margin-right: 0; display: table-cell; width: 100%;padding: 1em; padding-left: 2em;vertical-align: middle; table-layout: fixed; white-space: nowrap; overflow: hidden; }
        .step.tabs-left .nav-tabs > li > a .icon { font-size: 2.5em; display: inline-block; margin-right: 0.25em; vertical-align: middle; }
        .step.tabs-left .nav-tabs > li > a .step-title { width: auto; display: inline-block; vertical-align: middle; }
        .step.tabs-left .nav-tabs > li > a .step-title .title {  font-weight: bold; font-size: 1.1em; }
        .step.tabs-left .nav-tabs > li > a .step-title .description { font-size: 0.9em; }
        .step.tabs-left .nav-tabs > li > a:hover {border-bottom: 0; }
        .step.tabs-left .nav-tabs > li:after {content: "";width: 0;height: 0;position: absolute;top: 50%;transform: translate(0%, -50%);z-index: 10000;display: none; }
        .step.tabs-left .nav-tabs > li:before {content: "";width: 0;height: 0;position: absolute;top: 50%;right: -16px;transform: translate(0%, -50%);z-index: 10000; display: none; }
        .step.tabs-left .nav-tabs > li.active > a, .step.tabs-left .nav-tabs > li.active > a:focus, .step.tabs-left .nav-tabs > li.active > a:hover { border: 0; border-radius: 0;border-bottom: 0; }
        .step.tabs-left .nav-tabs > li.active:after, .step.tabs-left .nav-tabs > li.active:before { display: block; }
        .step.tabs-left .nav-tabs > li:last-child { border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; }
        @media (max-width: 768px) {
        .step .nav-tabs > li:after {display: none; } 
        .step .nav-tabs > li:before { display: none; } 
        }
        .loader-container { display: none; }
        .loader .loader-container { display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1003; }
        .loader:after { content: "";display: block; position: absolute;background-color: rgba(0, 0, 0, 0.9); top: 0; left: 0; width: 100%; height: 100%; z-index: 1001; border-radius: 1px; }
        .pricing-table .pt-header { text-align: center; padding: 1em; }
        .pricing-table .pt-header .plan-pricing .pricing { font-size: 2.5em; }
        .pricing-table .pt-header .plan-pricing .pricing-type { opacity: 0.9; }
        .pricing-table .pt-body {padding: 1em; text-align: center; }
        .pricing-table .pt-body .plan-detail { padding: 0; margin: 0; list-style: none; }
        .pricing-table .pt-footer { padding: 0.75em; text-align: center; }
        .icons-list {list-style: none; margin: 0; padding: 0; }
        .icons-list > li { float: left; text-align: center; width: 100px; height: 100px; padding: 8px; }
        .icons-list > li span { display: block; }
        .icons-list > li .glyphicon { font-size: 1.5em; }
        .icons-list > li .glyphicon-class {margin-top: 8px;font-size: 0.75em; }
        .icons-list:after {content: ""; display: block; position: relative; clear: both; }
        .row.example > [class*='col-'] > div {background-color: #EEE;padding: 10px; border: 1px solid #DDD; }
        .breadcrumb { margin-bottom: 0; }
        .breadcrumb > li + li:before { font-family: FontAwesome; content: "\\f105"; margin-right: 3px; }
        .message-list { margin: 0;padding: 0; list-style-type: none; }
        .message-list  a > li { border-bottom: 1px dotted #EEE;padding: 8px; }
        .message-list  a > li > .message-block { padding-left: 70px; min-height: 60px; }
        .message-list  a > li > .message-block .username { font-size: 12px; font-weight: bold; }
        .message-list  a > li > .message-block .message-datetime { font-size: 10px; color: #AAA; }
        .message-list  a > li > .message-block .message { font-size: 12px; }
        .message-list  a > li .profile-img { width: 60px; height: 60px; }
        .message-list  a:hover li {background-color: rgba(0, 0, 0, 0.01); }
        .bs-example > * {margin-bottom: 20px; }
        .bs-example > *:last-child {margin-bottom: 5px; }
        .landing-page {font-family: 'Roboto Condensed', sans-serif; }
        .landing-page .navbar .navbar-toggle {position: absolute;right: 0;border-radius: 0;border: 0;height: 44px; padding: 0 15px; }
        .landing-page .app-header {padding-top: 100px;background-repeat: no-repeat;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;background-position: center;margin-bottom: 0; }
        .landing-page .app-header .app-logo { margin-bottom: 20px; }
        .landing-page .app-header .app-description { margin-bottom: 40px; }
        .landing-page .app-content-a, .landing-page .app-content-b { padding-top: 50px; padding-bottom: 20px; }
        .landing-page .app-content-b.feature-1 { background-repeat: no-repeat;  -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: center; margin-bottom: 0; }
        .landing-page .app-content-b.contact-us { padding-top: 60px; padding-bottom: 60px; background-repeat: no-repeat; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-position: center; margin-bottom: 0; }
        .landing-page .app-content-b.contact-us .contact-us-header { font-weight: 300; font-size: 46px; }
        .landing-page .app-content-b.contact-us .contact-us-description { font-weight: 300; font-size: 18px; opacity: 0.9; text-indent: 40px; }
        .landing-page .app-content-b.contact-us form { margin-top: 20px; }
        .landing-page .app-content-b.contact-us form input { padding: 10px; width: 100%; border: 0px; }
        .landing-page .app-content-header {font-weight: 300;font-size: 46px; }
        .landing-page .app-content-description {font-weight: 300; font-size: 18px; }
        .landing-page .app-footer { padding-top: 15px; padding-bottom: 15px; margin-bottom: 0; }
        .landing-page .app-footer p { margin: 0; }
        .landing-page .navbar-affix { width: 100%; height: 60px; border-top: 2px rgba(78, 205, 196, 0.8); -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; position: fixed; -webkit-box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4); box-shadow: 0px 0px 6px 0px rgba(96, 100, 109, 0.4); }
        .landing-page .navbar.affix { z-index: 4000; background-color: rgba(255, 255, 255, 0.95) !important; height: 60px; opacity: 1; margin-top: 0px; }
        .landing-page .navbar-affix.affix li a { height: 60px; line-height: 60px; }
        .landing-page .navbar-affix.affix .navbar-nav > li > a { background-color: transparent; font-weight: 400; color: #333; }
        .landing-page .navbar {padding-left: 0px; background-color: transparent; box-shadow: none; }
        .landing-page .navbar .navbar-right { position: relative; right: 0; }
        .landing-page .navbar .navbar-header { border-bottom: 0px solid #e7e7e7; }
        .landing-page .navbar .navbar-header .navbar-brand { width: 45px; line-height: 60px; height: 60px; padding: 0; width: 100%; overflow: hidden; padding-left: 0px; font-family: 'Roboto Condensed', sans-serif; }
        .landing-page .navbar .navbar-header .navbar-brand .icon { width: 50px; text-align: center; display: inline-block; }
        .landing-page .navbar .navbar-header .navbar-brand .title { margin-left: -10px; display: inline-block; }
        .landing-page .navbar .navbar-header .navbar-expand-toggle { position: absolute; right: 0; width: 60px; height: 60px; background-color: transparent; border: 0px;-moz-transition: all 0.25s linear; -webkit-transition: all 0.25s linear;transition: all 0.25s linear;opacity: 0.75; }
        @media only screen and (max-width: 768px) { .landing-page .navbar .navbar-header .navbar-brand { padding-left: 15px; } }
        .row-example > [class*="col-"] { margin-bottom: 0px; }
    `,`
        /* CUSTOMIZE THE NAVBAR
        -------------------------------------------------- */
        /* Special class on .container surrounding .navbar, used for positioning it into place. */
        .navbar-wrapper { position: absolute; top: 0; right: 0; left: 0; z-index: 20; }
        /* Flip around the padding for proper display in narrow viewports */
        .navbar-wrapper > .container { padding-right: 0; padding-left: 0; }
        .navbar-wrapper .navbar { padding-right: 15px; padding-left: 15px; }
        .navbar-wrapper .navbar .container { width: auto; }
        /* CUSTOMIZE THE CAROUSEL
        -------------------------------------------------- */
        /* Carousel base class */
        .carousel { height: 500px; margin-bottom: 60px; }
        /* Since positioning the image, we need to help out the caption */
        .carousel-caption { z-index: 10; }
        /* Declare heights because of positioning of img element */
        .carousel .item { height: 500px; background-color: #777; }
        .carousel-inner > .item > img { position: absolute; top: 0; left: 0; min-width: 100%; height: 500px; }
        /* MARKETING CONTENT
        -------------------------------------------------- */
        /* Center align the text within the three columns below the carousel */
        .marketing .col-lg-4 { margin-bottom: 20px; text-align: center; }
        .marketing h2 { font-weight: normal; }
        .marketing .col-lg-4 p { margin-right: 10px; margin-left: 10px; }
        /* Featurettes
        ------------------------- */
        .featurette-divider { margin: 80px 0; /* Space out the Bootstrap <hr> more */ }
        /* Thin out the marketing headings */
        .featurette-heading { font-weight: 300;line-height: 1; letter-spacing: -1px; }
        /* RESPONSIVE CSS */
        @media (min-width: 768px) {
        /* Navbar positioning foo */
        .navbar-wrapper .container { padding-right: 15px; padding-left: 15px; }
        .navbar-wrapper .navbar { padding-right: 0; padding-left: 0; }
        /* The navbar becomes detached from the top, so we round the corners */
        .navbar-wrapper .navbar { border-radius: 4px; }
        /* Bump up size of carousel content */
        .carousel-caption p { margin-bottom: 20px;font-size: 21px; line-height: 1.4; }
        .featurette-heading { font-size: 50px; } 
        }
        @media (min-width: 992px) { .featurette-heading { margin-top: 100px; margin-bottom: 20px; } }
    `,
    // the following styles govern the appearance of scrollbars in webkit browsers
    `
        *::-webkit-scrollbar { width: 10px; height: 10px; background-color: #3c444d}
        *::-webkit-scrollbar-thumb { background-color: #656565; border-radius: 10px; }
        *::-webkit-scrollbar-track { border-radius: 10px; background-color: #353d47; border: 1px solid #444; box-shadow: 0 0 6px #888 inset; }
        *::-webkit-scrollbar-thumb:hover, *::-webkit-scrollbar-thumb:active { background-color: #8a8a8a;}
        *::-webkit-scrollbar-button { background-color: #3c444d;}
        *::-webkit-scrollbar-button:vertical:start { position: relative; background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='50,0 0,100 100,100' fill='#656565' stroke='#000' stroke-width='1' /> </svg>"); background-position: 50% 45%; background-repeat: no-repeat; background-size: 6px 6px;}
        *::-webkit-scrollbar-button:vertical:start:hover{ background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='50,0 0,100 100,100' fill='#8a8a8a' stroke='#000' stroke-width='1' /> </svg>");}
        *::-webkit-scrollbar-button:vertical:end { position: relative; background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='0,0 50,100 100,0' fill='#656565' stroke='#000' stroke-width='1' /> </svg>"); background-position: 50% 55%; background-repeat: no-repeat; background-size: 6px 6px;}
        *::-webkit-scrollbar-button:vertical:end:hover{ background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='0,0 50,100 100,0' fill='#8a8a8a' stroke='#000' stroke-width='1' /> </svg>");}
        *::-webkit-scrollbar-button:start:horizontal{ position: relative; background-image:url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' > <polygon points='0,50 100,100 100,0' fill='#656565' stroke='#000' stroke-width='1' /> </svg>"); background-position: 45% 50%; background-repeat: no-repeat; background-size: 6px 6px;}
        *::-webkit-scrollbar-button:horizontal:start:hover{ background-image:url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' > <polygon points='0,50 100,100 100,0' fill='#8a8a8a' stroke='#000' stroke-width='1' /> </svg>");}
        *::-webkit-scrollbar-button:end:horizontal{ position: relative; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' > <polygon points='0,0 0,100 100,50' fill='#656565' stroke='#000' stroke-width='1' /> </svg> "); background-position: 55% 50%; background-repeat: no-repeat; background-size: 6px 6px;}
        *::-webkit-scrollbar-button:end:horizontal:hover{ background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' > <polygon points='0,0 0,100 100,50' fill='#8a8a8a' stroke='#000' stroke-width='1' /> </svg> ");}
        *::-webkit-scrollbar-corner { background-color: #3c444d;}
    `
    ],
})
export class GlobalCss {
    constructor(private _config: ConfigService){ }
}