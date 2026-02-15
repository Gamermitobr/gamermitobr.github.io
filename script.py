import requests

# URL do canal do YouTube
url = "https://youtube.com/@davizinmakerkkj?si=OQqb7ZDZjnjFp5di"

# Faz uma requisição para o canal do YouTube
response = requests.get(url)

# Verifica se a requisição foi bem-sucedida
if response.status_code == 200:
    # Extrai a lista de inscritos
    inscritos = ["Inscrito 1", "Inscrito 2", "Inscrito 3"]  # Substitua com a lista de inscritos real

    # Gera o arquivo inscritos.txt
    with open('inscritos.txt', 'w') as f:
        for inscrito in inscritos:
            f.write(inscrito + '\n')
else:
    print("Erro ao acessar o canal do YouTube")