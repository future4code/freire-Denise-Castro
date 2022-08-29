# Aprofundamento-sql
## QUESTÃO 01
**A)**
- Removeria a coluna om valor salário

**B)**
- Muda o campo gender para sex.



**C)**
- Altera o tamanho máximo de caracteres do campo gender para 255.

**D)**

        ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## QUESTÃO 02

**A)**

        UPDATE Actor
        SET name = "Moacyr Franco", birth_date = "1936-10-05"
        WHERE id = "003";
       
        
**B)**

        UPDATE Actor
        SET name = "JULIANA PAES"
        WHERE name = "Juliana Paes";
        
        
**C)**
        UPDATE Actor
        SET name = "Cauã Reymond", salary = 550000 , birth_date = "1988-07-07", gender = "male"
        WHERE id = "005";


## QUESTÃO 03

**A)**

        DELETE FROM Actor WHERE name = "Fernanda Montenegro"
        
**B)**

        DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
        
        
## QUESTÃO 04

**A)**

        SELECT MAX(salary) FROM Actor;


**B)**
        SELECT MIN(salary) FROM Actor
        WHERE gender = "female";
        

**C)**

        SELECT COUNT(*) FROM Actor
        WHERE gender = "female";
        
        
**D)**

        SELECT SUM(salary) FROM Actor;
        
## QUESTÃO 05

**A)**

- O comando retornou a quantidade total de atores separados por gênero, male e female.

**B)**

        SELECT id, name FROM Actor
        ORDER BY name DESC;

**C)**

        SELECT * FROM Actor
        ORDER BY salary;
        

**D)**

         SELECT AVG(salary), gender
         FROM Actor
         GROUP BY gender;
         
## questão 06

**A)**

         ALTER TABLE Filmes ADD playing_limit_date DATE;


**B)**

         ALTER TABLE Filmes CHANGE avaliacao rating FLOAT NOT NULL;
         
**C)**


          
**D)**




