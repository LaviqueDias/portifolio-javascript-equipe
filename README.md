# Portfolio Website - Team Project

This project was created as part of Programming in Interpreted Languages course.
The objective was to form teams of three members and develop a website that serves as a portfolio for each member.

Each team member has their own section where they introduce themselves, describe the technologies they work with, and showcase their projects.

## 📌 Project Structure

The website is divided into the following sections:

- **Header**: with navigation links to other sections.
- **Hero**: introduction banner
- **About Us**: describing our team
- **Team Members Sections**: one section for each of the three members
- **Newsletter**: includes a subscription form (form validation implemented, but no actual email sending)
- **Footer**: with additional navigation links and team contact information

## 🗂️ Folder Organization

```
assets/images   → images used in the project  
components/      → .html files for each section  
css/             → .css files for each section  
index.html      → main file that loads each section by ID  
main.js         → all project logic and interactivity  
README.md       → project description  
```

## 💻 Where JavaScript Was Used

- To organize and dynamically load each section (`index.html`) into the `index.html` using IDs
- Implementation of a **Back to Top** button with smooth scrolling
- **Form validation** for the newsletter section

## How to Run

1. Clone this repository:
    ```bash
    git clone https://github.com/LaviqueDias/portifolio-javascript-equipe
    ```

2. Open the project folder:
    ```bash
    cd portifolio-javascript-equipe
    ```
3. Run the project in one of the following ways:
    - Open `index.html` directly in your web browser.
    - Use a local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode) for better performance.
4. Or acess the **live demo on GitHub Pages**:
    - [👉 Portfolio Website – Live Demo](https://laviquedias.github.io/portifolio-javascript-equipe/)

## 👥 Team Members

| Name                                                 | Project Function               | 
|------------------------------------------------------|--------------------------------|
| [Lavique Dias](https://Github.com/LaviqueDias)       | Developer & Collaborator       |
| [Kevyn Lohan](https://Github.com/KevynLohan05)       | Developer & Collaborator       |
| [Esdras Gabriel](https://Github.com/EsdrasGabrielSI) | Developer & Collaborator       |