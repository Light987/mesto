export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(items, prependCondition) {
        prependCondition ? this._container.prepend(this._renderer(items)) : this._container.append(this._renderer(items))
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this.clear();

        this._items.forEach((item) => {
            this.addItem(item);
        });
    }
}