import * as path from "path";
const dir_home = process.env[process.platform === `win32` ? `USERPROFILE` : `HOME`];

export const dir_desktop = path.join(dir_home ?? "", `Desktop`);//デスクトップパス

