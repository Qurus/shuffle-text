(()=>{"use strict";const t=function(){function t(t){var n;this.sourceRandomCharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",this.emptyCharacter="-",this.duration=600,this._isRunning=!1,this._originalStr="",this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=[],this._element=null,this._requestAnimationFrameId=0,this._element=t,this.setText(null!==(n=t.textContent)&&void 0!==n?n:"")}return t.prototype.setText=function(t){this._originalStr=t,this._originalLength=t.length},Object.defineProperty(t.prototype,"isRunning",{get:function(){return this._isRunning},enumerable:!1,configurable:!0}),t.prototype.start=function(){var t=this;this.stop(),this._randomIndex=[];for(var n="",e=0;e<this._originalLength;e++){var i=e/this._originalLength;this._randomIndex[e]=Math.random()*(1-i)+i,n+=this.emptyCharacter}this._timeStart=(new Date).getTime(),this._isRunning=!0,this._requestAnimationFrameId=requestAnimationFrame((function(){t._onInterval()})),this._element&&(this._element.textContent=n)},t.prototype.stop=function(){this._isRunning=!1,cancelAnimationFrame(this._requestAnimationFrameId)},t.prototype.dispose=function(){cancelAnimationFrame(this._requestAnimationFrameId),this._isRunning=!1,this.duration=0,this._originalStr="",this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=[],this._element=null,this._requestAnimationFrameId=0},t.prototype._onInterval=function(){var t=this;this._timeCurrent=(new Date).getTime()-this._timeStart;for(var n=this._timeCurrent/this.duration,e="",i=0;i<this._originalLength;i++)n>=this._randomIndex[i]?e+=this._originalStr.charAt(i):n<this._randomIndex[i]/3?e+=this.emptyCharacter:e+=this.sourceRandomCharacter.charAt(Math.floor(Math.random()*this.sourceRandomCharacter.length));n>1&&(e=this._originalStr,this._isRunning=!1),this._element&&(this._element.textContent=e),this._isRunning&&(this._requestAnimationFrameId=requestAnimationFrame((function(){t._onInterval()})))},t}();window.addEventListener("load",(function(){for(var n=[],e=document.querySelectorAll(".my-effect"),i=0;i<e.length;i++){var r=e[i];r.dataset.index=i,n[i]=new t(r),r.addEventListener("mouseenter",(function(){n[+this.dataset.index].start()})),r.addEventListener("mouseleave",(function(){n[+this.dataset.index].start()})),n[i].start()}}))})();