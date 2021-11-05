module.exports = class {
    #data = [];

    constructor(arr) {
        if (arr) {
            arr.forEach((value) => this.add(value));
        }
    }

    add(value) {
        if (!this.#data.includes(value)) {
            this.#data.push(value);
        }
        return this;
    }

    clear() {
        this.#data = [];
    }

    delete(value) {
        let found = false;
        this.#data = this.#data.filter((ownValue) => {
            if (ownValue !== value) {
                return true;
            } else {
                found = true;
                return false;
            }
        });
        return found;
    }

    has(value) {
        return this.#data.includes(value);
    }

    get size() {
        return this.#data.length;
    }

    [Symbol.iterator]() {
        const last = {
            done: true,
            value: null,
        };
        if (this.#data.length === 0) {
            return {
                next() {
                    return last;
                },
            };
        }
        return {
            current: 0,
            data: this.#data,
            next() {
                if (this.current === this.data.length) {
                    return last;
                }
                const value = this.data[this.current];
                this.current++;
                return {
                    done: false,
                    value,
                };
            },
        };
    }

    get [Symbol.toStringTag]() {
        return '^_^';
    }

    forEach(callback, context) {
        Array.prototype.forEach.call(this.#data, callback, context);
    }

    values() {
        return this.#data;
    }

    keys() {
        return this.#data;
    }

    entries() {
        return this.#data.map(value => [value, value]);
    }
}