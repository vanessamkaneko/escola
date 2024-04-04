import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas feitas apenas para completar o CRUD (não precisaria num aplicação real)
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista um usuário
// -------------------------------------------------

router.post('/', userController.store); // Cria um usuário
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index => lista todos os usuários => GET

store/create => cria um novo usuário => POST

delete => apaga um usuário => DELETE

show => mostra um usuário => GET

update => atualiza um usuário => PATCH (altera somente 1 valor) ou
           PUT (altera um objeto inteiro por outro)
*/
