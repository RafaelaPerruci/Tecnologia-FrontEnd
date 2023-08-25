alturas_homem = [] 
alturas_mulher = []
total_alturas = []
for c in range(15):
    sexo = input("Digite seu gênero[m/h]: ").lower() 
    altura = float(input("Digite sua altura: ")) 
    total_alturas.append(altura)
    
    if sexo == "m": 
        alturas_mulher.append(altura)
    else:
        alturas_homem.append(altura)  

qtd_mulheres = len(alturas_mulher)
qtd_homens = len(alturas_homem) 

print(f"A quantidade de mulheres é {qtd_mulheres}.") 
print(f"A média da altura dos homens é {sum(alturas_homem) / qtd_homens}")
print(f"A menor altura é {min(total_alturas)} e a maior altura é {max(total_alturas)}") 

#--------------------outra solução---------------------------------------------------------- 
genero = []
alturas = []
alt_homens = [] 
for c in range(3):
    sexo = str(input("Digite o seu genero[m/h]: ")).lower()
    altura = float(input("Digite a sua altura: ")) 
    genero.append(sexo) 
    alturas.append(altura)

qtd_mulheres = 0
qtd_homens = 0
for i in range(len(genero)):
    if genero[i] == "m": 
        qtd_mulheres += 1 
    elif genero[i] == "h":
        qtd_homens += 1 
        alt_homens.append(alturas[i])


print(f"Maior altura do grupo: {max(alturas):.2f} cm")
print(f"Menor altura do grupo: {min(alturas):.2f} cm") 
print(f"A quantidade de mulheres é {qtd_mulheres}") 
print(f"A média da altura dos homens é {sum(alt_homens) / qtd_homens}")

#----------------------------------------------
mulher = {
    "alturas": [] 

}
homem = {
    "alturas": []

}

for c in range(15):
    sexo = input("Digite seu gênero[m/h]: ").lower() 
    altura = float(input("Digite sua altura: ")) 
    
    
    if sexo == "m":
        mulher["alturas"].append(altura)
    else:
        homem["alturas"].append(altura)

total_alturas = homem["alturas"] + mulher["alturas"] 

print(f"Maior altura do grupo: {max(total_alturas):.2f} cm")
print(f"Menor altura do grupo: {min(total_alturas):.2f} cm") 
print(f"A quantidade de mulheres é {len(mulher['alturas'])}") 
print(f"A média da altura dos homens é {sum(homem['alturas']) / len(homem['alturas'])}")