# MLD Modèle Logique de Données

---

On nomme les tables de liaisons en fonction des tables qu'elles représentent, et dans l'ordre alphabétique du nom des tables.

## MCD

THEME : code theme, nom
Appartenir, 0N QUIZ, 0N THEME
QUIZ : code quiz, titre, description
Contenir, 0N QUIZ, 11 QUESTION
QUESTION : code question, titre, wiki, anecdote
Posséder, 11 REPONSE, 0N QUESTION
REPONSE : code réponse, description, est valide

:
UTILISATEUR : code utilisateur, email, prénom, nom, mot de passe
CREER, 0N UTILISATEUR, 11 QUIZ
NIVEAU : code niveau, nom
Déterminer, 11 QUESTION, 0N NIVEAU

## MLD

```text
User ( id, email, firstname, lastname, password )
Quiz ( id, title, description, #User(id) )
Tag ( id, name )
Level ( id, name )
Question ( id, description, anecdote, wiki, #Quiz(id), #level(id) )
Answer ( id, description, is_valid, #Question(id) )

Quiz_Has_Tag ( id, #Quiz(id), #Tag(id) )

```
