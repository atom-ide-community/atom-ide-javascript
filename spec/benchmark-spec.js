describe("Benchmark", () => {
  // This number doesn't match what timecope gives, but shows the trend
  it("Activation Benchmark", async function () {
    jasmine.attachToDOM(atom.views.getView(atom.workspace));
    atom.packages.triggerDeferredActivationHooks();
    // Activate activation hook
    atom.packages.triggerActivationHook("language-javascript:grammar-used");

    // For benchmark, activate the deps manually before loading the actual package:
    const deps =  [
      "atom-ide-base",
      "atom-typescript",
      "linter-eslint",
    ];
    deps.forEach(async p => await atom.packages.activatePackage(p))


    // Activate the package
    measure("Activation Time", async function activationBenchmark() {
      await atom.packages.activatePackage("atom-ide-javascript");
    });

    expect(atom.packages.isPackageLoaded("atom-ide-javascript")).toBeTruthy();
  });
});
