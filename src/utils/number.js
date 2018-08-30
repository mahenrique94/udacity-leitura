const generateRandomNum = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))

export { generateRandomNum }
