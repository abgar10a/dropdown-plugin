class DropdownPlugin {
    constructor(dropdownId, containerId) {
        this.dropdown = document.getElementById(dropdownId);
        this.inputContainer = document.getElementById(containerId);

        this.dropdown.addEventListener('change', this.handleChange.bind(this));
    }

    handleChange() {
        this.inputContainer.innerHTML = ''; // Clear previous inputs

        const selectedValue = this.dropdown.value;

        if (selectedValue === 'name') {
            this.createInputField('Enter your name: ', 'name');
        } else if (selectedValue === 'surname') {
            this.createInputField('Enter your surname: ', 'surname');
        } else if (selectedValue === 'date') {
            this.createInputField('Enter the date: ', 'date', 'date');
        }
    }

    createInputField(labelText, inputName, type = 'text') {
        const label = document.createElement('label');
        label.innerText = labelText;

        const input = document.createElement('input');
        input.name = inputName;
        input.type = type;

        this.inputContainer.appendChild(label);
        this.inputContainer.appendChild(input);
    }
}
