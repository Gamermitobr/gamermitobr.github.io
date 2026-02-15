from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configura o Selenium
driver = webdriver.Chrome()

# Acessa a página do canal do YouTube
url = "https://www.youtube.com/channel/ID_DO_CANAL"
driver.get(url)

# Espera até que a página seja carregada
time.sleep(5)

# Rola a página para baixo para carregar mais inscritos
for i in range(10):
    driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")
    time.sleep(2)

# Extrai a lista de inscritos
inscritos = driver.find_elements(By.CSS_SELECTOR, "                      

                               
lista_inscritos = []
for inscrito in inscritos:
    try:
        nome = inscrito.find_element(By.CSS_SELECTOR, "#channel-subscribers")

# Processa a lista de inscritos
lista_inscritos = []
for inscrito in inscritos:
    try:
        nome = inscrito.find_element(By.CSS_SELECTOR, "a").text
        lista_inscritos.append(nome)
    except:
        pass

                                          
with open("# Salva a lista de inscritos em um arquivo
with open("lista_inscritos.txt", "w") as f:
    for inscrito in lista_inscritos:
        f.write(inscrito + "\n")

# Fecha o Selenium
driver.quit()