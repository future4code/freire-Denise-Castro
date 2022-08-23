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
        
        
       INSERT INTO Actor(id, name, salary, birth_date, gender)
        VALUES(
        "004", 
        "Antônio Fagundes",
        400000,
        "1949-04-18",
        "male"
        ); 
        
**E)**

        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
         "005", 
          "Juliana Paes",
          719333.33,
          "1979-03-26", 
          "female"
         );
         
**F)**

        INSERT INTO Actor(id, name, salary, birth_date, gender)
        VALUES(
        "006", 
        "Paolla Oliveira", 
        500000, 
        "1982-04-14",
        "female"
        );
