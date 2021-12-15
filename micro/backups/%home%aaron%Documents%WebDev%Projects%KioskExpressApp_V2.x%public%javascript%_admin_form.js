import { Modal } from './_modal.js';

export class AdminForm {
    constructor(_target, _options={}) {
        this.target = _target;
        this.cancelBtn = document.querySelector(`button.cancel`);

        this.cancelBtn.addEventListener('click', evt => {
            evt.preventDefault();
        });
    }

    static make(html) {
        const formEl = document.createElement('form');
        formEl.id = 'magic-form';

        for (let i of html.inputs) {
            const div = document.createElement('div');

            const input = document.createElement('input');
            input.type = i.type;

            const label = document.createElement('label');
            label.innerText = i.name;

            div.appendChild(label).appendChild(input);
            formEl.appendChild(div);
        }

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel');
        cancelBtn.innerText = 'Cancel';

        formEl.appendChild(cancelBtn);

        document.querySelector('.modal').appendChild(formEl);
    }

    static destroy(instance) {
        document.querySelector('.modal').children[0].remove();
        // window[instance] = null;

        delete window[instance];
    }
}
