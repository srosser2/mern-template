import { Router } from 'express';
import todos from './todos/todos.routes';

const router = Router();

router.get<{}>('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});

router.use('/todos', todos);

export default router;
