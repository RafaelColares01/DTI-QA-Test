# **Desafio Técnico - Estágio em QA**

Este repositório contém a solução do desafio técnico para a posição de estágio em Quality Assurance Engineer. O desafio consiste em criar e automatizar cenários de teste para a página de login do site **"Automation Practice"**.

## **Descrição do Projeto**

Os cenários foram criados com base na perspectiva do usuário final e abordam diferentes possibilidades de interação com a página de login. Os testes foram automatizados utilizando o framework **Cypress**.

### **Página Alvo**
[Automation Practice - Página de Login](http://automationpractice.pl/index.php?controller=authentication&back=my-account)

---

## **Tecnologias Utilizadas**

- **Framework:** Cypress  
- **Linguagem:** JavaScript  
- **IDE:** VSCode  
- **Gerenciador de Dependências:** NPM  

---

## **Cenários de Teste Criados**

### **1. Teste de E-mail Inválido**
- **Dado que** o usuário esteja na página de login,  
- **Quando** inserir um e-mail inválido no campo de criação de conta e tentar continuar,  
- **Então** uma mensagem de erro "Invalid email address" deve ser exibida.

### **2. Criação de Conta com E-mail Válido**
- **Dado que** o usuário esteja na página de login,  
- **Quando** inserir um e-mail válido no campo de criação de conta e clicar para continuar,  
- **Então** o usuário deve ser redirecionado para a página de criação de conta.

### **3. Login com Credenciais Válidas**
- **Dado que** o usuário esteja na página de login,  
- **Quando** inserir e-mail e senha válidos nos campos apropriados e clicar no botão de login,  
- **Então** o usuário deve ser redirecionado para a página principal da conta.

---

## **Configuração e Execução**

### **1. Pré-requisitos**
- Node.js instalado (versão 12 ou superior).  
- Git instalado.


### **2. Clonando o Repositório**
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### **3. Instalando as Dependências**
```bash
npm install
```

### **4. Executando os Testes**
**Interface Gráfica:**
```bash
npx cypress open
```

- Na interface do Cypress, selecione o arquivo de teste para executá-lo.

