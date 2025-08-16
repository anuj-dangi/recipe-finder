# 🍔 Recipe Finder App

A simple React-based web app to search and explore recipes using the free [TheMealDB API](https://www.themealdb.com/api.php).  
No API key required.  

---

## 🚀 Features
- Search recipes by name  
- Fetch recipe details from **TheMealDB API**  
- Debounced search (prevents unnecessary API calls)  
- Organized code structure (components, assets, CSS)  
- Built with **React + Vite**  

---

## 📂 Folder Structure

```
recipe-finder/
├─ node_modules/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/
│ │ └─ items/
│ ├─ css/
│ │ ├─ App.css
│ │ └─ index.css
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

---

## 🛠️ Installation & Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

---

## 🌐 API Usage

This app uses the **TheMealDB API** (free, no key required).  
Example request:
```bash
https://www.themealdb.com/api/json/v1/1/search.php?s=chicken
```

### 🔄 Changing API
If you want to use a different API, update the `fetchRecipe` function inside:

```
src/components/Header.jsx
```

Example code:
```js
const fetchRecipe = async (searchString) => {
  const response = await Axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`
  );
  setRecipeList(response.data.meals);
};
```
---

## 🔮 Future Enhancements

- ✅ Connect to Spoonacular / Edamam API  
- ✅ Display recipe cards with images & details  
- ✅ Add pagination or infinite scroll  
- ✅ Implement dark mode  

---

## 📜 License
This project is open-source under the MIT License.
