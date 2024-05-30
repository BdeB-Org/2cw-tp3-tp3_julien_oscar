fetch(url) // Envoie une requête HTTP GET à l'URL spécifiée
    .then((response) => {
        // Fonction anonyme exécutée lorsque la réponse est reçue
        // Ici, vous pouvez effectuer des vérifications sur la réponse, comme vérifier le statut HTTP, etc.
        // Vous pouvez également retourner la réponse telle quelle ou la transformer en un autre format
        return response.json(); // Exemple: conversion de la réponse en JSON
    })
    .then((data) => {
        // Fonction anonyme exécutée lorsque les données sont disponibles
        // Ici, vous pouvez travailler avec les données récupérées
        console.log(data); // Exemple: affichage des données dans la console
    })
    .catch((error) => {
        // Fonction anonyme exécutée en cas d'erreur lors de la récupération des données
        // Ici, vous pouvez gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur ou enregistrer l'erreur dans la console
        console.error('Error:', error); // Exemple: affichage de l'erreur dans la console
    });