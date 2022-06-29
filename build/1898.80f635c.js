"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1898],{61772:(e,n,t)=>{t.r(n),t.d(n,{main:()=>a});var A=t(32358),s=t(1005);t(64992);const i=[t.e(7198).then(t.t.bind(t,87198,23)),t.e(1551).then(t.t.bind(t,71551,23)),t.e(8455).then(t.t.bind(t,68455,23))],o=[t.e(5516).then(t.t.bind(t,25516,23)),t.e(1275).then(t.t.bind(t,31275,23)),t.e(210).then(t.t.bind(t,90210,23)),t.e(3513).then(t.t.bind(t,13513,23))];async function r(e,n){try{return(await window._JUPYTERLAB[e].get(n))()}catch(t){throw console.warn(`Failed to create module: package: ${e}; module: ${n}`),t}}async function a(){const e=await Promise.all(o);let n=[t(11948),t(61547),t(88394).default.filter((({id:e})=>["@retrolab/application-extension:session-dialogs"].includes(e))),t(12571).default.filter((({id:e})=>["@jupyterlab/application-extension:commands","@jupyterlab/application-extension:context-menu","@jupyterlab/application-extension:faviconbusy"].includes(e))),t(19902).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:state","@jupyterlab/apputils-extension:themes","@jupyterlab/apputils-extension:themes-palette-menu"].includes(e))),t(58147).default.filter((({id:e})=>["@jupyterlab/codemirror-extension:services","@jupyterlab/codemirror-extension:codemirror"].includes(e))),t(54887).default.filter((({id:e})=>["@jupyterlab/completer-extension:manager","@jupyterlab/completer-extension:consoles"].includes(e))),t(95189),t(26186).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin"].includes(e))),t(75894).default.filter((({id:e})=>["@jupyterlab/filebrowser-extension:factory"].includes(e))),t(97840),t(83490),t(89859),t(51901),t(42555),t(41437),t(44544).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:consoles"].includes(e))),t(29164)];const a=[],l=[],p=[],d=[],u=[],c=[],m=JSON.parse(s.PageConfig.getOption("federated_extensions")),g=new Set;function*f(e){let n;n=e.hasOwnProperty("__esModule")?e.default:e;let t=Array.isArray(n)?n:[n];for(let e of t)s.PageConfig.Extension.isDisabled(e.id)||(yield e)}m.forEach((e=>{e.liteExtension?c.push(r(e.name,e.extension)):(e.extension&&(g.add(e.name),l.push(r(e.name,e.extension))),e.mimeExtension&&(g.add(e.name),p.push(r(e.name,e.mimeExtension))),e.style&&d.push(r(e.name,e.style)))})),(await Promise.all(n)).forEach((e=>{for(let n of f(e))a.push(n)})),(await Promise.allSettled(p)).forEach((n=>{if("fulfilled"===n.status)for(let t of f(n.value))e.push(t);else console.error(n.reason)})),(await Promise.allSettled(l)).forEach((e=>{if("fulfilled"===e.status)for(let n of f(e.value))a.push(n);else console.error(e.reason)})),(await Promise.all(i)).forEach((e=>{for(let n of f(e))u.push(n)})),(await Promise.allSettled(c)).forEach((e=>{if("fulfilled"===e.status)for(let n of f(e.value))u.push(n);else console.error(e.reason)}));const h=new A.JupyterLiteServer({});h.registerPluginModules(u),await h.start();const{serviceManager:E}=h,{SingleWidgetApp:y}=t(28007),b=new y({serviceManager:E,mimeExtensions:e});b.name=s.PageConfig.getOption("appName")||"REPLite",b.registerPluginModules(a),"true"===(s.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=b),await b.start(),await b.restored}},64992:(e,n,t)=>{t.r(n),t(94101),t(94395),t(18934),t(19422),t(72867),t(91532),t(15055),t(56124),t(76838),t(53109),t(48680),t(86304),t(72762),t(87967),t(63897),t(16388),t(37609),t(74958),t(58169);var A=t(1892),s=t.n(A),i=t(95760),o=t.n(i),r=t(38311),a=t.n(r),l=t(58192),p=t.n(l),d=t(38060),u=t.n(d),c=t(54865),m=t.n(c),g=t(12563),f={};f.styleTagTransform=m(),f.setAttributes=p(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),s()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals,t(94453);var h=t(59988),E={};E.styleTagTransform=m(),E.setAttributes=p(),E.insert=a().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=u(),s()(h.Z,E),h.Z&&h.Z.locals&&h.Z.locals;var y=t(76632),b={};b.styleTagTransform=m(),b.setAttributes=p(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=u(),s()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals,t(6205);var C=t(21025),v={};v.styleTagTransform=m(),v.setAttributes=p(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),s()(C.Z,v),C.Z&&C.Z.locals&&C.Z.locals;var w=t(84035),x={};x.styleTagTransform=m(),x.setAttributes=p(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=u(),s()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;var j=t(94298),B={};B.styleTagTransform=m(),B.setAttributes=p(),B.insert=a().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=u(),s()(j.Z,B),j.Z&&j.Z.locals&&j.Z.locals,t(49206)},12563:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const r=o},21025:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#single-widget-panel {\n  height: 100%;\n}\n","",{version:3,sources:["webpack://./../packages/application/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#single-widget-panel {\n  height: 100%;\n}\n"],sourceRoot:""}]);const r=o},59988:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const r=o},76632:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/javascript-kernel-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const r=o},84035:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CodeConsole-promptCell .jp-InputPrompt {\n  margin-right: 10px;\n}\n\n.jp-CodeConsole-input .jp-InputCollapser {\n  display: none;\n}\n\n.jp-InputArea {\n  flex-direction: row;\n}\n\n.jp-InputArea-editor,\n.jp-OutputArea-child .jp-OutputArea-output {\n  margin-left: unset;\n}\n\n.jp-OutputArea-child {\n  flex-direction: row;\n}\n","",{version:3,sources:["webpack://./../packages/repl-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CodeConsole-promptCell .jp-InputPrompt {\n  margin-right: 10px;\n}\n\n.jp-CodeConsole-input .jp-InputCollapser {\n  display: none;\n}\n\n.jp-InputArea {\n  flex-direction: row;\n}\n\n.jp-InputArea-editor,\n.jp-OutputArea-child .jp-OutputArea-output {\n  margin-left: unset;\n}\n\n.jp-OutputArea-child {\n  flex-direction: row;\n}\n"],sourceRoot:""}]);const r=o},94298:(e,n,t)=>{t.d(n,{Z:()=>r});var A=t(20559),s=t.n(A),i=t(93476),o=t.n(i)()(s());o.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const r=o},7413:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="},6196:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII="},65767:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cg fill=%27%235C7080%27%3e%3ccircle cx=%272%27 cy=%278.03%27 r=%272%27/%3e%3ccircle cx=%2714%27 cy=%278.03%27 r=%272%27/%3e%3ccircle cx=%278%27 cy=%278.03%27 r=%272%27/%3e%3c/g%3e%3c/svg%3e"},91116:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill-rule=%27evenodd%27 clip-rule=%27evenodd%27 d=%27M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z%27 fill=%27%235C7080%27/%3e%3c/svg%3e"},83678:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill-rule=%27evenodd%27 clip-rule=%27evenodd%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z%27 fill=%27white%27/%3e%3c/svg%3e"},79080:e=>{e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill-rule=%27evenodd%27 clip-rule=%27evenodd%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z%27 fill=%27white%27/%3e%3c/svg%3e"}}]);
//# sourceMappingURL=1898.80f635c.js.map