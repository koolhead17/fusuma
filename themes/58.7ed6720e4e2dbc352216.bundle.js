(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[58],{8058:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Sidebar:()=>p});var n=r(3058),a=r(3504),c=r(8299),i=r.n(c),o=r(9085),s=r(2242),l="https://github.com/hiroppy/fusuma.git",u="https://hiroppy.github.io/fusuma/themes",m=["twitter"],h="introducing themes",d=function(e){return"".concat(e).padStart(2,"0")},p=(0,n.memo)((function(e){var t=e.isOpen,r=e.onStateChange,c=e.goTo,p=e.currentIndex,b=e.runPresentationMode,f=e.contents,g=e.totalSlides;return n.createElement(a.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:r,outerContainerId:"root",pageWrapId:"webslides"},n.createElement("div",{className:"sidebar-social"},Array.isArray(m)&&m.map((function(e){if("twitter"===e)return n.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(h," ").concat(u),"aria-label":"".concat(h," ").concat(u)},n.createElement(o.fWC,null))}))),n.createElement("div",{className:"sidebar-control"},n.createElement(s.b2E,{onClick:function(){return c(0)},className:"sidebar-cursor"}),n.createElement("span",null,"".concat(d(p+1)," / ").concat(d(g))),n.createElement(s.cHm,{onClick:function(){return c(g-1)},className:"sidebar-cursor"})),n.createElement("div",{className:"sidebar-tools"},n.createElement(s.Nms,{style:{width:26,height:26},onClick:function(){i().isEnabled&&i().toggle()},className:"sidebar-cursor"}),n.createElement(s.kxx,{onClick:function(){return b()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),n.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":"github"},n.createElement(o.hJX,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),0!==f.length&&n.createElement("ul",{className:"sidebar-contents"},f.map((function(e){return n.createElement("li",{key:e.title},n.createElement("a",{style:{cursor:"pointer"},onClick:function(){return c(e.index-1)}},e.title))}))))}))}}]);