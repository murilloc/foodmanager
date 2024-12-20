-- Criar o Banco de Dados
CREATE DATABASE IF NOT EXISTS foodmanager_db;
USE foodmanager_db;

CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50) NOT NULL,
    valorTotal DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    dataPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255)
);


CREATE TABLE ItemPedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    PedidoId INT NOT NULL,
    ItemId INT NOT NULL,
    quantidade INT NOT NULL,
    observacao TEXT,
    FOREIGN KEY (PedidoId) REFERENCES Pedido(id) ON DELETE CASCADE,
    FOREIGN KEY (ItemId) REFERENCES Item(id) ON DELETE CASCADE
);


CREATE TABLE Avaliacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    PedidoId INT NOT NULL,
    nota INT CHECK(nota BETWEEN 1 AND 5),
    comentario TEXT,
    dataAvaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PedidoId) REFERENCES Pedido(id) ON DELETE CASCADE
);


CREATE TABLE Fila (
    id INT AUTO_INCREMENT PRIMARY KEY,
    PedidoId INT NOT NULL,
    posicao INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    dataFila TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PedidoId) REFERENCES Pedido(id) ON DELETE CASCADE
);

-- Adicione as colunas às tabelas existentes
ALTER TABLE Pedido ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Pedido ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE Item ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Item ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE ItemPedido ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE ItemPedido ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE Avaliacao ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Avaliacao ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE Fila ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE Fila ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;



-- Use o banco de dados correto
USE foodmanager_db;

-- Limpando tabelas existentes
DELETE FROM Fila;
DELETE FROM Avaliacao;
DELETE FROM ItemPedido;
DELETE FROM Pedido;
DELETE FROM Item;

-- Inserindo Itens
INSERT INTO Item (nome, descricao, valor, imagem)
VALUES
    ('Pizza Margherita', 'Pizza com queijo e tomate', 25.00, 'pizza.jpg'),
    ('Hambúrguer', 'Hambúrguer com queijo, bacon e alface', 18.00, 'hamburguer.jpg'),
    ('Coca-Cola 350ml', 'Refrigerante em lata', 5.00, 'coca.jpg'),
    ('Batata Frita', 'Batata frita crocante', 10.00, 'batata.jpg');

-- Criando Pedidos
INSERT INTO Pedido (status, valorTotal)
VALUES
    ('Pendente', 50.00),
    ('Concluído', 30.00);

-- Inserindo Itens de Pedidos
INSERT INTO ItemPedido (PedidoId, ItemId, quantidade, observacao)
VALUES
    (1, 1, 2, 'Sem manjericão'), -- Pizza Margherita
    (1, 2, 1, ''),              -- Hambúrguer
    (1, 3, 2, 'Bem gelada'),    -- Coca-Cola
    (2, 4, 1, 'Extra crocante');-- Batata Frita

-- Inserindo Avaliações
INSERT INTO Avaliacao (PedidoId, nota, comentario)
VALUES
    (1, 5, 'Excelente atendimento e comida!'),
    (2, 4, 'Muito bom, mas a entrega demorou um pouco.');

-- Adicionando à Fila
INSERT INTO Fila (PedidoId, posicao, status)
VALUES
    (1, 1, 'Aguardando Preparação'),
    (2, 2, 'Em Preparação');
