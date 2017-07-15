# Contributing to anodemodule

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating, you are expected to uphold this code.

[code-of-conduct]: http://todogroup.org/opencodeofconduct/#anodemodule/opensource@github.com

The following is a set of guidelines for contributing to anodemodule.
These are just guidelines, not rules, use your best judgment and feel free to
propose changes to this document in a pull request.

## Submit an issue, feedback or a feature request - Any of these issue topics are welcome :O)

-   You can create an issue [here](https://github.com/anodemoduleauthor/anodemodule/issues/new),
    but before doing that please read the notes below and include as many details as
    possible with your report. If you can, please include:
    -   The version of anodemodule you are using
    -   The operating system you are using
    -   If applicable, what you were doing when the issue arose and what you
        expected to happen
-   Other things that will help resolve your issue:
    -   Screenshots and animated GIFs
    -   Error output that appears in your terminal, dev tools or as an alert
    -   Perform a [cursory search](https://github.com/anodemoduleauthor/anodemodule/issues?utf8=✓&q=is%3Aissue+)
        to see if a similar issue has already been submitted

## Submitting Pull Requests

-   Include screenshots and animated GIFs in your pull request whenever possible.
-   Follow the [coding style defined in .eslintrc](/.eslintrc).
-   Write documentation in [Markdown](https://daringfireball.net/projects/markdown).


-   Fork it!
-   Clone your fork
-   Install development dependencies
    -   `cd anodemodule`
    -   `npm install`
-   Create your feature branch: `git checkout -b my-new-feature`
-   Add unit tests
-   Add your new code
-   Add a description header to your new functions
-   Add a benchmark run to /scripts/benchmark.js 
-   Run the tests: `npm test`
-   Build the benchmark markdown: `npm run benchmark`
-   Build the docs: `npm run docs`
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request :dog:
