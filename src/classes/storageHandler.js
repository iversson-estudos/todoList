
import { List } from "./list";


const StorageHandler = {
    // Save list of List instances to localStorage
    saveLists(listsArray) {
        try {
            const serializedLists = JSON.stringify(listsArray.map(list => list.toJSON()));
            localStorage.setItem('listsArray', serializedLists);
        } catch (error) {
            console.error('Failed to save lists to localStorage:', error);
        }
    },

    // Load list of List instances from localStorage
    loadLists() {
        try {
            const storedData = localStorage.getItem('listsArray');
            if (!storedData) return [];

            const parsedData = JSON.parse(storedData);
            return parsedData.map(item => List.fromJSON(item)); // Re-instantiate each list
        } catch (error) {
            console.error('Failed to load lists from localStorage:', error);
            return [];
        }
    },

    // Clear all stored lists
    clearLists() {
        localStorage.removeItem('listsArray');
    }
};

export default StorageHandler;