# Resolution for exercises 1 && 2
## In order to run exercise #2, package.json can be checked
### Anyway, the default command is : npm run start

#### Exercise 1:
The file models contains the models for the first question and the database structure. Models has been created following mongoose structure (MongoDB), so the ID is created automatically
and the models does not contain this field. In order to choose between SQL or not, we have to keep in mind the complexity of the schema we need. For systems with complicated structure,
we will choose SQL, so if we preview to have a big database structure with complex relationships between elements, this will be the best choice.
At this case, I have chosen MongoDB as the example doesnt require further customization.
Anyway, in order to have a view of how SQL will look, I adapted the model and the query to sql query.

Considering the report to be made, a sql query like this could be made:
---------------------------------------------------------------------------------------------------------
SELECT p.Date, COUNT(p.PlayerID) AS PlayersEliminated
FROM Organizations o
JOIN Players p
WHERE p.eliminated = true
GROUP BY o.Location, p.date
ORDER BY o.Location, p.date;
---------------------------------------------------------------------------------------------------------
