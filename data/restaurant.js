import {restaurant} from "../config/mongoCollections.js";

const nameRegex = /^[a-zA-Z]{2,25}$/;

const exportMethods = {
    async create (
    name,
    address,
    city,
    state,
    zipcode,
    contact,
    menu,
    healthy_food_rating
  ){
    if (!name || !address || !city || !state|| !zipcode || !contact || !menu || !healthy_food_rating) {
        throw new Error('All fields are required');
    }
    if (typeof name !== 'string') {
        throw new Error('Name must be a non-empty string');
    }
    if (typeof address !== 'string' || !/\d+\s*[\w\s]+|[\w\s]+\s*\d+/.test(address)) {
        throw new Error('Address must be a valid street address including house number and street name');
      }
    if (typeof city !== 'string' || !/^[a-zA-Z\s]+$/.test(city)) {
        throw new Error('City must be a valid name consisting of letters and spaces only');
      }
    if (typeof state !== 'string' || !/^[a-zA-Z\s]+$/.test(state)) {
        throw new Error('State must be a valid name consisting of letters and spaces only');
      }
    if (typeof zipcode !== 'string' || !/^\d{5}$/.test(zipcode)) {
        throw new Error('Zip code must be a valid 5-digit numeric code');
      }
    if (typeof contact !== 'string' || !/^\+[1-9]\d{1,14}$/.test(contact)) {
        throw new Error('Mobile number must be a valid phone number with country code');
      }
    if (!Array.isArray(menu) || !menu.every(item => typeof item === 'string')) {
        throw new Error('Menu must be an array of non-empty strings');
      }
    if (typeof healthy_food_rating !== 'number' || isNaN(healthy_food_rating) || healthy_food_rating < 0 || healthy_food_rating > 5) {
        throw new Error('Healthy food rating must be a number between 0 and 5');
      }
      

}
};