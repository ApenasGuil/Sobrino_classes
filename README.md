# JavaScript + Node

Aulas do Sobrino de JavaScript

## Node v16.14.2

- Extensão: Code Runner
- formulahendry.code-runner

```
Ctrl + Alt + N          = Run on terminal
Ctrl + , (Preferences)  = Code-runner: Clear Previous Output
VAR.toFixed(1)          = 0.0
VAR.toFixed(3)          = 0.000
```

- [ ] Var: scopo global
- [ ] Let: scopo de bloco
- [ ] Const: variável de valor constante

Visualizador gráfico de JSON https://jsoncrack.com/editor

Como utilizar o Splice() - https://www.javascripttutorial.net/javascript-array-splice/#:~:text=Deleting%20elements%20using%20JavaScript%20Array's%20splice()%20method&text=The%20position%20specifies%20the%20position,that%20contains%20the%20deleted%20elements.

#### Setar SSH com GitHub

```git
ssh-keygen -t ed25519 -C "email"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
clip < ~/.ssh/id_ed25519.pub
// Colar no github
```