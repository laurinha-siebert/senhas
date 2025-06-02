# senhas

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Senhas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Gerenciador de Senhas</h1>
            <p>Armazene suas senhas de forma segura e organizada!</p>
        </header>

        <div class="menu">
            <button class="menu-btn ativo" data-target="card-1">Redes Sociais</button>
            <button class="menu-btn" data-target="card-2">Emails</button>
            <button class="menu-btn" data-target="card-3">Bancos</button>
            <button class="menu-btn" data-target="card-4">Outros Sites</button>
        </div>

        <div class="cards">
            <!-- Redes Sociais -->
            <div class="card" id="card-1">
                <h3>Redes Sociais</h3>
                <form>
                    <label for="rede-nome">Nome do Serviço</label>
                    <input type="text" id="rede-nome" placeholder="Facebook, Instagram...">
                    <label for="rede-usuario">Email ou Usuário</label>
                    <input type="text" id="rede-usuario" placeholder="exemplo@email.com">
                    <label for="rede-senha">Senha</label>
                    <input type="password" id="rede-senha" placeholder="Digite a senha">
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <!-- Emails -->
            <div class="card" id="card-2">
                <h3>Emails</h3>
                <form>
                    <label for="email-nome">Nome do Serviço</label>
                    <input type="text" id="email-nome" placeholder="Gmail, Outlook...">
                    <label for="email-usuario">Email</label>
                    <input type="email" id="email-usuario" placeholder="exemplo@email.com">
                    <label for="email-senha">Senha</label>
                    <input type="password" id="email-senha" placeholder="Digite a senha">
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <!-- Bancos -->
            <div class="card" id="card-3">
                <h3>Bancos</h3>
                <form>
                    <label for="banco-nome">Nome do Banco</label>
                    <input type="text" id="banco-nome" placeholder="Bradesco, Banco do Brasil...">
                    <label for="banco-usuario">Usuário</label>
                    <input type="text" id="banco-usuario" placeholder="Número da conta">
                    <label for="banco-senha">Senha</label>
                    <input type="password" id="banco-senha" placeholder="Digite a senha">
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <!-- Outros Sites -->
            <div class="card" id="card-4">
                <h3>Outros Sites</h3>
                <form>
                    <label for="outros-nome">Nome do Serviço</label>
                    <input type="text" id="outros-nome" placeholder="Netflix, Spotify...">
                    <label for="outros-usuario">Email ou Usuário</label>
                    <input type="text" id="outros-usuario" placeholder="exemplo@email.com">
                    <label for="outros-senha">Senha</label>
                    <input type="password" id="outros-senha" placeholder="Digite a senha">
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
