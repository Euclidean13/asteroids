import * as fs from 'fs';
import { logger } from './logsHelper.js';

export function deleteFiles(paths: string[]) {
  for (const path of paths) {
    fs.unlink(path, (err: unknown) => {
      if (err) {
        logger.error(err);
      } else {
        logger.info(err);
      }
    });
  }
}
