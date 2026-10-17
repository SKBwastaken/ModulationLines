/* SKB // TOOLS — collapsible sidebar categories (click a .card-header to fold its .glass-card). */
(function () {
    'use strict';

    var TOOL = document.documentElement.getAttribute('data-tool') || 'tool';
    var KEY = 'swx-collapsed:' + TOOL;

    function load() {
        try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
    }
    function save(list) {
        try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
    }

    var collapsed = load();

    document.querySelectorAll('.glass-card > .card-header').forEach(function (header) {
        var card = header.parentElement;
        /* Headers with a right-side badge wrap icon + title in an inner div. */
        var titleHost = (header.firstElementChild && header.firstElementChild.tagName === 'DIV')
            ? header.firstElementChild : header;
        var name = titleHost.textContent.replace(/\s+/g, ' ').trim();
        if (!name) return;

        var mark = document.createElement('span');
        mark.className = 'swx-fold-mark';
        titleHost.insertBefore(mark, titleHost.firstChild);

        header.classList.add('swx-foldable');
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');

        function apply(isCollapsed) {
            card.classList.toggle('swx-collapsed', isCollapsed);
            mark.textContent = isCollapsed ? '[+]' : '[-]';
            header.setAttribute('aria-expanded', String(!isCollapsed));
        }

        function toggle() {
            var next = !card.classList.contains('swx-collapsed');
            apply(next);
            collapsed = collapsed.filter(function (n) { return n !== name; });
            if (next) collapsed.push(name);
            save(collapsed);
        }

        apply(collapsed.indexOf(name) !== -1);

        header.addEventListener('click', function (e) {
            if (e.target.closest('button, input, select, a, label')) return;
            toggle();
        });
        header.addEventListener('keydown', function (e) {
            if (e.target !== header) return;
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
    });
})();
