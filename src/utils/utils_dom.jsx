// import React from 'react';

export function activeLink(selector, link) {
    const domSelector = document.querySelectorAll(selector);
    if (domSelector.length > 0) {
        domSelector.forEach((li) => {
            if (li.id === link) {
                li.classList.add("active");
            } else {
                li.classList.remove("active")
            }
        });
    } else {
        setTimeout(activeLink, 10, selector, link);
    }
};