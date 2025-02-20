    // Empêche l'envoi du formulaire
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    let isValid = true;
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = ''); // Réinitialise les erreurs
  
    // Récupération des valeurs des champs
    const name = document.getElementById('name').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const date = document.getElementById('date').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const motivation = document.getElementById('motivation').value.trim();
  
    // Vérification des champs
    if (name === '' || !/^[A-Z]+$/.test(name)) {
      document.querySelector('#name + .error-message').textContent = "Nom invalide.";
      isValid = false;
    }
  
    if (prenom === '' || !/^[A-Za-zÀ-ÿ\s-]+$/.test(prenom)) {
      document.querySelector('#prenom + .error-message').textContent = "Prénom invalide.";
      isValid = false;
    }
  
    if (date === '') {
      document.querySelector('#date + .error-message').textContent = "Veuillez entrer votre date de naissance.";
      isValid = false;
    } else {
      // Vérification de l'âge minimum de 18 ans
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();
  
      if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
        document.querySelector('#date + .error-message').textContent = "Vous devez avoir au moins 18 ans pour vous inscrire.";
        isValid = false;
      }
    }
  
    if (tel === '' || !/^\+?[0-9\s\-]{8,15}$/.test(tel)) {
      document.querySelector('#tel + .error-message').textContent = "Numéro de téléphone invalide.";
      isValid = false;
    }
  
    if (motivation.length < 1000 || motivation.length > 2500) {
      document.querySelector('#motivation + .error-message').textContent = "La motivation doit contenir entre 1000 et 2500 caractères.";
      isValid = false;
    }
  
    if (isValid) {
      if (confirm("Tout est correct ! Voulez-vous envoyer votre inscription ?")) {
        alert("Inscription réussie !");
        // Envoi du formulaire
        this.submit();
      }
    }
  });
  