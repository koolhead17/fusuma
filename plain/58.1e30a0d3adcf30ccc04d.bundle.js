(self.webpackChunkplain=self.webpackChunkplain||[]).push([[58],{8058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Sidebar:()=>p});var r=n(3058),a=n(3504),c=n(8299),i=n.n(c),l=n(9085),o=n(2242),s="https://github.com/hiroppy/fusuma.git",u=window.location.href.split("#")[0],m=["twitter"],d="slide",h=function(e){return"".concat(e).padStart(2,"0")},p=(0,r.memo)((function(e){var t=e.isOpen,n=e.onStateChange,c=e.goTo,p=e.currentIndex,f=e.runPresentationMode,b=e.contents,E=e.totalSlides;return r.createElement(a.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:n,outerContainerId:"root",pageWrapId:"webslides"},r.createElement("div",{className:"sidebar-social"},Array.isArray(m)&&m.map((function(e){if("twitter"===e)return r.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(d," ").concat(u),"aria-label":"".concat(d," ").concat(u)},r.createElement(l.fWC,null))}))),r.createElement("div",{className:"sidebar-control"},r.createElement(o.b2E,{onClick:function(){return c(0)},className:"sidebar-cursor"}),r.createElement("span",null,"".concat(h(p+1)," / ").concat(h(E))),r.createElement(o.cHm,{onClick:function(){return c(E-1)},className:"sidebar-cursor"})),r.createElement("div",{className:"sidebar-tools"},r.createElement(o.Nms,{style:{width:26,height:26},onClick:function(){i().isEnabled&&i().toggle()},className:"sidebar-cursor"}),r.createElement(o.kxx,{onClick:function(){return f()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),r.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"github"},r.createElement(l.hJX,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),0!==b.length&&r.createElement("ul",{className:"sidebar-contents"},b.map((function(e){return r.createElement("li",{key:e.title},r.createElement("a",{style:{cursor:"pointer"},onClick:function(){return c(e.index-1)}},e.title))}))))}))}}]);