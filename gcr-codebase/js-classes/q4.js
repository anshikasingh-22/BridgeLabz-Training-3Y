
"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const area = document.getElementById("formArea");
        const form = document.createElement("form");

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = true;

            form.append(label, input, document.createElement("br"));
            form.appendChild(document.createElement("br"));
        });

        const button = document.createElement("button");
        button.textContent = "Submit";
        form.appendChild(button);
        area.appendChild(form);

        form.addEventListener("submit", event => {
            event.preventDefault();
            console.log(this.getFormData(form));
        });
    }

    getFormData(form) {
        return Object.fromEntries(new FormData(form));
    }
}

const fields = [
    { type: "text", label: "Username: ", name: "username" },
    { type: "email", label: "Email: ", name: "email" }
];

new FormBuilder(fields).createForm();
