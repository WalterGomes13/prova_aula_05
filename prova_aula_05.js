<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>

        var contador = 0
        var pai = []
        var mae = []
        var filho = []
        while (true) {

            var app = parseInt(prompt("O que você deseja fazer \n\
              1 - Adicionar Tarefa \n\
              2 - Remover Tarefa \n\
              3 - Atualizar Tarefa "))
            switch (app) {
                case 1:
                    let pergunta = parseInt(prompt("Quem é você? \n\
                                                   1 - Pai \n\
                                                   2 - Mãe \n\
                                                   3 - Filho"));
                    let adiciona = prompt("Qual tarefa você deseja adicionar?");
                    if (pergunta == 1) {
                        pai.push(adiciona)
                        console.log('Tarefa adicionada com sucesso!')
                    }
                    else if (pergunta == 2) {
                        mae.push(adiciona)
                        console.log('Tarefa adicionada com sucesso!')
                    }
                    else if (pergunta == 3) {
                        filho.push(adiciona)
                        console.log('Tarefa adicionada com sucesso!')
                    }
                    else {
                        console.log('Membro da família inválido!')
                    };
                    break;
                case 2:
                    let pergunta1 = parseInt(prompt("Quem é você? \n\
                       1 - Pai \n\
                       2 - Mãe \n\
                       3 - Filho"))
                    if (pergunta1 == 1) {
                        let index = 1
                        for (tarefa of pai) {
                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let remover = parseInt(prompt("Qual tarefa você deseja remover? "))
                        let indice = remover - 1
                        pai.pop(pai[indice])
                        console.log('Tarefa removida com sucesso!')
                    }
                    else if (pergunta1 == 2) {
                        let index = 1
                        for (tarefa of mae) {
                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let remover = parseInt(prompt("Qual tarefa você deseja remover? "))
                        let indice = remover - 1
                        mae.pop(mae[indice])
                        console.log('Tarefa removida com sucesso!')
                    }
                    else if (pergunta1 == 3) {
                        let index = 1
                        for (tarefa of filho) {
                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let remover = parseInt(prompt("Qual tarefa você deseja remover? "))
                        let indice = remover - 1
                        filho.pop(filho[indice])
                        console.log('Tarefa removida com sucesso!')
                    }
                    else {
                        console.log('Membro da família inválido!')
                    };
                    break;
                case 3:
                    let pergunta2 = parseInt(prompt("Quem é você? \n\
                       1 - Pai \n\
                       2 - Mãe \n\
                       3 - Filho"))
                    if (pergunta2 == 1) {
                        let index = 1
                        for (tarefa of pai) {
                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let atualiza = parseInt(prompt("Qual tarefa você deseja atualizar? "))
                        let indice = atualiza - 1
                        let nova = prompt("Digite a atualização: ")
                        pai.pop(indice)
                        pai.splice(1, indice, nova)
                        console.log('Tarefa atualizada com sucesso!')
                    }
                    else if (pergunta2 == 2) {
                        let index = 1
                        for (tarefa of mae) {
                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let atualiza = parseInt(prompt("Qual tarefa você deseja atualizar? "))
                        let indice = atualiza - 1
                        let nova = prompt("Digite a atualização: ")
                        mae.pop(indice)
                        mae.splice(1, indice, nova)
                        console.log('Tarefa atualizada com sucesso!')
                    }
                    else if (pergunta2 == 3) {
                        let index = 1
                        for (tarefa of filho) {

                            console.log(`${index} - ${tarefa}`)
                            index++
                        }
                        let atualiza = parseInt(prompt("Qual tarefa você deseja atualizar? "))
                        let indice = atualiza - 1
                        let nova = prompt("Digite a atualização: ")
                        filho.pop(indice)
                        filho.splice(1, indice, nova)
                        console.log('Tarefa atualizada com sucesso!')
                    }
                    else {
                        console.log('Membro da família inválido!')
                    };
                    break;
                default:
                    contador += 1
                    break;
            }
            console.log('Tarefas do pai: ')
            for (tarefa1 of pai) {
                console.log(`${tarefa1}`)
            }
            console.log('Tarefas da mãe: ')
            for (tarefa1 of mae) {
                console.log(`${tarefa1}`)
            }
            console.log('Tarefas do filho: ')
            for (tarefa1 of filho) {
                console.log(`${tarefa1}`)
            }
            if (contador != 0) {
                break;
            }
        }

    </script>
</body>

</html>
