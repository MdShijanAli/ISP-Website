
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentYear").textContent = currentYear;


document.addEventListener("DOMContentLoaded", function () {
  // Fetch and populate divisions
  const divisionSelect = document.getElementById('pdivision');
  fetch('../public/divisions.json')
    .then(response => response.json())
    .then(data => {
      data[2].data.forEach(division => {
        const option = document.createElement('option');
        option.value = division.name;
        option.text = division.name;
        option.id = division.id;
        divisionSelect.appendChild(option);
              
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  // Event listener for District select
  const districtSelect = document.getElementById('pdistrict');

  
  divisionSelect.addEventListener('change', function () {

    // Clear existing districts (except the default option)
    while (districtSelect.options.length > 1) {
      districtSelect.remove(1);
    }
  
    const selectedOption = divisionSelect.options[divisionSelect.selectedIndex];
    const divisionID = selectedOption.getAttribute('id');


    
    
    
    // Fetch and populate districts based on the selected division
    fetch('../public/districts.json')
      .then(response => response.json())
      .then(data => {
        const matchingDistricts = data[2].data.filter(district => district.division_id === divisionID);
   
        matchingDistricts.forEach(district => {
        
          const option = document.createElement('option');
          option.value = district.name;
          option.text = district.name;
          option.id = district.id;
          districtSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
    
    
    
    
    
    // Event listener for Upazila select
    const upazilaSelect = document.getElementById('pupazila');

  
    districtSelect.addEventListener('change', function () {

      // Clear existing upazilas (except the default option)
      while (upazilaSelect.options.length > 1) {
        upazilaSelect.remove(1);
      }
  
      const selectedOption = districtSelect.options[districtSelect.selectedIndex];
      const districtD = selectedOption.getAttribute('id');

    
    
      // Fetch and populate upazilas based on the selected division
      fetch('../public/upazilas.json')
        .then(response => response.json())
        .then(data => {
          const matchingupazilas = data[2].data.filter(upazila => upazila.district_id === districtD);
      
          matchingupazilas.forEach(upazila => {
          
            const option = document.createElement('option');
            option.value = upazila.name;
            option.text = upazila.name;
            option.id = upazila.id;
            upazilaSelect.appendChild(option);
          });
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      
      
      // Event listener for union select
      const unionSelect = document.getElementById('punion');

  
      upazilaSelect.addEventListener('change', function () {

        // Clear existing unions (except the default option)
        while (unionSelect.options.length > 1) {
          unionSelect.remove(1);
        }
  
        const selectedOption = upazilaSelect.options[upazilaSelect.selectedIndex];
        const upazillaID = selectedOption.getAttribute('id');


    
    
    
        // Fetch and populate unions based on the selected division
        fetch('../public/unions.json')
          .then(response => response.json())
          .then(data => {
            const matchingUnions = data[2].data.filter(union => union.upazilla_id === upazillaID);
   
            matchingUnions.forEach(union => {
        
              const option = document.createElement('option');
              option.value = union.name;
              option.text = union.name;
              option.id = union.id;
              unionSelect.appendChild(option);
            });
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      })

    
  
    });
  })

})







