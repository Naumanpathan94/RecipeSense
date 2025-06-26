# ML-Based Recipe Recommendation Website

Welcome to the ML-Based Recipe Recommendation Website, a smart and intuitive platform designed to help users discover delicious recipes tailored to their unique tastes and preferences using advanced machine learning techniques.

## Project Overview

This project leverages machine learning and natural language processing to recommend recipes based on user-provided ingredients, cuisine preferences, course type, cravings, and dietary restrictions such as vegetarian options. By analyzing a rich dataset of recipes, the system provides personalized recommendations that make cooking easier and more enjoyable.

## Features

- **Ingredient-Based Recommendations:** Input your available ingredients and get recipe suggestions that match what you have.
- **Personalized Preferences:** Filter recipes by cuisine, course (e.g., appetizer, main course), and cravings (e.g., savory, sweet).
- **Dietary Filters:** Option to select vegetarian recipes.
- **Machine Learning Powered:** Uses TF-IDF vectorization and cosine similarity to find the best matching recipes.
- **RESTful API:** Backend API built with Flask to serve recommendations.
- **Interactive Frontend:** User-friendly interface built with React and Vite (located in the `yes-chef` directory).
- **Extensible Dataset:** Recipe data stored in CSV format, easy to update and expand.

## Technologies Used

- Python 3
- Flask (Backend API)
- Pandas, NumPy (Data processing)
- Scikit-learn (Machine Learning: TF-IDF, cosine similarity)
- React, Vite (Frontend)
- JavaScript, Tailwind CSS (Frontend styling)
- CSV datasets for recipes and ingredients

## Project Architecture

- **Backend API:** Handles user requests, processes input, computes recipe similarities, and returns recommendations.
- **Machine Learning Module:** Preprocesses data, vectorizes ingredients, and calculates similarity scores.
- **Frontend Application:** Provides an interactive UI for users to input preferences and view recommended recipes.
- **Datasets:** Recipe data and ingredient lists stored in CSV files, used by both backend and ML modules.

## Dataset

The project uses a curated dataset of approximately 7,000 recipes, including detailed information such as ingredients, cuisine, course, cravings, cooking time, difficulty, and vegetarian status. The dataset is stored in CSV files (`recipe.csv` and others) and is used to train and query the recommendation system.

## How to Run

1. **Backend API:**
   - Navigate to the project root or `Server` directory.
   - Install required Python packages (e.g., Flask, pandas, scikit-learn).
   - Run the Flask API server (`recipe-recommendation-api.py`).
2. **Frontend:**
   - Navigate to the `yes-chef` directory.
   - Install dependencies using `npm install`.
   - Start the development server with `npm run dev`.
3. **Usage:**
   - Access the frontend in your browser.
   - Input your ingredients and preferences.
   - Receive personalized recipe recommendations powered by ML.

