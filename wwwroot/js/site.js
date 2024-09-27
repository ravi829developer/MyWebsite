


    function createDropdown(selectId) {
        const selectElement = document.getElementById(selectId);
        const options = selectElement.options;

        const selectElements = document.querySelectorAll('select');
        selectElements.forEach(select => {
            select.style.display = 'none'; 
        });
            

    const existingDropdown = document.querySelector(`#dropdownContainer .${selectId}-dropdown`);
    if (existingDropdown) {
        existingDropdown.style.display = existingDropdown.style.display === 'none' ? 'block' : 'none';
    return;
        }
      

    // Create the dropdown container
    const container = document.createElement('div');
    container.classList.add('dropdown-container', `${selectId}-dropdown`);

    // Create the dropdown select div
    const dropdownSelect = document.createElement('div');
    dropdownSelect.classList.add('dropdown-select');
    dropdownSelect.textContent = "Select Options";
    container.appendChild(dropdownSelect);

    // Create the dropdown menu div
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu', 'p-3');

    // Create the search input
    const searchDiv = document.createElement('div');
    searchDiv.classList.add('form-group');
    const searchInput = document.createElement('input');
    searchInput.classList.add('form-control', 'mb-2');
    searchInput.placeholder = "Search...";
    searchDiv.appendChild(searchInput);
    dropdownMenu.appendChild(searchDiv);

    // Create the select/deselect all checkbox
    const selectAllDiv = document.createElement('div');
    selectAllDiv.classList.add('form-check');
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.classList.add('form-check-input');
    const selectAllLabel = document.createElement('label');
    selectAllLabel.classList.add('form-check-label');
    selectAllLabel.textContent = 'Select/Deselect All';
    selectAllDiv.appendChild(selectAllCheckbox);
    selectAllDiv.appendChild(selectAllLabel);
    dropdownMenu.appendChild(selectAllDiv);

    // Create the container for option checkboxes
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');

            Array.from(selectElement.children).forEach(group => {
                if (group.tagName === 'OPTGROUP') {
                    const groupLabel = document.createElement('div');
    groupLabel.classList.add('font-weight-bold', 'mb-2');
    groupLabel.textContent = group.label;
                    checkboxContainer.appendChild(groupLabel);


                    Array.from(group.children).forEach(option => {
                        const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('form-check', 'option-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');
    checkbox.value = option.value;
    checkbox.checked = option.selected;

    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.textContent = option.text;

    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    checkboxContainer.appendChild(checkboxDiv);
                    });
                }
            });
    dropdownMenu.appendChild(checkboxContainer);
    container.appendChild(dropdownMenu);

    // Append the container to the dropdownContainer div
    document.getElementById('dropdownContainer').appendChild(container);

    // Function to update selected options text
    function updateSelectedOptions() {
                const selectedOptions = Array.from(options).filter(option => option.selected);
                dropdownSelect.textContent = selectedOptions.length > 0
                    ? selectedOptions.map(option => option.text).join(', ')
    : "Select Options";
            }

            // Add event listeners
            dropdownSelect.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
            });

            selectAllCheckbox.addEventListener('change', () => {
                const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
                    const matchingOption = Array.from(options).find(option => option.value === checkbox.value);
    matchingOption.selected = checkbox.checked;
                });
    updateSelectedOptions();
            });

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
    const optionItems = checkboxContainer.querySelectorAll('.option-item');
                optionItems.forEach(item => {
                    const label = item.querySelector('label').textContent.toLowerCase();
    item.style.display = label.includes(searchTerm) ? '' : 'none';
                });
            });

            checkboxContainer.addEventListener('change', (e) => {
                const matchingOption = Array.from(options).find(option => option.value === e.target.value);
    matchingOption.selected = e.target.checked;
    updateSelectedOptions();
            });

            // Hide dropdown menu if click is outside
            document.addEventListener('click', (event) => {
                if (!container.contains(event.target) && !dropdownSelect.contains(event.target)) {
        dropdownMenu.style.display = 'none';
                }
            });
        }

    

    function showValidationMessage(container, message) {
        let validationDiv = container.querySelector('.validation-message');
    if (!validationDiv) {
        validationDiv = document.createElement('div');
    validationDiv.classList.add('validation-message', 'text-danger');
    container.appendChild(validationDiv);
            }
    validationDiv.textContent = message;
        }


    function showValidationMessage(container, message) {
        let validationDiv = container.querySelector('.validation-message');
    if (!validationDiv) {
        validationDiv = document.createElement('div');
    validationDiv.classList.add('validation-message', 'text-danger');
    container.appendChild(validationDiv);
        }
    validationDiv.textContent = message;

    // Ensure Bootstrap tooltip initialization if needed
    if (typeof $ !== 'undefined' && $.fn.tooltip) {
        $(validationDiv).tooltip('dispose').attr('data-toggle', 'tooltip').attr('title', message).tooltip();
        }
    }

    function removeValidationMessage(container) {
        const validationDiv = container.querySelector('.validation-message');
    if (validationDiv) {
        validationDiv.remove();
        }
    }

    // Ensure that the dropdowns are updated when options are selected or deselected
    document.querySelectorAll('.dropdown-container').forEach(container => {
        const checkboxContainer = container.querySelector('.checkbox-container');
    if (checkboxContainer) {
        checkboxContainer.addEventListener('change', () => {
            // Update validation messages whenever a checkbox is changed
            submitForm();
        });
        }
    });
