(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/logo.312fffb5.png"},43:function(e,t,n){e.exports=n(91)},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),l=n.n(i),o=(n(48),n(2)),s=n(3),c=n(5),h=n(4),d=n(6),u=(n(50),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:n.props.defaultValue},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.getElementById(this.props.name).value;e!==this.state.value&&this.setState({value:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Slider"},r.a.createElement("div",{className:"sliderTitle"},this.props.title),r.a.createElement("div",{className:"sliderMain"},r.a.createElement("input",{id:this.props.name,type:"range",step:"1",min:this.props.min,max:this.props.max,defaultValue:this.props.defaultValue,onChange:function(){e.props.handler()}}),r.a.createElement("span",{className:"SliderValue"},r.a.createElement("span",{className:"SliderText"},this.state.value))))}}]),t}(a.Component)),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contrast:100,saturation:100},n.handleSliderContrast=function(){n.setState({contrast:document.getElementById("contrastSlider").value}),n.onImgLoad()},n.handleSliderSaturation=function(){n.setState({saturation:document.getElementById("saturationSlider").value}),n.onImgLoad()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onImgLoad",value:function(){var e=this,t=new Image;t.src=this.props.fileUrl;var n=document.getElementById("PreEditorCanvas"),a=n.getContext("2d");t.onload=function(){var r=t.height/t.width,i=document.getElementsByClassName("canvasContainer")[0];r<1?(n.width=i.offsetWidth,n.height=n.width*r,n.height>i.offsetHeight&&(n.height=i.offsetHeight,n.width=n.height/r)):(n.height=i.offsetHeight,n.width=n.height/r,n.width>i.offsetWidth&&(n.width=i.offsetWidth,n.height=n.width*r)),a.filter="contrast("+e.state.contrast+"%) ",a.filter+="saturate("+e.state.saturation+"%) ",a.clearRect(0,0,n.width,n.height),a.drawImage(t,0,0,n.width,n.height);for(var l=a.getImageData(0,0,n.width,n.height),o=0;o<l.data.length;o+=4)0===l.data[o+3]?(l.data[o]=255,l.data[o+1]=255,l.data[o+2]=255,l.data[o+3]=255):l.data[o+3]=255;a.putImageData(l,0,0),e.props.outputHandler({preEditUrl:n.toDataURL(),width:n.width,height:n.height})}}},{key:"componentDidUpdate",value:function(e){this.props.fileUrl!==e.fileUrl&&(document.getElementById("contrastSlider").value=100,document.getElementById("saturationSlider").value=100,this.setState({contrast:100,saturation:100}),this.onImgLoad())}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.onImgLoad()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"picEditor"},r.a.createElement("div",{className:"canvasContainer"},r.a.createElement("canvas",{className:"picCanvas",id:"PreEditorCanvas"})),r.a.createElement("div",{className:"sliderContainer"},r.a.createElement("p",{className:"sliderBoxTitle"},"Options"),r.a.createElement(u,{name:"contrastSlider",title:"Contrast (%)",min:"0",max:"200",handler:this.handleSliderContrast,defaultValue:"100"}),r.a.createElement(u,{name:"saturationSlider",title:"Saturation (%)",min:"0",max:"200",handler:this.handleSliderSaturation,defaultValue:"100"})))}}]),t}(a.Component),g=function(e,t){t?(e.imageSmoothingEnabled=!0,e.mozImageSmoothingEnabled=!0,e.webkitImageSmoothingEnabled=!0,e.msImageSmoothingEnabled=!0):(e.imageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1)};function D(e,t,n,a,r,i){var l=Math.atan2(i-a,r-n);e.beginPath(),e.moveTo(n,a),e.lineTo(r,i),e.lineTo(r-t*Math.cos(l-Math.PI/6),i-t*Math.sin(l-Math.PI/6)),e.moveTo(r,i),e.lineTo(r-t*Math.cos(l+Math.PI/6),i-t*Math.sin(l+Math.PI/6)),e.stroke()}var p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={updateTimer:"",timeout:300,defaultHorStitches:50,horStitches:50},n.handleSlider=function(){n.setState({horStitches:document.getElementById("horStitchesSlider").value}),n.onImgLoad()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onImgLoad",value:function(){var e=this,t=new Image;t.src=this.props.fileUrl;var n=document.getElementById("PixelatorCanvas"),a=document.createElement("canvas"),r=document.createElement("canvas");t.onload=function(){n.width=t.width,n.height=t.height,r.width=t.width+15,r.height=t.height+15,a.width=t.width,a.height=t.height;var i=n.getContext("2d"),l=a.getContext("2d"),o=r.getContext("2d");l.clearRect(0,0,a.width,a.height),o.fillRect(15,0,t.width,t.height);var s=e.state.horStitches,c=Math.ceil(t.height/t.width*e.state.horStitches);a.width=s,a.height=c,g(l,!0),l.drawImage(t,0,0,s,c),e.props.outputHandler({pixelUrl:a.toDataURL()}),g(o,!1),o.drawImage(a,0,0,s,c,15,0,t.width,t.height),o.lineWidth=1.5,o.textAlign="center",o.textBaseline="bottom",o.font="bold 10pt Arial",D(o,5,7.5,t.height+7.5,7.5,0);var h=o.measureText(c).width+10;o.fillStyle="#ffffff",o.fillRect(0,t.height/2-h/2,15,h),o.fillStyle="#000000",o.rotate(Math.PI/2),o.fillText(c,t.height/2,0),o.rotate(-Math.PI/2),D(o,5,7.5,t.height+7.5,t.width+15,t.height+7.5),h=o.measureText(s).width+10,o.fillStyle="#ffffff",o.fillRect(15+t.width/2-h/2,t.height,h,15),o.fillStyle="#000000",o.fillText(s,15+t.width/2,t.height+15),o.fillRect(0,t.height,15,15),g(i,!1),i.drawImage(r,0,0,t.width,t.height)}}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.fileUrl!==e.fileUrl&&(clearTimeout(this.state.updateTimer),this.setState({updateTimer:setTimeout(function(){document.getElementById("horStitchesSlider").value=t.state.defaultHorStitches,t.setState({horStitches:t.state.defaultHorStitches}),t.onImgLoad()},this.state.timeout)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"picEditor"},r.a.createElement("div",{className:"canvasContainer"},r.a.createElement("canvas",{className:"picCanvas",id:"PixelatorCanvas"})),r.a.createElement("div",{className:"sliderContainer"},r.a.createElement("p",{className:"sliderBoxTitle"},"Options"),r.a.createElement(u,{name:"horStitchesSlider",title:"# of Horizontal Stitches",min:"10",max:"150",handler:this.handleSlider,defaultValue:this.state.defaultHorStitches})))}}]),t}(a.Component),B=n(38),f=n.n(B),E=function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0},C=function(e,t){void 0===t&&(t=-1);var n=document.createElement("canvas"),a=e.width*e.height,r=e.width,i=e.height;if(t>0&&a>t){var l=function(e,t,n){var a=e/t,r=Math.sqrt(n/a);return[Math.floor(a*r),Math.floor(r)]}(e.width,e.height,t);r=l[0],i=l[1]}n.width=r,n.height=i;var o=r*i,s=n.getContext("2d");s.drawImage(e,0,0,r,i);for(var c=s.getImageData(0,0,r,i).data,h=c.length/o,d=[],u=0;u<c.length;u+=h)d.push(c.slice(u,u+h));return d},v=function(e,t){for(var n=1/0,a=-1,r=0;r<t.length;++r){for(var i=t[r],l=0,o=0;o<e.length;++o)l+=Math.pow(e[o]-i[o],2);l<n&&(n=l,a=r)}return a},F=function(e){if(0===e.length)return[];for(var t=[],n=0;n<e[0].length;++n)t.push(0);for(var a=0;a<e.length;++a)for(var r=e[a],i=0;i<r.length;++i)t[i]+=(r[i]-t[i])/(a+1);return t},w=function(e,t){return function(e,t){var n=e.width,a=e.height,r=document.createElement("canvas");r.width=n,r.height=a;var i=r.getContext("2d");i.drawImage(e,0,0,n,a);for(var l=i.getImageData(0,0,n,a).data,o=n*a,s=l.length/o,c=new Uint8ClampedArray(l.length),h=new Uint8ClampedArray(s),d=0;d<l.length;d+=s){for(var u=0;u<s;++u)h[u]=l[d+u];for(var m=t[v(h,t)],g=0;g<m.length;++g)c[d+g]=m[g]}var D=document.createElement("canvas");D.width=n,D.height=a;var p=D.getContext("2d"),B=p.createImageData(n,a);return B.data.set(c),p.putImageData(B,0,0),D.toDataURL()}(e,function(e,t){void 0===t&&(t=Math.min(3,e.length));for(var n=0,a=function(){return(n=(9301*n+49297)%233280)/233280},r=[],i=0;i<t;++i){var l=Math.floor(a()*e.length);r.push(e[l])}for(;;){for(var o=[],s=0;s<t;++s)o.push([]);for(var c=0;c<e.length;++c){var h=e[c];o[v(h,r)].push(h)}for(var d=!0,u=0;u<t;++u){var m=o[u],g=[];g=m.length>0?F(m):e[Math.floor(a()*e.length)],d=d&&E(g,r[u]),r[u]=g}if(d)break}return r}(C(e,5e4),t))},T=["#","&","*","\u2021","\u2020","\xa7","\xd7","\xf7","\xb1","-","\xac","\u20ac","\xa3","\xa4","\xa5","\xa2","!","%","$","@","?","\xae","\xe6","\xc6","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","~",">","<","]","[","}","{","|","\\","/","\u2660","\u2663","\u2665","\u2666","^"],y=(n(52),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.palette,t=[],n=[];for(var a in e)t.push([e[a].code,e[a].name,e[a].hex,e[a].count,e[a].symb]);t.sort(function(e,t){return t[3]-e[3]});for(var i=0;i<t.length;i++){var l={backgroundColor:"#"+t[i][2]};n.push(r.a.createElement("tr",{key:t[i],className:"paletteColor"},r.a.createElement("td",null,r.a.createElement("div",{style:l,className:"paletteBox"},r.a.createElement("span",{className:"paletteSymb"},t[i][4]))),r.a.createElement("td",null,t[i][1]),r.a.createElement("td",{style:{textAlign:"right"}},t[i][0]),r.a.createElement("td",{style:{textAlign:"right"}},t[i][3])))}return r.a.createElement("div",{className:"Palette"},r.a.createElement("table",{className:"paletteTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Color"),r.a.createElement("th",null,"Name"),r.a.createElement("th",{style:{textAlign:"right"}},"DMC"),r.a.createElement("th",{style:{textAlign:"right"}},"Count"))),r.a.createElement("tbody",null,n)))}}]),t}(a.Component)),L=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={updateTimer:"",timeout:300,colors:10,rgb_dmc:[],rgb_dmc_pure:[],defaultColors:10,palette:{},symbols:[]},n.handleSlider=function(){n.setState({colors:document.getElementById("colorSlider").value}),n.onImgLoad()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onImgLoad",value:function(){var e=this,t=new Image;t.src=this.props.fileUrl;var n=document.getElementById("ColorMapperCanvas"),a=document.createElement("canvas"),r=n.getContext("2d"),i=a.getContext("2d");t.onload=function(){var l=w(t,e.state.colors),o=new Image;o.src=l,o.onload=function(){n.width=e.props.initWidth,n.height=e.props.initHeight,a.width=o.width,a.height=o.height,i.drawImage(o,0,0);for(var t=i.getImageData(0,0,o.width,o.height),l=new Array(t.data.length),s={},c=0,h=0;h<t.data.length;h+=4){for(var d=t.data[h+0],u=t.data[h+1],m=t.data[h+2],D=99999999,p=D,B=0,f=0;f<e.state.rgb_dmc.length;f+=1){var E=e.state.rgb_dmc[f][2],C=e.state.rgb_dmc[f][3],v=e.state.rgb_dmc[f][4];if((p=(d-E)*(d-E)+(u-C)*(u-C)+(m-v)*(m-v))<D&&(D=p,B=f,p<2))break}var F=e.state.rgb_dmc[B][2],w=e.state.rgb_dmc[B][3],T=e.state.rgb_dmc[B][4];l[h+0]=F,l[h+1]=w,l[h+2]=T,l[h+3]=255;var y=""+F+w+T;y in s?s[y].count++:(s[y]={code:e.state.rgb_dmc[B][0],name:e.state.rgb_dmc[B][1],hex:e.state.rgb_dmc[B][5],symb:e.state.symbols[c],count:1},c++)}e.setState({palette:s}),t.data.set(l),i.putImageData(t,0,0),e.props.outputHandler({colorUrl:a.toDataURL(),palette:s}),g(r,!1),r.drawImage(a,0,0,o.width,o.height,0,0,n.width,n.height)}}}},{key:"componentDidMount",value:function(){var e=this;f.a.parse("\nDMC,Name,RED,GRN,BLU,#RGB\n000,blanc White,255,255,255,FFFFFF\n208,Lavender-VY DK,148,91,128,945B80\n209,Lavender-DK,206,148,186,CE94BA\n210,Lavender-MD,236,207,225,ECCFE1\n211,Lavender-LT,243,218,228,F3DAE4\n221,Shell Pink-VY DK,156,41,74,9C294A\n223,Shell Pink-LT,219,128,115,DB8073\n224,Shell Pink-VY LT,255,199,176,FFC7B0\n225,Shell Pink-ULT VY L,255,240,228,FFF0E4\n300,Mahogany-VY DK,143,57,38,8F3926\n301,Mahogany-MD,209,102,84,D16654\n304,Christmas Red-MD,188,0,97,BC0061\n307,Lemon,255,231,109,FFE76D\n309,Rose-DP,214,43,91,D62B5B\n310,Black,0,0,0,000000\n311,Navy Blue-MD,0,79,97,004F61\n312,Navy Blue-LT,58,84,103,3A5467\n315,Antique Mauve-VY DK,163,90,91,A35A5B\n316,Antique Mauve-MD,220,141,141,DC8D8D\n317,Pewter Grey,167,139,136,A78B88\n318,Steel Grey - LT,197,198,190,C5C6BE\n319,Pistachio Grn-VY DK,85,95,82,555F52\n320,Pistachio Green-MD,138,153,120,8A9978\n321,Christmas Red,231,18,97,E71261\n322,Navy Blue-VY LT,81,109,135,516D87\n326,Rose-VY DP,188,22,65,BC1641\n327,Violet-DK,61,0,103,3D0067\n333,Blue Violet-VY DK,127,84,130,7F5482\n334,Baby Blue-MD,115,140,170,738CAA\n335,Rose,219,36,79,DB244F\n336,Navy Blue,36,73,103,244967\n340,Blue Violet-MD,162,121,164,A279A4\n341,Blue Violet-LT,145,180,197,91B4C5\n347,Salmon-VY DK,194,36,67,C22443\n349,Coral-DK,220,61,91,DC3D5B\n350,Coral-MD,237,69,90,ED455A\n351,Coral,255,128,135,FF8087\n352,Coral-LT,255,157,144,FF9D90\n353,Peach Flesh,255,196,184,FFC4B8\n355,Terra Cotta-DK,189,73,47,BD492F\n356,Terra Cotta-MD,226,114,91,E2725B\n367,Pistachio Green-DK,95,112,91,5F705B\n368,Pistachio Green-LT,181,206,162,B5CEA2\n369,Pistachio Grn-VY LT,243,250,209,F3FAD1\n370,Mustard - MD,184,138,87,B88A57\n371,Mustard,196,155,100,C49B64\n372,Mustard - LT,203,162,107,CBA26B\n400,Mahogany-DK,157,60,39,9D3C27\n402,Mahogany-VY LT,255,190,164,FFBEA4\n407,Sportsman Flsh-VY D,194,101,76,C2654C\n413,Pewter Grey - DK,109,95,95,6D5F5F\n414,Steel Grey - DK,167,139,136,A78B88\n415,Pearl Grey,221,221,218,DDDDDA\n420,Hazel Nut Brown-DK,140,91,43,8C5B2B\n422,Hazel Nut Brown-LT,237,172,123,EDAC7B\n433,Brown-MD,151,84,20,975414\n434,Brown-LT,178,103,70,B26746\n435,Brown-VY LT,187,107,57,BB6B39\n436,Tan,231,152,115,E79873\n437,Tan-LT,238,171,121,EEAB79\n444,Lemon-DK,255,176,0,FFB000\n445,Lemon-LT,255,255,190,FFFFBE\n451,Shell Grey - DK,179,151,143,B3978F\n452,Shell Grey - MD,210,185,175,D2B9AF\n453,Shell Grey - LT,235,207,185,EBCFB9\n469,Avocado Green,116,114,92,74725C\n470,Avocado Green-LT,133,143,108,858F6C\n471,Avocado Green-VY LT,176,187,140,B0BB8C\n472,Avocado Green-ULT L,238,255,182,EEFFB6\n498,Christmas Red-LT,187,0,97,BB0061\n500,Blue Green-VY DK,43,57,41,2B3929\n501,Blue Green-DK,67,85,73,435549\n502,Blue Green,134,158,134,869E86\n503,Blue Green-MD,195,206,183,C3CEB7\n504,Blue Green-LT,206,221,193,CEDDC1\n517,Wedgewood-MD,16,127,135,107F87\n518,Wedgewood-LT,102,148,154,66949A\n519,Sky Blue,194,209,207,C2D1CF\n520,Fern Green-DK,55,73,18,374912\n522,Fern Green,159,169,142,9FA98E\n523,Fern Green-LT,172,183,142,ACB78E\n524,Fern Green-VY LT,205,182,158,CDB69E\n535,Ash Grey - VY LT,85,85,89,555559\n543,Beige Brown-UL VY L,239,214,188,EFD6BC\n550,Violet-VY LT,109,18,97,6D1261\n552,Violet-MD,146,85,130,925582\n553,Violet,160,100,146,A06492\n554,Violet-LT,243,206,225,F3CEE1\n561,Jade-VY DK,59,96,76,3B604C\n562,Jade-MD,97,134,97,618661\n563,Jade-LT,182,212,180,B6D4B4\n564,Jade-VY LT,214,230,204,D6E6CC\n580,Moss Green-DK,0,103,0,006700\n581,Moss Green,151,152,49,979831\n597,Turquoise,128,151,132,809784\n598,Turquoise-LT,208,223,205,D0DFCD\n600,Cranberry-VY DK,208,57,106,D0396A\n601,Cranberry-DK,222,57,105,DE3969\n602,Cranberry-MD,231,84,122,E7547A\n603,Cranberry,255,115,140,FF738C\n604,Cranberry-LT,255,189,202,FFBDCA\n605,Cranberry-VY LT,255,207,214,FFCFD6\n606,Bright Orange-Red,255,0,0,FF0000\n608,Bright Orange,255,91,0,FF5B00\n610,Drab Brown - VY DK,151,104,84,976854\n611,Drab Brown - DK,158,109,91,9E6D5B\n612,Drab Brown - MD,203,152,103,CB9867\n613,Drab Brown - LT,219,176,122,DBB07A\n632,Negro Flesh-MD,162,77,52,A24D34\n640,Beige Grey - VY DK,163,163,157,A3A39D\n642,Beige Grey - DK,174,176,170,AEB0AA\n644,Beige Grey-MD,224,224,215,E0E0D7\n645,Beaver Grey - VY DK,113,113,113,717171\n646,Beaver Grey-DK,121,121,121,797979\n647,Beaver Grey - MD,190,190,185,BEBEB9\n648,Beaver Grey-LT,202,202,202,CACACA\n666,Christmas Red-LT,213,39,86,D52756\n676,Old Gold-LT,255,206,158,FFCE9E\n677,Old Gold-VY LT,255,231,182,FFE7B6\n680,Old Gold-DK,209,140,103,D18C67\n699,Chirstmas Green,0,91,6,005B06\n700,Christmas Green-BRT,0,96,47,00602F\n701,Christmas Green-LT,79,108,69,4F6C45\n702,Kelly Green,79,121,66,4F7942\n703,Chartreuse,121,144,76,79904C\n704,Chartreuse-BRT,165,164,103,A5A467\n712,Cream,245,240,219,F5F0DB\n718,Plum,219,55,121,DB3779\n720,Orange Spice-DK,200,36,43,C8242B\n721,Orange Spice-MD,255,115,97,FF7361\n722,Orange Spice-LT,255,146,109,FF926D\n725,Topaz,255,200,124,FFC87C\n726,Topaz-LT,255,224,128,FFE080\n727,Topaz-VY LT,255,235,168,FFEBA8\n729,Old Gold-MD,243,176,128,F3B080\n730,Olive Green-VY DK,132,102,0,846600\n731,Olive Green-DK,140,103,0,8C6700\n732,Olive Green,145,104,0,916800\n733,Olive Green-MD,206,155,97,CE9B61\n734,Olive Green-LT,221,166,107,DDA66B\n738,Tan-VY LT,244,195,139,F4C38B\n739,Tan-ULT VY LT,244,233,202,F4E9CA\n740,Tangerine,255,131,19,FF8313\n741,Tangerine-MD,255,142,4,FF8E04\n742,Tangerine-LT,255,183,85,FFB755\n743,Yellow-MD,255,230,146,FFE692\n744,Yellow-PALE,255,239,170,FFEFAA\n745,Yellow-LT PALE,255,240,197,FFF0C5\n746,Off White,246,234,219,F6EADB\n747,Sky Blue-VY LT,240,247,239,F0F7EF\n754,Peach Flesh-LT,251,227,209,FBE3D1\n758,Terra Cotta-VY LT,255,177,147,FFB193\n760,Salmon,249,160,146,F9A092\n761,Salmon-LT,255,201,188,FFC9BC\n762,Pearl Grey - VY LT,232,232,229,E8E8E5\n772,Pine Green--LT,231,249,203,E7F9CB\n775,Baby Blue-VY LT,247,246,248,F7F6F8\n776,Pink-MD,255,177,174,FFB1AE\n778,Antique Mauve-VY LT,255,199,184,FFC7B8\n780,Topaz-ULT VY DK,181,98,46,B5622E\n781,Topaz-VY DK,181,107,56,B56B38\n782,Topaz-DK,204,119,66,CC7742\n783,Topaz-MD,225,146,85,E19255\n791,Cornflower Blue-VYD,71,55,93,47375D\n792,Cornflower Blue-DK,97,97,128,616180\n793,Cornflower Blue-MD,147,139,164,938BA4\n794,Cornflower Blue-LT,187,208,218,BBD0DA\n796,Royal Blue-DK,30,58,95,1E3A5F\n797,Royal Blue,30,66,99,1E4263\n798,Delft-DK,103,115,141,67738D\n799,Delft-MD,132,156,182,849CB6\n800,Delft-PALE,233,238,233,E9EEE9\n801,Coffee Brown-DK,123,71,20,7B4714\n806,Peacock Blue-DK,30,130,133,1E8285\n807,Peacock Blue,128,167,160,80A7A0\n809,Delft,190,193,205,BEC1CD\n813,Blue-LT,175,195,205,AFC3CD\n814,Garnet-DK,162,0,88,A20058\n815,Garnet-MD,166,0,91,A6005B\n816,Garnet,179,0,91,B3005B\n817,Coral Red-VY DK,219,24,85,DB1855\n818,Baby Pink,255,234,235,FFEAEB\n819,Baby Pink-LT,248,247,221,F8F7DD\n820,Royal Blue-VY DK,30,54,85,1E3655\n822,Beige Grey-LT,242,234,219,F2EADB\n823,Navy Blue-DK,0,0,73,000049\n824,Blue-VY DK,71,97,116,476174\n825,Blue-DK,85,108,128,556C80\n826,Blue-MD,115,138,153,738A99\n827,Blue-VY LT,213,231,232,D5E7E8\n828,Blue-ULT VY LT,237,247,238,EDF7EE\n829,Golden Olive-VY DK,130,90,8,825A08\n830,Golden Olive-DK,136,95,18,885F12\n831,Golden Olive-MD,144,103,18,906712\n832,Golden Olive,178,119,55,B27737\n833,Golden Olive-LT,219,182,128,DBB680\n834,Golden Olive-VY LT,242,209,142,F2D18E\n838,Beige Brown-VY DK,94,56,27,5E381B\n839,Beige Brown-DK,109,66,39,6D4227\n840,Beige Brown-MD,128,85,30,80551E\n841,Beige Brown-LT,188,134,107,BC866B\n842,Beige Brown-VY LT,219,194,164,DBC2A4\n844,Beaver Brown -ULT D,107,103,102,6B6766\n868,Hazel Nut Brown-VYD,153,92,48,995C30\n869,Hazel Nut Brn-VY DK,153,92,48,995C30\n890,Pistachio Grn-ULT D,79,86,76,4F564C\n891,Carnation-DK,241,49,84,F13154\n892,Carnation-MD,249,90,97,F95A61\n893,Carnation-LT,243,149,157,F3959D\n894,Carnation-VY LT,255,194,191,FFC2BF\n895,Hunter Green-VY DK,89,92,78,595C4E\n898,Coffee Brown-VY DK,118,55,19,763713\n899,Rose-MD,233,109,115,E96D73\n900,Burnt Orange-DK,206,43,0,CE2B00\n902,Granet-VY DK,138,24,77,8A184D\n904,Parrot Green-VY DK,78,95,57,4E5F39\n905,Parrot Green-DK,98,119,57,627739\n906,Parrot Green-MD,143,163,89,8FA359\n907,Parrot Green-LT,185,200,102,B9C866\n909,Emerald Green-VY DK,49,105,85,316955\n910,Emerald Green-DK,48,116,91,30745B\n911,Emerald Green-MD,49,128,97,318061\n912,Emerald Green-LT,115,158,115,739E73\n913,Nile Green-MD,153,188,149,99BC95\n915,Plum-DK,170,24,91,AA185B\n917,Plum-MD,171,22,95,AB165F\n918,Red Copper-DK,168,68,76,A8444C\n919,Red Copper,180,75,82,B44B52\n920,Copper-MD,197,94,88,C55E58\n921,Copper,206,103,91,CE675B\n922,Copper-LT,237,134,115,ED8673\n924,Grey Green--VY DK,86,99,100,566364\n926,Grey Green-LT,96,116,115,607473\n927,Grey Green-LT,200,198,194,C8C6C2\n928,Grey Green--VY LT,225,224,216,E1E0D8\n930,Antique Blue-DK,102,122,140,667A8C\n931,Antique Blue-MD,124,135,145,7C8791\n932,Antique Blue-LT,182,186,194,B6BAC2\n934,Black Avocado Green,62,59,40,3E3B28\n935,Avocado Green-DK,67,63,47,433F2F\n936,Avocado Green--VY D,69,69,49,454531\n937,Avocado Green-MD,73,86,55,495637\n938,Coffee Brown-ULT DK,99,39,16,632710\n939,Navy Blue-Vy DK,0,0,49,000031\n943,Aquamarine-MD,0,162,117,00A275\n945,Flesh-MD,255,206,164,FFCEA4\n946,Burnt Orange-MD,244,73,0,F44900\n947,Burnt Orange,255,91,0,FF5B00\n948,Peach Flesh-VY LT,255,243,231,FFF3E7\n950,Sportsman Flesh,239,162,127,EFA27F\n951,Flesh,255,229,188,FFE5BC\n954,Nile Green,170,213,164,AAD5A4\n955,Nile Green-LT,214,230,204,D6E6CC\n956,Geranium,255,109,115,FF6D73\n957,Gernanium-PALE,255,204,208,FFCCD0\n958,Sea Green-DK,0,160,130,00A082\n959,Sea Green-MD,171,206,177,ABCEB1\n961,Dusty Rose-DK,243,108,123,F36C7B\n962,Dusty Rose-MD,253,134,141,FD868D\n963,Dusty Rose-ULT VY L,,233,233,FFE9E9\n964,Sea Green-LT,208,224,210,D0E0D2\n966,Baby Green-MD,206,213,176,CED5B0\n970,Pumpkin-LT,255,117,24,FF7518\n971,Pumpkin,255,106,0,FF6A00\n972,Canary-DP,255,146,0,FF9200\n973,Canary-BRT,255,194,67,FFC243\n975,Golden Brown-DK,158,67,18,9E4312\n976,Golden Brown-MD,246,141,57,F68D39\n977,Golden Brown-LT,255,164,73,FFA449\n986,Forest Green-VY DK,58,82,65,3A5241\n987,Forest Green-DK,83,97,73,536149\n988,Forest Green-MD,134,145,110,86916E\n989,Forest Green,134,153,110,86996E\n991,Aquamarine-DK,47,91,73,2F5B49\n992,Aquamarine,146,183,165,92B7A5\n993,Aquamarine-LT,192,224,200,C0E0C8\n995,Electric Blue-DK,0,123,134,007B86\n996,Electric Blue-MD,170,222,225,AADEE1\n3011,Khaki Green-DK,123,91,64,7B5B40\n3012,Khaki Green-MD,170,134,103,AA8667\n3013,Khaki Green-LT,208,195,164,D0C3A4\n3021,Brown Grey - VY DK,115,91,93,735B5D\n3022,Brown Grey - MD,172,172,170,ACACAA\n3023,Brown Grey - LT,198,190,173,C6BEAD\n3024,Brown Grey - VY LT,210,208,205,D2D0CD\n3031,Mocha Brown-VY DK,84,56,23,543817\n3032,Mocha Brown-MD,188,156,120,BC9C78\n3033,Mocha Brown-VY LT,239,219,190,EFDBBE\n3041,Antique Violet-MD,190,155,167,BE9BA7\n3042,Antique Violet-LT,225,205,200,E1CDC8\n3045,Yellow Beige-DK,216,151,105,D89769\n3046,Yellow Beige-MD,229,193,139,E5C18B\n3047,Yellow Beige-LT,255,236,211,FFECD3\n3051,Green Grey-DK,85,73,0,554900\n3052,Green Grey--MD,137,141,114,898D72\n3053,Green Grey,187,179,148,BBB394\n3064,Sportsman Flsh-VY D,194,101,76,C2654C\n3072,Beaver Grey - VY LT,233,233,223,E9E9DF\n3078,Golden Yellow-VY LT,255,255,220,FFFFDC\n3325,Baby Blue-LT,202,226,229,CAE2E5\n3326,Rose-LT,255,157,150,FF9D96\n3328,Salmon-DK,188,64,85,BC4055\n3340,Apricot-MD,255,123,103,FF7B67\n3341,Apricot,255,172,162,EBACA2\n3345,Hunter Green-DK,97,100,82,616452\n3346,Hunter Green,120,134,107,78866B\n3347,Yellow Green-MD,128,152,115,809873\n3348,Yellow Green-LT,225,249,190,E1F9BE\n3350,Dusty Rose-ULT DK,201,79,91,C94F5B\n3354,Dusty Rose-LT,255,214,209,FFD6D1\n3362,Pine Green-DK,96,95,84,605F54\n3363,Pine Green-MD,116,127,96,747F60\n3364,Pine Green,161,167,135,A1A787\n3371,Black Brown,83,37,16,532510\n3607,Plum-LT,231,79,134,E74F86\n3608,Plum-VY LT,247,152,182,F798B6\n3609,Plum-ULT LT,255,214,229,FFD6E5\n3685,Mauve-DK,161,53,79,A1354F\n3687,Mauve,203,78,97,CB4E61\n3688,Mauve-MD,250,151,144,FA9790\n3689,Mauve-LT,255,213,216,FFD5D8\n3705,Melon-DK,255,85,91,FF555B\n3706,Melon-MD,255,128,109,FF806D\n3708,Melon-LT,254,212,219,FED4DB\n3712,Salmon-MD,230,101,107,E6656B\n3713,Salmon-VY LT,253,229,217,FDE5D9\n3716,Dusty Rose-VY LT,255,211,212,FFD3D4\n3721,Shell Pink-DK,184,75,77,B84B4D\n3722,Shell Pink-MD,184,89,88,B85958\n3726,Antique Mauve-DK,195,118,123,C3767B\n3727,Antique Mauve-LT,255,199,196,FFC7C4\n3731,Dusty Rose-VY DK,209,93,103,D15D67\n3733,Dusty Rose,255,154,148,FF9A94\n3740,Antique Violet-DK,156,125,133,9C7D85\n3743,Antique Violet-VY L,235,235,231,EBEBE7\n3746,Blue Violet-DK,149,102,162,9566A2\n3747,Blue Violet-VY LT,230,236,232,E6ECE8\n3750,Antique Blue-VY DK,12,91,108,0C5B6C\n3752,Antique Blue-VY LT,194,209,206,C2D1CE\n3753,Ant. Blue-ULT VY LT,237,247,247,EDF7F7\n3755,Baby Blue,158,176,206,9EB0CE\n3756,Baby Blue-ULT VY LT,248,248,252,F8F8FC\n3760,Wedgewood,102,142,152,668E98\n3761,Sky Blue-LT,227,234,230,E3EAE6\n3765,Peacock Blue-VY DK,24,128,134,188086\n3766,Peacock Blue-LT,24,101,111,18656F\n3768,Grey Green-DK,92,110,108,5C6E6C\n3770,Flesh-VY LT,255,250,224,FFFAE0\n3772,Negro Flesh,173,83,62,AD533E\n3773,Sportsman Flsh-MD,231,134,103,E78667\n3774,Sportsman Flsh-VY L,255,220,193,FFDCC1\n3776,Mahogony-LT,221,109,91,DD6D5B\n3777,Terra Cotta-VY DK,191,64,36,BF4024\n3778,Terra Cotta-LT,237,122,100,ED7A64\n3779,Ter. Cotta-ULT VY L,255,177,152,FFB198\n3781,Mocha Brown-DK,113,71,42,71472A\n3782,Mocho Brown-LT,206,175,144,CEAF90\n3787,Brown Grey - DK,139,109,115,8B6D73\n3790,Beige Grey - ULT DK,140,117,109,8C756D\n3799,Pewter Grey - VY DK,81,76,83,514C53\n",{complete:function(t){e.setState({rgb_dmc:t.data.slice(1)});var n=e.state.rgb_dmc.map(function(e){return e.slice(2,5)});e.setState({rgb_dmc_pure:n})}}),this.setState({symbols:T})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.fileUrl!==e.fileUrl&&(clearTimeout(this.state.updateTimer),this.setState({updateTimer:setTimeout(function(){document.getElementById("colorSlider").value=t.state.defaultColors,t.setState({colors:t.state.defaultColors}),t.onImgLoad()},this.state.timeout)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"picEditor ColorMapper"},r.a.createElement("div",{className:"colorMapperEditor"},r.a.createElement("div",{className:"canvasContainer"},r.a.createElement("canvas",{className:"picCanvas",id:"ColorMapperCanvas"})),r.a.createElement("div",{className:"sliderContainer"},r.a.createElement("p",{className:"sliderBoxTitle"},"Options"),r.a.createElement(u,{name:"colorSlider",title:"# of Colors",min:"2",max:"90",handler:this.handleSlider,defaultValue:this.state.defaultColors}))),r.a.createElement("div",{className:"colorMapperPalette"},r.a.createElement("p",{className:"paletteBoxTitle"},"Palette"),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("input",{className:"button",type:"submit",value:"Change Symbols",onClick:function(){!function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t}(e.state.symbols),e.onImgLoad()}}),r.a.createElement("input",{className:"button",type:"submit",value:"Toggle Colors",onClick:function(){e.props.outputHandler({nocolor:!e.props.nocolor})}})),r.a.createElement(y,{palette:this.state.palette})))}}]),t}(a.Component),A=n(39),b=n.n(A),M=n(40),G=n.n(M),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},n.genPdf=function(){n.setState({loading:!0});var e=new b.a("l","px","a4"),t=Math.sqrt(2),a={top:15,bottom:15,left:15*t,right:15*t},r=e.internal.pageSize.getWidth()-a.left-a.right,i=e.internal.pageSize.getHeight()-a.top-a.bottom,l=document.createElement("canvas");l.width=r+a.left+a.right,l.height=i+a.top+a.bottom,l.getContext("2d").strokeRect(a.left/2,a.top/2,r+ +a.left/2+a.right/2,i+a.top/2+a.bottom/2);var o=l.toDataURL("image/png"),s=document.getElementsByClassName("paletteTable")[0],c="",h=new Image;h.src=n.props.fileUrl,h.onload=function(){var t=V(h,30,n.props.stitchSize),l=t[0],d=t[1];G()(s,{logging:!1}).then(function(t){c=t.toDataURL("image/png");var s=r-i,h=t.height/t.width*s;h>i&&(h=i-10);for(var u=0;u<l.length;u++)e.addImage(o,"PNG",0,0,r+a.left+a.right,i+a.top+a.bottom,"","FAST"),u>0&&e.addImage(d[u],"PNG",a.left+(s-i/4)/2,.75*i+a.top-5,i/4,i/4,"","FAST"),e.addImage(c,"PNG",a.left,a.top+5,s,h,"","FAST"),e.addImage(l[u],"PNG",a.left+s+10,a.top+5,i-10,i-10,"","FAST"),0===u&&a.top+5+h>.75*i+a.top-10&&(h=.75*i-20),u!==l.length-1&&e.addPage("a4","landscape");e.save("stitch_pattern.pdf"),n.setState({loading:!1})})}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"GenPdf",className:this.state.loading?"loading":""},r.a.createElement("input",{type:"submit",value:this.state.loading?"\u21bb":"Generate PDF",onClick:function(){e.genPdf()}}))}}]),t}(a.Component),V=function(e,t,n){var a=n*t,r=Math.ceil(e.width/a),i=Math.ceil(e.height/a),l=new Array(r*i+1),o=document.createElement("canvas");o.width=a+10,o.height=a+10;var s=o.getContext("2d"),c=5,h=5,d=0;e.height>e.width?(c+=a/2-e.width/e.height*a/2,h+=0,d=a/e.height*a,s.drawImage(e,0,0,e.width,e.height,c,h,e.width/e.height*a,a)):(c+=0,h+=a/2-e.height/e.width*a/2,d=a/e.width*a,s.drawImage(e,0,0,e.width,e.height,c,h,a,e.height/e.width*a));for(var u=0;u<r;u++)for(var m=0;m<i;m++){s.lineWidth=5,s.strokeStyle="#ff0000",s.strokeRect(c+u*d,h+m*d,d,d);var g=document.createElement("canvas");g.width=a+n,g.height=a+n;var D=g.getContext("2d");D.strokeRect(n,0,a,a);for(var p=0;p<Math.pow(t,2);p++)D.strokeRect((p%t+1)*n,Math.floor(p/t)*n,n,n);D.drawImage(e,u*a,m*a,a,a,n,0,a,a),D.textAlign="center",D.textBaseline="middle",D.font="bold 20pt Courier";for(var B=0;B<t;B++)D.fillText(B+1,n/2,(B+.5)*n),D.fillText(B+1,(B+1+.5)*n,a+n/2);l[u*i+m+1]=g.toDataURL()}h-=2.5,(c-=2.5)>2.5?(s.clearRect(c+e.width/e.height*a,0,2*a,2*a),s.clearRect(0,h+a,2*a,2*a),s.beginPath(),s.moveTo(c,h+a),s.lineTo(c+e.width/e.height*a,h+a),s.lineTo(c+e.width/e.height*a,h),s.stroke()):(s.clearRect(0,h+e.height/e.width*a,2*a,2*a),s.clearRect(c+a,0,2*a,2*a),s.beginPath(),s.moveTo(c+a,h),s.lineTo(c+a,h+e.height/e.width*a),s.lineTo(c,h+e.height/e.width*a),s.stroke()),l[0]=o.toDataURL();for(var f=new Array(r*i+1),E=0;E<r;E++)for(var C=0;C<i;C++){var v=document.createElement("canvas");v.width=o.width,v.height=o.height;var F=v.getContext("2d");F.drawImage(o,0,0),F.fillStyle="rgba(0,0,0,0.5)",F.fillRect(c,h,r*d,i*d),F.fillStyle="rgba(255,255,255,.4)",F.fillRect(c+E*d,h+C*d,d,d),c>2.5?(F.clearRect(c+e.width/e.height*a,0,2*a,2*a),F.clearRect(0,h+a,2*a,2*a)):(F.clearRect(0,h+e.height/e.width*a,2*a,2*a),F.clearRect(c+a,0,2*a,2*a)),f[E*i+C+1]=v.toDataURL()}return[l,f]},K=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={updateTimer:"",timeout:300,scale:40},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onImgLoad",value:function(){var e=this,t=new Image;t.src=this.props.fileUrl;var n=this.state.scale;t.onload=function(){var a=document.getElementById("PatternMakerCanvas"),r=document.createElement("canvas"),i=document.getElementsByClassName("canvasContainer Pattern")[0];r.width=t.width*n,r.height=t.height*n;var l=t.width/t.height;l>1?(a.width=i.offsetWidth,a.height=a.width/l):(a.height=i.offsetHeight,a.width=a.height*l);var o=a.getContext("2d"),s=r.getContext("2d");s.clearRect(0,0,r.width,r.height),o.clearRect(0,0,a.width,a.height),g(s,!1),s.drawImage(t,0,0,t.width,t.height,0,0,r.width,r.height);for(var c=s.getImageData(0,0,r.width,r.height).data,h=e.props.palette,d=0;d<r.width;d+=n)for(var u=0;u<r.height;u+=n){var m=c[4*(d+r.width*u)+0],D=c[4*(d+r.width*u)+1],p=c[4*(d+r.width*u)+2],B=""+m+D+p,f="";B in h&&(f=h[B].symb),e.props.nocolor&&(s.fillStyle="#ffffff",s.fillRect(d,u,n,n)),s.fillStyle="#000000",s.strokeStyle="#000000",(m+D+p)/3<10&&!e.props.nocolor&&(s.strokeStyle="#202020"),s.strokeRect(d,u,n,n),d/n%10===0&&u/n%10===0&&(s.lineWidth=8,s.strokeRect(d,u,10*n,10*n)),s.lineWidth=1,s.textAlign="center",s.textBaseline="middle",s.font="bold 25pt Courier",(m+D+p)/3<120&&!e.props.nocolor?s.fillStyle="#ffffff":s.fillStyle="#000000",s.fillText(f,d+n/2,u+n/2)}e.setState({patternUrl:r.toDataURL(),stitchSize:n}),e.props.outputHandler({patternUrl:e.state.patternUrl,stitchSize:n}),g(o,!1),o.drawImage(r,0,0,r.width,r.height,0,0,a.width,a.height)}}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.fileUrl===e.fileUrl&&this.props.palette===e.palette&&this.props.nocolor===e.nocolor||(clearTimeout(this.state.updateTimer),this.setState({updateTimer:setTimeout(function(){t.onImgLoad()},this.state.timeout)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"picEditor Pattern"},r.a.createElement("div",{className:"canvasContainer Pattern"},r.a.createElement("canvas",{className:"picCanvas Pattern",id:"PatternMakerCanvas"})),r.a.createElement(S,{fileUrl:this.state.patternUrl,stitchSize:this.state.scale}))}}]),t}(a.Component),Y=n(42),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"ImgUploader",className:this.props.show?"hide":""},r.a.createElement("div",{id:"BackgroundImage"}),r.a.createElement("img",{className:"logo",src:n(36),alt:"logo"}),r.a.createElement("p",{className:"landingText"},"Create cross-stitch patterns from digital images."),r.a.createElement(Y.a,{onDrop:this.props.handleDropFile},function(t){var n=t.getRootProps,a=t.getInputProps,i=t.isDragActive;return r.a.createElement("div",n({className:"dropBox "+(i?"active":"")}),r.a.createElement("input",a({type:"file",id:"img_upload",accept:"image/*",onChange:function(){e.props.handleSelectFile()}})),i?r.a.createElement("p",null,"Drop image here..."):r.a.createElement("p",null,"Drop your image here ",r.a.createElement("br",null)," or click to select file."))}))}}]),t}(a.Component),I=(n(85),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={width:0,height:0,palette:{},stitchSize:1,nocolor:!1,show:"",fileUrl:"",preEditUrl:"",pixelUrl:"",colorUrl:"",patternUrl:""},n.loadFile=function(){setTimeout(function(){n.setState({show:!0})},0)},n.handleSelectFile=function(e){var t=document.getElementById("img_upload").files[0];t&&(n.setState({fileUrl:window.URL.createObjectURL(t)}),n.loadFile())},n.handleDropFile=function(e){e&&(n.setState({fileUrl:window.URL.createObjectURL(e[0])}),n.loadFile())},n.outputHandler=function(e){n.setState(e)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.newImage!==this.props.newImage&&this.setState({fileUrl:"",show:!1})}},{key:"render",value:function(){return r.a.createElement("div",{id:"AppContainer"},r.a.createElement(P,{show:this.state.show,handleSelectFile:this.handleSelectFile,handleDropFile:this.handleDropFile}),r.a.createElement("div",{id:"EditorContainer",className:this.state.show?"":"hide"},r.a.createElement("div",{id:"BackgroundImage"}),r.a.createElement("div",{className:"picEditorContainer"},r.a.createElement("p",{className:"picEditorTitle"},"Pre-Processing"),r.a.createElement(m,{fileUrl:this.state.fileUrl,outputHandler:this.outputHandler})),r.a.createElement("div",{className:"picEditorContainer"},r.a.createElement("p",{className:"picEditorTitle"},"Size Reduction"),r.a.createElement(p,{fileUrl:this.state.preEditUrl,outputHandler:this.outputHandler})),r.a.createElement("div",{className:"picEditorContainer"},r.a.createElement("p",{className:"picEditorTitle"},"Color Reduction"),r.a.createElement(L,{fileUrl:this.state.pixelUrl,outputHandler:this.outputHandler,initWidth:this.state.width,initHeight:this.state.height,palette:this.state.palette,nocolor:this.state.nocolor})),r.a.createElement("div",{className:"picEditorContainer"},r.a.createElement("p",{className:"picEditorTitle"},"Pattern Preview"),r.a.createElement(K,{fileUrl:this.state.colorUrl,palette:this.state.palette,outputHandler:this.outputHandler,nocolor:this.state.nocolor})),r.a.createElement("div",{id:"Footer"},r.a.createElement("p",null,"Site created by ",r.a.createElement("a",{className:"website",target:"_blank",rel:"noopener noreferrer",href:"https://msfstef.github.io/"},"Stefanos Mousafeiris")," on Feb 2019."),r.a.createElement("a",{className:"paypal",target:"_blank",rel:"noopener noreferrer",href:"https://paypal.me/msfstef"},"Buy me coffee?"))))}}]),t}(a.Component)),O=(n(87),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"Header"},r.a.createElement("img",{className:"logo",src:n(36),alt:"logo",onClick:function(){e.props.handleMenu()}}),r.a.createElement("div",{className:"itemContainer"},r.a.createElement("p",{className:"new item",onClick:function(){e.props.handleMenu()}},"New Pattern"),r.a.createElement("a",{className:"about item",target:"_blank",rel:"noopener noreferrer",href:"https://msfstef.github.io/#/about"},"About"),r.a.createElement("a",{className:"contact item",target:"_blank",rel:"noopener noreferrer",href:"https://msfstef.github.io/#/contact"},"Contact")))}}]),t}(a.Component)),k=(n(89),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={newImage:!1},n.handleMenu=function(){n.setState({newImage:!n.state.newImage})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{handleMenu:this.handleMenu}),r.a.createElement(I,{newImage:this.state.newImage}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.c0dec8b3.chunk.js.map