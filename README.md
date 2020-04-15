# run as:

1. Open https://about.gitlab.com/
2. Open browser's console
3. Paste to the console and press &lt;Enter&gt;:
```
fetch('https://kkorotkov.github.io/guidechimp-samples/bootstrap-browser-console.js')
    .then(response => response.text())
    .then(text => eval(text))
    .then(() => {
// Prepare website tour
var tour = [
    {
        element: 'div.col-md-4.challenge-box.complexity.js-all-clickable',
        title: 'Complexity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        position: 'right',
    },
    {
        element: 'div.col-md-4.challenge-box.speed.js-all-clickable',
        title: 'Speed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        position: 'top',
    },
    {
        element: 'div.col-md-4.challenge-box.security.js-all-clickable',
        title: 'Security',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        position: 'left',
    },
];

// Run tour
GuideChimp(tour).start();
})
```
