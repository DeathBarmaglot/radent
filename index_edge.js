/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['ubuntu, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu:n4,i4,n7,i7,n3,i3,n5,i5:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'm',
                type: 'image',
                rect: ['34px', '18px','231px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"m.jpg",'0px','0px']
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['10px', '67px','182px','65px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['0px', '4px','183px','58px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'd',
                type: 'image',
                rect: ['122px', '28px','196px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['29px', '241px','146px','83px','auto', 'auto'],
                text: "+380 (68) 270 33 22 <br>+380 (99) 270 33 22",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['35px', '241px','146px','83px','auto', 'auto'],
                text: "м. Чернівці, <br>вул. Чорноморська, <br>4-А",
                align: "left",
                font: ['ubuntu, sans-serif', 12, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'L1',
                type: 'image',
                rect: ['-265px', '-279px','710px','920px','auto', 'auto'],
                clip: ['rect(-27.272727966308594px 910px 177.27272033691406px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"L1.svg",'0px','0px'],
                transform: [[],[],[],['0.21','0.22']]
            },
            {
                id: 'L2',
                type: 'image',
                rect: ['-359px', '-397px','910px','1030px','auto', 'auto'],
                clip: ['rect(0px 910px 977.272705078125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"L2.svg",'0px','0px'],
                transform: [[],[],[],['0.19','0.2']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "-webkit-transform-origin", [2.25,43.36], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '3px'],
                ["style", "width", '182px'],
                ["style", "top", '67px'],
                ["style", "height", '65px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_Text2Copy}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '26px'],
                ["style", "width", '121px'],
                ["style", "top", '111px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '45px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["transform", "scaleX", '0']
            ],
            "${_m}": [
                ["style", "top", '18px'],
                ["transform", "scaleY", '1.3'],
                ["style", "height", '147px'],
                ["transform", "scaleX", '1.3'],
                ["style", "opacity", '0'],
                ["style", "left", '34px'],
                ["style", "width", '231px']
            ],
            "${_lo}": [
                ["style", "top", '6px'],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '58px'],
                ["transform", "scaleX", '0.9'],
                ["style", "left", '-207px'],
                ["style", "width", '183px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-166px'],
                ["style", "width", '146px'],
                ["style", "top", '111px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '83px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0']
            ],
            "${_L1}": [
                ["style", "top", '-279px'],
                ["transform", "scaleY", '0.22'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.21'],
                ["style", "opacity", '0'],
                ["style", "clip", [-27.272727966308594,910,177.27272033691406,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-265px']
            ],
            "${_Text2Copy2}": [
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-160px'],
                ["style", "width", '146px'],
                ["style", "top", '111px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '83px'],
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_d}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '1.3'],
                ["transform", "scaleX", '1.3'],
                ["style", "height", '130px'],
                ["style", "opacity", '0'],
                ["style", "left", '122px'],
                ["style", "width", '196px']
            ],
            "${_L2}": [
                ["style", "top", '-397px'],
                ["transform", "scaleY", '0.2'],
                ["style", "background-position", [0,327.27272727273], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.19'],
                ["style", "opacity", '1'],
                ["style", "clip", [327.2727355957031,910,240.90907287597656,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-359px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid151", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 671, duration: 171 },
                { id: "eid230", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 12809, duration: 171 },
                { id: "eid152", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 14807, duration: 193 },
                { id: "eid174", tween: [ "style", "${_L1}", "background-position", [0,-193.939394], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1250, duration: 750, easing: "easeInQuad" },
                { id: "eid175", tween: [ "style", "${_L1}", "background-position", [0.000000,-355.909264], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-193.939394]}], position: 2565, duration: 685, easing: "easeInQuad" },
                { id: "eid213", tween: [ "style", "${_L1}", "background-position", [0,-561.81413793466], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,-355.909264]}], position: 3681, duration: 916, easing: "easeInQuad" },
                { id: "eid215", tween: [ "style", "${_L1}", "background-position", [0,-752.17835142329], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,-561.814138]}], position: 5000, duration: 1000 },
                { id: "eid223", tween: [ "style", "${_L1}", "background-position", [0,-942.54367415341], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-752.178351]}], position: 6349, duration: 455 },
                { id: "eid2", tween: [ "style", "${_m}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 329 },
                { id: "eid148", tween: [ "style", "${_m}", "opacity", '0', { fromValue: '1'}], position: 14807, duration: 193 },
                { id: "eid229", tween: [ "style", "${_Text2}", "top", '149px', { fromValue: '111px'}], position: 276, duration: 395 },
                { id: "eid134", tween: [ "style", "${_Text2}", "top", '77px', { fromValue: '111px'}], position: 12653, duration: 375 },
                { id: "eid119", tween: [ "style", "${_Text2}", "top", '111px', { fromValue: '77px'}], position: 14807, duration: 193 },
                { id: "eid180", tween: [ "style", "${_L1}", "opacity", '1', { fromValue: '0'}], position: 546, duration: 143 },
                { id: "eid12", tween: [ "style", "${_lo}", "left", '-1px', { fromValue: '-207px'}], position: 0, duration: 276 },
                { id: "eid157", tween: [ "style", "${_lo}", "left", '-174px', { fromValue: '-1px'}], position: 14807, duration: 193 },
                { id: "eid129", tween: [ "transform", "${_Text2Copy2}", "scaleX", '1.2', { fromValue: '0'}], position: 13028, duration: 375 },
                { id: "eid131", tween: [ "style", "${_Text2Copy2}", "top", '128px', { fromValue: '111px'}], position: 13028, duration: 375 },
                { id: "eid141", tween: [ "style", "${_Text2Copy2}", "left", '35px', { fromValue: '-160px'}], position: 12653, duration: 423 },
                { id: "eid228", tween: [ "style", "${_Text2}", "left", '34px', { fromValue: '-166px'}], position: 276, duration: 395 },
                { id: "eid142", tween: [ "style", "${_Text2}", "left", '29px', { fromValue: '-166px'}], position: 12653, duration: 375 },
                { id: "eid135", tween: [ "transform", "${_RoundRect}", "scaleX", '0', { fromValue: '1'}], position: 12500, duration: 309 },
                { id: "eid204", tween: [ "style", "${_L2}", "background-position", [0,109.09090909091], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,327.27272727273]}], position: 7374, duration: 776 },
                { id: "eid207", tween: [ "style", "${_L2}", "background-position", [0,-95.041502], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,106.98169279627847]}], position: 8437, duration: 813, easing: "easeInQuad" },
                { id: "eid211", tween: [ "style", "${_L2}", "background-position", [0,-300.16967582812], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-95.041502]}], position: 9500, duration: 684, easing: "easeInQuad" },
                { id: "eid212", tween: [ "style", "${_L2}", "background-position", [0,-513.84521310937], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-300.169676]}], position: 10564, duration: 767, easing: "easeInQuad" },
                { id: "eid218", tween: [ "style", "${_L2}", "clip", [327.2727355957031,910,531.5072021484375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [327.2727355957031,910,240.90907287597656,0]}], position: 6396, duration: 604, easing: "easeInQuad" },
                { id: "eid132", tween: [ "transform", "${_Text2}", "scaleX", '1.3', { fromValue: '0'}], position: 0, duration: 171 },
                { id: "eid138", tween: [ "style", "${_RoundRect}", "left", '-185px', { fromValue: '3px'}], position: 12832, duration: 168 },
                { id: "eid166", tween: [ "style", "${_L2}", "opacity", '0', { fromValue: '1'}], position: 11820, duration: 104 },
                { id: "eid130", tween: [ "transform", "${_Text2Copy2}", "scaleY", '1.2', { fromValue: '0'}], position: 13028, duration: 375 },
                { id: "eid172", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 546, duration: 143 },
                { id: "eid9", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 171 },
                { id: "eid149", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 14807, duration: 193 },
                { id: "eid147", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 14625, duration: 375 },
                { id: "eid133", tween: [ "transform", "${_Text2}", "scaleY", '1.3', { fromValue: '0'}], position: 0, duration: 171 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-916937");
