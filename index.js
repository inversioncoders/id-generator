
/**
 * 
 * @param {number} len length of the id which shall be generated 
 * @returns 
 */

const generateId = (len) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

module.exports = {
    generateId
}