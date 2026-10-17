/* SKB // TOOLS — compact tool switcher with in-window unsaved-changes confirm. */
(function () {
    'use strict';

    var PAGE = document.documentElement.getAttribute('data-tool') || '';
    var IS_TOOL = (PAGE === 'ascii' || PAGE === 'modulation');
    var TARGETS = {
        ascii: { label: 'ASCII', file: './ascii.html' },
        modulation: { label: 'MODULATION', file: './modulation.html' },
        hub: { label: 'HUB', file: './hub.html' }
    };

    /* Standard beforeunload guard — armed on first real user interaction with the tool.
       Cleared again when the user confirms a switch via the in-window modal, so the
       confirmed navigation itself is not blocked. */
    if (IS_TOOL) {
        var armed = false;
        function allowNav() { return window.__swxAllowNavigation === true; }
        function armBeforeUnload() {
            if (armed) return;
            armed = true;
            window.addEventListener('beforeunload', function (e) {
                if (allowNav()) return;
                e.preventDefault();
                e.returnValue = '';
            });
        }
        ['pointerdown', 'keydown', 'input', 'change'].forEach(function (evt) {
            document.addEventListener(evt, armBeforeUnload, { once: true, capture: true });
        });
    }

    var switcher = document.createElement('div');
    switcher.className = 'swx-switcher';

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'swx-switcher-toggle';
    toggle.textContent = (TARGETS[PAGE] ? TARGETS[PAGE].label : '?') + ' [ \u25BE ]';

    var menu = document.createElement('div');
    menu.className = 'swx-switcher-menu';

    function closeMenu() { switcher.classList.remove('open'); }

    function go(target) {
        if (target === PAGE) { closeMenu(); return; }
        var file = TARGETS[target].file;
        /* Switching away from an active tool always confirms (subtle state is easy to miss). */
        if (IS_TOOL) { confirmSwitch(file); return; }
        location.assign(file);
    }

    var backdrop = document.createElement('div');
    backdrop.className = 'swx-backdrop';
    backdrop.innerHTML =
        '<div class="swx-modal" role="dialog" aria-modal="true">' +
        '<div class="swx-modal-title">[ UNSAVED CHANGES WILL BE LOST ]</div>' +
        '<div class="swx-modal-row">' +
        '<button type="button" class="swx-modal-btn swx-cancel">CANCEL</button>' +
        '<button type="button" class="swx-modal-btn swx-danger">SWITCH ANYWAY</button>' +
        '</div></div>';

    function confirmSwitch(file) {
        document.body.appendChild(backdrop);
        backdrop.classList.add('open');
        backdrop.querySelector('.swx-cancel').onclick = function () {
            backdrop.classList.remove('open');
            backdrop.remove();
        };
        backdrop.querySelector('.swx-danger').onclick = function () {
            window.__swxAllowNavigation = true; /* disarms the beforeunload guard for this confirmed switch */
            location.assign(file);
        };
        backdrop.onclick = function (e) {
            if (e.target === backdrop) { backdrop.classList.remove('open'); backdrop.remove(); }
        };
    }

    Object.keys(TARGETS).forEach(function (key) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'swx-switcher-item';
        b.textContent = '[ ' + TARGETS[key].label + ' ]';
        if (key === PAGE) { b.disabled = true; b.textContent = TARGETS[key].label + ' // CURRENT'; }
        else { b.addEventListener('click', function () { closeMenu(); go(key); }); }
        menu.appendChild(b);
    });

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        switcher.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
        if (!switcher.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeMenu(); backdrop.classList.remove('open'); backdrop.remove(); }
    });

    switcher.appendChild(toggle);
    switcher.appendChild(menu);
    var mountPoint = document.querySelector('[data-swx-mount]');
    if (mountPoint) {
        switcher.classList.add('swx-inline');
        mountPoint.appendChild(switcher);
    } else {
        document.body.appendChild(switcher);
    }
})();
