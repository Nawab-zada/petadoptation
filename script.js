document.addEventListener('DOMContentLoaded', () => {
    const pets = [
      {
        name: 'Buddy',
        photo: 'https://via.placeholder.com/300x200',
        description: 'A friendly dog looking for a loving home.',
        medicalHistory: 'Up-to-date on vaccinations. No known health issues.',
        dietaryRequirements: 'Requires a high-protein diet.'
      },
      {
        name: 'Mittens',
        photo: 'https://via.placeholder.com/300x200',
        description: 'A playful cat who loves to snuggle.',
        medicalHistory: 'Up-to-date on vaccinations. Allergic to certain foods.',
        dietaryRequirements: 'Requires a special hypoallergenic diet.'
      },
      {
        name: 'Rex',
        photo: 'https://via.placeholder.com/300x200',
        description: 'An energetic dog that loves to play fetch.',
        medicalHistory: 'Up-to-date on vaccinations. History of hip dysplasia.',
        dietaryRequirements: 'Needs glucosamine supplements in diet.'
      },
      {
        name: 'Whiskers',
        photo: 'https://via.placeholder.com/300x200',
        description: 'A curious cat who enjoys exploring.',
        medicalHistory: 'Up-to-date on vaccinations. No known health issues.',
        dietaryRequirements: 'Prefers a grain-free diet.'
      }
    ];
  
    const petList = document.getElementById('petList');
    const petModal = document.getElementById('petModal');
    const petDetails = document.getElementById('petDetails');
    const closeModal = document.getElementsByClassName('close')[0];
  
    pets.forEach(pet => {
      const petCard = document.createElement('div');
      petCard.classList.add('pet-card');
  
      petCard.innerHTML = `
        <img src="${pet.photo}" alt="${pet.name}">
        <div class="pet-details">
          <h2>${pet.name}</h2>
          <p>${pet.description}</p>
        </div>
      `;
  
      petCard.addEventListener('click', () => {
        petDetails.innerHTML = `
          <h2>${pet.name}</h2>
          <img src="${pet.photo}" alt="${pet.name}" style="width:100%; height:auto;">
          <p><strong>Description:</strong> ${pet.description}</p>
          <p><strong>Medical History:</strong> ${pet.medicalHistory}</p>
          <p><strong>Dietary Requirements:</strong> ${pet.dietaryRequirements}</p>
        `;
        petModal.style.display = 'block';
      });
  
      petList.appendChild(petCard);
    });
  
    closeModal.addEventListener('click', () => {
      petModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === petModal) {
        petModal.style.display = 'none';
      }
    });
  });
  