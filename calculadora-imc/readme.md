# 🏋️‍♂️ Calculadora de IMC (BMI Calculator)

Uma calculadora de Índice de Massa Corporal (IMC) moderna e responsiva, desenvolvida com HTML, CSS (Tailwind CSS) e JavaScript vanilla.

## 📋 Índice

- [🏋️‍♂️ Calculadora de IMC (BMI Calculator)](#️️-calculadora-de-imc-bmi-calculator)
  - [📋 Índice](#-índice)
  - [🎯 Sobre o Projeto](#-sobre-o-projeto)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
  - [🚀 Como Usar](#-como-usar)
    - [Exemplo:](#exemplo)
  - [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [📊 Classificação do IMC](#-classificação-do-imc)
  - [🎨 Design](#-design)
  - [💻 Instalação](#-instalação)
  - [🔧 Funcionalidades Técnicas](#-funcionalidades-técnicas)
    - [JavaScript Features:](#javascript-features)
    - [CSS Features:](#css-features)
  - [🤝 Contribuição](#-contribuição)
  - [📝 Melhorias Futuras](#-melhorias-futuras)
  - [📄 Licença](#-licença)
  - [👨‍💻 Autor](#-autor)

## 🎯 Sobre o Projeto

Esta calculadora de IMC permite aos usuários calcular seu Índice de Massa Corporal de forma rápida e intuitiva. O projeto apresenta uma interface moderna com design dark theme, utilizando uma paleta de cores elegante e componentes bem estruturados.

## ✨ Funcionalidades

- 📊 Cálculo preciso do IMC baseado em peso e altura
- 🎨 Interface moderna com tema escuro
- 📱 Design responsivo
- ⚡ Validação em tempo real
- 📈 Classificação automática do resultado
- 🖼️ Ilustração animada para melhor experiência visual
- 🔢 Formatação do resultado com duas casas decimais

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização customizada
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript (ES6+)** - Lógica de programação
- **Font Awesome** - Ícones vetoriais

## 🚀 Como Usar

1. Insira seu peso em quilogramas (kg) no primeiro campo
2. Insira sua altura em metros (m) no segundo campo
3. Clique no botão "Calcular"
4. Visualize seu IMC e a classificação correspondente

### Exemplo:
- **Peso:** 70 kg
- **Altura:** 1.75 m
- **Resultado:** IMC = 22.86 (Peso ideal)

## 📁 Estrutura do Projeto

```
calculadora-imc/
│
├── index.html          # Arquivo principal HTML
├── calc.js             # Lógica JavaScript
├── images/
│   └── workout-animate.svg  # Ilustração
└── README.md           # Documentação
```

## 📊 Classificação do IMC

| IMC | Classificação |
|-----|---------------|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 - 24,9 | Peso ideal |
| 25,0 - 29,9 | Acima do peso |
| 30,0 - 34,9 | Obesidade grau 1 |
| 35,0 - 39,9 | Obesidade grau 2 |
| 40,0 ou mais | Obesidade grau 3 |

## 🎨 Design

O projeto utiliza uma paleta de cores cuidadosamente selecionada:

- **Fundo principal:** `#18171C`
- **Card/Container:** `#262626`
- **Inputs:** `#3f3f47`
- **Destaque:** `#D31818FF` (vermelho)
- **Texto:** Branco e tons de cinza

## 💻 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/calculadora-imc.git
```

2. Navegue até o diretório:
```bash
cd calculadora-imc
```

3. Abra o `index.html` em seu navegador preferido

**Ou** acesse diretamente via servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

## 🔧 Funcionalidades Técnicas

### JavaScript Features:
- **DOM Manipulation** - Seleção e manipulação de elementos
- **Event Listeners** - Interatividade com o usuário
- **Conditional Logic** - Classificação baseada em ranges
- **Number Formatting** - Resultado com duas casas decimais

### CSS Features:
- **Flexbox Layout** - Layout responsivo e centralizado
- **Custom Styles** - Remoção de spin buttons dos inputs
- **Hover Effects** - Interações visuais
- **Responsive Design** - Adaptável a diferentes telas

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Melhorias Futuras

- [ ] Adicionar histórico de cálculos
- [ ] Implementar gráfico de evolução
- [ ] Adicionar mais métricas (IMC ideal por idade)
- [ ] Versão mobile app
- [ ] Internacionalização (i18n)
- [ ] Tema claro/escuro toggle

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Pedro Henrique]

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!