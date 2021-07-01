# appointments-api

Api criada para realização de marcação de consulta médica.
Esta api possui as funcionalidades de criar um cliente, criar um um cadastro de médico
listagem de clientes,listagem de médicos, cadastro de consultas, listagem de consulta médica.

# Tecnologia usadas
Java, Springboot,Spring Security, OAuth2.0 utilizando uma estrutura de autorização, 
utilizado Bcrypt para criptográfia de senha de usuários, JPA para persistêcia de dados no banco,
Bean Validation para validação do objetos, uso do padrão data transfer object para trafego de objetos
na rede, api documentada utilizando swagger, banco de dados h2 para desenvolvimento, em produção esta aplicação está usando
Postgresql. Aplicação versionada utilizando git flow para separação de features, api autenticando via swagger para requisição dos recursos
Aplicação foi desenvolvida fazendo uso de generics do Java para reduzir códigos duplicado na aplicação.
Frontend utilizando reactjs com javascript puro, utilizando framework css bootstrap para agilidade no desenvolvimento das telas.

# Obs: Aplicação até o momento ainda não está autenticando pela aplicação frontend, somente funcionando autenticação via postman e swagger.

## 🚀 Rodando a aplicação

Faça o clone da aplicação em seu computador, realize o importe para a IDE de programação de seu gosto.
Dentro da pasta do projeto tem duas subpasta chamada backend e frontend, a escolha da criação do monerepo 
foi dada levando em consideração que fica mais facil ao acesso a aplicação backend e frontend.
Após o importe do projeto mude a configuração do perfil do projeto para utilizar a configuração de test
Mude a configuração spring.active.profiles=prod para spring.active.profiles=test para rodar a aplicação
sem a necessidade de instalação de um banco de dados em sua maquina. Você também pode rodar o comando 
docker abaixo para a execução de um container de banco de dados.

Com o Docker instalado rode o comando: docker run -p 5432:5432 --name appointments -e POSTGRES_USER=appointments -e POSTGRES_PASSWORD=appointments -e POSTGRES_DB=votacao -d postgres:10.5-alpine

## 🚀 Acessando Documentação da aplicação através do swagger
http://localhost:8080/swagger-ui.html

## 🚀 Endpoints disponilizados pela api
http://localhost:8080/oauth/token POST <br>
http://localhost:8080/appointment POST <br>
http://localhost:8080/users POST <br>
http://localhost:8080/doctor GET <br>
http://localhost:8080/doctor POST <br>
http://localhost:8080/customer GET <br>
http://localhost:8080/customer POST <br>
http://localhost:8080/appointment POST

  

