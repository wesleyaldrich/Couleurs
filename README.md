# Couleurs
  **Couleurs** is a simple image colorizing project. The application is supposed to receive inputs in form of images, then return the colorized same image.
  This project utilizes the model of **DeOldify by Jason Antic** as the AI to colorize images.

# Team Members
 - **Rachell Vannessa Christian** as Project Coordinator
 - **Kalista Gabriela Willies** as Technical and Research Analyst
 - **Monica Agustina Chandra** as UI and UX Designer
 - **Michael Onasis Hasri** as Major Front-end Developer
 - **Wesley Aldrich** as Back-end Developer, Minor Front-end Developer

# Website
 In this repository, I'm creating the web application using **Flask**. The goal of this project is:
 - To make sure I completely understand how **DeOldify AI** works.
 - To simply learn how to use **Flask** framework in building simple web applications.

# How to use
  Clone this repository into your device, then run the **"app.py"** file from your terminal.
  If any error pops up, it might be because some required libraries are not in your device.
  Install all the dependencies that are "_unrecognized_".

## Cloning this repository
``` bash
git clone https://github.com/wesleyaldrich/Couleurs.git
cd Couleurs
```
"Couleurs" is the web application root directory, which is now cloned into your device.

## Installing dependencies
``` bash
pip install flask matplotlib pandas scipy requests fastprogress torch
```

## Run the web application
- For Linux/Ubuntu:
  ```
  python3 app.py
  ```
- For Windows:
  ```
  python app.py
  ```
- Or you can adjust with your own operating system or preference.

By default, you should see Couleurs local web app running in `http://127.0.0.1:8080/`.

---

- DeOldify by Jason Antic
  https://github.com/jantic/DeOldify/
