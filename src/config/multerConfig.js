import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); /* p/ garantir que nenhuma foto
 será gerada com o mesmo milisegundo gerado pelo Date.now */

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
      //                     pasta atual, src, diretório raíz
      // '..' volta uma pasta; 1º parâmetro do cb é um erro (por isso o null)
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
      // nome do arquivo será a data atual + extensão original do arquivo (extraído pelo extname)
    },
  }),
};
