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


-- Inserir alguns registros de teste

INSERT INTO Item (nome, descricao, valor, imagem)
VALUES 
('Pizza Margherita', 'Pizza com molho de tomate, mussarela e manjericão', 25.00, 'pizza.jpg'),
('Hambúrguer', 'Hambúrguer com queijo, bacon e alface', 18.00, 'hamburguer.jpg'),
('Coca-Cola 350ml', 'Refrigerante em lata', 5.00, 'coca.jpg');

-- Criar um pedido de teste
INSERT INTO Pedido (status, valorTotal) VALUES ('Pendente', 48.00);

-- Relacionar Itens ao Pedido
INSERT INTO ItemPedido (PedidoId, ItemId, quantidade, observacao)
VALUES 
(1, 1, 1, 'Sem manjericão'),
(1, 2, 1, ''),
(1, 3, 2, 'Bem gelada');

-- Inserir Avaliação
INSERT INTO Avaliacao (PedidoId, nota, comentario)
VALUES (1, 5, 'Excelente atendimento e comida!');

-- Adicionar à Fila
INSERT INTO Fila (PedidoId, posicao, status)
VALUES (1, 1, 'Aguardando Preparação');
