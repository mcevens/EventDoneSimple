const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#gear-dropdown').removeClass('hidden');
  $('#gear-dropdown-btn').off('mouseover', revealDropdown);
  $(document).on('mouseOver', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
	$('#gear-dropdown').addClass('hidden');
  $('#gear-dropdown-btn').on('mouseover', revealDropdown);
  $(document).off('mouseOver', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
$(() => $('#gear-dropdown-btn').on('click', revealDropdown));
