import path from 'node:path';
// import fs from 'node:fs/promises';

const pathToWorkDir = path.join(process.cwd());
export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');
