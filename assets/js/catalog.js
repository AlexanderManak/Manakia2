'use strict';

var node = document.getElementById("main-menu-toggle"),
    openCloseMenu = function(e) {
        // e.preventDefault();
        document.body.classList.toggle('open-menu');
    }

document.getElementById("main-menu-toggle").addEventListener('click', openCloseMenu)

document.getElementById("main-navigation").addEventListener('click', openCloseMenu);

function getSiblings(elem) {
    var siblings = [];
    var sibling = elem;
    while (sibling.previousSibling) {
        sibling = sibling.previousSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    sibling = elem;
    while (sibling.nextSibling) {
        sibling = sibling.nextSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    return siblings;
}

var setLineModeForShop = function(link, id, enabled) {
    if (!enabled) enabled = false;
    var el = document.getElementById(id);
    if (typeof el != 'undefined') {
        link.classList.add("active");
        var siblings = getSiblings(link);
        for (var i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove("active");
        }
        if (enabled) {
            el.classList.add("line-mode");

        } else {
            el.classList.remove("line-mode");
        }
    }
}