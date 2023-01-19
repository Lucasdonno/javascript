minutos_estudados = int(input("Insira a quantidade de minutos estudados: "))

horas_estudadas = minutos_estudados // 60
minutos_restantes = minutos_estudados % 60

print("Horas estudadas:", horas_estudadas)
print("Minutos restantes:", minutos_restantes)