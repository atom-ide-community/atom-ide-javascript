"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("atom");let e;exports.activate=function(a){e=new t.CompositeDisposable,async function(){const t=["atom-ide-base","atom-typescript","linter-eslint","autocomplete-paths","javascript-drag-import"];t.some(t=>!atom.packages.isPackageLoaded(t))&&await Promise.resolve().then((function(){return require("./index-9cdbafb6.js")})).then((function(t){return t.index})).then(e=>{e.install("atom-ide-javascript",!1),t.filter(t=>!atom.packages.isPackageLoaded(t)).forEach(t=>{atom.notifications.addInfo(`Enabling package ${t} that is needed for atom-ide-javascript`),atom.packages.enablePackage(t)})})}().then(()=>{!function(){atom.config.set("atom-typescript.allowJS",!0),atom.config.set("atom-typescript.checkAllFilesOnSave",!1),atom.commands.dispatch(atom.workspace.getElement(),"typescript:activate");const t=Array.from(new Set(atom.config.get("atom-typescript.ignoredDiagnosticCodes").concat(["8002","8003","8004","8006","8008","8010"])));atom.config.set("atom-typescript.ignoredDiagnosticCodes",t);const e=Array.from(new Set(atom.config.get("atom-typescript.jsSyntaxScopes").concat(["source.flow"])));atom.config.set("atom-typescript.jsSyntaxScopes",e)}()}).catch(t=>{atom.notifications.addError("atom-ide-javascript failed in installing its dependencies.")})},exports.deactivate=function(){e&&e.dispose(),e=null};
//# sourceMappingURL=main.js.map
