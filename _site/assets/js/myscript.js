
  document.addEventListener('DOMContentLoaded', function() {
    const veteranCheckbox = document.getElementById('veteran');
    const nonVeteranCheckbox = document.getElementById('non-veteran');
    const nonVeteranInput = document.getElementById('non-veteran-input');

    veteranCheckbox.addEventListener('change', function() {
      nonVeteranInput.style.display = this.checked ? 'none' : 'block';
    });

    nonVeteranCheckbox.addEventListener('change', function() {
      nonVeteranInput.style.display = this.checked ? 'block' : 'none';
    });
  });

			const industrySelect = document.getElementById("industrySelect");
			// 	element if "Other" is selected
			const otherIndustryDiv = document.getElementById("otherIndustryDiv");
			//	Event listener for user input
			industrySelect.addEventListener("change", function () {
				// 	Take the value of the option selected ("Tech, Health, Retail")
			  const selectedValue = industrySelect.value;
			  //	 if "Other" is slected
			  if (selectedValue === "Other") {
				// 	change to display to block
				otherIndustryDiv.style.display = "block";
			  } else {
				// Otherwise, don't display anything
				otherIndustryDiv.style.display = "none";
			  }
			});
