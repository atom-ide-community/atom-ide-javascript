"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("atom");(e=t)&&"object"==typeof e&&"default"in e&&e.default;let a;exports.activate=function(e){a=new t.CompositeDisposable,async function(){const e=["atom-ide-base","atom-typescript","linter-eslint","autocomplete-paths"];e.some(e=>!atom.packages.isPackageLoaded(e))&&await Promise.resolve().then((function(){return require("./index-27f59b67.js")})).then((function(e){return e.index})).then(t=>{t.install("atom-ide-javascript-js",!1),e.filter(e=>!atom.packages.isPackageLoaded(e)).forEach(e=>{atom.notifications.addInfo(`Enabling package ${e} that is needed for atom-ide-javascript`),atom.packages.enablePackage(e)})})}().then(()=>{atom.config.set("atom-typescript.allowJS",!0),atom.config.set("atom-typescript.checkAllFilesOnSave",!1),atom.commands.dispatch(atom.workspace.getElement(),"typescript:activate")})},exports.config={},exports.deactivate=function(){a&&a.dispose(),a=null},exports.provideYourService=function(){};
//# sourceMappingURL=main.js.map
