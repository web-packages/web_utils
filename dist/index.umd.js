!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TouchRipple={})}(this,(function(e){"use strict";e.ElementUtil=class{static reflow(e){e.getBoundingClientRect()}static intrinsicSizeOf(e){for(;e;){const t=getComputedStyle(e),o=parseFloat(t.width),i=parseFloat(t.height),n=parseFloat(t.paddingLeft),a=parseFloat(t.paddingRight),r=parseFloat(t.paddingTop),l=parseFloat(t.paddingBottom),s=parseFloat(t.borderLeft),d=parseFloat(t.borderRight),p=parseFloat(t.borderTop),f=parseFloat(t.borderBottom),c=t.boxSizing;if("contents"==t.display){let t=Array.from(e.children).filter((e=>"STYLE"!=e.tagName&&"SCRIPT"!=e.tagName));if(1!=t.length)throw new Error("An element with a display property of contents must have only one child to define its intrinsic size.");e=t[0];continue}let h=o,g=i;return"content-box"==c&&(h+=n+a+s+d,g+=r+l+p+f),{width:h,height:g}}}}}));
//# sourceMappingURL=index.umd.js.map
