/* ============================
BG1 COCKPIT — CLEANED JS
============================ */

const cockpit = {
    dynamicRectangle: document.getElementById('dynamicRectangle'),

    init() {
        this.bindRibbonClicks();
        this.bindSubRibbonClicks();
    },

    /* MAIN RIBBON */
    bindRibbonClicks() {
        document.querySelectorAll('.cockpit-ribbon-item').forEach(item => {
            item.addEventListener('click', () => {
                const content = item.dataset.content;
                this.updateDynamicRectangle(content);
                this.setActive(item, '.cockpit-ribbon-item');
            });
        });
    },

    /* SUB-RIBBON */
    bindSubRibbonClicks() {
        document.querySelectorAll('.cockpit-sub-ribbon-item').forEach(item => {
            item.addEventListener('click', () => {
                const content = item.dataset.subcontent;
                this.updateDynamicRectangle(content);
                this.setActive(item, '.cockpit-sub-ribbon-item');
            });
        });
    },

    /* UPDATE CONTENT */
    updateDynamicRectangle(content) {
        this.dynamicRectangle.innerText = content;
    },

    /* ACTIVE STATE HANDLER */
    setActive(activeItem, selector) {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }
};

cockpit.init();
