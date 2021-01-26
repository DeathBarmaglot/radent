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
                rect: ['10px', '52px','148px','123px','auto', 'auto'],
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
                rect: ['114px', '28px','196px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['29px', '241px','146px','83px','auto', 'auto'],
                text: "+380 (68) 270 33 22 <br>+380 (99) 270 33 22",
                align: "left",
                font: ['ubuntu, sans-serif', 12, "rgba(0,0,0,1.00)", "900", "none", "normal"]
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
                rect: ['-299px', '-345px','710px','920px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"L1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'L2',
                type: 'image',
                rect: ['-392px', '-399px','910px','1030px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"L2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "-webkit-transform-origin", [2.25,43.36], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2.25,43.36],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '55px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '123px'],
                ["style", "opacity", '0'],
                ["style", "left", '10px'],
                ["style", "width", '116px']
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
                ["transform", "scaleX", '1.3'],
                ["style", "height", '147px'],
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
                ["style", "font-family", 'ubuntu, sans-serif'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '0']
            ],
            "${_L1}": [
                ["style", "top", '-345px'],
                ["style", "opacity", '1'],
                ["style", "left", '-299px'],
                ["style", "clip", [0,910,-150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "opacity", '1'],
                ["transform", "scaleX", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_d}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '1.3'],
                ["style", "height", '130px'],
                ["transform", "scaleX", '1.3'],
                ["style", "opacity", '0'],
                ["style", "left", '114px'],
                ["style", "width", '196px']
            ],
            "${_L2}": [
                ["style", "top", '-399px'],
                ["style", "opacity", '1'],
                ["style", "left", '-392px'],
                ["style", "clip", [0,910,-150,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid151", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 7840, duration: 375 },
                { id: "eid152", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 9625, duration: 375 },
                { id: "eid2", tween: [ "style", "${_m}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 329 },
                { id: "eid148", tween: [ "style", "${_m}", "opacity", '0', { fromValue: '1'}], position: 9625, duration: 375 },
                { id: "eid134", tween: [ "style", "${_Text2}", "top", '77px', { fromValue: '111px'}], position: 7653, duration: 375 },
                { id: "eid119", tween: [ "style", "${_Text2}", "top", '111px', { fromValue: '77px'}], position: 9807, duration: 193 },
                { id: "eid167", tween: [ "style", "${_L1}", "opacity", '0', { fromValue: '1'}], position: 3646, duration: 104 },
                { id: "eid12", tween: [ "style", "${_lo}", "left", '-1px', { fromValue: '-207px'}], position: 0, duration: 276 },
                { id: "eid157", tween: [ "style", "${_lo}", "left", '-174px', { fromValue: '-1px'}], position: 9625, duration: 375 },
                { id: "eid129", tween: [ "transform", "${_Text2Copy2}", "scaleX", '1.2', { fromValue: '0'}], position: 8028, duration: 375 },
                { id: "eid131", tween: [ "style", "${_Text2Copy2}", "top", '128px', { fromValue: '111px'}], position: 8028, duration: 375 },
                { id: "eid141", tween: [ "style", "${_Text2Copy2}", "left", '35px', { fromValue: '-160px'}], position: 7653, duration: 423 },
                { id: "eid142", tween: [ "style", "${_Text2}", "left", '29px', { fromValue: '-166px'}], position: 7653, duration: 375 },
                { id: "eid135", tween: [ "transform", "${_RoundRect}", "scaleX", '0', { fromValue: '1'}], position: 7500, duration: 309 },
                { id: "eid162", tween: [ "style", "${_L2}", "clip", [0,910,1030,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,910,-150,0]}], position: 3869, duration: 2715 },
                { id: "eid132", tween: [ "transform", "${_Text2}", "scaleX", '1.3', { fromValue: '0'}], position: 7653, duration: 375 },
                { id: "eid138", tween: [ "style", "${_RoundRect}", "left", '-185px', { fromValue: '10px'}], position: 7832, duration: 168 },
                { id: "eid166", tween: [ "style", "${_L2}", "opacity", '0', { fromValue: '1'}], position: 7215, duration: 104 },
                { id: "eid130", tween: [ "transform", "${_Text2Copy2}", "scaleY", '1.2', { fromValue: '0'}], position: 8028, duration: 375 },
                { id: "eid133", tween: [ "transform", "${_Text2}", "scaleY", '1.3', { fromValue: '0'}], position: 7653, duration: 375 },
                { id: "eid147", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '1'}], position: 9625, duration: 375 },
                { id: "eid9", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 171 },
                { id: "eid149", tween: [ "style", "${_d}", "opacity", '0', { fromValue: '1'}], position: 9625, duration: 375 },
                { id: "eid163", tween: [ "style", "${_L1}", "clip", [0,910,1030,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,910,-150,0]}], position: 500, duration: 2526 },
                { id: "eid27", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 974, duration: 143 }            ]
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
