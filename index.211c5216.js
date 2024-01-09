!function(){function t(i,e){e.length<3?(i.append(i.html()),t(i,jQuery(".slider .slider__slide"))):(e.removeClass("slider__slide--active"),jQuery(e[0]).addClass("slider__slide--active"))}!function(){var t,i;t=i=function(){},i.prototype.init=function(t){return this.$el=$(t),this.container=t,this.canvas=document.createElement("canvas"),this.sizeCanvas(),this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new s(this),this.bindUiActions(),this},i.prototype.bindUiActions=function(){$(window).on("resize",function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.sizeCanvas(),this.particleNetwork.createParticles()}.bind(this))},i.prototype.sizeCanvas=function(){this.canvas.width=this.container.offsetWidth,this.canvas.height=this.container.offsetHeight};var e=function(t,i,e){this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=a(this.network.options.particleColors),this.radius=n(1.5,2.5),this.opacity=0,this.x=i||Math.random()*this.canvas.width,this.y=e||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};e.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},e.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var s=function(t){this.options={velocity:1,density:15e3,netLineDistance:200,netLineColor:"#929292",particleColors:["#aaa"]},this.canvas=t.canvas,this.ctx=t.ctx,this.init()};s.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},s.prototype.createParticles=function(t){var i=this;this.particles=[];var s=this.canvas.width*this.canvas.height/this.options.density;if(t){var n=0;clearInterval(this.createIntervalId),this.createIntervalId=setInterval(function(){n<s-1?this.particles.push(new e(this)):clearInterval(i.createIntervalId),n++}.bind(this),250)}else for(var a=0;a<s;a++)this.particles.push(new e(this))},s.prototype.createInteractionParticle=function(){return this.interactionParticle=new e(this),this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},s.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},s.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var i=this.particles.length-1;i>t;i--){var e,s=this.particles[t],n=this.particles[i];(e=Math.min(Math.abs(s.x-n.x),Math.abs(s.y-n.y)))>this.options.netLineDistance||((e=Math.sqrt(Math.pow(s.x-n.x,2)+Math.pow(s.y-n.y,2)))>this.options.netLineDistance||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.netLineColor,this.ctx.globalAlpha=(this.options.netLineDistance-e)/this.options.netLineDistance*s.opacity*n.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(s.x,s.y),this.ctx.lineTo(n.x,n.y),this.ctx.stroke()))}for(t=0;t<this.particles.length;t++)this.particles[t].update(),this.particles[t].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},s.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.offsetX,this.interactionParticle.y=t.offsetY}.bind(this),this.onTouchMove=function(t){t.preventDefault(),this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var i=0,s=this.spawnQuantity,n=setInterval(function(){if(this.mouseIsDown){1===i&&(s=1);for(var t=0;t<s;t++)this.interactionParticle&&this.particles.push(new e(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(n);i++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){t.preventDefault(),setTimeout(function(){if(!this.touchIsMoving)for(var i=0;i<this.spawnQuantity;i++)this.particles.push(new e(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){t.preventDefault(),this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),this.canvas.addEventListener("mousemove",this.onMouseMove),this.canvas.addEventListener("touchmove",this.onTouchMove),this.canvas.addEventListener("mousedown",this.onMouseDown),this.canvas.addEventListener("touchstart",this.onTouchStart),this.canvas.addEventListener("mouseup",this.onMouseUp),this.canvas.addEventListener("mouseout",this.onMouseOut),this.canvas.addEventListener("touchend",this.onTouchEnd)},s.prototype.unbindUiActions=function(){this.canvas&&(this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("mousedown",this.onMouseDown),this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("mouseout",this.onMouseOut),this.canvas.removeEventListener("touchend",this.onTouchEnd))};var n=function(t,i,e){var s=Math.random()*(i-t)+t;return e&&(s=Math.round(s)),s},a=function(t){return t[Math.floor(Math.random()*t.length)]};(i=new t).init($(".particle-network-animation")[0])}(),jQuery(document).ready((function(){jQuery(".slider").each((function(){var i=jQuery(this),e=i.find(".slider__inner"),s=i.find(".slider__slide");t(e,s);var n=i.find(".slider__slide--active").children(".slider__slide__content").data("background"),a=15,o=tinycolor(n).lighten(a).toString();tinycolor(n).lighten(30).toString();i.css("background-color",o);var h=s.filter(":first"),c=s.filter(":last");h.before(c),i.on("click",".controls button",(function(){s.addClass("slider__slide--animate");var t=jQuery(this),e=i.find(".slider__slide--active");if(h=i.find(".slider__slide:first"),c=i.find(".slider__slide:last"),t.hasClass("next")){var n=jQuery(".slider__slide--active").next().children(".slider__slide__content").data("background"),o=tinycolor(n).lighten(a).toString();tinycolor(n).lighten(30).toString();i.css("background-color",o),e.removeClass("slider__slide--active").next().addClass("slider__slide--active"),c.after(h)}else if(t.hasClass("previous")){var r=jQuery(".slider__slide--active").prev().children(".slider__slide__content").data("background");tinycolor(r).lighten(a).toString(),tinycolor(r).lighten(30).toString();e.removeClass("slider__slide--active").prev().addClass("slider__slide--active"),h.before(c)}})),$(window).resize((function(){s.removeClass("slider__slide--animate")}))}))}))}();
//# sourceMappingURL=index.211c5216.js.map
