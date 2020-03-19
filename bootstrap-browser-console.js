function loadStyles(href, location) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    location = location || document.head;
    location.appendChild(link);
    return link;
}

function loadScript(url, onLoad, location) {
    return new Promise((s, f) => {
        var script = document.createElement('script');
        script.src = url;
        script.onload = function () {
            if (onLoad) {
                onLoad.apply(this);
            }
            s();
        };
        location = location || document.head;
        location.appendChild(script);
    });
}

// load styles
loadStyles('https://cdn.jsdelivr.net/npm/guidechimp@1/dist/guidechimp.min.css');
// load GuideChimp script and run guide
loadScript('https://cdn.jsdelivr.net/npm/guidechimp@1/dist/guidechimp.min.js');
