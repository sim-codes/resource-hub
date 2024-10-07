// import fs from 'fs';
// import path from 'path';

// const storageFilePath = path.resolve(__dirname, 'auth.json');

// export const readAuthState = (): boolean => {
//     if (!fs.existsSync(storageFilePath)) {
//         return false;
//     }
//     const data = fs.readFileSync(storageFilePath, 'utf-8');
//     const { isAuthenticated } = JSON.parse(data);
//     return isAuthenticated;
// };

// export const writeAuthState = (isAuthenticated: boolean): void => {
//     const data = JSON.stringify({ isAuthenticated });
//     fs.writeFileSync(storageFilePath, data, 'utf-8');
// };