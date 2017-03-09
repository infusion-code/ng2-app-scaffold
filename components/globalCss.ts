import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'global-css',
    template: '',
    encapsulation: ViewEncapsulation.None,
    styles: [
        "* {outline: none}",
        "html { height: 100% }",
        "body { padding-top: 0px; height: 100%; position: relative; }",
        ".row > [class*='col-'] { margin-bottom: 25px; }",
        ".row.no-margin-bottom > [class*='col-'] { margin-bottom: 10px; }",
        ".row.no-gap {  margin-left: 0; margin-right: 0; }",
        ".row.no-gap > [class*='col-'] { padding-left: 0; padding-right: 0px; }",
        ".no-padding { padding: 0px !important; }",
        ".float-left { float: left; }",
        ".float-right { float: right; }",
        ".clear-both { clear: both; }",
        ".no-margin-bottom { margin-bottom: 0; }",
        ".no-margin { margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; }",
        "a { text-decoration: none; }",
        "a:hover { text-decoration: none; }",
        ".font-weight-300 { font-weight: 300; }",
        ".text-indent { text-indent: 1em; }",
        ".app-container .content-container .side-body { padding-top: 70px; }",
        ".app-container .content-container .side-body.padding-top { padding-top: 84px; }",
        ".app-container .side-body { margin-left: 75px; margin-right: 15px;-webkit-transition: all 0.25s;transition: all 0.25s; }",
        ".app-container.expanded .side-body { margin-left: 260px; }"
    ],
})
export class GlobalCss {

}