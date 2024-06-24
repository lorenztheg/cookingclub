import API from "@/client/services/API";

export default {
    getRecipes(query) {
        return API.get('recipes', { params: { query } }).catch(error => {
            console.error("Get Recipes Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },
    getRecipe (id) {
        return API().get(`recipes/${id}`);
    },
    saveRecipe(recipe) {
        return API.post('recipes/save', { recipe }).catch(error => {
            console.error("Save Recipe Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },
    deleteRecipe (id) {
        return API().delete(`recipes/${id}`);
    },
    getSavedRecipes() {
        return API.get('recipes/saved').catch(error => {
            console.error("Get Saved Recipes Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },


}