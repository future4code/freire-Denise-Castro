# Introdução ao SQL

## Exercício 01

**A)**
- o VARCHAR(255) mostra que o id e name são do tipo string com no máximo 255 caracteres.
- birth_date é do tipo DATE que representa uma data.
- id é a chave primária e os demais não podem ser nulos.

**B)**

- SHOW DATABASES mostra o banco de dados
- SHOW TABLES mostra as tabelas existentes no banco de dados

**C)**

- Ela me mostra em detalhe os conteudos da tabela Actor


## Exercício 02

**A)**

        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "002", 
          "Gloria Pires",
          1200000,
          "1963-08-23", 
          "female"
        );
        
**B)**
- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
- Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIO'.

**C)**
- Código de erro: 1136. Contagem da coluna não corresponde com o valor da contagem da fileira 1.
- Não permitiu adicionar os dados, pois está faltando os campos birth_date e gender dentro dos parênteses da query

O Correto seria usar:

        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "003", 
          "Fernanda Montenegro",
          300000,
          "1929-10-19", 
          "female"
        );
        
**D)**
        
-Código de erro: 1364. Campo 'name' não tem um valor padrão
-Como foi definido que o campo 'name' não pode ser nulo, o banco de dados não permitiu adicionar os dados sem um nome.
      
        
**E)**
- Código de erro: 1292. Valor data incorreto: '1950' para coluna 'birth_date' na fileira 1.
- Deu erro, pois o campo data não está entre aspas
         
**F)**

        INSERT INTO Actor(id, name, salary, birth_date, gender)
        VALUES(
        "006", 
        "Paolla Oliveira", 
        500000, 
        "1982-04-14",
        "female"
        );

,


        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "004", 
          "Antônio Fagundes",
          400000,
         "1949-04-18", 
          "male"
          );

,


          INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "005", 
          "Juliana Paes",
          719333.33,
          "1979-03-26", 
          "female"
        );

## Exercício 03

**A)**

        SELECT * FROM Actor WHERE gender = "female";

**B)**

        SELECT salary FROM Actor WHERE name = "Tony Ramos";
        
**C)**

        Select * from Actor where gender = "invalid";
        0 rows returned, NULL, NULL, NULL

Retorna tudo null porque todos os valores estão preenchidos

**D)**

        SELECT * FROM Actor WHERE salary <500000;
 
 **E)**
 
- Erro 1054. Coluna 'nome' desconhecido em 'lista de campo'
- O campo 'nome' não existe. O campo correto deveria ser 'name'

## Exercício 04

**A)**

- LIKE significa similar a WHERE. A query vai retornar todos os atores que estão no banco de dados que possuem o nome começando por A ou J e que tenham salário acima de 300.000

**B)**


        SELECT * FROM Actor
        WHERE (name NOT LIKE "A%") AND (salary > 350000);
        

**C)**

        SELECT * FROM Actor
        WHERE (name LIKE "G%" OR name LIKE "%g%");
        
**D)**
        
        SELECT * FROM Actor 
        WHERE ( ((name LIKE "%g%") OR (name LIKE "%G%")) OR ( (name LIKE "%a%") OR (name LIKE "%A%") )) AND salary BETWEEN 350000 AND 900000; 
        
 ## Exercício 05
 
         CREATE TABLE Filmes (
        id VARCHAR(255) PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         sinopse TEXT NOT NULL,
        data_lancamento DATE NOT NULL,
        avaliacao INT NOT NULL
         );

- TEXT é usado para strings muito compridas, suporta até 1GB;
- Nenhum pode ser nulo.



 ## Exercício 06
 
 **A)**
 
         SELECT id, nome, avaliacao from Filmes WHERE id = "002";
         
 **B)**
 
         SELECT * from Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
         

 **C)**
 
         SELECT id, nome, sinopse from Filmes WHERE avaliacao > 7;
         
  
  
 ## Exercício 07

**A)**

         SELECT * from Filmes WHERE nome LIKE "%vida%";
         
         
**B)**

        SELECT * FROM Filmes
        WHERE name LIKE "%doce%" OR synopsis LIKE "%doce%";
        
**C)**

        SELECT * from Filmes
        WHERE data_lancamento < "2022-08-22";
        
        
**D)**

        SELECT * from Filmes
        WHERE data_lancamento < "2022-06-06"
        AND (nome LIKE "%flor%" OR sinopse LIKE "%flor%")
        AND avaliacao > 7; 
 



