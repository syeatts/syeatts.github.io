var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),a=0,e=0;e<t;e++)for(var o=arguments[e],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n};System.register(["./p-f5649016.system.js"],(function(r){"use strict";var e,t;return{setters:[function(r){e=r.r;t=r.h}],execute:function(){var n=["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil"];var a=["human","elf","gnome","dwarf","halfling","half-elf","half-orc","tiefling","dragonborn"];var o=["barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock","wizard"];var i={elfType:["high","wood","dark"],gnomeType:["rock","forest","deep"],dwarfType:["mountain","gray (duergar)","hill"],hobbitType:["stout","lightfoot"]};var u=["red","blue","green","white","black","gold","silver","brass","bronze","copper"];var s=["firbolg","genasi","goliath"];var l=["protector aasimar","scourge aasimar","fallen aasimar"];var h=["air","fire","earth","water"];var c=function(r){var e=Math.ceil(0);var t=Math.floor(r);var n=Math.floor(Math.random()*(t-e+1))+e;return n};var f=["the first mate","the bosun","the navigator (quartermaster)","the ship’s doctor (surgeon)","the cook"];var g=["returning home","embarking on a pilgrimage","touring the world for pleasure","on the way to meet someone","leaving to start a new life","exiled from their homeland"];var d=[function(){return"They had signed on as an average sailor, perhaps to learn the trade"},function(){return"They were "+f[c(f.length-1)]},function(){return"They were there to protect the ship in some capacity - as a marine, perhaps"},function(){return"Actually, they were the captain of this vessel"}];var p=["a kingdom or nation","a church/cult","a dangerous spirit","an aristocratic family","a ruthless syndicate","an otherworldly presence"];var b=[function(){return"an Acolyte of a powerful deity"},function(){return"a Charlatan who preyed upon the confidence of the gullible"},function(){return"a hardened Criminal"},function(){return"a popular Entertainer"},function(){return"attached to the court of a royal house (Courtier)"},function(){return"a watchman in a large city"},function(){return"a finder of… ‘lost’ persons (Bounty Hunter)"},function(){return"an agent of a political faction"},function(){return"on a long journey, far from their native land (Far Traveller)"},function(){return"an artisan (or merchant) and member in good standing of a guild"},function(){return"the hero of the people in a small, rural village"},function(){return"a seeker after wisdom, who lived apart from others (Hermit)"},function(){return"the Inheritor of a mysterious object of power"},function(){return"a Mercenary - a veteran of several campaigns"},function(){return"a member of the nobility"},function(){return"a knight who belonged to a brotherhood"},function(){return"a wanderer who shunned civilization (Outlander)"},function(){return"a scholar of esoteric subjects (Sage)"},function(){return"a Sailor - or a pirate, depending on how one defines one’s terms"},function(){return"a professional Soldier, in the army of a "+p[c(p.length-1)]},function(){return"a street-dwelling Urchin, who struggled to survive urban life"}];var m=["a spoiled young aristocrat","a religious figure","a wealthy merchant","a scholar weighed down with terrible knowledge","someone with a mysterious object of power","someone wrongfully accused of a crime"];var w=["wrongfully convicted of another's crime","having violated a serious taboo of their home culture","put in chains for outstanding debts","restrained for the safety of others","unrepentant of their crimes","sold into bondage","full of regrets for a crime of passion","whose beliefs angered the rulers of a kingdom or nation"];var v=["steal a mysterious object of power","assassinate someone on board","sabotage the ship","rescue a prisoner on board","conduct surveillance on the ship and crew","take control of the ship for their masters"];var y=[function(){return"a passenger, "+g[c(g.length-1)]},function(){return"a member of the crew. "+d[c(d.length-1)]()},function(){return"a stowaway, fleeing the agents of "+p[c(p.length-1)]},function(){return"someone's protector, defending "+m[c(m.length-1)]+" against the agents of "+p[c(p.length-1)]},function(){return"a prisoner,"+w[c(w.length-1)]},function(){return"an agent of  "+p[c(p.length-1)]+", on a mission to  "+v[c(v.length-1)]}];var x=".app-characters{padding:10px}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;-webkit-transition:all .15s ease;transition:all .15s ease;cursor:pointer}button:hover{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);box-shadow:0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);-webkit-transform:translateY(1px);transform:translateY(1px)}";var k=i.elfType,T=i.gnomeType,A=i.dwarfType,C=i.hobbitType;var M=r("app_characters",function(){function r(r){var t=this;e(this,r);this.charArray=[];this.buildAasimar=function(){return l[c(l.length-1)]};this.buildExotic=function(){var r=c(s.length);if(r===s.length){return t.buildAasimar()}if(s[r]==="genasi"){return h[c(h.length-1)]+" "+s[r]}return s[r]};this.comboMap={elf:function(){return k[c(k.length-1)]+" elf"},gnome:function(){return T[c(T.length-1)]+" gnome"},dwarf:function(){return A[c(A.length-1)]+" dwarf"},halfling:function(){return C[c(C.length-1)]+" halfling"},dragonborn:function(){return u[c(u.length-1)]+" dragonborn"}};this.buildRace=function(){var r=c(a.length);if(r===a.length){return t.buildExotic()}var e=Object.keys(t.comboMap);if(e.includes(a[r])){return t.comboMap[a[r]]()}return a[r]};this.buildRole=function(){return y[c(y.length-1)]()};this.buildCharacter=function(){return"This person is a "+n[c(n.length-1)]+" "+t.buildRace()+" "+o[c(o.length-1)]+".\n    In their previous life, they were "+b[c(b.length-1)]()+".\n    They came to the ship as "+t.buildRole()};this.addChar=function(){return t.charArray=__spreadArrays([t.buildCharacter()],t.charArray)}}r.prototype.render=function(){var r=this;return t("div",{class:"app-characters"},t("p",null,"Welcome to Characters."),t("button",{onClick:function(){return r.addChar()}},"Add Character"),this.charArray.map((function(r){return t("p",null,r)})))};return r}());M.style=x}}}));