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

#### Setar SSH com GitHub

```git
ssh-keygen -t ed25519 -C "email"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
clip < ~/.ssh/id_ed25519.pub
// Colar no github
```