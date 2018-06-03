import { File } from '../models';

/**
 * 保存所有field file文件
 * @param {req.files} fieldFiles
 * @param {String} userId 
 */
export function saveAllFieldFiles(fieldFiles = {}, userId) {
  const fileQueue = [];

  for(const [ fileInfo ] of Object.values(fieldFiles)) {
    fileQueue.push(File.create({ ...fileInfo, user: userId }));
  }

  return Promise.all(fileQueue);
}