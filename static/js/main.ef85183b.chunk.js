(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(78)},38:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),r=n(4),o=n(5),i=n(6);n(38);const l={version:1,player1Name:"Player 1",player2Name:"Player 2",games:[]},c=e=>(window.localStorage.setItem("reduxState",JSON.stringify(e)),Promise.resolve());n(40);const m=e=>a.createElement("header",{className:"c-app-header"},a.createElement("h1",null,"Gin Scorer"));var u=n(1);const p=e=>{e.stopPropagation(),e.preventDefault()},h=e=>{e.current&&e.current.focus()},d=e=>()=>e.current&&e.current.contains(document.activeElement)||!1;var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class f extends a.Component{constructor(){super(...arguments),this.ref=a.createRef(),this.focus=(()=>h(this.ref)),this.handleClick=(e=>{!e.button&&this.props.onClick&&(p(e),this.props.onClick())})}render(){const e=this.props,{className:t,disabled:n,onClick:s,children:r}=e,o=b(e,["className","disabled","onClick","children"]);return a.createElement("button",Object.assign({},o,{ref:this.ref,className:u("c-button",t),disabled:n,onClick:this.handleClick}),r)}}const g={UndoGame:()=>({type:"UndoGame"}),RenamePlayers:e=>Object.assign({},e,{type:"RenamePlayers"}),FinishGame:e=>({type:"FinishGame",result:e}),StartNewMatch:()=>({type:"StartNewMatch"})};var y=n(9),w=n(23);n(48);const v=125;class O extends a.Component{constructor(){super(...arguments),this.titleButton=a.createRef(),this.handleBackdropClick=(e=>{!e.button&&this.props.onDismiss&&this.props.onDismiss()}),this.handleKeyDown=(e=>{const{onDismiss:t}=this.props;t&&e.key===w.Key.Escape&&(p(e),t())}),this.handleExit=(()=>{h(this.titleButton)})}render(){const{props:e}=this;return Object(s.createPortal)(a.createElement(a.Fragment,null,a.createElement(y.CSSTransition,{in:e.open,timeout:v,classNames:"c-drawer__backdrop",appear:!0,mountOnEnter:!0,unmountOnExit:!0},a.createElement("div",{onClick:this.handleBackdropClick,className:"c-drawer__backdrop"})),a.createElement(y.CSSTransition,{in:e.open,classNames:"c-drawer",timeout:v,onExit:this.handleExit,onEntered:e.onEntered,appear:!0},a.createElement("div",{className:u("c-drawer",{"c-drawer--has-title":Boolean(e.title)&&!e.hideTitle}),onKeyDown:this.handleKeyDown,role:"dialog"},e.title&&a.createElement(f,{ref:this.titleButton,className:"c-drawer__title",onClick:e.onTitleClick},a.createElement("span",{className:"c-drawer__title__text"},e.title)),a.createElement(y.Transition,{in:e.open,timeout:v,appear:!0,mountOnEnter:!0,unmountOnExit:!0},e.children)))),document.body)}}const N=()=>a.createElement("div",{className:"c-drawer-title-placeholder"}),E={open:!1};class S extends a.Component{constructor(e){super(e),this.openDrawer=(()=>{this.setState({open:!0})}),this.closeDrawer=(()=>{this.setState({open:!1})}),this.state=E}render(){const{activator:e,children:t}=this.props;return a.createElement(a.Fragment,null,e({openDrawer:this.openDrawer}),a.createElement(O,{open:this.state.open,onDismiss:this.closeDrawer},t))}}class _ extends a.PureComponent{constructor(){super(...arguments),this.handleSubmit=(e=>{p(e),this.props.disableSubmit||this.props.onSubmit()})}render(){const{props:e}=this;return a.createElement("form",{className:e.className,onSubmit:this.handleSubmit},e.children,e.submitLabel&&a.createElement(f,{disabled:e.disableSubmit,type:"submit"},e.submitLabel))}}const C=e=>(t,n)=>{const{value:a,onChange:s,disabled:r,name:o}=e.props;r||s&&s(Object.assign({},a,{[n]:t}),o)};n(50);var j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class x extends a.Component{constructor(){super(...arguments),this.root=a.createRef(),this.hasFocus=d(this.root),this.focus=(()=>h(this.root)),this.handleChange=(e=>{this.props.onChange(e.target.value,this.props.name)})}render(){const e=this.props,{label:t,className:n}=e,s=j(e,["label","className"]);return a.createElement("label",{className:u("c-input",n)},t&&a.createElement("div",{className:"c-input-label"},t),a.createElement("input",Object.assign({},s,{ref:this.root,onChange:this.handleChange})))}}n(52);class k extends a.Component{constructor(){super(...arguments),this.handleChange=C(this),this.focusTarget=a.createRef(),this.focus=(()=>h(this.focusTarget))}render(){const{value:e,disabled:t}=this.props;return a.createElement("div",{className:"c-players-input"},a.createElement(x,{ref:this.focusTarget,label:"Player 1",name:"player1Name",value:e.player1Name,disabled:t,onChange:this.handleChange}),a.createElement(x,{label:"Player 2",name:"player2Name",value:e.player2Name,disabled:t,onChange:this.handleChange}))}}class P extends a.Component{constructor(e){super(e),this.input=a.createRef(),this.button=a.createRef(),this.handleEditButtonClick=(()=>{this.setState({isRenaming:!0})}),this.handleDrawerEntered=(()=>h(this.input)),this.handleChange=(e=>{this.setState({value:e})}),this.handleSubmit=(()=>{this.state.value&&(this.props.onPlayersSubmit(this.state.value),this.stopRenaming())}),this.stopRenaming=(()=>{this.setState({isRenaming:!1,value:void 0}),h(this.button)}),this.state={isRenaming:!1}}render(){return a.createElement(a.Fragment,null,a.createElement(f,{ref:this.button,onClick:this.handleEditButtonClick},"Rename Players"),a.createElement(O,{open:this.state.isRenaming,onDismiss:this.stopRenaming,onEntered:this.handleDrawerEntered},a.createElement(_,{onSubmit:this.handleSubmit,submitLabel:"Update"},a.createElement(k,{ref:this.input,value:this.state.value||this.props.value,onChange:this.handleChange}))))}}const T=({player1Name:e,player2Name:t})=>({player1Name:e,player2Name:t}),R=({games:e})=>Boolean(e.length),G=e=>Object(i.c)(e,i.a.run(c,{args:[e]})),F={onStartNewMatch:g.StartNewMatch,onRenamePlayers:g.RenamePlayers,onUndoGame:g.UndoGame},D=Object(r.b)(e=>({playerNames:T(e),canUndo:R(e)}),F)(e=>a.createElement("div",{className:"c-command-bar"},a.createElement(f,{onClick:e.onUndoGame,disabled:!e.canUndo},"Undo Last Game"),a.createElement(f,{onClick:e.onStartNewMatch},"New Match"),a.createElement(P,{value:e.playerNames,onPlayersSubmit:e.onRenamePlayers})));var M=n(24),B=n(7),U=n.n(B),W=n(25);const L=e=>{const[t,n]=X(e),[a,s]=X(e,1,[n]),[r]=X(e,2,[n,s]);return[t,a,r]},z=e=>Boolean(e.finalResult),X=(e,t=0,n=[])=>{const a={[$.One]:-1*t,[$.Two]:-1*t},s={[$.One]:0,[$.Two]:0},r=[],o=[];n.reverse();let i=n.pop();for(const[l,c]of e.entries()){if(console.info("set",t,"game",l,i,a),"number"===typeof i&&l>=i+1&&(a[$.One]=Math.max(-1*n.length,a[$.One]),a[$.Two]=Math.max(-1*n.length,a[$.Two]),i=n.pop()),a[c.winner]+=1,a[c.winner]<=0)continue;s[c.winner]+=c.points;const e=s[c.winner];if(r.push(Object.assign({},c,{runningTotal:e})),e>=100){o.push({player:c.winner,points:100,label:"Going out"}),V.forEach(e=>{a[e]>0&&o.push({player:e,points:10*a[e],label:"Wins"})}),V.forEach(e=>{const t=r.filter(J(e)).reduce((e,t)=>e+I(t.gin),0);t&&o.push({player:e,points:t,label:"Gins"})}),a[$.Two]<=0&&o.push({player:$.One,points:e+o.filter(e=>e.player===$.One).reduce((e,{points:t})=>e+t,0),label:"Blitz"}),a[$.One]<=0&&o.push({player:$.Two,points:e+o.filter(e=>e.player===$.Two).reduce((e,{points:t})=>e+t,0),label:"Blitz"}),s[$.One]+=o.filter(e=>e.player===$.One).reduce((e,{points:t})=>e+t,0),s[$.Two]+=o.filter(e=>e.player===$.Two).reduce((e,{points:t})=>e+t,0);const t={winner:A(s),points:Math.abs(s[$.One]-s[$.Two])};return[{bonuses:o,finalResult:t,games:r},l]}}return[{bonuses:o,currentScores:s,games:r},void 0]},A=e=>e[$.One]>e[$.Two]?$.One:$.Two,I=e=>{switch(e){case Q.None:return 0;case Q.Normal:return 25;case Q.Super:return 50}},J=e=>t=>t.winner===e,K=(e,t)=>{const n={[$.One]:0,[$.Two]:0};e.forEach(e=>n[e.finalResult.winner]+=e.finalResult.points);const a=A(n),s=t.every(J(a));return{winner:a,isHollywood:s,points:s?2*n[a]:n[a]-n[H(a)]}};var $;!function(e){e[e.One=1]="One",e[e.Two=2]="Two"}($||($={}));const V=[$.One,$.Two],Y=(e,t)=>t===$.One?e.player1Name:e.player2Name,H=e=>e===$.One?$.Two:$.One;var Q;!function(e){e.None="none",e.Normal="normal",e.Super="super"}(Q||(Q={}));const q=e=>"object"===typeof e&&"number"===typeof e.points&&"string"===typeof e.gin&&null!==e.winner&&void 0!==e.winner,Z=()=>({[$.One]:0,[$.Two]:0}),ee=e=>{const t=te(e);return{wins:t,meanWinSize:ne(e,t),maxStreak:ae(e),biggestWin:se(e)}},te=e=>e.reduce((e,t)=>(e[t.winner]+=1,e),Z()),ne=(e,t)=>{const n=e.reduce((e,t)=>(e[t.winner]+=t.points,e),Z());return t[$.One]&&(n[$.One]/=t[$.One]),t[$.Two]&&(n[$.Two]/=t[$.Two]),n},ae=e=>{const t=Z(),n=Z();for(const a of e)t[a.winner]+=1,t[H(a.winner)]=0,t[a.winner]>n[a.winner]&&(n[a.winner]=t[a.winner]);return n},se=e=>e.reduce((e,t)=>(e[t.winner]=Math.max(e[t.winner],t.points),e),Z());var re=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class oe extends a.Component{constructor(){super(...arguments),this.handleChange=(e=>{const{value:t}=e.target,n=""===t?null:Number.parseInt(t,10);this.props.onChange&&this.props.onChange(n,this.props.name)})}render(){const e=this.props,{value:t,className:n}=e,s=re(e,["value","className"]);return a.createElement("input",Object.assign({},s,{className:u("c-number-input",n),type:"number",value:null!==t?t.toString():"",onChange:this.handleChange}))}}n(54);var ie=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class le extends a.Component{constructor(){super(...arguments),this.root=a.createRef(),this.hasFocus=d(this.root),this.focus=(()=>h(this.root)),this.handleFocusChange=(()=>this.forceUpdate()),this.handleChange=(()=>{this.props.onChange&&this.props.onChange(this.props.value,this.props.name)})}render(){const e=this.props,{className:t,children:n,value:s,label:r}=e,o=ie(e,["className","children","value","label"]);return a.createElement("label",{ref:this.root,className:u("c-radio",t,{"c-radio--checked":o.selected,"c-radio--disabled":o.disabled,"c-radio--nonative":o.hideNative,"c-radio--has-focus":this.hasFocus()})},a.createElement("input",{name:o.name,disabled:o.disabled,checked:o.selected,onChange:this.handleChange,value:s.toString(),type:"radio",onFocus:this.handleFocusChange,onBlur:this.handleFocusChange}),r)}}n(56);var ce=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class me extends a.Component{constructor(){super(...arguments),this.first=a.createRef(),this.focus=(()=>h(this.first))}render(){const e=this.props,{className:t,name:n}=e,s=ce(e,["className","name"]);return a.createElement("div",{className:u("c-radio-group",t,{"c-radio-group--horizontal":s.horizontal,"c-radio-group--hide-native":s.hideNative})},s.label&&a.createElement("span",{className:"c-radio-group__label"},s.label),s.choices.map((e,t)=>a.createElement(le,Object.assign({},e,{key:e.value,ref:0===t?this.first:void 0,name:n,disabled:s.disabled,hideNative:s.hideNative,selected:s.value===e.value,onChange:s.onChange}))))}}n(58);var ue=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};const pe={DEFAULT:{winner:$.One,points:null,gin:Q.None}};class he extends a.Component{constructor(){super(...arguments),this.focusTarget=a.createRef(),this.handleChange=C(this),this.focus=(()=>h(this.focusTarget))}render(){const e=this.props,{value:t,disabled:n}=e,s=ue(e,["value","disabled"]);return a.createElement("div",{className:"c-game-input"},a.createElement(me,{name:"winner",className:"c-game-input__players",choices:[{value:$.One,label:s.player1Name},{value:$.Two,label:s.player2Name}],value:t.winner,disabled:n,label:"Winner",onChange:this.handleChange,hideNative:!0,horizontal:!0,ref:this.focusTarget}),a.createElement("div",{className:"c-game-input__points"},a.createElement(oe,{name:"points",value:t.points,min:1,disabled:n,onChange:this.handleChange}),"\xa0 points"),a.createElement(me,{name:"gin",value:t.gin,className:"c-game-input__gin",choices:[{value:Q.None,label:"No Gin"},{value:Q.Normal,label:"Gin"},{value:Q.Super,label:"Super Gin"}],disabled:n,onChange:this.handleChange,horizontal:!0,hideNative:!0}))}}n(60);var de=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};const be=e=>{var{value:t}=e,n=de(e,["value"]);return a.createElement("div",{className:u("c-scorecolumn",n.className)},a.createElement("div",{className:"c-scorecolumn__header"},a.createElement("div",{className:"c-scorecolumn__player"},n.player1Name),a.createElement("div",{className:"c-scorecolumn__player"},n.player2Name)),t.games.map((e,t)=>a.createElement(fe,Object.assign({},e,{key:`game-${t}`}))),t.bonuses.map((e,t)=>a.createElement(ge,Object.assign({key:`bonus-${t}`},e,{isFirst:0===t}))))},fe=({winner:e,gin:t,runningTotal:n})=>{const s=a.createElement("div",{className:"c-scorerow__winner","data-gin":t,key:"winner"},n,t===Q.Normal&&"*",t===Q.Super&&"**"),r=a.createElement("div",{className:"c-scorerow__loser",key:"loser"});return a.createElement("div",{className:"c-scorerow"},e===$.One?[s,r]:[r,s])},ge=e=>{const t=a.createElement("div",{className:"c-bonusrow__recipient",key:"winner"},a.createElement("span",{className:"c-bonusrow__points"},e.points),a.createElement("span",{className:"c-bonusrow__label"},e.label)),n=a.createElement("div",{className:"c-bonusrow__loser",key:"loser"});return a.createElement("div",{className:u("c-bonusrow",{"c-bonusrow--first":e.isFirst})},e.player===$.One?[t,n]:[n,t])};n(62);const ye=({className:e,children:t,overflowX:n="auto",overflowY:s="auto"})=>a.createElement("div",{className:u("c-scroll-viewer",e),style:{overflowX:n,overflowY:s}},t);n(64),n(66);var we=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};const ve=e=>{const{value:t}=e,n=we(e,["value"]);return z(t)?a.createElement(Oe,Object.assign({},n,{finished:!0}),a.createElement("span",{className:"c-set-summary--final__winner"},Y(e,t.finalResult.winner)," won"),a.createElement("span",{className:"c-set-summary--final__points"},t.finalResult.points)):a.createElement(Oe,Object.assign({},n),a.createElement("div",{className:"c-set-summary__player"},a.createElement("span",{className:"c-set-summary__player-name"},e.player1Name),a.createElement("span",{className:"c-set-summary__points"},t.currentScores[$.One])),a.createElement("div",{className:"c-set-summary__player"},a.createElement("span",{className:"c-set-summary__player-name"},e.player2Name),a.createElement("span",{className:"c-set-summary__points"},t.currentScores[$.Two])))},Oe=({className:e,onClick:t,finished:n,children:s})=>a.createElement("div",{className:u("c-set-summary",n?"c-set-summary--final":"c-set-summary--in-progress",e,{"c-set-summary--clickable":Boolean(t)}),onClick:t},s);class Ne extends a.PureComponent{render(){return a.createElement(S,{activator:({openDrawer:e})=>a.createElement(ve,Object.assign({},this.props,{onClick:e,className:"c-set-view"}))},a.createElement(be,Object.assign({},this.props,{className:"c-set-view__score-column"})))}}n(68);var Ee=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};class Se extends a.Component{render(){const e=this.props,{player1Name:t,player2Name:n,value:s}=e,r=Ee(e,["player1Name","player2Name","value"]),o={player1Name:t,player2Name:n};return a.createElement("div",{className:u("c-stats-viewer",r.className)},a.createElement(_e,Object.assign({title:"Wins"},o,s.wins)),a.createElement(_e,Object.assign({title:"Max Streak"},o,s.maxStreak)),a.createElement(_e,Object.assign({title:"Mean PPG"},o,s.meanWinSize)),a.createElement(_e,Object.assign({title:"Biggest Win"},o,s.biggestWin)))}}const _e=e=>a.createElement("div",{className:"c-share-chart"},a.createElement("h3",null,e.title),Y(e,$.One),": ",Ce(e[$.One]),a.createElement("br",null),Y(e,$.Two),": ",Ce(e[$.Two]),a.createElement("br",null)),Ce=e=>e%1===0?e.toString():e.toFixed(2);n(70);const je=e=>a.createElement("div",{className:u("c-match-result-viewer",u)},a.createElement("div",{className:"c-match-result-viewer__winner"},e.winner===$.One?e.player1Name:e.player2Name," ","wins!"),a.createElement("div",{className:"c-match-result-viewer__points"},a.createElement("span",{className:"c-match-result-viewer__points-value"},e.points),"\xa0",a.createElement("span",{className:"c-match-result-viewer__points-label"},"points")),a.createElement("div",{className:"c-match-result-viewer__actions"},e.onNewMatch&&a.createElement(f,{onClick:e.onNewMatch},"Play again")));n(72);var xe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&(n[a[s]]=e[a[s]])}return n};const ke={drawerOpen:!1};class Pe extends a.Component{constructor(e){super(e),this.input=a.createRef(),this.focus=(()=>h(this.input)),this.handleChange=(e=>{this.setState(e)}),this.handleSubmit=(()=>{q(this.state)&&(this.props.onSubmitGame&&this.props.onSubmitGame(this.state),this.setState(pe.DEFAULT),this.focus())}),this.state=pe.DEFAULT}render(){return a.createElement(_,{className:"c-gameform",onSubmit:this.handleSubmit,disableSubmit:this.props.disabled||!q(this.state),submitLabel:"Submit"},a.createElement(he,{ref:this.input,player1Name:this.props.player1Name,player2Name:this.props.player2Name,disabled:this.props.disabled,value:this.state,onChange:this.handleChange}))}}const Te=Object(M.createSelector)(e=>e.games,T,(e,t)=>(e=>t=>{const n=L(t),a=n.every(z)?K(n,t):void 0;return Object.assign({},e,{games:t,sets:n,finalResult:a})})(t)(e)),Re={onSubmitGame:g.FinishGame,onNewMatch:g.StartNewMatch},Ge=Object(r.b)(e=>({value:Te(e)}),Re)(class extends a.Component{constructor(e){super(e),this.gameForm=a.createRef(),this.computeStats=Object(W.a)(ee),this.handleGameSubmit=(e=>{this.props.onSubmitGame&&this.props.onSubmitGame(e),this.closeGameForm()}),this.closeGameForm=(()=>{this.setState({drawerOpen:!1})}),this.handleGameFormOpen=(()=>{this.setState({drawerOpen:!0}),h(this.gameForm)}),this.state=ke}render(){const e=this.props,t=e.value,{player1Name:n,player2Name:s}=t,r=xe(t,["player1Name","player2Name"]),{readOnly:o}=e,i=xe(e,["value","readOnly"]),l={player1Name:n,player2Name:s},c=a.createElement(Pe,Object.assign({ref:this.gameForm},l,{onSubmitGame:this.handleGameSubmit}));return a.createElement("div",{className:u("c-match-viewer",{"c-match-viewer--finished":Boolean(r.finalResult)})},a.createElement(U.a,{minWidth:600},a.createElement(ye,{className:"c-match-viewer__main"},a.createElement("div",{className:"c-match-viewer__sets"},r.sets.map((e,t)=>a.createElement(be,Object.assign({key:t},l,{value:e})))),a.createElement(Se,Object.assign({value:this.computeStats(r.games)},l)))),a.createElement(U.a,{maxWidth:600},a.createElement(ye,{overflowX:"hidden"},r.sets.map((e,t)=>a.createElement(Ne,Object.assign({key:t,value:e},l))),a.createElement(Se,Object.assign({value:this.computeStats(r.games)},l)))),r.finalResult&&a.createElement(je,Object.assign({},l,r.finalResult,{onNewMatch:i.onNewMatch})),!o&&a.createElement(a.Fragment,null,a.createElement(U.a,{maxWidth:1e3},a.createElement(N,null),a.createElement(O,{open:this.state.drawerOpen,title:"Add game",onTitleClick:this.handleGameFormOpen,onDismiss:this.closeGameForm,hideTitle:!!r.finalResult},c)),a.createElement(U.a,{minWidth:1e3},a.createElement("div",{className:"c-match-viewer__add-game"},a.createElement("h1",null,"Add game"),c))))}});n(74);const Fe=e=>a.createElement("div",{className:"l-playing"},a.createElement(m,null),a.createElement(D,null),a.createElement(Ge,null)),De=(Object(o.c)(Object(o.a)(()=>window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Object(i.b)()),Object(o.d)((e,t)=>{switch(t.type){case"RenamePlayers":{const{player1Name:n,player2Name:a}=t;return G(Object.assign({},e,{player1Name:n,player2Name:a}))}case"FinishGame":return G(Object.assign({},e,{games:[...e.games,t.result]}));case"UndoGame":return G(Object.assign({},e,{games:e.games.slice(0,e.games.length-1)}));case"StartNewMatch":return G(Object.assign({},e,{games:[]}));default:return e}},(()=>{const e=window.localStorage.getItem("reduxState");if(e)try{const n=JSON.parse(e);if(!(e=>"object"===typeof e&&"string"===typeof e.player1Name&&"string"===typeof e.player2Name)(n))return;if(1!==n.version)return;return n}catch(t){return void console.error("Could not read state as JSON",t)}})()||l,Object(i.b)()));var Me=class extends a.Component{render(){return a.createElement(r.a,{store:De},a.createElement(Fe,null))}};n(76);const Be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t&&(t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}s.render(a.createElement(Me,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ginscorer",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/ginscorer/service-worker.js";Be?(function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ue(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ue(e)})}}()}},[[26,2,1]]]);
//# sourceMappingURL=main.ef85183b.chunk.js.map