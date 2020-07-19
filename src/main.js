import { CompositeDisposable } from "atom";
import {setupTypeScript} from "./typescript.js";

let subscriptions;

/**
 * called by Atom when activating an extension
 * @param  {any} state the current state of atom
 */
export function activate(state) {
  // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  subscriptions = new CompositeDisposable();

  package_deps().then(() => {
    setupTypeScript()
  });
}

/**
 * install Atom package dependencies if not already loaded
 */
async function package_deps() {
  // Add entries from package-deps here manually
  // (to prevent loading atom-package-deps and package.json when the deps are already loaded)
  const deps =  [
    "atom-ide-datatip",
    "atom-ide-signature-help",
    "atom-ide-hyperclick",
    "atom-ide-definitions",
    "atom-ide-outline",
    "linter",
    "intentions",
    "atom-typescript",
    "linter-eslint",
  ];
  if (deps.some((p) => !atom.packages.isPackageLoaded(p))) {
    await import("atom-package-deps").then((atom_package_deps) => {
      // install if not installed
      atom_package_deps.install("atom-ide-javascript-js", false);
      // enable if disabled
      deps.filter((p) => !atom.packages.isPackageLoaded(p)).forEach(p => {
        atom.notifications.addInfo(`Enabling package ${p} that is needed for atom-ide-javascript`)
        atom.packages.enablePackage(p)
      })
    });
  }
}

/**
 * called by Atom when deactivating an extension
 */
export function deactivate() {
  if (subscriptions) {
    subscriptions.dispose();
  }
  subscriptions = null;
}

/**
 * called by IDE extensions to retrieve the service for registration
 * @return the current instance
 */
export function provideYourService() {}

export const config = {
  doSomething: {
    title: "title",
    description: "config description",
    type: "boolean", // 'number', 'string'
    default: true,
  },
};
