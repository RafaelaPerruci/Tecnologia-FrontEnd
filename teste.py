import numpy as np
matriz = np.array([[2,3,1], [4,5,6]]) 
matriz.shape 

soma = 0
for i in range(matriz.shape[0]):
    print(matriz[i]) 
    for j in range(matriz.shape[1]):
        print(matriz[i][j]) 
        soma += matriz[i][j] 
print(f"Soma da matriz é igual {soma}")