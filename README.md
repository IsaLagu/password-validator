# KATA Password Validation

## Iteración 1 - Validación de contraseña básica

### Objetivo

Diseñar e implementar un software que valide una contraseña utilizando TDD.
La contraseña será introducida por el usuario (como argumento de la función) y el software deberá responder si la contraseña es válida o no.

Una contraseña válida debe cumplir los siguientes requisitos:

- Tener al menos 8 caracteres
- Contener una letra mayúscula
- Contener una letra minúscula
- Contener un número
- Contener solo caracteres alfanuméricos

### Requisitos técnicos:

- Queremos una función que verifique si la contraseña es válida o no.
- No queremos saber la razón por la cual la contraseña no es válida (el valor de retorno es un booleano).
- Todos los tests de esta iteración estarán dentro de un 'describe'

## Iteración 2 - Errores múltiples

### Objetivo

Ahora podremos saber si una contraseña es válida o no, pero como usuario no podremos entender por qué la contraseña no es válida, por lo que devolveremos una cadena de texto con los siguientes errores como corresponda:

- Tu contraseña debe tener al menos 8 caracteres
- Tu contraseña debe tener al menos una letra mayúscula
- Tu contraseña debe tener al menos una letra minúscula
- Tu contraseña debe tener al menos un número
- Tu contraseña debe contener solo caracteres alfanuméricos

Si la contraseña ha pasado todas las validaciones devolverá lo siguiente:

- Tu contraseña está correcta

### Requisitos técnicos:

- Queremos una nueva función que verifique si la contraseña es válida o no.
- Queremos saber la razón por la cual la contraseña no es válida.
- Todos los tests de esta iteración estarán dentro de un nuevo 'describe' que ejecute la nueva función.

## Iteración 3 - Estrategia de validación

### Objetivo

Hasta este punto hemos podido crear una lista de reglas de validación y verificar que la contraseña pase cada una de ellas. Ahora queremos una nueva función con las mismas reglas pero que permita omitir sólo una de ellas.

Por ejemplo, una contraseña válida puede cumplir los siguientes requisitos:

- Tener al menos 8 caracteres :heavy_check_mark:
- Contener una letra mayúscula :heavy_check_mark:
- Contener una letra minúscula :x:
- Contener un número :heavy_check_mark:
- Contener solo caracteres alfanuméricos :heavy_check_mark:

Si la contraseña ha pasado 4 de las 5 validaciones devolverá lo siguiente:

- Tu contraseña está correcta

Si la contraseña ha pasado 3 o menos de las 5 validaciones devolverá lo siguiente:

- Tu contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y solo contener caracteres alfanuméricos (puedes omitir una de ellas)

### Requisitos técnicos:

- Queremos una nueva función que verifique si la contraseña pasa 4 de las 5 validaciones.
- Queremos saber la razón por la cual la contraseña no es válida.
- Todos los tests de esta iteración estarán dentro de un nuevo 'describe' que ejecute la nueva función.
